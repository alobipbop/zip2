# Kairoly Planning

Kairoly Planning là một hệ thống hỗ trợ người dùng phát triển bản thân thông qua việc lập kế hoạch sinh hoạt và mục tiêu theo chu kỳ tháng. Hệ thống cho phép người dùng lập kế hoạch cá nhân, chia nhỏ mục tiêu thành nhiệm vụ cụ thể, theo dõi tiến độ thực hiện và đánh giá quá trình phát triển qua từng chu kỳ.bây giờ tôi muốn, mỗi lần người dùng nhập type mới, màu của khung sẽ thay đổi khác nhau random (cố gắng tất cả khác màu nhau), người dùng cũng có thêm các option sau: tự đổi lại màu của khung (khi đó ở tab task, các khung này sẽ có màu đó); chọn đặt weight hoặc không (máy tự tính), hoặc giữ nguyên weight set sẵn là 10 (nhưng không hiện ra UI như hiện tại, user nhấn vào pop up mới show ra kèm các option khác; vị trí của xóa type thay thành nút pop up, xóa được đưuọc vào trong option. Khi option xổ ra có grandient

## 🚀 Hướng dẫn chạy dự án trên Localhost (Máy cá nhân)

### 1. Yêu cầu hệ thống
- **Node.js**: Phiên bản LTS mới nhất (khuyên dùng v18 hoặc v20).
- **Trình soạn thảo mã (IDE)**: Visual Studio Code (VS Code).

### 2. Cài đặt và Khởi chạy
1. Mở thư mục dự án bằng VS Code.
2. Mở Terminal trong VS Code (`Ctrl + \``).
3. Cài đặt các thư viện phụ thuộc:
   ```bash
   npm install
   ```
4. Khởi chạy máy chủ phát triển (Development Server):
   ```bash
   npm run dev
   ```
5. Truy cập ứng dụng trên trình duyệt qua đường dẫn: `http://localhost:5173/` (hoặc cổng được hiển thị trong Terminal).

---

## 📂 Cấu trúc thư mục và Chức năng các file

Dự án này sử dụng kiến trúc **Full-Stack** với sự phân tách rõ ràng giữa Frontend và Backend:
- **Frontend**: React + Vite + Tailwind CSS (nằm trong thư mục `src/`)
- **Backend**: NestJS + TypeORM + PostgreSQL (nằm trong thư mục `server/`)

Dưới đây là sơ đồ cấu trúc thư mục chính của dự án:

```text
kairoly-planning/
├── public/                 # Chứa các tài nguyên tĩnh (favicon, ảnh tĩnh...)
├── src/                    # Thư mục chứa toàn bộ mã nguồn FRONTEND (React)
│   ├── components/         # Các component dùng chung (UI components)
│   ├── contexts/           # Quản lý trạng thái toàn cục (Global State)
│   ├── pages/              # Các trang chính của ứng dụng
│   ├── utils/              # Các hàm tiện ích dùng chung
│   ├── App.tsx             # File cấu hình Routing (Điều hướng các trang)
│   ├── index.css           # File CSS toàn cục (chứa cấu hình Tailwind CSS)
│   └── main.tsx            # Điểm neo đầu tiên của React, render App vào DOM
│
├── server/                 # Thư mục chứa toàn bộ mã nguồn BACKEND (NestJS)
│   ├── main.ts             # Điểm neo đầu tiên của NestJS, tích hợp Vite middleware
│   ├── app.module.ts       # Module gốc của ứng dụng NestJS
│   ├── app.controller.ts   # Controller xử lý các API endpoints cơ bản
│   └── app.service.ts      # Service chứa logic xử lý nghiệp vụ
│
├── .env.example            # File mẫu chứa các biến môi trường (Cần tạo file .env từ đây)
├── package.json            # Quản lý thông tin dự án, scripts và các thư viện (dependencies)
├── tailwind.config.js      # Cấu hình giao diện, màu sắc, font chữ cho Tailwind CSS
├── tsconfig.json           # Cấu hình TypeScript (đã bật Decorators cho NestJS)
└── vite.config.ts          # Cấu hình công cụ build Vite
```

### 🛠️ Hướng dẫn chỉnh sửa các tính năng chính

1. **Phát triển Frontend (React):**
   - Mọi thay đổi về giao diện, logic hiển thị, routing đều nằm trong thư mục `src/`.
   - Frontend sẽ gọi API tới Backend thông qua tiền tố `/api/` (ví dụ: `fetch('/api/health')`).

2. **Phát triển Backend (NestJS):**
   - Mọi thay đổi về API, xử lý dữ liệu, kết nối Database đều nằm trong thư mục `server/`.
   - Bạn có thể tạo thêm các Module, Controller, Service mới trong thư mục này theo chuẩn kiến trúc của NestJS.

3. **Cơ sở dữ liệu (PostgreSQL):**
   - Dự án sử dụng **TypeORM** để kết nối và tương tác với PostgreSQL.
   - Bạn cần cung cấp chuỗi kết nối Database thông qua biến môi trường `DATABASE_URL` trong file `.env`.
   - Ví dụ: `DATABASE_URL="postgresql://postgres:postgres@localhost:5432/kairoly"`
   - TypeORM đã được cấu hình `synchronize: true` để tự động tạo bảng dựa trên các Entity bạn định nghĩa.

---

## 🔒 Lưu ý về Cơ sở dữ liệu
- Để chạy dự án này trên máy cá nhân, bạn cần cài đặt và chạy một máy chủ **PostgreSQL** (có thể cài trực tiếp hoặc dùng Docker).
- Đảm bảo tạo một database trống (ví dụ: `kairoly`) và cập nhật thông tin đăng nhập vào file `.env`.
