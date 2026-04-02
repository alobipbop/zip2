import pool from '../db/connection.js';
import { User } from '../types/index.js';
import { AppError } from '../middleware/errorHandler.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'kairoly-default-secret-change-me';
const JWT_EXPIRES_IN = '7d';
const SALT_ROUNDS = 10;

// Helper: strip password_hash from user object before returning
function sanitizeUser(user: User): Omit<User, 'password_hash'> {
    const { password_hash, ...safeUser } = user;
    return safeUser;
}

// Helper: generate JWT token
function generateToken(user: User): string {
    return jwt.sign(
        { userId: user.id, email: user.email },
        JWT_SECRET,
        { expiresIn: JWT_EXPIRES_IN }
    );
}

export class AuthService {
    /**
     * REGISTER FLOW (User's described flow):
     * 1. Validate email format & password strength
     * 2. Check email uniqueness
     * 3. Hash password with bcrypt
     * 4. Transaction: create user + default profile
     * 5. Generate JWT token
     * 6. Return sanitized user + token
     */
    async register(email: string, password: string): Promise<{ user: Omit<User, 'password_hash'>; token: string }> {
        // Step 1: Validation
        if (!email || !password) {
            throw new AppError(400, 'Email và mật khẩu là bắt buộc');
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            throw new AppError(400, 'Email không hợp lệ');
        }

        if (password.length < 8) {
            throw new AppError(400, 'Mật khẩu phải có ít nhất 8 ký tự');
        }

        // Get a client from pool for transaction
        const client = await pool.connect();

        try {
            // Step 2: Check email uniqueness
            const existingUser = await client.query(
                'SELECT id FROM users WHERE email = $1',
                [email]
            );

            if (existingUser.rows.length > 0) {
                throw new AppError(409, 'Email đã được sử dụng. Vui lòng dùng email khác hoặc đăng nhập.');
            }

            // Step 3: Hash password
            const passwordHash = await bcrypt.hash(password, SALT_ROUNDS);

            // Step 4: Transaction - create user + default profile
            await client.query('BEGIN');

            const result = await client.query(
                `INSERT INTO users (email, password_hash, name, onboarding_completed) 
                 VALUES ($1, $2, $3, FALSE) 
                 RETURNING *`,
                [email, passwordHash, email.split('@')[0]]
            );

            const newUser = result.rows[0] as User;

            await client.query('COMMIT');

            // Step 5: Generate token
            let token: string;
            try {
                token = generateToken(newUser);
            } catch (tokenError) {
                // Exception Flow 3: Account created but token generation failed
                console.error('❌ Token generation error after registration:', tokenError);
                throw new AppError(500, 'Tài khoản đã tạo thành công nhưng gặp lỗi khi tạo phiên. Vui lòng đăng nhập thủ công.');
            }

            // Step 6: Return sanitized user + token
            return { user: sanitizeUser(newUser), token };

        } catch (error) {
            // Rollback on any DB error
            await client.query('ROLLBACK').catch(() => {});

            if (error instanceof AppError) throw error;

            console.error('❌ Registration error:', error);
            throw new AppError(500, 'Đăng ký thất bại. Vui lòng thử lại sau.');
        } finally {
            client.release();
        }
    }

    /**
     * LOGIN FLOW:
     * 1. Validate email & password provided
     * 2. Find user by email
     * 3. Verify password with bcrypt
     * 4. Update last_login timestamp
     * 5. Generate JWT token
     * 6. Return sanitized user + token
     */
    async login(email: string, password: string): Promise<{ user: Omit<User, 'password_hash'>; token: string }> {
        // Step 1: Validation
        if (!email || !password) {
            throw new AppError(400, 'Email và mật khẩu là bắt buộc');
        }

        try {
            // Step 2: Find user
            const result = await pool.query(
                'SELECT * FROM users WHERE email = $1',
                [email]
            );

            if (result.rows.length === 0) {
                throw new AppError(401, 'Email hoặc mật khẩu không đúng');
            }

            const user = result.rows[0] as User;

            // Check if user has a password (might be Google OAuth user)
            if (!user.password_hash) {
                throw new AppError(401, 'Tài khoản này sử dụng đăng nhập Google. Vui lòng đăng nhập bằng Google.');
            }

            // Step 3: Verify password
            const isPasswordValid = await bcrypt.compare(password, user.password_hash);
            if (!isPasswordValid) {
                throw new AppError(401, 'Email hoặc mật khẩu không đúng');
            }

            // Step 4: Update last_login
            await pool.query(
                'UPDATE users SET last_login = CURRENT_TIMESTAMP WHERE id = $1',
                [user.id]
            );

            // Step 5: Generate token
            const token = generateToken(user);

            // Step 6: Return
            return { user: sanitizeUser(user), token };

        } catch (error) {
            if (error instanceof AppError) throw error;
            console.error('❌ Login error:', error);
            throw new AppError(500, 'Đăng nhập thất bại. Vui lòng thử lại sau.');
        }
    }

    /**
     * GOOGLE AUTH FLOW:
     * 1. Nhận access token từ client
     * 2. Gọi Google API lấy userInfo
     * 3. Kiểm tra email trong DB
     * 4. Nếu chưa có -> Tạo mới user
     * 5. Generate JWT token
     * 6. Trả về user + token
     */
    async googleAuth(accessToken: string): Promise<{ user: Omit<User, 'password_hash'>; token: string }> {
        if (!accessToken) {
            throw new AppError(400, 'Token Google là bắt buộc');
        }

        try {
            // Lấy thông tin user từ Google
            const googleResponse = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
                headers: { Authorization: `Bearer ${accessToken}` }
            });

            if (!googleResponse.ok) {
                throw new Error('Không thể xác thực với Google');
            }

            const googleUser = await googleResponse.json();
            const email = googleUser.email;
            const name = googleUser.name;

            if (!email) {
                throw new AppError(400, 'Không lấy được email từ tài khoản Google');
            }

            const client = await pool.connect();
            try {
                // Kiểm tra xem user đã tồn tại chưa
                const existingUserResult = await client.query('SELECT * FROM users WHERE email = $1', [email]);
                let user: User;

                if (existingUserResult.rows.length > 0) {
                    // Đã tồn tại -> update last_login
                    user = existingUserResult.rows[0];
                    await client.query('UPDATE users SET last_login = CURRENT_TIMESTAMP WHERE id = $1', [user.id]);
                } else {
                    // Chưa tồn tại -> Tạo mới (onboarding_completed = false để điều hướng sang thiết lập)
                    await client.query('BEGIN');
                    const insertResult = await client.query(
                        `INSERT INTO users (email, name, onboarding_completed) VALUES ($1, $2, FALSE) RETURNING *`,
                        [email, name]
                    );
                    user = insertResult.rows[0];
                    await client.query('COMMIT');
                }

                // Cấp token
                const token = generateToken(user);
                return { user: sanitizeUser(user), token };

            } catch (dbError) {
                await client.query('ROLLBACK').catch(() => {});
                throw dbError;
            } finally {
                client.release();
            }
        } catch (error) {
            if (error instanceof AppError) throw error;
            console.error('❌ Google auth error:', error);
            throw new AppError(500, 'Xác thực Google thất bại. Vui lòng thử lại sau.');
        }
    }

    async updateUserProfile(userId: number, userData: Partial<User>): Promise<User> {
        try {
            const { name, age, gender, onboarding_completed } = userData;

            const result = await pool.query(
                `UPDATE users SET 
                    name = COALESCE($1, name),
                    age = COALESCE($2, age),
                    gender = COALESCE($3, gender),
                    onboarding_completed = COALESCE($4, onboarding_completed)
                 WHERE id = $5 RETURNING *`,
                [name, age, gender, onboarding_completed, userId]
            );

            if (result.rows.length === 0) {
                throw new AppError(404, 'Không tìm thấy người dùng');
            }

            return sanitizeUser(result.rows[0]) as User;
        } catch (error) {
            if (error instanceof AppError) throw error;
            console.error('❌ Update user error:', error);
            throw new AppError(500, 'Cập nhật thông tin thất bại');
        }
    }
}

export const authService = new AuthService();