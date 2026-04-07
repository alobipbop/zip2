# 📚 Hướng Dẫn Cấu Trúc Code - Zip2 (Kairoly)

> **Dự án**: Zip2 - Hệ thống lập kế hoạch và theo dõi mục tiêu cá nhân  
> **Phạm vi**: Toàn bộ cấu trúc code, kiến trúc hệ thống, các module và flow dữ liệu  
> **Ngôn ngữ**: TypeScript 99.7%

---

## 📖 Mục Lục

1. [Tổng Quan](#1-tổng-quan)
Mục đích dự án & công nghệ sử dụng
2. [Kiến Trúc Hệ Thống](#2-kiến-trúc-hệ-thống)
Flow request từ frontend → backend → database
3. [Cấu Trúc Thư Mục](#3-cấu-trúc-thư-mục)
Tất cả files, folders và ý nghĩa
4. [Frontend - React](#4-frontend---react)
Chi tiết 8 pages, components, contexts, styling
5. [Backend - Express](#5-backend---express)
Routes, controllers, services, database connection
6. [Cơ Sở Dữ Liệu](#6-cơ-sở-dữ-liệu)
Database schema, relationships, SQL queries thường dùng
7. [Luồng Dữ Liệu](#7-luồng-dữ-liệu)
Chi tiết 4 flow chính: Login, Create Goal, Track Progress, View Report
8. [Hướng Dẫn Chạy](#8-hướng-dẫn-chạy)
Setup, npm scripts, API testing
9. [Best Practices](#9-best-practices)
Coding standards cho frontend, backend, TypeScript, Git

---

## 1. Tổng Quan

### 1.1 Mục Đích Dự Án
Zip2 là một ứng dụng web giúp người dùng:
- 🎯 Lập kế hoạch cá nhân và quản lý mục tiêu
- ✅ Tạo danh sách công việc chi tiết
- 📊 Theo dõi tiến triển hàng ngày
- 📈 Xem báo cáo và thống kê
- 📥 Phân loại công việc theo loại (Category)

### 1.2 Công Nghệ Sử Dụng

**Frontend:**
```
React 19.0.0 + TypeScript
├── Vite 6.2.0 (Build tool)
├── Tailwind CSS 4.1.14 (Styling)
├── React Router 7.13.1 (Navigation)
├── React Hook Form (Form management)
├── Recharts (Data visualization)
├── jsPDF (PDF export)
└── Motion (Animation)
```

**Backend:**
```
Express 4.21.2 + Node.js + TypeScript
├── PostgreSQL 8.20.0 (Database)
├── CORS (Cross-origin requests)
├── Google GenAI (AI integration)
└── TSX (TypeScript runner)
```

---

## 2. Kiến Trúc Hệ Thống

### 2.1 Kiến Trúc Tổng Quát

```
┌─────────────────────────────────────────────────────────┐
│                  👤 NGƯỜI DÙNG                          │ 
└────────────────────┬────────────────────────────────────┘
                     │
        ┌────────────┴────────────┐
        ↓                         ↓
    ┌────────────┐          ┌──────────┐
    │   Vite     │          │ vite.dev │
    │ (HMR Dev)  │          │ Server   │
    └────────────┘          └──────────┘
        ↓                         ↓
    ┌────────────────────────────────────┐
    │      🎨 REACT FRONTEND (SPA)       │
    │  - Pages, Components, Contexts     │
    │  - React Router, Auth Context      │
    │  - Tailwind CSS styling            │
    └────────────────────┬───────────────┘
                         │ HTTP/REST API
                         ↓
    ┌────────────────────────────────────┐
    │    ⚙️ EXPRESS BACKEND (PORT 3000)  │
    │  - Routes, Controllers, Services   │
    │  - Error Handler, CORS             │
    │  - Database Connection Pool        │
    └────────────────────┬───────────────┘
                         │
                         ↓
    ┌────────────────────────────────────┐
    │   🗄️  POSTGRESQL DATABASE          │
    │  - Tables: users, goals, tasks...  │
    │  - Relationships & Constraints     │
    └────────────────────────────────────┘
```

### 2.2 Flow Tổng Quát

```
1. User truy cập ứng dụng
   ↓
2. Vite serve React frontend
   ↓
3. User thực hiện hành động (login, create goal, etc.)
   ↓
4. React gửi HTTP request đến Express API
   ↓
5. Express nhận request → Router → Controller → Service
   ↓
6. Service tương tác với PostgreSQL Database
   ↓
7. Kết quả trả về frontend thông qua JSON response
   ↓
8. React state được cập nhật, UI re-render
```

---

## 3. Cấu Trúc Thư Mục

### 3.1 Cây Thư Mục Đầy Đủ

```
zip2/
├── 📁 src/                          🎨 FRONTEND (React + TypeScript)
│   ├── 📁 components/               # Các component UI tái sử dụng
│   │   ├── ErrorBoundary.tsx        # Xử lý lỗi React
│   │   └── Layout.tsx               # Layout wrapper chính
│   │
│   ├── 📁 contexts/                 # Global State (Context API)
│   │   └── AuthContext.tsx          # Quản lý trạng thái auth
│   │
│   ├── 📁 pages/                    # Các trang (Page components)
│   │   ├── Landing.tsx              # Trang chủ
│   │   ├── Login.tsx                # Đăng nhập
│   │   ├── Register.tsx             # Đăng ký
│   │   ├── Onboarding.tsx           # Setup ban đầu
│   │   ├── Dashboard.tsx            # Dashboard chính
│   │   ├── GoalForm.tsx             # Form tạo/edit mục tiêu
│   │   ├── History.tsx              # Lịch sử
│   │   ├── Report.tsx               # Báo cáo
│   │   └── Types.tsx                # Quản lý loại công việc
│   │
│   ├── App.tsx                      # Router chính + layout
│   ├── main.tsx                     # React entry point
│   └── index.css                    # Global styles (Tailwind)
│
├── 📁 server/                       ⚙️ BACKEND (Express + TypeScript)
│   │
│   ├── 📁 routes/                   # Định nghĩa API routes
│   │   ├── auth.routes.ts           # POST /api/auth/* (login, register)
│   │   ├── types.routes.ts          # CRUD /api/types/* (categories)
│   │   ├── goals.routes.ts          # CRUD /api/goals/*
│   │   ├── tasks.routes.ts          # CRUD /api/tasks/*
│   │   └── trackings.routes.ts      # CRUD /api/trackings/*
│   │
│   ├── 📁 controllers/              # Business logic & request handlers
│   │   ├── auth.controller.ts       # Xử lý auth requests
│   │   ├── goals.controller.ts      # Xử lý goal requests
│   │   ├── tasks.controller.ts      # Xử lý task requests
│   │   ├── trackings.controller.ts  # Xử lý tracking requests
│   │   └── types.controller.ts      # Xử lý type requests
│   │
│   ├── 📁 services/                 # Business logic & utilities
│   │   ├── auth.service.ts          # Auth logic (hash, verify, JWT)
│   │   ├── goals.service.ts         # Goal business logic
│   │   ├── tasks.service.ts         # Task business logic
│   │   ├── trackings.service.ts     # Tracking logic
│   │   └── types.service.ts         # Type category logic
│   │
│   ├── 📁 db/                       # Database setup & connection
│   │   ├── connection.ts            # PostgreSQL connection pool
│   │   └── init.ts                  # Tạo tables, schema
│   │
│   ├── 📁 entities/                 # Data models/types
│   │   ├── user.entity.ts           # User model
│   │   ├── goal.entity.ts           # Goal model
│   │   ├── task.entity.ts           # Task model
│   │   ├── task-type.entity.ts      # TaskType/Category model
│   │   └── tracking.entity.ts       # Tracking model
│   │
│   ├── 📁 middleware/               # Express middleware
│   │   └── errorHandler.ts          # Global error handler
│   │
│   ├── 📁 types/                    # TypeScript definitions
│   │   └── index.ts                 # Tất cả interfaces & types
│   │
│   └── 📁 utils/                    # Tiện ích functions
│       └── response.ts              # Response formatter
│
├── 📄 server.ts                     # Main Express entry point
├── 📄 package.json                  # Dependencies & scripts
├── 📄 tsconfig.json                 # TypeScript config
├── 📄 vite.config.ts                # Vite config
├── 📄 index.html                    # HTML entry
├── 📄 api.md                        # API documentation
├── 📄 README.md                     # Project README
├── 📄 metadata.json                 # App metadata
└── 📄 CONG_TRUD_CODE.md             # 📍 File này (hướng dẫn chi tiết)
```

### 3.2 Ý Nghĩa Các Thư Mục Chính

| Thư Mục | Mục Đích | Kiểu File |
|---------|----------|-----------|
| `src/` | React frontend (UI, pages, components) | `.tsx`, `.css` |
| `server/routes/` | Định nghĩa API endpoints | `.ts` |
| `server/controllers/` | Xử lý HTTP requests | `.ts` |
| `server/services/` | Business logic & DB queries | `.ts` |
| `server/db/` | PostgreSQL connection & schema | `.ts` |
| `server/entities/` | TypeScript type definitions | `.ts` |
| `server/middleware/` | Express middleware (error handling, etc) | `.ts` |

---

## 4. Frontend - React

### 4.1 Cấu Trúc Pages

#### **Landing.tsx** - Trang chủ
```typescript
// Route: /
// Mục đích: Giới thiệu ứng dụng
// Nội dung: Hero section, features, CTA buttons
// Auth: Không cần
```

#### **Login.tsx** - Đăng nhập
```typescript
// Route: /login
// Form: email, password
// Action: POST /api/auth/login
// Redirect: Nếu thành công → /dashboard
```

#### **Register.tsx** - Đăng ký
```typescript
// Route: /register
// Form: email, password, name
// Action: POST /api/auth/register
// Redirect: Nếu thành công → /onboarding
```

#### **Onboarding.tsx** - Setup ban đầu
```typescript
// Route: /onboarding
// Mục đích: User setup (tạo categories, mục tiêu đầu tiên)
// Protected: Cần đăng nhập
```

#### **Dashboard.tsx** - Trang chủ (sau đăng nhập)
```typescript
// Route: /dashboard
// Hiển thị:
//   - Danh sách mục tiêu (goals)
//   - Công việc hôm nay
//   - Tiến độ chung
// Navigation: Tabs để chuyển đến pages khác
// Protected: ✅ Cần auth
```

#### **GoalForm.tsx** - Tạo/Edit mục tiêu
```typescript
// Route: /goals/new, /goals/:id/edit
// Form: title, description, dates
// Action: POST /api/goals hoặc PUT /api/goals/:id
// Redirect: Quay lại dashboard
```

#### **History.tsx** - Lịch sử
```typescript
// Route: /history
// Hiển thị: Timeline hoặc danh sách công việc đã hoàn thành
// Protected: ✅
```

#### **Report.tsx** - Báo cáo
```typescript
// Route: /report
// Hiển thị: Biểu đồ, thống kê tiến độ
// Công cụ: Recharts để vẽ charts
// Protected: ✅
```

#### **Types.tsx** - Quản lý loại công việc
```typescript
// Route: /types
// CRUD: Tạo, sửa, xóa task categories
// API: GET/POST/PUT/DELETE /api/types
// Protected: ✅
```

### 4.2 Components

#### **Layout.tsx** - Layout wrapper
```typescript
// Cấu trúc chính: Header + Sidebar + Main content
// Thành phần:
//   - Navigation menu
//   - User menu/avatar
//   - Breadcrumb
//   - Footer (optional)
```

#### **ErrorBoundary.tsx** - Error handling
```typescript
// Mục đích: Bắt React errors, hiển thị fallback UI
// Sử dụng: Wrap component lớn
```

### 4.3 Contexts - Global State

#### **AuthContext.tsx** - Quản lý authentication
```typescript
interface AuthContext {
  user: User | null;
  isAuthenticated: boolean;
  login(email: string, password: string): Promise<void>;
  logout(): void;
  register(email: string, password: string, name: string): Promise<void>;
}

// Lưu trữ:
//   - User info (id, email, name)
//   - Auth token (localStorage)
//   - Login state
```

### 4.4 Styling - Tailwind CSS

```typescript
// Tailwind CSS + Tailwind Merge
// Chuẩn bị: Utility-first CSS
// Ví dụ: <div className="flex gap-4 rounded-lg bg-blue-500 p-4">

// Cấu hình trong: tailwind.config.ts
// Global styles: src/index.css
```

---

## 5. Backend - Express

### 5.1 Server Entry Point - server.ts

```typescript
// Main entry: Express server
// Port: 3000 (hoặc từ .env PORT)
// Middleware:
//   - CORS: Cho phép requests từ frontend
//   - express.json(): Parse JSON body
//   - errorHandler: Xử lý lỗi global
// Flow:
//   1. Load environment variables (.env)
//   2. Khởi tạo Express app
//   3. Setup middleware
//   4. Initialize database
//   5. Register API routes
//   6. Setup Vite HMR (development)
//   7. Listen trên PORT
```

### 5.2 Routes - API Endpoints

#### **auth.routes.ts** - Xác thực
```typescript
POST   /api/auth/register      // Đăng ký tài khoản mới
  Body: { email, password, name }
  Response: { success, data: { user, token } }

POST   /api/auth/login         // Đăng nhập
  Body: { email, password }
  Response: { success, data: { user, token } }

POST   /api/auth/logout        // Đăng xuất
  Response: { success }

GET    /api/auth/me            // Lấy thông tin user hiện tại
  Headers: { Authorization: "Bearer TOKEN" }
  Response: { success, data: user }
```

#### **types.routes.ts** - Quản lý loại công việc
```typescript
GET    /api/types              // Lấy tất cả types của user
  Response: { success, data: TypeCategory[] }

POST   /api/types              // Tạo type mới
  Body: { name, color, weight }
  Response: { success, data: TypeCategory }

GET    /api/types/:id          // Lấy type by ID
  Response: { success, data: TypeCategory }

PUT    /api/types/:id          // Update type
  Body: { name, color, weight }
  Response: { success, data: TypeCategory }

DELETE /api/types/:id          // Xóa type
  Response: { success }
```

#### **goals.routes.ts** - Quản lý mục tiêu
```typescript
GET    /api/goals              // Lấy tất cả goals
  Query: ?status=active|completed|archived
  Response: { success, data: Goal[] }

POST   /api/goals              // Tạo goal mới
  Body: { title, description, start_date, end_date }
  Response: { success, data: Goal }

GET    /api/goals/:id          // Lấy goal by ID
  Response: { success, data: Goal }

PUT    /api/goals/:id          // Update goal
  Body: { title, description, status, ... }
  Response: { success, data: Goal }

DELETE /api/goals/:id          // Xóa goal
  Response: { success }
```

#### **tasks.routes.ts** - Quản lý công việc
```typescript
GET    /api/tasks              // Lấy tất cả tasks
  Query: ?goal_id=123&status=pending
  Response: { success, data: Task[] }

POST   /api/tasks              // Tạo task mới
  Body: { goal_id, type_id, title, target_value, ... }
  Response: { success, data: Task }

GET    /api/tasks/:id          // Lấy task by ID
  Response: { success, data: Task }

PUT    /api/tasks/:id          // Update task
  Body: { title, status, ... }
  Response: { success, data: Task }

DELETE /api/tasks/:id          // Xóa task
  Response: { success }
```

#### **trackings.routes.ts** - Theo dõi tiến độ
```typescript
GET    /api/trackings          // Lấy tất cả trackings
  Query: ?task_id=123&date=2024-01-01
  Response: { success, data: Tracking[] }

POST   /api/trackings          // Tạo tracking mới (cập nhật progress)
  Body: { task_id, value, track_note }
  Response: { success, data: Tracking }

GET    /api/trackings/:id      // Lấy tracking by ID
  Response: { success, data: Tracking }

PUT    /api/trackings/:id      // Update tracking
  Body: { value, track_note }
  Response: { success, data: Tracking }

DELETE /api/trackings/:id      // Xóa tracking
  Response: { success }
```

### 5.3 Controllers - Request Handlers

#### **Cấu trúc chung của Controller**
```typescript
// File: auth.controller.ts
// Method format: async (req, res, next) => { ... }

// Ví dụ:
export const register = async (req, res, next) => {
  try {
    const { email, password, name } = req.body;
    
    // Validation
    if (!email || !password) {
      return res.status(400).json({ success: false, error: "Missing fields" });
    }
    
    // Business logic: call service
    const result = await authService.register(email, password, name);
    
    // Response
    return res.status(201).json({
      success: true,
      data: result,
      message: "Registration successful"
    });
  } catch (error) {
    next(error); // Pass to errorHandler
  }
};
```

**Controllers:**
- `auth.controller.ts` - Login, Register, Logout
- `goals.controller.ts` - CRUD Goals
- `tasks.controller.ts` - CRUD Tasks
- `types.controller.ts` - CRUD Task Types
- `trackings.controller.ts` - CRUD Trackings

### 5.4 Services - Business Logic

#### **Cấu trúc chung của Service**
```typescript
// File: auth.service.ts
// Mục đích: Encapsulate business logic & DB queries

export const authService = {
  // Hash password, verify password
  register: async (email, password, name) => {
    // 1. Check if user exists
    // 2. Hash password
    // 3. Create user in DB
    // 4. Generate JWT token
    // 5. Return user + token
  },
  
  login: async (email, password) => {
    // 1. Find user by email
    // 2. Verify password
    // 3. Generate JWT token
    // 4. Return user + token
  },
  
  // ... other methods
};
```

**Services:**
- `auth.service.ts` - Password hashing, JWT, user auth
- `goals.service.ts` - Goal CRUD + business logic
- `tasks.service.ts` - Task CRUD + status management
- `types.service.ts` - Type/Category CRUD
- `trackings.service.ts` - Progress tracking + calculations

### 5.5 Database - PostgreSQL

#### **db/connection.ts** - Connection Pool
```typescript
// Setup connection pool tới PostgreSQL
import { Pool } from 'pg';

// Sử dụng environment variable DATABASE_URL
// Mỗi connection được reuse từ pool (performance)

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});
```

#### **db/init.ts** - Schema Initialization
```typescript
// Tạo tables khi app khởi động
// Tables được tạo:
//   1. users
//   2. task_types (categories)
//   3. goals
//   4. tasks
//   5. trackings

// Constraints:
//   - Foreign keys (goal → user, task → goal)
//   - Indexes trên frequently queried columns
//   - Unique constraints (email)
```

### 5.6 Entities - Data Models

```typescript
// server/types/index.ts

interface User {
  id: number;
  email: string;
  password_hash?: string;  // Không trả về client
  name?: string;
  avatar?: string;
  age?: number;
  gender?: string;
  last_login?: Date;
  created_at?: Date;
}

interface TypeCategory {
  id: number;
  user_id: number;
  name: string;           // "Work", "Health", "Learning"
  color: string;          // Hex color
  weight: number;         // Priority weight
  created_at?: Date;
}

interface Goal {
  id: number;
  user_id: number;
  title: string;
  description?: string;
  status: 'active' | 'completed' | 'archived';
  start_date?: Date;
  end_date?: Date;
  created_at?: Date;
}

interface Task {
  id: number;
  goal_id: number;
  type_id?: number;       // Link to TypeCategory
  title: string;
  description?: string;
  status: number;         // 0=pending, 1=in_progress, 2=completed
  unit?: string;          // "pages", "km", "hours"
  target_value?: number;
  target_total?: number;
  created_at?: Date;
}

interface Tracking {
  id: number;
  task_id: number;
  value: number;          // Progress value
  track_date: Date;
  track_note?: string;
  created_at?: Date;
}

interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}
```

### 5.7 Middleware

#### **errorHandler.ts** - Global Error Handler
```typescript
// Mục đích: Catch tất cả errors và trả về formatted response

export const errorHandler = (err, req, res, next) => {
  console.error('Error:', err);
  
  const status = err.status || 500;
  const message = err.message || 'Internal Server Error';
  
  res.status(status).json({
    success: false,
    error: message
  });
};

// Usage: Đặt ở cuối server.ts
// app.use(errorHandler);
```

### 5.8 Utils

#### **response.ts** - Response Formatter
```typescript
export const successResponse = (data, message?) => ({
  success: true,
  data,
  message
});

export const errorResponse = (error, status = 400) => ({
  success: false,
  error,
  status
});
```

---

## 6. Cơ Sở Dữ Liệu

### 6.1 Database Schema

```sql
-- 👤 Users Table
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  name VARCHAR(255),
  avatar VARCHAR(255),
  age INTEGER,
  gender VARCHAR(10),
  last_login TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 🏷️ Task Types/Categories
CREATE TABLE task_types (
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  name VARCHAR(100) NOT NULL,
  color VARCHAR(7),          -- Hex color
  weight INTEGER DEFAULT 1,  -- Priority
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 🎯 Goals
CREATE TABLE goals (
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  status VARCHAR(20) DEFAULT 'active',  -- active, completed, archived
  start_date DATE,
  end_date DATE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ✅ Tasks
CREATE TABLE tasks (
  id SERIAL PRIMARY KEY,
  goal_id INTEGER NOT NULL REFERENCES goals(id) ON DELETE CASCADE,
  type_id INTEGER REFERENCES task_types(id) ON DELETE SET NULL,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  status INTEGER DEFAULT 0,   -- 0=pending, 1=in_progress, 2=completed
  unit VARCHAR(50),           -- "pages", "km", "hours"
  target_value DECIMAL,       -- Daily target
  target_total DECIMAL,       -- Total target
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 📊 Trackings (Progress tracking)
CREATE TABLE trackings (
  id SERIAL PRIMARY KEY,
  task_id INTEGER NOT NULL REFERENCES tasks(id) ON DELETE CASCADE,
  value DECIMAL NOT NULL,
  track_date DATE NOT NULL,
  track_note TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 🔑 Indexes
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_goals_user_id ON goals(user_id);
CREATE INDEX idx_tasks_goal_id ON tasks(goal_id);
CREATE INDEX idx_trackings_task_id ON trackings(task_id);
```

### 6.2 Relationships (Quan hệ)

```
┌───────────┐
│   Users   │
└─────┬─────┘
      │ 1
      │ ├─── N ─→ Goals
      │ ├─── N ─→ TaskTypes
      │ └─── N ─→ Tasks (indirect)
      │
      ├─── 1:N ──→ Goals
      │            ├─── 1:N ──→ Tasks
      │                  ├─── 1:N ──→ Trackings
      │                  └─── M:1 ──→ TaskTypes
      │
      └─── 1:N ──→ TaskTypes
```

### 6.3 Các Query Thường Dùng

```sql
-- Lấy tất cả goals của user
SELECT * FROM goals WHERE user_id = $1 AND status = 'active';

-- Lấy tất cả tasks của goal
SELECT t.*, tk.name as type_name 
FROM tasks t
LEFT JOIN task_types tk ON t.type_id = tk.id
WHERE t.goal_id = $1;

-- Lấy trackings của task trong khoảng ngày
SELECT * FROM trackings 
WHERE task_id = $1 
AND track_date BETWEEN $2 AND $3
ORDER BY track_date DESC;

-- Tính tiến độ của task
SELECT 
  task_id,
  SUM(value) as total_progress,
  COUNT(*) as tracking_count,
  AVG(value) as avg_daily_progress
FROM trackings
WHERE task_id = $1
GROUP BY task_id;
```

---

## 7. Luồng Dữ Liệu

### 7.1 Flow: User Login

```
1. User nhập email + password → Login.tsx
   │
2. React gọi API: POST /api/auth/login
   │
3. Express nhận request → authRoutes → authController.login
   │
4. Controller gọi authService.login(email, password)
   │
5. Service:
   - Query DB: SELECT * FROM users WHERE email = $1
   - So sánh password với password_hash
   - Nếu match: Generate JWT token
   │
6. Response: { success: true, data: { user, token } }
   │
7. React:
   - Lưu token vào localStorage
   - Update AuthContext
   - Redirect → /dashboard
```

### 7.2 Flow: Create Goal

```
1. User click "New Goal" → GoalForm.tsx
   │
2. User fill form + submit
   │
3. React gọi API: POST /api/goals
   Body: { title, description, start_date, end_date }
   Headers: { Authorization: "Bearer TOKEN" }
   │
4. Express nhận request → goalsRoutes → goalsController.create
   │
5. Controller:
   - Validate input
   - Lấy user_id từ token
   - Gọi goalsService.create(user_id, data)
   │
6. Service:
   - INSERT INTO goals (user_id, title, ...)
   - RETURNING * (lấy goal vừa tạo)
   │
7. Response: { success: true, data: newGoal }
   │
8. React:
   - Update goals state
   - Show success toast
   - Redirect → /dashboard
```

### 7.3 Flow: Track Progress

```
1. User trong Dashboard, click task
   │
2. User nhập progress value + note
   │
3. React gọi API: POST /api/trackings
   Body: { task_id, value, track_note }
   │
4. Express nhận → trackingsController.create
   │
5. Service:
   - INSERT INTO trackings (task_id, value, track_date, ...)
   - Query: SUM(value) để tính progress
   - Tính % hoàn thành
   │
6. Response: tracking data + progress info
   │
7. React:
   - Update task progress UI
   - Show updated percentage
   - Refresh charts (Report page)
```

### 7.4 Flow: View Report

```
1. User click "Report" → Report.tsx
   │
2. Component mount, call API: GET /api/trackings?task_id=...&date_range=...
   │
3. Backend query trackings + tính statistics:
   - Total progress
   - Daily average
   - Trend line
   │
4. Response: { data: trackings[] }
   │
5. React:
   - Parse dữ liệu
   - Format cho Recharts
   - Render biểu đồ (line chart, bar chart, etc)
```

---

## 8. Hướng Dẫn Chạy

### 8.1 Prerequisites
- Node.js v18+ LTS
- PostgreSQL 12+
- npm hoặc yarn

### 8.2 Setup & Installation

```bash
# 1. Clone repository
git clone https://github.com/alobipbop/zip2.git
cd zip2

# 2. Install dependencies
npm install

# 3. Setup environment variables
# Tạo file .env tại root
cat > .env << EOF
DATABASE_URL=postgresql://user:password@localhost:5432/kairoly
PORT=3000
NODE_ENV=development
EOF

# 4. Initialize database
# Database sẽ tự tạo tables khi server khởi động

# 5. Start development server
npm run dev

# Frontend: http://localhost:5173 (Vite)
# Backend API: http://localhost:3000
```

### 8.3 Scripts NPM

```json
{
  "dev": "tsx server.ts",           // Start dev server
  "build": "vite build",             // Build frontend
  "start": "tsx server.ts",          // Start production
  "preview": "vite preview",         // Preview build
  "clean": "rm -rf dist",            // Clean dist folder
  "lint": "tsc --noEmit"             // Type check
}
```

### 8.4 Chạy Commands

```bash
# Development
npm run dev
# Server chạy trên port 3000
# Frontend (Vite) tự động reload khi code thay đổi

# Build
npm run build
# Tạo dist/index.html + dist/assets/

# Lint & Type checking
npm run lint
# Kiểm tra TypeScript errors
```

### 8.5 Database Connection

```typescript
// .env
DATABASE_URL=postgresql://username:password@localhost:5432/database_name

// Connection string format:
// postgresql://[user[:password]@][netloc][:port][/dbname]

// Ví dụ:
// DATABASE_URL=postgresql://postgres:mypassword@localhost:5432/kairoly
```

### 8.6 Testing API

```bash
# Sử dụng Postman, Insomnia, hoặc curl

# Register
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email":"user@example.com","password":"pass123","name":"John"}'

# Login
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"user@example.com","password":"pass123"}'

# Get goals (cần token)
curl http://localhost:3000/api/goals \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

---

## 9. Best Practices

### 9.1 Frontend Development

```typescript
// ✅ DO:
1. Sử dụng React functional components + hooks
2. Lưu state trong Context hoặc component state
3. Tách component thành nhỏ (< 200 lines)
4. Sử dụng React.memo() cho heavy components
5. Handle loading/error states
6. Validate form input client-side
7. Use Tailwind utility classes

// ❌ DON'T:
1. Prop drilling (pass props quá sâu)
2. Direct DOM manipulation (getElementById)
3. Lớn component files
4. Hardcode API URLs
5. Forget error boundaries
```

### 9.2 Backend Development

```typescript
// ✅ DO:
1. Validate input trong controller
2. Use try-catch + next(error)
3. Tách business logic vào service
4. Reuse DB queries
5. Add indexes trên foreign keys
6. Log important operations
7. Return consistent response format

// ❌ DON'T:
1. Direct DB queries trong controller
2. Hardcode values/URLs
3. Missing error handling
4. Return sensitive data (passwords)
5. Forget SQL injection prevention (use parameterized queries)
```

### 9.3 TypeScript Best Practices

```typescript
// ✅ DO:
1. Define interfaces cho tất cả data structures
2. Use strict mode
3. Proper type annotations
4. Export types từ types/index.ts

// ❌ DON'T:
1. Use "any" type
2. Forget null/undefined checks
3. Missing return types
```

### 9.4 Git Workflow

```bash
# Feature branch
git checkout -b feature/add-report-page

# Commit messages
git commit -m "feat: add report page with charts"  # feature
git commit -m "fix: fix login error handling"      # bug fix
git commit -m "docs: update README"                 # documentation
git commit -m "refactor: reorganize auth service"  # refactoring

# Push
git push origin feature/add-report-page

# Pull request → Review → Merge
```

### 9.5 Folder Organization Tips

```
✅ Do:
- Một file = Một component
- Keep related files together
- Use consistent naming (kebab-case files, PascalCase components)
- Logical grouping (pages/, components/, etc)

❌ Don't:
- Mix business logic với UI
- Chaotic folder structure
- Overly deep nesting
```

---

## 📝 Tóm Tắt Quick Reference

| Thành Phần | File | Mục Đích |
|-----------|------|---------|
| **Frontend Entry** | `src/main.tsx` | React entry point |
| **Backend Entry** | `server.ts` | Express entry point |
| **Routes** | `server/routes/` | API endpoint definitions |
| **Business Logic** | `server/services/` | Core business logic |
| **Request Handlers** | `server/controllers/` | HTTP request processing |
| **DB Connection** | `server/db/connection.ts` | PostgreSQL pool |
| **DB Schema** | `server/db/init.ts` | Table creation |
| **Types** | `server/types/index.ts` | Tất cả interfaces |
| **Global State** | `src/contexts/AuthContext.tsx` | User authentication |
| **Pages** | `src/pages/` | Các trang chính |

---

## 📞 Liên Hệ & Support

- **Repository**: https://github.com/alobipbop/zip2
- **Issues**: Create issue trên GitHub
- **Tech Stack**: TypeScript, React, Express, PostgreSQL

---

**Last Updated**: 19/03/2026  
**Version**: 1.0.0
