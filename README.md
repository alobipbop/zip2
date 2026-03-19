# Type Management Features

   Kairoly Planning là một hệ thống hỗ trợ người dùng phát triển bản thân thông qua việc lập kế hoạch sinh hoạt và mục tiêu theo chu kỳ. Hệ thống cho phép người dùng lập kế hoạch cá nhân, chia nhỏ mục tiêu thành nhiệm vụ cụ thể, theo dõi tiến độ thực hiện và đánh giá quá trình phát triển.

## Random Color Selection
The Type management system offers functionality for randomly selecting colors. This feature is useful for various applications, such as assigning different colors for different types dynamically. To utilize this feature:
1. Call the color selection function from the Type management module.
2. Specify any parameters if required (e.g., color palette).
3. The system will return a randomly selected color from the specified palette.

### 1. Yêu cầu hệ thống
- **Node.js**: Phiên bản LTS mới nhất (khuyên dùng v18 hoặc v20)
- **PostgreSQL**: Cơ sở dữ liệu PostgreSQL
- **npm**: Quản lý package (cài đặt cùng Node.js)

### 2. Cài đặt biến môi trường
1. Tạo file `.env` ở thư mục gốc dự án (copy từ `.env.example` nếu có)
2. Cấu hình biến `DATABASE_URL`:
   ```bash
   DATABASE_URL=postgresql://username:password@localhost:5432/kairoly
   ```
3. Thay `username`, `password`, và `kairoly` (tên database) theo cấu hình PostgreSQL của bạn

### 3. Cài đặt và Khởi chạy
1. Cài đặt các thư viện phụ thuộc:
   ```bash
   npm install
   ```
2. Khởi chạy máy chủ (frontend + backend tích hợp):
   ```bash
   npm run dev
   ```
3. Truy cập ứng dụng trên trình duyệt qua: `http://localhost:3000/`

### 4. Các lệnh hữu ích khác
- `npm start` - Khởi chạy server production
- `npm run build` - Build frontend cho production
- `npm run preview` - Xem preview production build
- `npm run lint` - Kiểm tra TypeScript
- `npm run clean` - Xóa thư mục dist

---

## 📂 Cấu trúc thư mục và Chức năng các file

Dự án này sử dụng kiến trúc **monorepo** với frontend và backend tích hợp trong cùng một dự án:

```
kairoly-planning/
├── public/                      # Tài nguyên tĩnh (favicon, ảnh...)
├── src/                         # 🎨 FRONTEND (React + Vite + Tailwind CSS)
│   ├── components/              # Các component dùng chung (UI components)
│   ├── contexts/                # Quản lý trạng thái toàn cục (Global State)
│   ├── pages/                   # Các trang chính của ứng dụng
│   ├── App.tsx                  # Component chính, routing
│   ├── main.tsx                 # Điểm vào React
│   └── index.css                # Stylesheet toàn cục (Tailwind CSS)
│
├── server/                      # ⚙️ BACKEND (Express + TypeORM + PostgreSQL)
│   ├── main.ts                  # Điểm vào server (NestJS setup)
│   ├── app.controller.ts        # Controllers xử lý API routes
│   ├── app.module.ts            # Module chính
│   ├── app.service.ts           # Services chứa business logic
│   └── entities/                # Định nghĩa Database entities
│
├── server.ts                    # ⚡ Server chính (Express + Vite middleware)
├── .env.example                 # Mẫu file biến môi trường
├── package.json                 # Dependencies và scripts
├── index.html                   # HTML entry point
├── vite.config.ts               # Cấu hình Vite
├── tsconfig.json                # Cấu hình TypeScript
└── README.md                    # File này
```

---

## 🏗️ Kiến trúc hệ thống

### Frontend (React + Vite + Tailwind CSS)
- Nằm trong thư mục `src/`
- Sử dụng React 19, Vite 6 cho fast development
- Tailwind CSS 4 cho styling
- React Router cho navigation
- React Hook Form để quản lý form

### Backend (Express + PostgreSQL)
- Nằm trong `server.ts` (Express server)
- Tích hợp Vite middleware cho development
- PostgreSQL cho database (sử dụng `pg` client)
- Auto-initialize database tables khi khởi chạy
- CORS enabled cho cross-origin requests

### Database Schema
Ứng dụng tự động tạo các bảng sau:
- **users**: Lưu thông tin người dùng, profile
- **types**: Phân loại nhiệm vụ (color, weight)
- **goals**: Mục tiêu chính của người dùng
- **tasks**: Nhiệm vụ chi tiết từng mục tiêu
- **trackings**: Lịch sử theo dõi tiến độ từng nhiệm vụ

### API Endpoints
Tất cả API nằm dưới tiền tố `/api/`:
- **Auth**: `POST /api/auth/login`, `PUT /api/users/:id`
- **Types**: `GET/POST /api/types`, `PUT/DELETE /api/types/:id`
- **Goals**: `GET/POST/PUT/DELETE /api/goals`
- **Tasks**: `GET/POST/PUT/DELETE /api/goals/:goalId/tasks`
- **Trackings**: `GET/POST/DELETE /api/tasks/:taskId/trackings`
- **Health**: `GET /api/health` (kiểm tra database connection)

---

## 🔧 Phát triển thêm tính năng

### Thêm tính năng Frontend
1. Tạo component mới trong `src/components/`
2. Import và sử dụng trong pages hoặc components khác
3. Frontend tự động reload khi save file (HMR)

### Thêm API Backend
1. Tạo route mới trong `server.ts`
2. Server tự động restart khi save file
3. Test API bằng Postman hoặc curl

### Thay đổi Database Schema
1. Chỉnh sửa SQL trong hàm `initDB()` ở `server.ts`
2. Server sẽ tự động cập nhật database lần tiếp theo khởi chạy (nếu dùng `CREATE TABLE IF NOT EXISTS`)

---

## 🔒 Lưu ý quan trọng

- **Database Connection**: Đảm bảo PostgreSQL đang chạy và `DATABASE_URL` được cấu hình đúng
- **PORT**: Server chạy trên port 3000, hãy đảm bảo port này không bị chiếm dụng
- **NODE_ENV**: Khi `NODE_ENV !== 'production'`, server sử dụng Vite middleware (development mode)
- **CORS**: Hiện tại CORS được enabled cho tất cả origins - nên cấu hình chi tiết cho production

---

## 📦 Dependencies chính

| Package | Phiên bản | Mục đích |
|---------|----------|---------|
| react | ^19.0.0 | Frontend framework |
| vite | ^6.2.0 | Build tool & dev server |
| express | ^4.21.2 | Backend server |
| pg | ^8.20.0 | PostgreSQL client |
| tailwindcss | ^4.1.14 | CSS framework |
| react-router-dom | ^7.13.1 | Navigation |
| jspdf | ^4.2.0 | PDF export |
| recharts | ^3.8.0 | Charts & graphs |
| @google/genai | ^1.29.0 | Google AI integration |

---

## ❓ Troubleshooting

**Lỗi: "Cannot connect to database"**
- Kiểm tra PostgreSQL đang chạy: `psql -U postgres`
- Kiểm tra `DATABASE_URL` trong `.env` có đúng không
- Đảm bảo database đã tạo: `CREATE DATABASE kairoly;`

**Lỗi: "Port 3000 already in use"**
- Dùng port khác bằng cách sửa `PORT` trong `server.ts`

**Lỗi: "Module not found"**
- Chạy lại `npm install`
- Xóa `node_modules` và `package-lock.json`, rồi cài lại

---

## 📝 License

Dự án này được phát triển cho mục đích học tập và cá nhân.
