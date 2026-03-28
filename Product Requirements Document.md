

# **Product Requirements Document** (chưa hoàn thiện)

# **Mục lục** {#mục-lục}

[**Mục lục	2**](#mục-lục)

[**1\. Product Overview	3**](#1.-product-overview)

[**2\. Objectives	3**](#2.-objectives)

[**3\. Target User	3**](#3.-target-user)

[3.1. User Characteristics	3](#3.1.-user-characteristics)

[3.2. User Problems	3](#3.2.-user-problems)

[**4\. Product Scope	4**](#4.-product-scope)

[4.1. In-scope	4](#4.1.-in-scope)

[4.2. Out-Scope	5](#4.2.-out-scope)

[**5\. High-Level Requirement	5**](#5.-high-level-requirement)

[5.1. Functional Requirement	5](#5.1.-functional-requirement)

[**6\. Data Structure	7**](#6.-data-structure)

[**7\. Use Case	11**](#7.-use-case)

[7.1. Use Case Diagram	11](#7.1.-use-case-diagram)

[7.2. Use Case Specification	11](#7.2.-use-case-specification)

[Phần: Authentication	12](#phần:-authentication)

[UC-02: Đăng ký thường	12](#uc-02:-đăng-ký-thường)

[UC-05: Đăng nhập thường	16](#uc-05:-đăng-nhập-thường)

[UC-04: Đăng ký/ đăng nhập bằng bên thứ ba	20](#uc-04:-đăng-ký/-đăng-nhập-bằng-bên-thứ-ba)

[UC-06: Xác thực Email	24](#uc-06:-xác-thực-email)

[Phần: Tạo mục tiêu (Goal), nhiệm vụ (task)	27](#phần:-tạo-mục-tiêu-\(goal\),-nhiệm-vụ-\(task\))

[UC-07: Tạo mục tiêu tháng (Goal)	27](#uc-07:-tạo-mục-tiêu-tháng-\(goal\))

[UC-08: Tạo nhiệm vụ (Task) \+ Tracking \+ Lưu	30](#uc-08:-tạo-nhiệm-vụ-\(task\)-+-tracking-+-lưu)

[UC-10: Xuất bản mục tiêu (Goal)	33](#uc-10:-xuất-bản-mục-tiêu-\(goal\))

[Phần: Giai đoạn thực hiện kế hoạch	39](#phần:-giai-đoạn-thực-hiện-kế-hoạch)

[UC-12: Daily Tracking \-\> Hoàn thành kế hoạch	39](#uc-12:-daily-tracking--\>-hoàn-thành-kế-hoạch)

[Phần: Báo cáo	46](#phần:-báo-cáo)

[UC-16: Tạo báo cáo	46](#uc-16:-tạo-báo-cáo)

[UC-19: Xem lịch sử Goal	48](#uc-19:-xem-lịch-sử-goal)

[**8\. Business Rule	54**](#8.-business-rule)

[**9\. Non-Functional Requirements	56**](#9.-non-functional-requirements)

# 

# **1\. Product Overview** {#1.-product-overview}

\- Tên sản phẩm: Kairoly Planning gọi tắt là Kairoly  
\- Ngày bắt đầu: 14/01/2026  
\- Budget: 0đ, sản phẩm hoàn toàn không bỏ ra bất cứ đồng nào  
\- Target users: những người trẻ, thường xuyên sử dụng công nghệ, đang trong giai đoạn phát triển bản thân, muốn theo dõi bản thân. Những người đi làm bận rộn, cần quản lý thời gian  
\- Platform: Web (WordPress \+ React)

# **2\. Objectives** {#2.-objectives}

Kairoly Planning là một hệ thống hỗ trợ người dùng phát triển bản thân thông qua việc lập kế hoạch sinh hoạt và mục tiêu theo chu kỳ tháng. Hệ thống cho phép người dùng:

* Lập kế hoạch cá nhân theo tháng  
* Chia nhỏ mục tiêu thành nhiệm vụ cụ thể  
* Theo dõi tiến độ thực hiện  
* Tổng hợp kết quả định lượng  
* Đánh giá quá trình phát triển qua từng chu kỳ

# **3\. Target User** {#3.-target-user}

\- Số lượng users dự kiến: 200 user  
\- Sản phẩm phù hợp cho người dùng các nhân, không dành cho các đội nhóm.

## **3.1. User Characteristics** {#3.1.-user-characteristics}

**Người trẻ đang phát triển bản thân**

* Độ tuổi: 18–30  
* Thường xuyên sử dụng công nghệ  
* Có nhu cầu xây dựng thói quen tốt  
* Muốn theo dõi tiến trình phát triển cá nhân  
* Không thích hệ thống quá phức tạp

	**Người đi làm bận rộn**

* Quỹ thời gian hạn chế  
* Cần quản lý thời gian hiệu quả  
* Muốn tổng hợp nhanh kết quả mỗi tháng  
* Ưu tiên hệ thống rõ ràng, đơn giản, dễ sử dụng  
* Trình độ kỹ thuật:  
  * Sử dụng web và ứng dụng cơ bản  
  * Không yêu cầu kiến thức chuyên sâu về công nghệ

## **3.2. User Problems** {#3.2.-user-problems}

Kairoly Planning được phát triển nhằm giải quyết các vấn đề sau:

**Thiếu kỷ luật**

* Sinh hoạt không có hệ thống  
  * Không có cơ chế theo dõi tiến độ

**Mất phương hướng khi lập kế hoạch**

* Kế hoạch quá chung chung  
  * Không chia nhỏ thành hành động cụ thể

**Kế hoạch rải rác**

* Ghi chú ở nhiều nơi khác nhau  
  * Khó tổng hợp cuối tháng

**Không nhìn thấy tiến bộ dài hạn**

* Không có dữ liệu định lượng  
  * Không so sánh được các tháng

Hệ thống cung cấp cơ chế chuẩn hóa kế hoạch, tập trung hóa dữ liệu và báo cáo định lượng để giải quyết các vấn đề trên

# **4\. Product Scope** {#4.-product-scope}

## **4.1. In-scope** {#4.1.-in-scope}

Kairoly Planning là hệ thống hỗ trợ phát triển bản thân thông qua quản lý kế hoạch cá nhân theo chu kỳ tháng. Hệ thống cho phép người dùng:

**Lập kế hoạch**

* Tạo tài khoản cá nhân người dùng  
* Tạo sửa xóa kế hoạch theo tháng/quý  
* Đánh giá kế hoạch theo weight

**Theo dõi tiến độ**

* Tracking theo tiêu chí được lượng hóa  
* Tính % hoàn thành, thanh tiến độ trực quan

**Báo cáo và đánh giá**

* Tự động tổng kết dữ liệu cuối tháng  
* Tạo báo cáo tùy chỉnh và chia sẻ  
* So sánh tiến độ giữa các tháng

**Khác**

* Tiếp nhận phản hồi  
* Ủng hộ nhà phát triển

## **4.2. Out-Scope** {#4.2.-out-scope}

Hệ thống không thay thế các công cụ quản lý công việc chuyên nghiệp (project management tool), mà tập trung vào mục tiêu cá nhân và phát triển bản thân.

Sản phẩm không phải tiện ích di động, chỉ available trên web.

# **5\. High-Level Requirement** {#5.-high-level-requirement}

## **5.1. Functional Requirement** {#5.1.-functional-requirement}

**MoSCoW Priority:**

**Must have**: Chức năng bắt buộc phải có, nếu thiếu thì coi như chưa hoàn thiện, hầu hết là các chức năng ở mức MVP

**Should have**: Quan trọng nhưng không quá cần thiết, cố gắng thực hiện nếu có thể, nếu thiếu thì phần mềm vẫn hoạt động được

**Nice to have**: Ít quan trọng hơn, thực hiện nếu có thời gian

**Won't have**: còn lâu lêu lêu

| ID | Requirement Name | Priority | Description |
| ----- | ----- | ----- | ----- |
| FR-01 | Đăng ký người dùng | Must have | User đăng ký bằng email gg hoặc tự tạo tài khoản, tài khoản bắt buộc phải kết nối với email |
| FR-02 | Đăng nhập người dùng | Must have | Đối với user đã đăng ký, đăng nhập bằng gmail và mật khẩu, nếu quên mk thì gửi mail, ghi nhớ đăng nhập |
| FR-03 | Tạo mục tiêu tháng | Must have | Khởi tạo chu kỳ tháng (bắt đầu/kết thúc/auto đề xuất), nhập tên mục tiêu chung của tháng, thêm phân loại các task trong tháng |
| FR-04 | Tạo các task trong tháng | Must have | Nhập sửa xóa task, nhập mô tả, phân loại task, notes |
| FR-05 | Tạo tracking cho task | Must have | gồm phần lượng (số) \+ đơn vị đo lường, mục tiêu cụ thể cho tháng → tính % hoàn thành tháng |
| FR-06 | Xuất báo cáo cuối tháng | Must have | người dùng truy vấn thông tin cần sử dụng, xuất báo cáo thành pdf/ảnh/excel |
| FR-07 | Báo cáo hàng tháng | Must have | Tự động tạo báo cáo ngắn gọn cho người dùng mỗi cuối tháng, gửi qua mail hoặc hiện khi user đăng nhập |
| FR-08 | Thanh hiển thị tiến độ | Should have | thanh hiển thị % hoàn thành task và cả tháng |
| FR-09 | Thanh hiển thị thời gian tháng | Nice to have | thanh thời gian trong một chu kỳ tháng |
| FR-10 | Cảnh báo tiến độ | Nice to have | Hiển thị màu sắc trên thanh tiến độ (xanh \> vàng \> đỏ) dựa trên thời gian tháng |
| FR-11 | Update thông tin tracking | Must have | check box or smt để checkin mỗi ngày |
| FR-12 | Xem lại lịch sử | Must have | xem lại báo cáo của các tháng trước |
| FR-13 | Đặt trọng số cho task | Should have | đánh giá kế hoạch, set trọng số theo từng task riêng |
| FR-14 | Mail nhắc cuối/đầu chu kỳ | Should have | Gửi mail cho user khi kết thúc 1 chu kỳ |
| FR-15 | Mail nhắc tiến độ | Nice to have | Gửi mail thúc giục cho user khi chậm tiến độ or không truy cập \>7 ngày |
| FR-16 | Tạo task riêng lẻ | Nice to have | Có thể tạo task lẻ, không phụ thuộc vào mục tiêu tháng |
| FR-17 | Phân rã mục tiêu theo quý | Nice to have | Hỗ trợ chia nhỏ mục tiêu theo quý để tracking |
| FR-18 | Hệ thống nghị lực | Nice to have | Hệ thống điểm công thức ẩn tính theo mức độ duy trì và hoàn thành mục tiêu |
| FR-19 | Tiếp nhận phản hồi | Should have | Box nhận phản hồi của user về lỗi/điểm cần cải thiện |
| FR-20 | Ủng hộ NPT | Nice to have | Nhận quyên góp 🙂 |
| FR-21 | Xác minh email | Must have | tài khoản của người dùng bắt buộc phải xác minh email mới được tiếp tục tạo todo |
| FR-22 | Đặt trọng số cho type | Must have | đánh giá kế hoạch, set trọng số theo type phân loại task |
| FR-23 | Hệ thống huy hiệu và thành tích | Won't Have | Khen thưởng khi người dùng đạt một thành tích nào đó (hoàn thành 100%, truy cập 100%,…) |
| FR-24 | Bảng xếp hạng | Won't Have | So sánh ẩn danh tiến độ của người dùng với trung bình cộng đồng. Bắt buộc phải hoàn thiện FR-18 trước. |
| FR-25 | Tiện ích di động | Won't Have | Sản phẩm là tiện ích di động dẽ dễ tiếp cận với người dùng hơn, giúp họ duy trì đăng nhập/checkin dễ dàng hơn |

# **6\. Data Structure** {#6.-data-structure}

Lược đồ quan hệ sau đây sử dụng DBML để định nghĩa   
(hướng dẫn sử dụng DBML: [https://dbml.dbdiagram.io/docs](https://dbml.dbdiagram.io/docs))  
**Cấu trúc một bảng:**  
Table /\*TÊN\_BẢNG\*/{  
	//các trường dữ liệu  
}

**Mô tả quan hệ:**  
\< One-to-Many  
\> Many-to-One  
\- One-to-One  
\<\>  Many-to-Many

Table USER {  
  userId int pk \[increment\]  
  email varchar \[unique, not null\]  
   
  passwordHash varchar // nếu đky thường  
  emailVerified bool  
  lastLogin timestamp

  createdAt timestamp  
  updateAt timestamp

}

Table PROFILE {

  userId int \[pk, ref: \- USER.userId\]  
  name varchar  
  birth date  
  gender gender  
  avatar varchar \[default: 'avatar default'\]  
  createdAt timestamp  
  updateAt timestamp  
}

Table GOAL {  
  goalId bigint \[pk, increment\]  
  userId int \[not null, ref: \> USER.userId\]  
  title varchar \[not null\] //default: bản nháp X  
  description text  
  status status \[not null\] // 1- active, \-1- closed, 0- inactive  
  start date \[not null\]  
  end date \[not null, check: \`start \< end\` \]  
  complete date //hoàn thành sớm or bằng end  
  createdAt timestamp  
  updatedAt timestamp

  indexes {  
    userId  
    (userId, status)  
    (start, end)  
  }  
}

Table TYPE {  
  typeId int \[pk, increment\]  
  name varchar  
  createdAt timestamp  
  updateAt timestamp  
}

Table TYPEWEIGHT {  
  goalId bigint \[not null, ref: \> GOAL.goalId\]  
  typeId int \[not null, ref: \> TYPE.typeId\]  
  weight decimal(5,2) \[check: \`\>0\`\]  
  createdAt timestamp  
  updateAt timestamp

  indexes {  
    (goalId, typeId) \[pk\]  
  }  
}

Table TASK {  
  taskId bigint \[pk, increment\]  
  goalId bigint \[not null, ref: \> GOAL.goalId\]  
  typeId int \[not null, ref: \> TYPE.typeId\]  
  title varchar \[not null\]  
  description text  
  manualWeight decimal(5,2) // 0–100 null able  
  weight decimal(5,2) \[not null, check: \`\>0\`\]  
  status status \[not null\]   
  createdAt timestamp  
  updatedAt timestamp  
}

Table TRACKING {  
  id bigint \[pk, increment\]  
  taskId bigint \[not null, ref: \- TASK.taskId\]  
  value number  
  unit varchar // buổi, lần, tiết, giờ...  
  total number  
  trackNote text  
  trackDate date  
  createdAt timestamp  
  updateAt timestamp  
}

Table REPORT {  
  goalId bigint \[pk, ref: \- GOAL.goalId\]  
  createdAt timestamp  
  updateAt timestamp  
}

Table AUDIT\_LOG {  
  logId bigint \[pk, increment\]  
  userId int \[ref: \> USER.userId\]  
  entityType varchar  
  entityId bigint  
  action action // 'CREATE', 'UPDATE', 'DELETE'  
  oldValue jsonb  
  newValue jsonb  
  createdAt timestamp  
  updateAt timestamp  
     
  indexes {  
    (entityType, entityId)  
    userId  
    createdAt  
  }  
}

Enum gender {  
  Nam  
  Nu  
  Khac  
  "Khong muon tiet lo"  
}

Enum action {  
  CREATE  
  UPDATE  
  DELETE  
}

Enum status {  
  active  
  close  
  inactive  
}

![ảnh lược đồ quan hệ][image1]  
Chi tiết: [https://dbdiagram.io/d/696cd888d6e030a0245cb31f](https://dbdiagram.io/d/696cd888d6e030a0245cb31f)

# **7\. Use Case** {#7.-use-case}

## **7.1. Use Case Diagram** {#7.1.-use-case-diagram}

Hình dưới đây thể hiện các use case cơ bản và các actor của hệ thống:  
![][image2]  
[Link](https://viewer.diagrams.net/?tags=%7B%7D&lightbox=1&highlight=0000ff&edit=_blank&layers=1&nav=1&title=Kairo%20Usecase&dark=auto#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1NBc-iIjCj1-55KhrsCfyJqwaeyQ04UE3%26export%3Ddownload) [Draw.io](http://Draw.io)

## **7.2. Use Case Specification** {#7.2.-use-case-specification}

Các flow (bao gồm basic và alternative) được mô tả bằng Sequence Diagram dạng Code Mermaid.

| Actor | Description | Tên gọi khác |
| ----- | ----- | ----- |
| User | Là tác nhân bên ngoài hệ thống, đại diện cho các cá nhân có nhu cầu sử dụng các chức năng của hệ thống. |  |
| Giao diện người dùng (UI) | Là thành phần biên giữa người dùng và hệ thống, chịu trách nhiệm hiển thị giao diện, thu thập dữ liệu đầu vào, gửi yêu cầu đến dịch vụ phía máy chủ và hiển thị kết quả phản hồi cho người dùng.  | Client, Frontend, Presentation Layer |
| Dịch vụ xác thực và xử lý nghiệp vụ (API) | Là thành phần điều khiển, chịu trách nhiệm xử lý toàn bộ logic nghiệp vụ. Thành phần này tiếp nhận yêu cầu từ frontend, kiểm tra tính hợp lệ của dữ liệu ở mức hệ thống, tương tác với cơ sở dữ liệu, thực hiện các cơ chế bảo mật, đồng thời trả về phản hồi phù hợp theo chuẩn HTTP. | Backend Service, Auth API |
| Cơ sở dữ liệu (Database) | Là thành phần lưu trữ và quản lý dữ liệu lâu dài của hệ thống. Database chịu trách nhiệm đảm bảo tính toàn vẹn, nhất quán và an toàn dữ liệu.  | data layer |

### **Phần: Authentication** {#phần:-authentication}

#### **UC-02: Đăng ký thường** {#uc-02:-đăng-ký-thường}

| 📄 Description | Người dùng đăng ký tài khoản mới bằng email và mật khẩu |
| :---- | :---- |
| 👤 Actor | User |
| ↖️ Preconditions | User chưa có tài khoản trong hệ thống User đang truy cập trang /register và chưa đăng nhập Hệ thống Auth API đang hoạt động bình thường Kết nối giữa client ↔ API và API ↔ Database ổn định |
| 🚨 Triggers | User nhấn vào nút "Đăng ký" / truy cập trực tiếp URL |
| 📍Postconditions | ✅ Thành công (Basic Flow hoàn tất): Một bản ghi user mới được tạo trong DB với emailVerified \= false Một bản ghi profile mặc định được liên kết với user JWT session token hợp lệ được cấp phát cho client User được chuyển hướng vào /dashboard ở trạng thái đã đăng nhập ⚠️ Thành công một phần (Exception Flow 3): Bản ghi user và profile đã được tạo trong DB User chưa có phiên đăng nhập, được chuyển về /login để tự đăng nhập ❌ Thất bại (Alternative Flow 2 / Exception Flow 1, 2): Không có dữ liệu nào được ghi vào DB User vẫn ở trang /register, có thể thử lại |

**Basic Flow:**

| Bước | Actor | Hành động |
| ----- | ----- | ----- |
| 1 | User | Nhấn vào nút đăng ký, truy cập `/register` |
| 2 | Login Page | Hiển thị form đăng ký |
| 3 | User | Nhập thông tin: Email, Password, Confirm Password |
| 4 | Login Page | Thực hiện format validation: kiểm tra định dạng email, độ mạnh mật khẩu, khớp mật khẩu |
| 5 | Login Page | Gửi `POST /auth/register` với `{email, password}` lên Auth API |
| 6 | Auth API | Truy vấn DB: `SELECT * FROM user WHERE email = ?` |
| 7 | Database | Trả về kết quả: email chưa tồn tại |
| 8 | Auth API | Hash mật khẩu bằng `bcrypt.hash` |
| 9 | Auth API | Mở transaction: `BEGIN TRANSACTION` |
| 10 | Auth API | Insert user mới: `INSERT INTO user (email, pass, emailVerified=false, createdAt=NOW())` |
| 11 | Database | Trả về `userId` |
| 12 | Auth API | Tạo profile mặc định: `INSERT INTO profile` |
| 13 | Database | Trả về `profileId` |
| 14 | Auth API | `COMMIT` transaction |
| 15 | Auth API | Generate JWT session token |
| 16 | Auth API | Trả về `201 Created {token}` |
| 17 | Login Page | Chuyển hướng User đến `/dashboard` |

**Alternative Flow 1: Lỗi validation**   
	**Trigger: Bước 4 — User nhập thông tin sai định dạng**

| Bước | Actor | Hành động |
| ----- | ----- | ----- |
| 4a.1 | Login Page | Phát hiện lỗi: sai định dạng email / mật khẩu yếu / mật khẩu không khớp |
| 4a.2 | Login Page | Hiển thị thông báo lỗi tương ứng ngay trên form |
| 4a.3 | User | Sửa lại thông tin theo yêu cầu |
| 4a.4 |  | ← Quay lại **Bước 4** |

**Alternative Flow 2: Email đã tồn tại**  
	**Trigger: Tại bước 7: DB trả về kết quả email đã được đăng ký**

| Bước | Actor | Hành động |
| ----- | ----- | ----- |
| 7a.1 | Auth API | Trả về `409 Conflict` lên Login Page |
| 7a.2 | Login Page | Hiển thị thông báo: *"Email này đã được sử dụng"* |
| 7a.3 | User | Có thể nhập email khác hoặc chuyển sang trang đăng nhập |
| 7a.4 |  | ← Quay lại **Bước 3** (nếu thử email khác) |

**Exception Flow 1: Lỗi database khi tạo user**  
	**Trigger: Tại bước 10-12: DB thất bại trong quá trình ghi dữ liệu.**

| Bước | Actor | Hành động |
| ----- | ----- | ----- |
| E1.1 | Database | Trả về lỗi khi thực thi INSERT |
| E1.2 | Auth API | Thực hiện `ROLLBACK` transaction, hủy toàn bộ thay đổi |
| E1.3 | Auth API | Trả về `500 Internal Server Error` |
| E1.4 | Login Page | Hiển thị thông báo lỗi: *"Đã có lỗi xảy ra, vui lòng thử lại sau"* |
| E1.5 |  | Use case kết thúc — không có dữ liệu nào bị ghi |

**Exception Flow 2: Mất kết nối / Timeout đến API**  
	**Trigger: Tại bước 5: Request từ client không nhận được phản hồi trong thời gian cho phép ( \>10s)**

| Bước | Actor | Hành động |
| ----- | ----- | ----- |
| E2.1 | Login Page | Phát hiện request timeout hoặc network error (không thể kết nối tới API) |
| E2.2 | Login Page | Hủy trạng thái loading, hiển thị thông báo: *"Không thể kết nối đến máy chủ, vui lòng kiểm tra mạng và thử lại"* |
| E2.3 | Login Page | Kích hoạt lại nút Submit để User có thể thử lại |
| E2.4 | User | Kiểm tra kết nối mạng và nhấn thử lại |
| E2.5 |  | Use case kết thúc |

**Exception Flow 3: Lỗi Generate JWT Token**  
	**Trigger: Tại bước 15: Auth API không thể tạo JWT token sau khi COMMIT thành công**

| Bước | Actor | Hành động |
| ----- | ----- | ----- |
| E3.1 | Auth API | Quá trình `jwt.sign()` thất bại (thiếu secret key / lỗi cấu hình / hết bộ nhớ) |
| E3.2 | Auth API | Ghi log lỗi nội bộ kèm `userId` vừa được tạo |
| E3.3 | Auth API | Trả về `500 Internal Server Error` |
| E3.4 | Login Page | Hiển thị thông báo: *"Đăng ký thành công nhưng không thể đăng nhập tự động, vui lòng đăng nhập lại"* |
| E3.5 | Login Page | Chuyển hướng User đến trang `/login` |
|  |  | ⛔ Use case kết thúc — tài khoản đã được tạo nhưng chưa có phiên đăng nhập |

**Business Rule**

| BR-ID | Rule Name | Description |
| ----- | ----- | ----- |
| BR-01 | Email format | Email phải chứa @  |
| BR-02 | Password strength | Mật khẩu người dùng phải chứa tối thiểu 8 ký tự |
| BR-03 | Tên người dùng | Tên người dùng phải đặt từ 2-200 ký tự |
| BR-04 | Ngày tháng năm sinh | Ngày tháng năm sinh phải trong quá khứ |
| BR-05 | Email | Email người dùng phải được xác thực mới được phép tiếp tục sử dụng phần mềm |
| BR-06 | Thời gian xác thực email | Thời gian từ lúc gửi mail xác thực đến lúc hết hạn là 5 tiếng. Nếu hết hạn, người dùng phải gửi lại yêu cầu xác thực |
| BR-07 | Ảnh đại diện | Ảnh đại diện kích cỡ phải tối thiểu  |

#### **UC-05: Đăng nhập thường** {#uc-05:-đăng-nhập-thường}

| 📄 Description |  |
| :---- | :---- |
| 👤 Actor | User |
| ↖️ Preconditions | Người dùng đã truy cập được vào hệ thống. Trang login có thể truy cập được và chưa có phiên đăng nhập hợp Hệ thống Auth API, Database và Email Service đang hoạt động. Tài khoản người dùng đã tồn tại trong hệ thống  |
| 🚨 Triggers | Nhấn nút “Đăng nhập” hoặc truy cập vào trang đăng nhập và thực hiện đăng nhập bằng email và mật khẩu. |
| 📍Postconditions | Thành công đầy đủ (Basic Flow): User có JWT session token hợp lệ được lưu phía client lastLogin của User được cập nhật trong DB User được vào /dashboard và sử dụng toàn bộ dịch vụ ⚠️ Thành công có giới hạn (Alternative Flow 4): User có JWT token và truy cập được /dashboard Một số tính năng bị hạn chế cho đến khi email được xác thực Banner nhắc nhở xác thực email được hiển thị ⚠️ Thành công một phần (Exception Flow 3): User có JWT token và truy cập được dashboard Trường lastLogin chưa được cập nhật, cần xử lý bổ sung ❌ Thất bại (Alternative Flow 2, 3 / Exception Flow 1, 2): Không có token nào được cấp phát User vẫn ở trạng thái chưa đăng nhập tại trang /login Không có dữ liệu nào bị thay đổi trong DB |

**Basic Flow:**

| Bước | Actor | Hành động |
| ----- | ----- | ----- |
| 1 | User | Truy cập `/login` |
| 2 | Login Page | Hiển thị form đăng nhập |
| 3 | User | Nhập email và password |
| 4 | Login Page | Validate format: kiểm tra định dạng email, password không rỗng |
| 5 | Login Page | Gửi `POST /auth/login` với `{email, password}` lên Auth API |
| 6 | Auth API | Truy vấn DB: `SELECT user WHERE email = ?` |
| 7 | Database | Trả về thông tin User |
| 8 | Auth API | Xác thực mật khẩu: so sánh password với hash đã lưu |
| 9 | Auth API | Generate JWT session token |
| 10 | Auth API | Cập nhật DB: `UPDATE lastLogin = NOW()` |
| 11 | Database | Trả về `OK` |
| 12 | Auth API | Trả về `200 OK {token, emailVerified: true}` |
| 13 | Login Page | Lưu token, chuyển hướng User đến `/dashboard` |
| 14 | Login Page | Hiển thị dashboard đầy đủ — User sử dụng toàn bộ dịch vụ |

**Alternative Flow 1: Lỗi validation**  
	**Trigger: Tại Bước 4: Email sai định dạng hoặc password để trống/không hợp lệ**

| Bước | Actor | Hành động |
| ----- | ----- | ----- |
| 4a.1 | Login Page | Phát hiện lỗi format: email không hợp lệ hoặc password rỗng |
| 4a.2 | Login Page | Hiển thị thông báo lỗi tương ứng ngay trên form, không gửi request lên API |
| 4a.3 | User | Sửa lại thông tin |
| 4a.4 |  | ← Quay lại **Bước 4** |

**Alternative Flow 2: Email chưa đăng ký**  
	**Trigger: Tại Bước 7: DB không tìm thấy user với email tương ứng**

| Bước | Actor | Hành động |
| ----- | ----- | ----- |
| 7a.1 | Auth API | Trả về `404 Not Found` |
| 7a.2 | Login Page | Hiển thị thông báo: *"Email chưa được đăng ký"* |
| 7a.3 | User | Có thể kiểm tra lại email hoặc chuyển sang trang `/register` |
| 7a.4 |  | ← Quay lại **Bước 3** (nếu thử lại) hoặc ⛔ Use case kết thúc |

**Alternative Flow 3: Mật khẩu không đúng**  
	**Trigger: Tại Bước 8: Kết quả so sánh password hash thất bại**

| Bước | Actor | Hành động |
| ----- | ----- | ----- |
| 8a.1 | Auth API | Trả về `401 Unauthorized` |
| 8a.2 | Login Page | Hiển thị thông báo: *"Mật khẩu không đúng"* |
| 8a.3 | User | Nhập lại mật khẩu hoặc chọn quên mật khẩu |
| 8a.4 |  | ← Quay lại **Bước 3** nếu thử lại hoặc Use case kết thúc |

**Alternative Flow 4: Đăng nhập thành công nhưng Email chưa xác thực**  
	**Trigger: Tại Bước 12: API trả về emailVerified: false**

| Bước | Actor | Hành động |
| ----- | ----- | ----- |
| 12a.1 | Auth API | Trả về `200 OK {token, emailVerified: false}` |
| 12a.2 | Login Page | Lưu token, chuyển hướng User đến `/dashboard` |
| 12a.3 | Login Page | Hiển thị **banner cảnh báo** trên dashboard: *"Email của bạn chưa được xác thực. Một số tính năng bị hạn chế. Gửi lại email xác thực?"* |
| 12a.4 | User | Vẫn có thể sử dụng hệ thống với quyền hạn chế |
| 12a.5 |  | ⚠️ Use case kết thúc — User đã đăng nhập nhưng chưa có đầy đủ quyền sử dụng |

**Exception Flow 1: Mất kết nối / Timeout đến API**  
	**Trigger: Tại bước 5: Request không nhận được phản hồi trong thời gian cho phép**

| Bước | Actor | Hành động |
| ----- | ----- | ----- |
| E1.1 | Login Page | Phát hiện network error hoặc request timeout |
| E1.2 | Login Page | Hủy trạng thái loading, hiển thị thông báo: *"Không thể kết nối đến máy chủ, vui lòng kiểm tra mạng và thử lại"* |
| E1.3 | Login Page | Kích hoạt lại nút Submit để User có thể thử lại |
| E1.4 | User | Kiểm tra mạng và nhấn thử lại |
| E1.5 |  | Use case kết thúc |

**Exception Flow 2: Lỗi Generate JWT Token**  
	**Trigger: Tại bước  9: Auth API không thể tạo JWT sau khi xác thực thành công**

| Bước | Actor | Hành động |
| ----- | ----- | ----- |
| E2.1 | Auth API | `jwt.sign()` thất bại (thiếu secret key / lỗi cấu hình runtime) |
| E2.2 | Auth API | Ghi log lỗi nội bộ kèm `userId` và timestamp |
| E2.3 | Auth API | Trả về `500 Internal Server Error` |
| E2.4 | Login Page | Hiển thị: *"Đăng nhập thất bại do lỗi hệ thống, vui lòng thử lại sau"* |
| E2.5 |  | ⛔ Use case kết thúc — không có token được cấp phát, `lastLogin` không được cập nhật |

#### **UC-04: Đăng ký/ đăng nhập bằng bên thứ ba** {#uc-04:-đăng-ký/-đăng-nhập-bằng-bên-thứ-ba}

| 📄 Description |  |
| :---- | :---- |
| 👤 Actor | User |
| ↖️ Preconditions | User có tài khoản Google hợp lệ và đang hoạt động User đang truy cập trang /register hoặc /login và chưa có phiên đăng nhập Hệ thống đã cấu hình Google OAuth (Client ID, Client Secret, Redirect URI) hợp lệ Kết nối client ↔ API, API ↔ Google OAuth và API ↔ Database ổn định |
| 🚨 Triggers | User nhấn vào icon / nút "Đăng ký bằng Google" trên trang Register hoặc Login |
| 📍Postconditions | Thành công — Tài khoản mới (Basic Flow): Bản ghi user mới được tạo trong DB với emailVerified \= true Bản ghi profile được khởi tạo với thông tin lấy từ Google JWT session token hợp lệ được cấp phát cho client User được chuyển hướng vào /dashboard với đầy đủ quyền truy cập ✅ Thành công — Tài khoản đã có (Alternative Flow 1): Không có dữ liệu mới nào được ghi vào DB JWT session token hợp lệ được cấp phát cho client User được chuyển hướng vào /dashboard ⚠️ Thành công một phần (Exception Flow 4): Bản ghi user và profile đã được tạo trong DB User chưa có phiên đăng nhập, được chuyển về /login để tự đăng nhập bằng Google ❌ Thất bại (Alternative Flow 2 / Exception Flow 1, 2, 3): Không có dữ liệu nào được ghi vào DB User vẫn ở trạng thái chưa đăng nhập User có thể thử lại hoặc chọn phương thức đăng ký khác |

**Basic Flow:**

| Bước | Actor | Hành động |
| ----- | ----- | ----- |
| 1 | User | Nhấn icon Google trên Register Page |
| 2 | Register Page | Redirect User đến Google OAuth Consent Screen |
| 3 | Google OAuth | Hiển thị màn hình xác nhận quyền truy cập |
| 4 | User | Nhấn **Allow** để cấp quyền |
| 5 | Google OAuth | Redirect về Register Page kèm `authorization code` |
| 6 | Register Page | Gửi `POST /auth/google/register` với `code` lên Auth API |
| 7 | Auth API | Gửi `code` đến Google để đổi lấy Tokens \+ thông tin User |
| 8 | Google OAuth | Trả về `access_token`, `id_token` và `userInfo` (email, name, avatar) |
| 9 | Auth API | Truy vấn DB: `SELECT user WHERE email = ?` |
| 10 | Database | Trả về kết quả: User chưa tồn tại |
| 11 | Auth API | Mở transaction: `BEGIN` |
| 12 | Auth API | `INSERT INTO user (email, emailVerified=true, createdAt=NOW())` |
| 13 | Database | Trả về `userId` |
| 14 | Auth API | `INSERT INTO profile` (name, avatar lấy từ Google) |
| 15 | Database | Trả về `profileId` |
| 16 | Auth API | `COMMIT` transaction |
| 17 | Auth API | Generate JWT session token |
| 18 | Auth API | Trả về `201 Created {token}` |
| 19 | Register Page | Lưu token, chuyển hướng User đến `/dashboard` |

**Alternative Flow 1: User đã có tài khoản (Tự động đăng nhập)**  
	**Trigger: Tại Bước 10 — DB tìm thấy user với email trùng khớp**

| Bước | Actor | Hành động |
| ----- | ----- | ----- |
| 10a.1 | Database | Trả về thông tin User đã tồn tại |
| 10a.2 | Auth API | Bỏ qua bước tạo tài khoản, tiến hành Generate JWT |
| 10a.3 | Auth API | Trả về `200 OK {token}` |
| 10a.4 | Register Page | Lưu token, hiển thị thông báo: *"Đăng nhập thành công"* |
| 10a.5 | Register Page | Chuyển hướng User đến `/dashboard` |
|  |  | ✅ Use case kết thúc — luồng đăng ký/đăng nhập hợp nhất |

**Alternative Flow 2: User từ chối cấp quyền trên Google**   
	**Trigger: Tại Bước  4: User nhấn Deny / Cancel thay vì Allow**

| Bước | Actor | Hành động |
| ----- | ----- | ----- |
| 4a.1 | Google OAuth | Redirect về Register Page với `error=access_denied` |
| 4a.2 | Register Page | Nhận error callback, không gửi request lên Auth API |
| 4a.3 | Register Page | Hiển thị thông báo: *"Bạn đã hủy đăng nhập bằng Google"* |
| 4a.4 | User | Có thể thử lại hoặc chọn phương thức đăng ký khác |
| 4a.5 |  |  Use case kết thúc — không có dữ liệu nào bị ghi |

**Exception Flow 1: Lỗi Exchange Code với Google (Code hết hạn / không hợp lệ)**  
	**Trigger: Tại bước 7: Google từ chối authorization code**

| Bước | Actor | Hành động |
| ----- | ----- | ----- |
| E1.1 | Google OAuth | Trả về lỗi `invalid_grant` hoặc `invalid_code` |
| E1.2 | Auth API | Ghi log lỗi, không tiếp tục xử lý |
| E1.3 | Auth API | Trả về `400 Bad Request` |
| E1.4 | Register Page | Hiển thị thông báo: *"Xác thực Google thất bại, vui lòng thử lại"* |
| E1.5 | Register Page | Hiển thị lại nút đăng ký bằng Google |
| E1.6 |  | ⛔ Use case kết thúc — không có dữ liệu nào bị ghi |

**Exception Flow 2: Mất kết nối / Timeout giữa API và Google**  
	**Trigger: Tại bước 7 : Auth API không nhận được phản hồi từ Google trong thời gian cho phép**

| Bước | Actor | Hành động |
| ----- | ----- | ----- |
| E2.1 | Auth API | Request đến Google timeout hoặc connection refused |
| E2.2 | Auth API | Ghi log lỗi kết nối |
| E2.3 | Auth API | Trả về `503 Service Unavailable` |
| E2.4 | Register Page | Hiển thị thông báo: *"Không thể kết nối đến Google, vui lòng thử lại sau"* |
| E2.5 |  | ⛔ Use case kết thúc — không có dữ liệu nào bị ghi |

**Exception Flow 3: Lỗi Transaction DB khi tạo tài khoản mới**  
	**Trigger: Tại bước 12 hoặc 14: DB thất bại trong quá trình INSERT**

| Bước | Actor | Hành động |
| ----- | ----- | ----- |
| E3.1 | Database | Trả về lỗi khi thực thi `INSERT` |
| E3.2 | Auth API | Thực hiện `ROLLBACK` transaction, hủy toàn bộ thay đổi |
| E3.3 | Auth API | Trả về `500 Internal Server Error` |
| E3.4 | Register Page | Hiển thị thông báo: *"Đã có lỗi xảy ra, vui lòng thử lại sau"* |
| E3.5 |  | ⛔ Use case kết thúc — không có dữ liệu nào bị ghi |

**Exception Flow 4: Lỗi Generate JWT Token**  
	**Trigger: Tại bước 17: Auth API không thể tạo JWT sau khi COMMIT thành công**

| Bước | Actor | Hành động |
| ----- | ----- | ----- |
| E4.1 | Auth API | `jwt.sign()` thất bại (thiếu secret key / lỗi cấu hình) |
| E4.2 | Auth API | Ghi log lỗi kèm `userId` vừa được tạo |
| E4.3 | Auth API | Trả về `500 Internal Server Error` |
| E4.4 | Register Page | Hiển thị: *"Đăng ký thành công nhưng không thể đăng nhập tự động, vui lòng đăng nhập lại"* |
| E4.5 | Register Page | Chuyển hướng User đến `/login` |
|  |  | ⛔ Use case kết thúc — tài khoản đã được tạo nhưng chưa có phiên đăng nhập |

#### **UC-06: Xác thực Email** {#uc-06:-xác-thực-email}

| 📄 Description |  |
| :---- | :---- |
| 👤 Actor | User |
| ↖️ Preconditions | User đã đăng ký tài khoản thành công nhưng chưa xác thực email (emailVerified \= false) User đã đăng nhập Auth API, Database và Email Service đang hoạt động bình thường Kết nối client ↔ API, API ↔ Database và API ↔ Email Service ổn định |
| 🚨 Triggers | Hệ thống hiển thị thông báo "Vui lòng xác thực email" và User nhấn nút Gửi mã xác nhận |
| 📍Postconditions | ✅ Thành công (Basic Flow): Trường emailVerified của User được cập nhật thành true trong DB JWT session token hợp lệ được cấp phát cho client User được chuyển hướng vào /dashboard với đầy đủ quyền truy cập ❌ Thất bại (Alternative Flow 1 / Exception Flow 1, 2, 3): emailVerified vẫn là false trong DB Không có JWT token nào được cấp phát User chưa có quyền truy cập đầy đủ vào hệ thống |

**Basic Flow:**

| Bước | Actor | Hành động |
| ----- | ----- | ----- |
| 1 | Register Page | Hiển thị thông báo: *"Vui lòng xác thực email của bạn"* kèm nút **Gửi mã xác nhận** |
| 2 | User | Nhấn nút **Gửi mã xác nhận** |
| 3 | Register Page | Gửi request **Send Verification** lên Auth API |
| 4 | Auth API | Gọi Email Service để gửi email xác thực |
| 5 | Email Service | Gửi email chứa **link xác nhận** đến hộp thư của User |
| 6 | User | Mở email và nhấn vào **link xác nhận** |
| 7 | Register Page | Gửi `GET /auth/verify-email?token=...` lên Auth API |
| 8 | Auth API | Thực hiện **Verify token**: kiểm tra chữ ký, thời hạn và tính hợp lệ |
| 9 | Auth API | Cập nhật DB: `UPDATE user SET emailVerified = true` |
| 10 | Database | Trả về `OK` |
| 11 | Auth API | Generate JWT session token |
| 12 | Auth API | Trả về `200 OK {token}` |
| 13 | Register Page | Lưu token, hiển thị: *"Xác nhận thành công"*, chuyển hướng đến `/dashboard` |

**Alternative Flow 1: Token không hợp lệ hoặc đã hết hạn**  
	**Trigger: Tại Bước 9: Token trong link xác nhận không vượt qua được kiểm tra**

| Bước | Actor | Hành động |
| ----- | ----- | ----- |
| 9a.1 | Auth API | Phát hiện token sai chữ ký / đã hết hạn / đã được dùng trước đó |
| 9a.2 | Auth API | Trả về `400 Invalid Token` |
| 9a.3 | Register Page | Hiển thị thông báo: *"Link xác nhận không hợp lệ hoặc đã hết hạn"* kèm nút **Gửi lại email** |
| 9a.4 | User | Nhấn **Gửi lại email** để yêu cầu link mới |
| 9a.5 |  | ← Quay lại **Bước 3** hoặc ⛔ Use case kết thúc |

**Exception Flow 1: Email Service không gửi được email**  
	**Trigger: Tại bước  5-6: Auth API không thể kết nối Email Service hoặc Email Service gửi thất bại**

| Bước | Actor | Hành động |
| ----- | ----- | ----- |
| E1.1 | Email Service | Trả về lỗi: kết nối thất bại / SMTP lỗi / địa chỉ email không hợp lệ |
| E1.2 | Auth API | Ghi log lỗi kèm `userId` và timestamp |
| E1.3 | Auth API | Trả về `502 Bad Gateway` hoặc `500 Internal Server Error` |
| E1.4 | Register Page | Hiển thị thông báo: *"Không thể gửi email xác thực, vui lòng thử lại sau"* |
| E1.5 | User | Có thể thử lại sau hoặc kiểm tra địa chỉ email |
| E1.6 |  | ⛔ Use case kết thúc — email chưa được gửi, `emailVerified` vẫn là `false` |

**Exception Flow 2: Mất kết nối / Timeout khi click link xác nhận**  
	**Trigger: Tại bước 8: Request GET /auth/verify-email không nhận được phản hồi từ API**

| Bước | Actor | Hành động |
| ----- | ----- | ----- |
| E2.1 | Register Page | Phát hiện network error hoặc request timeout |
| E2.2 | Register Page | Hiển thị thông báo: *"Không thể kết nối đến máy chủ, vui lòng thử lại"* kèm nút **Thử lại** |
| E2.3 | User | Kiểm tra mạng và nhấn thử lại hoặc click lại link trong email |
| E2.4 |  | ← Quay lại **Bước 8** hoặc ⛔ Use case kết thúc |

**Exception Flow 3: Lỗi cập nhật DB (UPDATE emailVerified)**  
	**Trigger: Tại bước 10: DB thất bại khi thực thi UPDATE emailVerified \= true**

| Bước | Actor | Hành động |
| ----- | ----- | ----- |
| E3.1 | Database | Trả về lỗi khi thực thi `UPDATE` |
| E3.2 | Auth API | Ghi log lỗi kèm `userId` và token đã được xác thực |
| E3.3 | Auth API | Trả về `500 Internal Server Error` |
| E3.4 | Register Page | Hiển thị thông báo: *"Xác thực thất bại do lỗi hệ thống, vui lòng thử lại sau"* |
| E3.5 |  | ⛔ Use case kết thúc — `emailVerified` vẫn là `false`, JWT không được cấp phát |

### 

### **Phần: Tạo mục tiêu (Goal), nhiệm vụ (task)** {#phần:-tạo-mục-tiêu-(goal),-nhiệm-vụ-(task)}

#### **UC-07: Tạo mục tiêu tháng (Goal)** {#uc-07:-tạo-mục-tiêu-tháng-(goal)}

| 📄 Description |  |
| :---- | :---- |
| 👤 Actor | Primary Actor: User Supporting Systems: Dashboard UI, API, Database |
| ↖️ Preconditions | Người dùng đã đăng nhập vào hệ thống. Người dùng có quyền truy cập Dashboard (đã xác thực email). Hệ thống API và Database hoạt động bình thường.  |
| 🚨 Triggers | User nhấn nút "Tạo mục tiêu mới" trên Dashboard |
| 📍Postconditions | ✅ Thành công (Basic Flow hoàn tất): Goal mới được tạo trong DB với trạng thái inactive (nháp) Dashboard UI hiển thị form Task với dropdown Type, sẵn sàng cho bước tạo Task tiếp theo ⚠️ Thành công một phần (Alternative Flow 2): Goal nháp được tạo thành công Danh sách type\[\] rỗng — User cần tạo Type trước khi có thể tạo Task ❌ Thất bại (Exception Flow 1, 2): Không có goal mới nào được tạo User vẫn ở Dashboard, có thể thử lại |

**Basic Flow**

| Bước | Actor | Hành động |
| ----- | ----- | ----- |
| 1 | User | Nhấn **"Tạo mục tiêu mới"** trên Dashboard |
| 2 | Dashboard UI | Hiển thị form **"Tạo kế hoạch"** |
| 3 | User | Nhập thông tin Goal (tên, mô tả, thời gian, ...) |
| 4 | Dashboard UI | Gửi `POST /goals` lên API |
| 5 | API | Mở transaction: `BEGIN TRANSACTION` |
| 6 | API | Tạo goal mới ở trạng thái **nháp**: `INSERT INTO goal (status = inactive)` |
| 7 | Database | Trả về `goalId` |
| 8 | API | `COMMIT TRANSACTION` |
| 9 | API | Trả về `201 Created {goalId}` |
| 10 | Dashboard UI | Hiển thị màn hình **Quản lý Task** |
| 11 | User | Nhấn **"Quản lý thể loại"** |
| 12 | Dashboard UI | Gửi `GET /types` lên API |
| 13 | API | Truy vấn DB: `SELECT * FROM types` |
| 14 | Database | Trả về danh sách `types[]` |
| 15 | API | Trả về `200 OK {types[]}` |
| 16 | Dashboard UI | Hiển thị form Task kèm **dropdown chọn Type** |

**Alternative Flow 1: User hủy bỏ giữa chừng khi điền form**  
	**Trigger: Tại Bước 3: User nhấn Hủy hoặc đóng form trước khi submit**

| Bước | Actor | Hành động |
| ----- | ----- | ----- |
| 3a.1 | User | Nhấn **Hủy** hoặc đóng/thoát/ra khỏi modal form |
| 3a.2 | Dashboard UI | Đóng form, không gửi request lên API |
| 3a.3 | Dashboard UI | Quay lại trạng thái Dashboard ban đầu |
|  |  | Use case kết thúc — không có dữ liệu nào bị thay đổi |

**Alternative Flow 2: Không có Type nào trong hệ thống**  
	**Trigger: Tại Bước 14: DB trả về typeweight\[\] rỗng**

| Bước | Actor | Hành động |
| ----- | ----- | ----- |
| 14a.1 | Database | Trả về mảng rỗng `typeweight[] = []` |
| 14a.2 | API | Trả về `200 OK {types: []}` |
| 14a.3 | Dashboard UI | Hiển thị form Task với dropdown Type trống kèm thông báo: *"Chưa có thể loại nào, vui lòng tạo thể loại trước"* |
| 14a.4 | User | Được điều hướng đến màn hình tạo Type mới |
|  |  | ⚠️ Use case tạm dừng — cần hoàn thành việc tạo Type trước khi tiếp tục tạo Task |

**Exception Flow 1: Lỗi Transaction khi tạo Goal**  
	**Trigger: Tại bước 6: DB thất bại**

| Bước | Actor | Hành động |
| ----- | ----- | ----- |
| E1.1 | Database | Trả về lỗi khi thực thi `INSERT` |
| E1.2 | API | Thực hiện `ROLLBACK TRANSACTION` — không có dữ liệu nào bị ghi |
| E1.3 | API | Trả về `500 Internal Server Error` |
| E1.4 | Dashboard UI | Hiển thị thông báo: *"Tạo mục tiêu thất bại, vui lòng thử lại"* |
| E1.5 |  | ⛔ Use case kết thúc — goal active hiện tại không bị ảnh hưởng |

**Exception Flow 2: Mất kết nối / Timeout khi gọi POST**  
	**Trigger: Tại bước 4: Request không nhận được phản hồi trong thời gian cho phép**

| Bước | Actor | Hành động |
| ----- | ----- | ----- |
| E2.1 | Dashboard UI | Phát hiện network error hoặc request timeout |
| E2.2 | Dashboard UI | Hủy trạng thái loading, hiển thị: *"Không thể kết nối đến máy chủ, vui lòng thử lại"* |
| E2.3 | Dashboard UI | Kích hoạt lại nút Submit |
| E2.4 | User | Kiểm tra mạng và nhấn thử lại |
| E2.5 |  | ← Quay lại **Bước 4** |

#### **UC-08: Tạo nhiệm vụ (Task) \+ Tracking \+ Lưu** {#uc-08:-tạo-nhiệm-vụ-(task)-+-tracking-+-lưu}

| 📄 Description |  |
| :---- | :---- |
| 👤 Actor |  |
| ↖️ Preconditions | User đã đăng nhập Goal nháp đã được tạo thành công và có goalId hợp lệ Danh sách types\[\] đã được load sẵn trên UI Hệ thống API và Database đang hoạt động bình thường |
| 🚨 Triggers | User bắt đầu nhập thông tin Task đầu tiên trên form Task sau khi vào Goal nháp |
| 📍Postconditions | ✅ thành công (Alternative Flow 5): Tất cả Task liên kết với Goal, có hoặc không có Tracking Goal và Task được lưu với status \= inactive User có thể quay lại chỉnh sửa bất kỳ lúc nào ❌ Thất bại: Task hoặc Tracking không được lưu vào DB Goal nháp vẫn còn nguyên, không bị ảnh hưởng User có thể thử lại từ bước bị lỗi |

**Basic Flow:**

| Bước | Actor | Hành động |
| ----- | ----- | ----- |
| 1 | User | Nhập tên nhiệm vụ và nhấn Enter / xác nhận |
| 2 | Dashboard UI | Validate: kiểm tra tên không rỗng |
| 3 | Dashboard UI | Gửi `POST /tasks` với `{goalId, title, status=0}` lên API |
| 4 | API | `INSERT INTO task (status = 0)` |
| 5 | Database | Trả về `taskId` |
| 6 | API | Trả về `201 Created {taskId}` |
| 7 | Dashboard UI | Hiển thị task mới vào bảng với các cột: **Phân loại**, **Nhiệm vụ**, **Mô tả**, **Set Tracking \= No**, **Ghi chú** ở trạng thái inline-editable |
| 8 | User | Chỉnh sửa trực tiếp các trường: chọn **Phân loại** từ dropdown, nhập **Mô tả**, **Ghi chú, Nhiệm vụ** |
| 9 | Dashboard UI | Auto-save từng trường khi User thay đổi: `PATCH /tasks/:id` |
| 10 | User | Nhấn **"\> Set it now"** ở cột Set Tracking của task |
| 11 | Dashboard UI | Mở **Setting panel** bên phải với các trường: The unit, Input option, Set value, Set total, Set unit |
| 12 | User | Chọn **Input option**: `value and unit` / `value and total` / `unit and total` |
| 13 | Dashboard UI | Hiển thị các trường tương ứng dựa trên lựa chọn, tự động tính toán trường còn lại |
| 14 | User | Điền giá trị vào các trường được hiển thị |
| 15 | Dashboard UI | Gửi `POST /tracking` với `{taskId, value, unit, total}` lên API |
| 16 | API | `INSERT INTO tracking` |
| 17 | Database | Trả về `trackingId` |
| 18 | API | Trả về `201 Created {trackingId}` |
| 19 | Dashboard UI | Cập nhật cột **Set Tracking \= Yes**, đóng Setting panel |
| 20 |  | ↩️ Lặp lại từ **Bước 1** nếu User muốn thêm task mới |
| 21 | User | Nhấn **\[Lưu bản nháp\]** |
| 22 | UI | Disable nút, hiển thị loading indicator |
| 23 | UI | Gửi `POST /goals/draft` với `{goalId, tasks, tracking, types}` |
| 24 | API | Kiểm tra DB: draft đã tồn tại chưa → `UPDATE draft` |
| 25 | Database | Trả về `1 row updated` |
| 26 | API | Trả về `200 OK` |
| 27 | UI | Enable lại nút, hiển thị: *"Đã lưu bản nháp"* |

Note: Mỗi task được lưu ngay lập tức với status \= 0 (inactive) khi tạo \- tracking được setup độc lập sau đó. Cho phép User tạo nhiều task trước rồi setup tracking từng cái, hoặc setup ngay sau mỗi task.

**Alternative Flow 1: User nhập title rỗng**  
	**Trigger: Tại Bước 2: User nhấn Enter mà không nhập gì**

| Bước | Actor | Hành động |
| ----- | ----- | ----- |
| 2a.1 | Dashboard UI | Phát hiện input rỗng, không gửi request |
| 2a.2 | User | Nhập tên và thử lại |
| 2a.4 |  | ← Quay lại **Bước 1** |

**Alternative Flow 2: User đóng tab khi có thay đổi chưa lưu**  
	**Trigger: User đóng tab hoặc F5 khi form đang có nội dung chưa được save draft**

| Bước | Actor | Hành động |
| ----- | ----- | ----- |
| 2c.1 | UI | Trigger `beforeunload` event, phát hiện form có thay đổi chưa lưu |
| 2c.2 | UI | Hiển thị dialog: *"Bạn có thay đổi chưa lưu. Bạn có chắc muốn rời khỏi?"* **\[Leave\] \[Stay\]** |
| 2c.3a | User | Nhấn **\[Stay\]** → Ở lại trang, tiếp tục chỉnh sửa |
| 2c.3b | User | Nhấn **\[Leave\]** → Thoát, thay đổi chưa lưu bị mất |
|  |  | ⚠️ Bản nháp cuối cùng đã lưu vẫn còn trong DB |

**Exception Flow 1: Lỗi POST /tasks**  
	**Trigger: Tại bước 3: DB thất bại hoặc timeout**

| Bước | Actor | Hành động |
| ----- | ----- | ----- |
| E1.1 | API / DB | Trả về lỗi `500` hoặc timeout |
| E1.2 | Dashboard UI | Không thêm task vào bảng, hiển thị: *"Tạo nhiệm vụ thất bại, vui lòng thử lại"* |
| E1.3 | Dashboard UI | Giữ nguyên nội dung ô input để User không phải nhập lại |
| E1.4 |  | ← Quay lại **Bước 3** |

**Exception Flow 2: Chia cho 0 khi tính tracking**  
	**Trigger: Tại bước 14: User nhập Value \= 0 hoặc Total \= 0**

| Bước | Actor | Hành động |
| ----- | ----- | ----- |
| E3.1 | Dashboard UI | Phát hiện giá trị \= 0 trước khi tính toán |
| E3.2 | Dashboard UI | Highlight trường lỗi, hiển thị: *"Giá trị không được bằng 0"* |
| E3.3 | User | Nhập lại giá trị hợp lệ |
| E3.4 |  | ← Quay lại **Bước 14** |

#### **UC-10: Xuất bản mục tiêu (Goal)** {#uc-10:-xuất-bản-mục-tiêu-(goal)}

| 📄 Description |  |
| :---- | :---- |
| 👤 Actor | Primary Actor:User Supporting Systems: Goal Form UI, API, Database, Calculation Service |
| ↖️ Preconditions | User đã đăng nhập và có JWT hợp lệ Goal đang ở trạng thái nháp (inactive) với goalId hợp lệ Ít nhất một số thông tin Goal đã được điền (Title, ngày tháng...) Hệ thống API, Database và Calculation Service đang hoạt động bình thường |
| 🚨 Triggers | User nhấn nút "Xuất bản kế hoạch" trên Goal Form |
| 📍Postconditions | ✅ Xuất bản thành công (Basic Flow): Goal được cập nhật status \= 1 (active) trong DB Tất cả Task liên kết với Goal được cập nhật weight và status Audit log ghi nhận sự kiện activate với timestamp Goal nháp cũ không còn tồn tại, bị loại bỏ khỏi banner nháp, dashboard hiển thị Goal active User được redirect về Dashboard với Goal đang chạy ❌ Thất bại — Validation (Alternative Flow 2, 3, 4, 5): Goal vẫn ở trạng thái nháp status \= 0 Không có dữ liệu nào bị thay đổi trong DB User được thông báo lỗi cụ thể và có thể sửa lại ❌ Thất bại — Hệ thống (Exception Flow 1, 2, 3): ROLLBACK đảm bảo Goal và Task vẫn giữ nguyên trạng thái nháp Không có dữ liệu nào bị ghi một phần User có thể thử lại toàn bộ luồng xuất bản |

### 

### 

### 

### 

### 

### 

### 

### 

### 

### 

### 

### 

### 

**Basic Flow**

| Bước | Actor | Hành động |
| ----- | ----- | ----- |
| 1 | User | Nhấn **"Xuất bản kế hoạch"** |
| 2 | Goal Form UI | Hiển thị confirmation dialog: *"Sau khi xuất bản, kế hoạch sẽ được kích hoạt. ⚠️ Chỉnh sửa sẽ bị hạn chế: không thể chỉnh sửa ngày tháng, type"* — **\[Xác nhận\] \[Hủy\]** |
| 3 | User | Nhấn **\[Xác nhận\]** |
| 4 | Goal Form UI | Disable nút Xuất bản, hiển thị loading: *"Đang xử lý..."* |
| 5 | Goal Form UI | Gửi `POST /goals/publish` với toàn bộ dữ liệu hiện tại lên API |
| 6 | API | `INSERT INTO` lưu dữ liệu Goal mới nhất trước khi validate |
| 7 | Database | Trả về `goalId` |
| **Phase 2:** |  | **— Validation —** |
| 8 | API | `validateGoalData()`: kiểm tra Title, các trường bắt buộc của Goal |
| 9 | API | `validateDateLogic()`: kiểm tra Start date \< End date, End date \> NOW()+7, Duration trong khoảng 7–365 ngày |
| 10 | API | `validateTaskData()`: kiểm tra có ít nhất 1 task, mỗi task có title, typeId |
| 11 | API | Truy vấn DB: `SELECT COUNT(*) WHERE userId = ? AND status = active AND dateRange overlap` |
| 12 | Database | Trả về `count = 0` — không có goal trùng lịch |
| **Phase 3:** |  | **— Calculation —** |
| 13 | API | Gọi `CalcService.calculateWeights(type)` |
| 14 | Calculation Service | Tính `totalWeight = Σ TYPEWEIGHT.weight` |
| 15 | Calculation Service | `normalizeWeights()`: nếu tổng ≠ 100 → chuẩn hóa theo tỷ lệ `(weight/total) × 100` |
| 16 | Calculation Service | `calculateTaskWeights()`: `TASK.weight = typeWeight / taskCount` *(bỏ qua trong MVP)* |
| 17 | Calculation Service | Trả về `{success: true, taskWeights: [...]}` |
| **Phase 4:** |  | **— Lưu & Activate —** |
| 18 | API | `UPDATE TASK, GOAL SET status = 1` — kích hoạt Goal |
| 19 | Database | Trả về `taskId` |
| 20 | API | `INSERT INTO audit_log` ghi nhận sự kiện activate |
| 21 | Database | Trả về `logId` |
| 22 | API | `COMMIT TRANSACTION` |
| 23 | Database | Trả về ✅ Transaction committed |
| 24 | API | Build response payload, trả về `201 Created` |
| 25 | Goal Form UI | Ẩn loading, hiển thị success animation 🎉 |
| 26 | Goal Form UI | Hiển thị: *"Kế hoạch đã được xuất bản\!"* rồi redirect về Dashboard |

**Alternative Flow 1: User hủy xuất bản**  
	**Trigger: Tại Bước 3: User nhấn \[Hủy\] trong dialog xác nhận**

### 

| Bước | Actor | Hành động |
| ----- | ----- | ----- |
| 3a.1 | Goal Form UI | Đóng dialog, không gửi request lên API |
| 3a.2 | Goal Form UI | Giữ nguyên trạng thái form, nút Xuất bản được enable lại |
|  |  | ⛔ Use case kết thúc — Goal vẫn ở trạng thái nháp |

### 

**Alternative Flow 2: Goal data không hợp lệ (Validation Title/fields)**  
	**Trigger: Tại Bước 8: validateGoalData() trả về valid: false**

| Bước | Actor | Hành động |
| ----- | ----- | ----- |
| 8a.1 | API | Trả về `400 Bad Request {errors: [{field: "title", message: "..."}]}` |
| 8a.2 | Goal Form UI | Enable lại nút Xuất bản, ẩn loading |
| 8a.3 | Goal Form UI | Highlight các trường lỗi, hiển thị: *"Goal chưa có tittle"* |
| 8a.4 | User | Sửa lại thông tin theo yêu cầu |
| 8a.5 |  | ← Quay lại **Bước 1** |

**Alternative Flow 3: Khoảng thời gian không hợp lệ**  
	**Trigger: Tại Bước 9: validateDateLogic() trả về valid: false**

| Bước | Actor | Hành động |
| ----- | ----- | ----- |
| 9a.1 | API | Trả về `400 Bad Request {errors: [{field: "dateRange", message: "..."}]}` |
| 9a.2 | Goal Form UI | Enable lại nút Xuất bản, ẩn loading |
| 9a.3 | Goal Form UI | Hiển thị: *"Goal phải bắt đầu ít nhất 7 ngày kể từ hôm nay / thời lượng phải từ 7–365 ngày"* |
| 9a.4 | User | Điều chỉnh lại ngày tháng |
| 9a.5 |  | ← Quay lại **Bước 1** |

**Alternative Flow 4: Task không hợp lệ**  
	**Trigger: Tại Bước 10: validateTaskData() trả về valid: false**

| Bước | Actor | Hành động |
| ----- | ----- | ----- |
| 10a.1 | API | Trả về `400 Bad Request {errors: [{field: "tasks", message: "..."}]}` |
| 10a.2 | Goal Form UI | Enable lại nút Xuất bản, ẩn loading |
| 10a.3 | Goal Form UI | Hiển thị: *"Cần thêm ít nhất 1 task / task thiếu thông tin"* |
| 10a.4 | User | Quay lại tab Task để bổ sung |
| 10a.5 |  | ← Quay lại **Bước 1** |

**Alternative Flow 5: Goal bị trùng lịch với goal đang active**  
	**Trigger: Tại Bước 12: DB trả về count \> 0**

| Bước | Actor | Hành động |
| ----- | ----- | ----- |
| 12a.1 | API | Trả về `409 Conflict` |
| 12a.2 | Goal Form UI | Enable lại nút Xuất bản, ẩn loading |
| 12a.3 | Goal Form UI | Hiển thị: *"Bạn có goal đang active từ DD/MM/YYYY đến DD/MM/YYYY. Vui lòng chọn khoảng thời gian khác hoặc ngừng goal đang active."* |
| 12a.4 | User | Điều chỉnh lại ngày tháng để tránh trùng lịch |
| 12a.5 |  | ← Quay lại **Bước 1** |

**Exception Flow 1: Timeout / Mất kết nối khi gọi POST /goals/publish**  
	**Trigger: Tại bước 5: Request không nhận được phản hồi**

| Bước | Actor | Hành động |
| ----- | ----- | ----- |
| E1.1 | Goal Form UI | Phát hiện network error hoặc timeout |
| E1.2 | Goal Form UI | Enable lại nút Xuất bản, ẩn loading |
| E1.3 | Goal Form UI | Hiển thị: *"Không thể kết nối đến máy chủ, vui lòng thử lại"* |
| E1.4 |  | ← Quay lại **Bước 1** |

**Exception Flow 2: Lỗi Calculation Service**  
	**Trigger: Tại bước 13: CalcService không phản hồi hoặc tính toán thất bại**

| Bước | Actor | Hành động |
| ----- | ----- | ----- |
| E2.1 | Calculation Service | Trả về lỗi hoặc timeout |
| E2.2 | API | Ghi log lỗi kèm `goalId` và input data |
| E2.3 | API | `ROLLBACK` — hủy toàn bộ thay đổi |
| E2.4 | API | Trả về `500 Internal Server Error` |
| E2.5 | Goal Form UI | Enable lại nút Xuất bản, hiển thị: *"Xuất bản thất bại, vui lòng thử lại"* |
|  |  | ⛔ Goal vẫn ở trạng thái nháp |

**Exception Flow 3: Lỗi Transaction DB**  
	**Trigger: Tại bước 18 hoặc 20: DB thất bại khi thực thi**

| Bước | Actor | Hành động |
| ----- | ----- | ----- |
| E3.1 | Database | Trả về lỗi khi thực thi câu lệnh |
| E3.2 | API | `ROLLBACK TRANSACTION` — hủy toàn bộ: Goal và Task vẫn ở `status = 0` |
| E3.3 | API | Trả về `500 Internal Server Error` |
| E3.4 | Goal Form UI | Enable lại nút Xuất bản, hiển thị: *"Xuất bản thất bại, vui lòng thử lại"* |
|  |  | ⛔ Không có dữ liệu nào bị thay đổi nhờ ROLLBACK |

### **Phần: Giai đoạn thực hiện kế hoạch** {#phần:-giai-đoạn-thực-hiện-kế-hoạch}

#### **UC-12: Daily Tracking \-\> Hoàn thành kế hoạch** {#uc-12:-daily-tracking-->-hoàn-thành-kế-hoạch}

| 📄 Description |  |
| :---- | :---- |
| 👤 Actor |  |
| ↖️ Preconditions | User đã đăng nhập và có JWT hợp lệ Có ít nhất một Goal đang ở trạng thái active (status \= true) Goal đã được thiết lập đầy đủ Task và Tracking từ trước Hệ thống API, Database hoạt động bình thường |
| 🚨 Triggers | Tất cả Tasks đạt 100% → hệ thống enable nút "Hoàn thành kế hoạch" User chủ động nhấn "Kết thúc sớm" trước ngày endDate Hệ thống phát hiện Goal đã quá endDate mà chưa được đóng |
| 📍Postconditions | Hoàn thành 100% (Basic Flow): Goal được ghi closedType \= 'completed', completeDate \= NOW(), status \= false Audit log ghi lại, báo cáo được generate và lưu với final progress 100% Goal chuyển sang lịch sử, không thể tracking thêm Kết thúc sớm (Alternative Flow 4): Goal được ghi closedType \= 'early\_ended', status \= false Báo cáo ghi nhận progress tại thời điểm dừng Goal chuyển sang lịch sử, không thể tracking thêm Auto-close khi hết hạn (Alternative Flow 5): Goal được ghi closedType \= 'auto\_closed', completeDate \= endDate, status \= false User nhận notification và có thể xem báo cáo khi quay lại Dashboard ⚠️ Hoàn thành một phần (Exception Flow 4): Goal đã được đóng thành công trong DB Báo cáo chưa được generate \-\> xử lý bổ sung  ❌ Thất bại (Exception Flow 1, 2, 3): ROLLBACK đảm bảo không có dữ liệu bị ghi một phần Goal vẫn ở trạng thái active User có thể tiếp tục tracking hoặc thử lại thao tác |

**Basic Flow**

| Bước | Actor | Hành động |
| ----- | ----- | ----- |
| 1 | User | Truy cập Dashboard |
| 2 | Dashboard UI | Gửi `GET /goals/active` lên API |
| 3 | API | Truy vấn DB: `SELECT * FROM goal WHERE userId = ? AND status = true` |
| 4 | Database | Trả về danh sách Goals đang active |
| 5 | API | Trả về `200 OK {goals[]}` |
| 6 | Dashboard UI | Hiển thị Goals đang active kèm Tasks và Tracking forms |
| 7 | User | Nhập giá trị tracking cho task trong ngày |
| 8 | Dashboard UI | Gửi `POST /tracking` với `{taskId, value, date}` lên API |
| 9 | API | `BEGIN TRANSACTION` |
| 10 | API | `INSERT INTO tracking` — lưu bản ghi tracking mới |
| 11 | Database | Trả về `trackingId` |
| 12 | API | Tính lại progress của task và goal |
| 13 | API | `COMMIT TRANSACTION` |
| 14 | API | Trả về `200 OK {progress: 100%}` |
| 15 | Dashboard UI | Cập nhật progress bar lên 100% |
| 16 | Dashboard UI | Tự động enable nút **"Hoàn thành kế hoạch"**, hiển thị badge 🎉 *"Tất cả tasks đã hoàn thành\!"* |
| 17 | User | Nhấn **"Hoàn thành kế hoạch"** |
| 18 | Dashboard UI | Hiển thị confirmation dialog: *"Bạn đã hoàn thành 100% mục tiêu\! Đánh dấu kế hoạch là hoàn thành? Bạn vẫn có thể: Xem báo cáo, Export PDF"* — **\[Xác nhận\] \[Hủy\]** |
| 19 | User | Nhấn **\[Xác nhận\]** |
| 20 | Dashboard UI | Gửi `POST /goals/complete` với `{goalId, completeDate: NOW()}` |
| 21 | API | `BEGIN TRANSACTION` |
| 22 | API | `UPDATE goal SET completeDate = NOW(), closedType = 'completed'` |
| 23 | Database | Trả về `1 row updated` |
| 24 | API | `INSERT INTO audit_log` ghi nhận sự kiện hoàn thành |
| 25 | Database | Trả về `logId` |
| 26 | API | `COMMIT TRANSACTION` |
| 27 | API | Gọi `POST /reports/generate` để tạo báo cáo hoàn thành |
| 28 | API | Truy vấn DB: `SELECT` toàn bộ dữ liệu Goal kèm thống kê |
| 29 | Database | Trả về full goal data với stats |
| 30 | API | Generate report: tổng số ngày, tasks completed, final progress 100% |
| 31 | API | Trả về `200 OK {reportId}` |
| 32 | Dashboard UI | Hiển thị animation 🎉, màn hình thành công: *"Chúc mừng\! Bạn đã hoàn thành mục tiêu\!"* kèm **\[Xem báo cáo\] \[Quay lại\]** |

**Alternative Flow 1: Không có Goal nào đang active**  
	**Trigger: Tại Bước 4: DB trả về danh sách rỗng**

| Bước | Actor | Hành động |
| ----- | ----- | ----- |
| 4a.1 | API | Trả về `200 OK {goals: []}` |
| 4a.2 | Dashboard UI | Hiển thị trạng thái trống: *"Bạn chưa có kế hoạch nào đang chạy"* |
|  |  | ⛔ Use case kết thúc |

**Alternative Flow 2: Tracking hàng ngày nhưng chưa đạt 100%**  
	**Trigger: Tại Bước 12: Sau khi tính lại, progress Goal \< 100%**

| Bước | Actor | Hành động |
| ----- | ----- | ----- |
| 12a.1 | API | Trả về `200 OK {progress: X%}` |
| 12a.2 | Dashboard UI | Cập nhật progress bar với giá trị mới |
| 12a.3 | Dashboard UI | Nút **"Hoàn thành kế hoạch"** vẫn **disabled** |
|  |  | ↩️ Quay lại **Bước 7** vào ngày hôm sau |

**Alternative Flow 3: User hủy confirmation dialog**  
	**Trigger: Tại Bước 19: User nhấn \[Hủy\] trong dialog xác nhận**

| Bước | Actor | Hành động |
| ----- | ----- | ----- |
| 19a.1 | Dashboard UI | Đóng dialog, không gửi request lên API |
| 19a.2 | Dashboard UI | Giữ nguyên trạng thái Dashboard, nút **"Hoàn thành kế hoạch"** vẫn hiển thị |
|  |  | ⛔ Goal vẫn đang active — User có thể tiếp tục tracking hoặc hoàn thành sau |

**Alternative Flow 4: User kết thúc Goal sớm (chưa đạt 100%)**  
	**Trigger: User chủ động muốn dừng Goal khi progress chưa đạt 100%, còn trước ngày endDate**

| Bước | Actor | Hành động |
| ----- | ----- | ----- |
| 4b.1 | User | Nhấn nút **"Kết thúc sớm"** trên Dashboard |
| 4b.2 | Dashboard UI | Hiển thị confirmation dialog có cảnh báo: *"Bạn mới hoàn thành XX% mục tiêu. Nếu kết thúc sớm bạn sẽ không thể tiếp tục thực hiện kế hoạch này. Bạn vẫn có thể: Xem báo cáo, Export PDF"* — **\[Xác nhận kết thúc\] \[Hủy\]** |
| 4b.3 | User | Nhấn **\[Xác nhận kết thúc\]** |
| 4b.4 | Dashboard UI | Gửi `POST /goals/complete` với `{goalId, completeDate: NOW(), closedType: 'early_ended'}` |
| 4b.5 | API | `BEGIN TRANSACTION` |
| 4b.6 | API | `UPDATE goal SET completeDate = NOW(), closedType = 'early_ended', status = false` |
| 4b.7 | Database | Trả về `1 row updated` |
| 4b.8 | API | `INSERT INTO audit_log` ghi nhận sự kiện kết thúc sớm |
| 4b.9 | Database | Trả về `logId` |
| 4b.10 | API | `COMMIT TRANSACTION` |
| 4b.11 | API | Generate report với flag `earlyEnd = true`, ghi nhận progress tại thời điểm dừng |
| 4b.12 | API | Trả về `200 OK {reportId}` |
| 4b.13 | Dashboard UI | Hiển thị: *"Kế hoạch đã được đóng. Bạn đã hoàn thành XX% mục tiêu."* kèm **\[Xem báo cáo\] \[Quay lại\]** |

**Alternative Flow 5: Goal tự động đóng khi đến hạn (Auto-close)**   
	**Trigger: Cron job phát hiện endDate \< NOW() và Goal vẫn status \= active**

| Bước | Actor | Hành động |
| ----- | ----- | ----- |
| 5c.1 | Scheduler | Cron job chạy định kỳ 00:00 hàng ngày: `SELECT * FROM goal WHERE endDate < NOW() AND status = active` |
| 5c.2 | Database | Trả về danh sách Goal đã hết hạn |
| 5c.3 | Scheduler | Với Goal hết hạn, gọi `POST /goals/auto-close {goalId}` |
| 5c.4 | API | `BEGIN TRANSACTION` |
| 5c.5 | API | `UPDATE goal SET status = false, completeDate = endDate, closedType = 'auto_closed'` |
| 5c.6 | Database | Trả về `row updated` |
| 5c.7 | API | `INSERT INTO audit_log` ghi nhận sự kiện auto-close |
| 5c.8 | Database | Trả về `logId` |
| 5c.9 | API | `COMMIT TRANSACTION` |
| 5c.10 | API | Generate report tự động với progress thực tế tại thời điểm hết hạn |
| 5c.11 | Dashboard UI | Gửi notification đến User: *"Kế hoạch '\[Tên goal\]' đã kết thúc vào DD/MM/YYYY. Bạn đã hoàn thành XX%. Xem báo cáo tại đây."* |
| 5c.12 | User | Truy cập Dashboard |
| 5c.13 | Dashboard UI | `GET /goals/active` trả về rỗng hoặc không còn Goal vừa đóng |
| 5c.14 | Dashboard UI | Hiển thị banner: *"Kế hoạch '\[Tên goal\]' đã kết thúc. Xem báo cáo?"* kèm **\[Xem báo cáo\]** |

**Exception Flow 1: Lỗi load Goals (GET /goals/active thất bại)**  
	**Trigger: Tại bước  2: Request timeout hoặc lỗi server**

| Bước | Actor | Hành động |
| ----- | ----- | ----- |
| E1.1 | API / DB | Trả về lỗi `500` hoặc timeout |
| E1.2 | Dashboard UI | Hiển thị: *"Không thể tải dữ liệu, vui lòng thử lại"* kèm nút **Tải lại** |
| E1.3 | User | Nhấn **Tải lại** |
|  |  | ← Quay lại **Bước 2** |

**Exception Flow 2: Lỗi Transaction khi lưu Tracking**  
	**Trigger: Tại bước 10: DB thất bại**

| Bước | Actor | Hành động |
| ----- | ----- | ----- |
| E2.1 | Database | Trả về lỗi khi thực thi `INSERT` |
| E2.2 | API | `ROLLBACK TRANSACTION` |
| E2.3 | API | Trả về `500 Internal Server Error` |
| E2.4 | Dashboard UI | Hiển thị: *"Lưu tracking thất bại, vui lòng thử lại"* |
| E2.5 | Dashboard UI | Giữ nguyên giá trị User vừa nhập |
|  |  | ← Quay lại **Bước 8** |

**Exception Flow 3: Lỗi Transaction khi Complete Goal**  
	**Trigger: Tại bước 22 hoặc 24: DB thất bại**

| Bước | Actor | Hành động |
| ----- | ----- | ----- |
| E3.1 | Database | Trả về lỗi khi thực thi câu lệnh |
| E3.2 | API | `ROLLBACK TRANSACTION` — `completeDate` và `closedType` không được ghi |
| E3.3 | API | Trả về `500 Internal Server Error` |
| E3.4 | Dashboard UI | Hiển thị: *"Không thể hoàn thành kế hoạch, vui lòng thử lại"* |
| E3.5 | Dashboard UI | Giữ nguyên nút **"Hoàn thành kế hoạch"** để User thử lại |
|  |  | ⛔ Goal vẫn ở trạng thái active, không có dữ liệu bị ghi một phần |

**Exception Flow 4: Lỗi Generate Report**  
	**Trigger: Tại bước 27: POST thất bại sau khi Goal đã được COMMIT**

| Bước | Actor | Hành động |
| ----- | ----- | ----- |
| E4.1 | API | Report generation thất bại |
| E4.2 | API | Ghi log lỗi kèm `goalId` để retry sau |
| E4.3 | API | **Vẫn trả về `200 OK`** — đây là tác vụ phụ, không rollback Goal đã complete |
| E4.4 | Dashboard UI | Hiển thị màn hình thành công bình thường |
| E4.5 | Dashboard UI | Ẩn hoặc disable nút **\[Xem báo cáo\]**, hiển thị: *"Báo cáo đang được xử lý, vui lòng thử lại sau"* |
|  |  | ⚠️ Goal đã hoàn thành — báo cáo được generate lại qua retry job |

**Exception Flow 5: Lỗi Auto-close**  
	**Trigger: Alternative Flow 5, bước 5c.5 hoặc 5c.7: DB thất bại trong quá trình auto-close**

| Bước | Actor | Hành động |
| ----- | ----- | ----- |
| E5.1 | Database | Trả về lỗi khi thực thi `UPDATE` hoặc `INSERT audit_log` |
| E5.2 | API | `ROLLBACK TRANSACTION` — Goal vẫn giữ `status = active` |
| E5.3 | Scheduler | Ghi log lỗi kèm `goalId` |
| E5.4 | Scheduler | Đưa `goalId` vào hàng chờ retry ở lần chạy Cron tiếp theo |
| E5.5 |  | ⚠️ Goal chưa được đóng — sẽ được xử lý lại tự động, không cần User can thiệp |

### **Phần: Báo cáo** {#phần:-báo-cáo}

#### **UC-16: Tạo báo cáo** {#uc-16:-tạo-báo-cáo}

| 📄 Description |  |
| :---- | :---- |
| 👤 Actor | Primary Actor: User Supporting Systems: Dashboard UI, API, Database |
| ↖️ Preconditions | User đã đăng nhập và có JWT hợp lệ Goal đã kết thúc và có dữ liệu báo cáo được lưu trong DB User đang ở màn hình chi tiết Goal (lịch sử hoặc sau khi hoàn thành) Hệ thống API và Database hoạt động bình thường |
| 🚨 Triggers | User nhấn "Xem báo cáo" từ màn hình lịch sử Goal, màn hình Dashboard, hoặc từ notification |
| 📍Postconditions | Xem báo cáo thành công (Basic Flow): Báo cáo được hiển thị đầy đủ: tổng quan, biểu đồ, thống kê từng task Không có thay đổi nào trong DB User có thể Export PDF hoặc quay lại Export PDF thành công (Alternative Flow 3): File PDF được tải về máy User Không có thay đổi nào trong DB Thất bại (Exception Flow): Không có thay đổi nào trong DB User được thông báo lỗi và có thể thử lại Dữ liệu Goal gốc không bị ảnh hưởng |

**Basic Flow**

| Bước | Actor | Hành động |
| ----- | ----- | ----- |
| 1 | User | Nhấn **"Xem báo cáo"** |
| 2 | Dashboard UI | Hiển thị loading, gửi `GET /reports?goalId=:id` lên API |
| 3 | API | Truy vấn DB: `SELECT * FROM report WHERE goalId = ?` |
| 4 | Database | Trả về report data: tổng ngày, tasks completed, final progress, tracking history... |
| 5 | API | Trả về `200 OK {report}` |
| 6 | Dashboard UI | Ẩn loading, hiển thị Dashboard báo cáo gồm: tổng quan tiến độ, biểu đồ theo ngày, thống kê từng task, so sánh kế hoạch vs thực tế |
| 7 | Dashboard UI | Hiển thị các action: **\[Export PDF\] \[Quay lại\]** |

**Alternative Flow 1: User Export PDF từ màn hình báo cáo**  
	**Trigger: Tại Bước 7: User nhấn \[Export PDF\]**

| Bước | Actor | Hành động |
| ----- | ----- | ----- |
| 7a.1 | User | Nhấn **\[Export PDF\]** |
| 7a.2 | Dashboard UI | Gửi `GET /reports/export?goalId=:id&format=pdf` |
| 7a.3 | API | Generate PDF từ dữ liệu report hiện tại |
| 7a.4 | API | Trả về PDF file (binary) |
| 7a.5 | Dashboard UI | Trigger download: *"title\_report.pdf"* về máy User |
| 7a.6 | Dashboard UI | Hiển thị: *"Xuất PDF thành công"* |
|  |  | ⛔ Use case kết thúc |

**Alternative Flow 2: User quay lại từ màn hình báo cáo**  
	**Trigger: Tại Bước 7: User nhấn \[Quay lại\]**

| Bước | Actor | Hành động |
| ----- | ----- | ----- |
| 7b.1 | User | Nhấn **\[Quay lại\]** |
| 7b.2 | Dashboard UI | Quay lại màn hình trước (lịch sử Goal hoặc Dashboard chính) |
|  |  | ⛔ Use case kết thúc  |

**Exception Flow 1: Lỗi load báo cáo (GET /reports thất bại)**  
	**Trigger: Tại bước 2: Request timeout hoặc lỗi server**

| Bước | Actor | Hành động |
| ----- | ----- | ----- |
| E1.1 | API / DB | Trả về lỗi `500` hoặc timeout |
| E1.2 | Dashboard UI | Ẩn loading, hiển thị: *"Không thể tải báo cáo, vui lòng thử lại"* kèm nút **Thử lại** |
| E1.3 | User | Nhấn **Thử lại** |
|  |  | ← Quay lại **Bước 2** |

**Exception Flow 2: Lỗi Export PDF**  
	**Trigger: Tại bước 7a.3: API không thể generate PDF**

| Bước | Actor | Hành động |
| ----- | ----- | ----- |
| E4.1 | API | Generate PDF thất bại (lỗi template / thiếu dữ liệu / timeout) |
| E4.2 | API | Trả về `500 Internal Server Error` |
| E4.3 | Dashboard UI | Hiển thị: *"Xuất PDF thất bại, vui lòng thử lại"* |
| E4.4 | Dashboard UI | Nút **\[Export PDF\]** được enable lại |
|  |  | ← Quay lại **Bước 3c.1** |

#### **UC-19: Xem lịch sử Goal** {#uc-19:-xem-lịch-sử-goal}

| 📄 Description |  |
| :---- | :---- |
| 👤 Actor | Primary Actor: User Supporting Systems: Dashboard UI, API, Database |
| ↖️ Preconditions | User đã đăng nhập vào hệ thống. Goal đã kết thúc và bị khóa (status ≠ active). Goal đã được lưu trong hệ thống lịch sử. API và Database hoạt động bình thường. |
| 🚨 Triggers | User nhấn vào mục "Lịch sử goal" trên Dashboard |
| 📍Postconditions | Xem Goal thành công (Basic Flow): Goal được hiển thị ở chế độ Read-only, không có thay đổi nào trong DB User có thể thực hiện các thao tác phụ: Xem báo cáo, Export PDF, Tạo copy Export PDF thành công (Alternative Flow 2): File PDF được tải về máy User Không có thay đổi nào trong DB Xem báo cáo thành công (Alternative Flow 3): Báo cáo được hiển thị với đầy đủ thống kê Không có thay đổi nào trong DB Tạo bản sao thành công (Alternative Flow 4): Goal mới được tạo trong DB với status \= DRAFT Toàn bộ types, tasks, tracking setup được sao chép sang Goal mới Dữ liệu tracking thực tế của Goal gốc không bị sao chép Goal gốc không bị thay đổi, vẫn trong lịch sử User được redirect đến màn hình chỉnh sửa Goal nháp mới (nếu chọn) Thất bại (Exception Flow): Không có dữ liệu nào bị thay đổi trong DB Goal gốc trong lịch sử không bị ảnh hưởng User có thể thử lại từng thao tác |

#### 

#### 

**Basic Flow**

| Bước | Actor | Hành động |
| ----- | ----- | ----- |
| 1 | User | Nhấn vào **"Lịch sử goal"** trên Dashboard |
| 2 | Dashboard UI | Gửi `GET /goals/history` để lấy danh sách Goals đã kết thúc |
| 3 | API | Truy vấn DB: `SELECT * FROM goal WHERE userId = ? AND status = false` |
| 4 | Database | Trả về danh sách Goals |
| 5 | API | Trả về `200 OK {goals[]}` |
| 6 | Dashboard UI | Hiển thị danh sách Goals đã kết thúc |
| 7 | User | Nhấn vào một Goal cụ thể |
| 8 | Dashboard UI | Gửi `GET /goals/:id` lên API |
| 9 | API | Truy vấn DB: `SELECT * FROM goal WHERE goalId = ?` |
| 10 | Database | Trả về dữ liệu Goal |
| 11 | API | Trả về `200 OK {goal, readOnly: true}` |
| 12 | Dashboard UI | Hiển thị Goal ở **Read-only mode** — toàn bộ trường bị disable, không thể chỉnh sửa |
| 13 | Dashboard UI | Hiển thị các action: **\[Xem báo cáo\] \[Export PDF\] \[Tạo copy\]** |

**Alternative Flow 1: Không có Goal nào trong lịch sử**  
	**Trigger: Tại Bước 4: DB trả về danh sách rỗng**

| Bước | Actor | Hành động |
| ----- | ----- | ----- |
| 4a.1 | API | Trả về `200 OK {goals: []}` |
| 4a.2 | Dashboard UI | Hiển thị trạng thái trống: *"Bạn chưa có kế hoạch nào đã kết thúc"* |
|  |  | ⛔ Use case kết thúc |

**Alternative Flow 2: Export PDF**  
	**Trigger: Tại Bước 13: User nhấn \[Export PDF\]**

| Bước | Actor | Hành động |
| ----- | ----- | ----- |
| 2a.1 | User | Nhấn **\[Export PDF\]** |
| 2a.2 | Dashboard UI | Hiển thị loading: *"Đang tạo file PDF..."* |
| 2a.3 | Dashboard UI | Gửi `GET /reports/export?goalId=:id&format=pdf` lên API |
| 2a.4 | API | Generate PDF từ dữ liệu Goal và Report |
| 2a.5 | API | Trả về PDF file (binary) |
| 2a.6 | Dashboard UI | Trigger download: *"title\_report.pdf"* về máy User |
| 2a.7 | Dashboard UI | Ẩn loading, hiển thị: *"Xuất PDF thành công"* |
|  |  | ⛔ Use case kết thúc |

**Alternative Flow 3: Xem báo cáo**  
	**Trigger: Tại Bước 13: User nhấn \[Xem báo cáo\]**

| Bước | Actor | Hành động |
| ----- | ----- | ----- |
| 3a.1 | User | Nhấn **\[Xem báo cáo\]** |
| 3a.2 | Dashboard UI | Gửi `GET /reports?goalId=:id` lên API |
| 3a.3 | API | Generate report từ dữ liệu Goal đã lưu |
| 3a.4 | API | Trả về `200 OK {report}` |
| 3a.5 | Dashboard UI | Hiển thị **Dashboard báo cáo**: biểu đồ tiến độ, thống kê từng task, tổng số ngày, final progress... |
| 3a.6 | User | Xem báo cáo, có thể Export PDF từ màn hình này |
|  |  | ⛔ Use case kết thúc |

**Alternative Flow 4: Tạo bản sao (Copy to Draft)**  
	**Trigger: Tại Bước 13: User nhấn \[Tạo bản sao\]**

| Bước | Actor | Hành động |
| ----- | ----- | ----- |
| 4a.1 | User | Nhấn **\[Tạo copy\]** |
| 4a.2 | Dashboard UI | Hiển thị confirmation: *"Tạo bản sao kế hoạch này về trạng thái nháp?"* — **\[Xác nhận\] \[Hủy\]** |
| 4a.3 | User | Nhấn **\[Xác nhận\]** |
| 4a.4 | Dashboard UI | Gửi `POST /goals/copy` với `{sourceGoalId}` lên API |
| 4a.5 | API | `BEGIN TRANSACTION` |
| 4a.6 | API | `INSERT INTO goal (status = DRAFT)` — tạo Goal mới từ dữ liệu Goal gốc |
| 4a.7 | Database | Trả về `goalId` mới |
| 4a.8 | API | `COPY` toàn bộ types, tasks, tracking setup sang Goal mới |
| 4a.9 | Database | Trả về các `id` tương ứng |
| 4a.10 | API | `COMMIT TRANSACTION` |
| 4a.11 | API | Trả về `201 Created {newGoalId}` |
| 4a.12 | Dashboard UI | Hiển thị thông báo: *"Đã tạo bản sao ở trạng thái Nháp"* kèm **\[Chỉnh sửa bản sao\] \[Quay lại\]** |
| 4a.13a | User | Nhấn **\[Chỉnh sửa bản sao\]** → Redirect đến màn hình chỉnh sửa Goal nháp mới |
| 4a.13b | User | Nhấn **\[Quay lại\]** → Ở lại trang lịch sử |

**Exception Flow 1: Lỗi load danh sách lịch sử**  
	**Trigger: Tại bước 2: Request GET /goals/history thất bại hoặc timeout**

| Bước | Actor | Hành động |
| ----- | ----- | ----- |
| E1.1 | API / DB | Trả về lỗi `500` hoặc timeout |
| E1.2 | Dashboard UI | Hiển thị: *"Không thể tải lịch sử, vui lòng thử lại"* kèm nút **Tải lại** |
| E1.3 | User | Nhấn **Tải lại** |
|  |  | ← Quay lại **Bước 2** |

**Exception Flow 2: Lỗi load chi tiết Goal**  
	**Trigger: Tại bước 8: Request GET /goals/:id thất bại hoặc timeout**

| Bước | Actor | Hành động |
| ----- | ----- | ----- |
| E2.1 | API / DB | Trả về lỗi `500` hoặc `404 Not Found` |
| E2.2 | Dashboard UI | Hiển thị: *"Không thể tải thông tin kế hoạch, vui lòng thử lại"* |
| E2.3 | User | Có thể thử lại hoặc quay về danh sách lịch sử |
|  |  | ← Quay lại **Bước 6** |

**Exception Flow 3: Lỗi Export PDF**  
	**Trigger: Tại bước 2a.4: không thể generate PDF**

| Bước | Actor | Hành động |
| ----- | ----- | ----- |
| E3.1 | API | Generate PDF thất bại (thiếu dữ liệu / lỗi template / timeout) |
| E3.2 | API | Trả về `500 Internal Server Error` |
| E3.3 | Dashboard UI | Ẩn loading, hiển thị: *"Xuất PDF thất bại, vui lòng thử lại"* |
| E3.4 | Dashboard UI | Giữ nguyên trang, nút **\[Export PDF\]** được enable lại |
|  |  | ← Quay lại **Bước 2a.1** |

**Exception Flow 4: Lỗi Generate Report**  
	**Trigger: Tại bước  3a.3: không thể generate report**

| Bước | Actor | Hành động |
| ----- | ----- | ----- |
| E4.1 | API | Generate report thất bại |
| E4.2 | API | Trả về `500 Internal Server Error` |
| E4.3 | Dashboard UI | Hiển thị: *"Không thể tải báo cáo, vui lòng thử lại"* |
| E4.4 | Dashboard UI | Giữ nguyên trang, nút **\[Xem báo cáo\]** được enable lại |
|  |  | ← Quay lại **Bước 3a.1** |

**Exception Flow 5: Lỗi khi Tạo bản sao**  
	**Trigger: Tại bước 4a.6 hoặc 4a.8: DB thất bại trong quá trình INSERT hoặc COPY**

| Bước | Actor | Hành động |
| ----- | ----- | ----- |
| E5.1 | Database | Trả về lỗi khi thực thi `INSERT` hoặc `COPY` |
| E5.2 | API | `ROLLBACK TRANSACTION` — không có dữ liệu nào bị ghi |
| E5.3 | API | Trả về `500 Internal Server Error` |
| E5.4 | Dashboard UI | Hiển thị: *"Tạo bản sao thất bại, vui lòng thử lại"* |
| E5.5 | Dashboard UI | Giữ nguyên trang lịch sử, nút **\[Tạo copy\]** được enable lại |
|  |  | ⛔ Goal gốc không bị ảnh hưởng |

# **8\. Business Rule** {#8.-business-rule}

| BR-ID | Rule Name | Feature | Description |
| ----- | ----- | ----- | ----- |
| BR-01 | Email format | Authentication & User | Email phải chứa @  |
| BR-02 | Password strength | Authentication & User | Mật khẩu người dùng phải chứa tối thiểu 8 ký tự |
| BR-03 | Tên người dùng | Authentication & User | Tên người dùng phải đặt từ 2-200 ký tự |
| BR-04 | Ngày tháng năm sinh | Authentication & User | Ngày tháng năm sinh phải trong quá khứ |
| BR-05 | Email | Authentication & User | Email người dùng phải được xác thực mới được phép tiếp tục sử dụng phần mềm |
| BR-06 | Email Verification Expiry | Authentication & User | Link xác thực email chỉ có hiệu lực trong vòng 24 giờ kể từ lúc gửi |
| BR-07 | Ảnh đại diện | Authentication & User | Ảnh đại diện kích cỡ phải tối thiểu 180x180px |
| BR-08 | Unique Email | Authentication & User | Mỗi địa chỉ email chỉ được đăng ký một tài khoản duy nhất trong hệ thống |
| BR-09 | Email Verification One-time | Authentication & User | Link xác thực email chỉ được sử dụng một lần duy nhất |
| BR-10 | Google OAuth Email Verified | Authentication & User | Tài khoản đăng ký qua Google tự động có `emailVerified = true` |
| BR-11 | Unified OAuth Flow | Authentication & User | Nếu email Google đã tồn tại trong hệ thống, tự động chuyển sang luồng đăng nhập thay vì báo lỗi trùng |
| BR-12 | One Active Goal | Goal & Task | Mỗi User chỉ được có tối đa một Goal ở trạng thái `active` tại một thời điểm |
| BR-13 | Goal Draft Isolation | Goal & Task | Goal mới tạo ở trạng thái `draft` — không ảnh hưởng đến Goal đang `active` |
| BR-14 | Goal Duration | Goal & Task | Thời lượng Goal phải từ **7 đến 365 ngày** |
| BR-15 | Goal Start Date | Goal & Task | Ngày bắt đầu Goal phải sau ngày hiện tại ít nhất **7 ngày** |
| BR-16 | No Overlapping Goals | Goal & Task | Khoảng thời gian của Goal mới không được trùng với bất kỳ Goal `active` nào của cùng User |
| BR-17 | Goal Publish Lock | Goal & Task | Sau khi xuất bản, Goal không thể chỉnh sửa ngày tháng và type |
| BR-18 | Goal Closed Types | Goal & Task | Goal kết thúc phải được phân loại rõ ràng: `completed` / `early_ended` / `auto_closed` |
| BR-19 | Auto-close Priority | Goal & Task | Nếu Goal đạt 100% đúng ngày `endDate`, ưu tiên ghi nhận `completed` thay vì `auto_closed` |
| BR-20 | No Edit After Close | Goal & Task | Goal đã kết thúc chỉ được xem ở chế độ Read-only, không thể chỉnh sửa |
| BR-21 | Minimum One Task | Goal & Task | Một Goal phải có ít nhất **1 task** trước khi được xuất bản |
| BR-22 | Task Required Fields | Goal & Task | Mỗi task phải có đầy đủ: title, typeId trước khi Goal được xuất bản |
| BR-23 | Task Default Inactive | Goal & Task | Task mới tạo luôn ở trạng thái `status = 0 (inactive)` cho đến khi Goal được activate |
| BR-24 | Tracking Warning | Goal & Task | Task chưa setup tracking không được phép xuất bản |
| BR-25 | Tracking Value Non-zero | Daily Tracking | Giá trị `value` trong tracking không được bằng 0 để tránh lỗi chia cho 0 |
| BR-26 | No Future Tracking | Daily Tracking | Không cho phép nhập tracking cho ngày trong tương lai |
| BR-27 | No Tracking After Close | Daily Tracking | Không cho phép cập nhật tracking sau khi Goal đã kết thúc |
| BR-28 | Weight Normalization | Goal & Task | Nếu tổng weight của các type ≠ 100%, hệ thống phải tự động normalize |
| BR-29 | Drafts Per User | Goal & Task | Mỗi User chỉ được có **tối đa 8 bản nháp** đang tồn tại tại một thời điểm |
| BR-30 | Draft Save Scope | Goal & Task | Bản nháp lưu toàn bộ: Goal info, Tasks, Tracking setup, Types |
| BR-31 | Unsaved Changes Warning | Goal & Task | Hệ thống phải cảnh báo User khi đóng tab / F5 nếu có thay đổi chưa được lưu nháp |
| BR-32 | Report Generate Once | Report & Copy | Report chỉ được generate một lần khi Goal kết thúc, các lần xem sau load từ DB |
| BR-33 | Copy Structure Only | Report & Copy | Bản sao chỉ copy cấu trúc (types, tasks, tracking setup) — không copy dữ liệu tracking |
| BR-34 | Copy Default Draft | Report & Copy | Bản sao luôn được tạo ở trạng thái `DRAFT`, User phải tự cập nhật ngày tháng trước khi xuất bản |
| BR-35 | Audit Log Required | Other | Các sự kiện: activate, complete, early\_end, auto\_close phải được ghi vào audit\_log với timestamp |

# **9\. Non-Functional Requirements** {#9.-non-functional-requirements}

| ID | Requirement Name | Priority | Description |
| ----- | ----- | ----- | ----- |
| NFR-001 | API Response Time | Must Have | Các API thông thường phải phản hồi trong vòng **\< 500ms** trong điều kiện tải bình thường |
| NFR-002 | Dashboard Load Time | Must Have | Màn hình Dashboard phải load đầy đủ dữ liệu trong vòng **\< 2 giây** |
| NFR-003 | Report Generation Time | Should Have | Báo cáo phải được generate trong vòng **\< 5 giây** sau khi Goal kết thúc |
| NFR-004 | PDF Export Time | Should Have | File PDF phải được tạo và sẵn sàng tải xuống trong vòng **\< 10 giây** |
| NFR-005 | Concurrent Users | Should Have | Hệ thống phải xử lý được tối thiểu **100 người dùng** truy cập đồng thời mà không giảm hiệu suất đáng kể |
| NFR-006 | Password Hashing | Must Have | Mật khẩu phải được hash bằng **bcrypt** với salt rounds ≥ 10 trước khi lưu vào DB |
| NFR-007 | JWT Expiry | Must Have | JWT token phải có thời hạn tối đa **24 giờ**, sau đó User phải đăng nhập lại |
| NFR-008 | HTTPS Only | Must Have | Toàn bộ giao tiếp client ↔ server phải được mã hóa qua **HTTPS/TLS** |
| NFR-009 | OAuth Security | Must Have | Authorization code của Google OAuth chỉ được sử dụng **một lần** và có thời hạn tối đa 10 phút |
| NFR-010 | Sensitive Data Masking | Should Have | Các trường nhạy cảm (password, token) không được ghi vào log hệ thống |
| NFR-011 | Audit Trail | Should Have | Các sự kiện quan trọng (activate, complete, early\_end, auto\_close) phải được ghi vào audit\_log |
| NFR-012 | System Uptime | Must Have | Hệ thống phải đảm bảo uptime **≥ 99%** trong một tháng |
| NFR-013 | Transaction Integrity | Must Have | Mọi thao tác ghi có nhiều bước phải được bọc trong **TRANSACTION** — đảm bảo rollback toàn bộ khi có lỗi |
| NFR-014 | Cron Job Reliability | Must Have | Cron job auto-close phải có cơ chế **retry tự động** khi thất bại, đảm bảo không bỏ sót Goal hết hạn |
| NFR-015 | Async Task Retry | Should Have | Các tác vụ bất đồng bộ (generate report, send email) phải có cơ chế **retry queue** khi thất bại |
| NFR-016 | Graceful Degradation | Should Have | Khi Email Service hoặc Report Service gặp sự cố, các luồng chính (đăng nhập, tracking) vẫn phải hoạt động bình thường |
| NFR-017 | Database Indexing | Must Have | Các trường thường xuyên query (`userId`, `goalId`, `status`, `endDate`) phải được đánh **index** trong DB |
| NFR-018 | Pagination | Should Have | Các API trả về danh sách (lịch sử goal, tracking records) phải hỗ trợ **pagination** để tránh trả về quá nhiều dữ liệu một lúc |
| NFR-019 | Code Separation | Should Have | Logic nghiệp vụ phải được tách thành các service riêng biệt |
| NFR-020 | Environment Config | Must Have | Các thông tin nhạy cảm (DB credentials, JWT secret, OAuth keys) phải được lưu trong **environment variables**, không hardcode trong code |
| NFR-021 | Loading Indicators | Must Have | Mọi thao tác gọi API phải hiển thị **loading indicator** trong thời gian chờ |
| NFR-022 | Confirmation Dialogs | Must Have | Các thao tác không thể hoàn tác (xuất bản, kết thúc sớm, xóa) phải có **confirmation dialog** trước khi thực hiện |
| NFR-023 | Responsive Design | Should Have | Giao diện phải hiển thị đúng trên các kích thước màn hình phổ biến: desktop, tablet, mobile |

[image1]: <data:image/png;base64,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>

[image2]: <data:image/png;base64,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3XST2HLLLcXs2bPNpoKBQstfikJo4YZQyBdRMVDIQgsge/r2228vatasKV555RWzOTAsX75c7LzzzqJ79+7i+eefN5sJCSVfffWVvE+89957ZlNBQKHlLwUvtDj7qTAodKGls2LFClk0F+cuPjeyXf/zzz/mYnlh9OjR4rTTTpPH0q9fP/H666+bixBSMDzzzDPi4IMPLriatxRa/lKwKmTixIkUWQVEMQktk19++UXMmTNHpiTBOY1YQ3iUUNvNjYDeZcuWyYLqffr0ETvttJPcR/PmzcXUqVPNRQkpChA3ievg8MMPN5tCCYWWvxSsEsFFcuedd5pmElKKWWjpLFmyRObkOv/880WTJk3ked6oUSPRpUsX0bNnT1nz7e677xYPPvigHC5/55135HBIRUWFmDRpkizAe91118nZgWeffbZo2rSp3AayaHfr1k1MnjxZvPHGG+ZuCSk6Vq5cKa+zs846y2wKHRRa/lKQQouerMKDQis7fv31V7F+/XrTTAjJgP32209svfXWpjk0UGj5S0EpkgULFog6deqYZlIAUGgRQvzmmmuuEcccc4yYP3++2RRoKLT8paCEFmJX+vbta5pJAUChRQgJAj169JCjJp988onZFFgotPylYITW7rvvbppIAUGhRQgJEo899pho2LChjIkMOhRa/hJ4odW1a1fTFMeaNWtEq1atTDMpMCi0CCFB5KeffpIeroULF5pNgYFCy18CL7QQczVq1CjTHKVt27a8CRcB/I0JIUHlww8/lGKrV69eZlMgoNDyl0ALrQsvvFAW/5w+fbq49tprzWZx4okniu+++840kwKEQosQEgb23HNPMX78eNPsKxRa/hJooYUnhC+//FK+RwFQ1KNSIAfQp59+Gv2fFDYUWoSQsAAHwIABA8Qpp5xiNvkChZa/eCa0kFRxjz32EFtssYVo3LixGDduXMYFc1GGRAdTapFo8bzzzpPbJMUDhRYhJGycfvrpcmRGOQz8gkLLX1wXWqiEDk/UDz/8YDaJMWPGSE+UEz766CPx/vvvm2aZ5Zo33eKDvzkhJKw88MADshi7X1Bo+YurQuvFF1+U9ddSgaBBJwU7jzzySNMUBUV3W7RokbGHjIQXCi1CSNiBdwuOCJTSyicUWv7iqtBq166dabJl0003FV9//bVpjiNdGR2sf8QRR5hmUqBQaBFCCoG3335b3t/yOZGLQstfUquZDDn++ONNky0YXjz44INNcxwXXHCBaUoAddxatmwpqqqqzCZSYFBokbDy+++/iyeffFLGqV5//fWyb0MB76OPPlrss88+ckipWbNm4qijjhIdOnSQhYyHDBkiPf9Tp04VP/74o7lJUgBgZiJijR955BGzyXUotPzFVaH10EMPmSZbPv/885Qeq1mzZomNGzeaZlsg2jCMmG9XLMkvFFok6EyaNEnstttusm9DAeKzzjpLXHfddbIGay68++67YsaMGXIS0A477CC3j7+jR4+WMask3CAUBr+p0/jlbKDQ8pfkaicL3BJaPXv2NE0JwO2KocP9999f3HzzzWYzKTAotEgQWblypfRIYIZ1kyZNxL333iteffVVczFXWbdunZg2bZooKSmR/ShmtvFBM9xAjJ9wwgniiiuuMJtcgULLX5KrnSxwa+gwmQirqKgQtWvXlq71559/3mwmBQyFFgkKl19+udhuu+3EmWeeKZYtW2Y2+8KqVavE5MmTxS677CJKS0vFc889Zy5CQgLqJ0JEuwmFlr/YK5oscSsY/q677pJ/ly9fLm688UYpvPCkuHbtWmNJUixQaBE/6dOnj6hVq5ZnHge3Qf+K+FUkzHz88cfNZhICzjnnHNGjRw/TnBUUWv7iqtByI70DYg4+++wzcc8990iBhaHByspKczFSZFBoEb+Apx5B6hiuCxuovYek0RMnTjSbSAg45phjxDXXXCM2bNhgNmUEhZa/uCq0QK4JS1u3bi2zvxOiQ6FF8glmCqIf69Kli9kUShDTis/TsWNHs4mEgFGjRkmnQ7ZQaPmL60JLoUrwbL755lmX4CFEQaFF8kX//v3F4MGDTbOktFqsQLCol05ZCyuupqKHu91qjR4VpklSIo8h81ieBg0aiNWrV5tmEgIwkxXnHSZhZAKFlr+42yPYMHz4cNNESMZQaJF8gKGapk2bmuYoEFoxKuJFUGWZJcBalMVsLmAvtKqkvWpUicg0iyBEFh5+OaEonLzwwgvyPPvrr7/MpqRQaPkLhRYJBRRaxGsw2ysd8ULL8l4pIWR6urBsaXmF/L9kVEwOqWXKTM9XtVArqVES8VRh3cjyPcpEWYt4D5rcr9oOQlgj61q2EsuWBkw6Qg0+Ek4Q64wJGs8884zZlACFlr9QaJFQQKFFvOKPP/6QSY/TojxWmpiCRynBg1W9HIQOhJYSWJboihdqEE9xSLEUsUWEE8D2lUyz827J/evrVi+dsO0kQGwtXLjQNJMQgQlkOB8vuugisykKhZa/OLsaDZChWO9w3HohBwwhdlBoEa/AFHqngcamRyteaFneK7yU0FJeKfVeiSe5dBKPlvleF1dx71XfGRVaKbadApQBYvxsuJk9e7Y49NBD5WQ0Oyi0/MX51Zgl9GgRN6DQIl4xdOhQ05QUU2hB3EBUxcVKlZcmFVrpPVpOhFZV/FBkDh4tgETQEGwk/Pzzzz9is802S8hpSaHlL55fXRRaxA0otIgXOPVkKVLNOrRsEF4VUgjZCa3YcsljtMz3iUJLO44WGM4sNWK0SkXiAGNqUDbom2++Mc0kxCCVx6WXXiq+//57Ci2fodAioYBCi3iBKZbySSbDe6mpShg6zAYGxhcerVq1EnXq1KHQ8hm3rvSkUGgRN6DQIl7QqVMn0+QtWkC9k5mBjnFBaGXq3SPhoXv37uKoo44SL730ktlE8gCFFgkFFFrEbRBAjAL1OREXGxVuENuz9dZbi8MOO0yMHz9erFu3zlyEhBTl0XrttdekyOdvm1887yEotIgbUGgRN3n22WflDadnz55mUxZUuOud8gnM+n7yySfFDTfcIPbee2/5/ey2227iuuuuEx999JG5OAkR+tDhjBkzRP369cWdd94ZW4B4CoUWCQUUWsQtnn766WiJHcSvOMU2pgoeLZneoSLjAHSTZEH2mRJNoGrm90rDgAEDTFOUL774QsyZM0eUlpZGj/GEE04Qjz76qFiyZIm5OAkYdjFa69evl78jJkIQb8ntinYAhRZxAwot4gZPPPGE9NAoTj31VK01NbZCyyXkzEENfZZitmQitFCLNltQsHr06NHi4IMPFjVr1hSNGjWSs90efPBB5ucKCHZCSzFv3jzZvyar70lyx7ueIwKFFnEDCi2SK7NmzUrwFs2fP1+8/vrrcbZkQGipUjjKa5SsFI5ZRie6HNIxJGR3j8+LpaPvE8uo7UaHKstjHia1jUw9Wv/++6/43//+Z5qzZvr06eKUU04Ru+66qzyuM888U9x4442isrIAxldDSiqhpcBw8T333GOaiQtQaJFQQKFFcgFxKcn6IoiBO+64wzQnEOfRKk/MVZWQODQ6E7BC805ZxaDjqLRK9ljEsstjOexTSTA92WmCiLLJu5WwTBKwr/vvv980uw6EFgQXhBf2CSF27bXXSmFGvMWJ0AI//PCDuOyyy0SHDh3MJpIDFFokFFBokWx57LHHkpYmUfTr108sXrzYNMcRJ7Qi4sgSRbGahLZJR+OEVEwIxUj0aKli1fo+E4RWRNTJdbMUWoizCgLITo8UBPvtt5/8TnFcV111VdrfhDjDqdDSwezTTTfdVPz9999mE8kQCi0SCii0SDZMnTpV3rid0LhxY9MUR6JHK1kpHDO7exqPloBgi4/RciK04uosyiHEzIQWyrVA2AQNiCuILIgt/HYtW7aUQfgIxifZkY3QAhMnTnR1WLlYcdYD5QCFFnEDCi2iowe0JwMz4m699VbTnBLc2O+9917TLDHjpUB8KRzLe5UotNLFaFlEhww1QZVKaAG1XZT9Ue1OhNbOO+8cymsKQ8D47ZF2Ap8bcUVIR/HZZ5+ZixKNbIWW4uKLL5bf97vvvms2EQdQaJFQEMabQpjYuHGjWLNmjfj4449lZ/riiy/K2JmnnnpKPPfcc+Kdd94RK1askPXw/vrrL3P1vKMEyeTJk80myaRJk8Ttt99umh2B7Nl77LGHac4Bq/ahJFJw2i/gLdpiiy1Mc+j5/PPPZdqOLl26RM8NBOTjHP7www/NxYuOXIWWory8XM4sHTFihNlEUuC50DrvvPNMEyEZQ6HlHosWLRJjxowRV155pWjbtq3Ycsst47wpeOFmvOOOO8rEhrVq1UpoxxT+Aw88UOZemjZtmliwYIH477//zF15Rrt27aS3Svf+KDDcYWfPhEGDBokePXpIcekGaragGt7zA3h+cAwQJYXM77//Lt5++20Z1L3ddtvJz3zQQQfJBJ14gChG3BJaYMKECXI4EdcZcUZuvVEatt12W3lxI6COkFyg0MoM3EyRF6dhw4byRnP88cfLDnLu3Lni559/NhfPmT/++EPm48GTbufOneU+27RpI/r37+96Qss33nhDVFVpsVGaqEJhZDczXmOoCqVpPv30U7MpFOC3Hjt2rBQcxPLcwgt64oknip122kmeO926dZOifdWqVebiBYObQkuB7wvfH7yIJDWeCS08TSCRHUCelkMOOYSzF0jWUGilBsNkRx55pGjSpIn0MH3yySfmIr7x1VdfiSFDhsig5n333VfWW8sFu2E9dPh9+vQRd999t9nkCvDY9e3bVzRo0EB6BIPM6tWro94+JGglzsCw+fXXXy9OO+00+d3ttdde4owzzpBlicKOF0JL54ADDsh6qL4Y8ExomV6sHXbYQYovQrKBQsseJNvEzDEImKuvvtpsDhzojHETgzcB8R6ZAsFjNyyIWFA7u9sg2zn2g6FL9SAZJCAKcHzNmzeXZXNIdsATiEkRCALfZpttRN26deUwO7yDP/74o7l44PFaaIHtt99eTk4gibjeM8FrBe8VvFgm6AxXrlxpmglJC4VWDAwLIm4KT9/6EFrYQCwN4rwgDJzeCJDkMlX26nyILcWbb74pEzviJtyqVSs5cSCfIKs9+lQ81EL4wWvIkjfeg/ivhx56SBxzzDHyfEM8I2KRX3jhBTlZJIg4vb7c4Nxzz5XpOJYvX242FS2u90q46NEBJAOeLUIyhULLCmY+9NBDxcyZM82m0APRgpsWOulUHHvssaYpAWznmWeeMc154ZZbbhG9evWSEwlwHIiNwmfCcO7ChQulSN6wYYO5WhwQoHgg/eCDD+TnuPDCC+XnxvbgXUFgN0Q2igKT4ADnwtKlS6VnGcHi+L3gacYw7uzZs83F80o+hZYCMz4x1E5cFlroHNKlc4AI86sTJOGl2IUWnpZx8y5kMCwIz8x9991nNkUZP368aUoAnp18eraSgVgu3Gzg7cCwCo5Jf+H3RGwLMnDDs4fhVAgpfZl69eqJs846S5aqwfdDwsP3338vYwZbt24tateuLUUHZumi3FE6se02fggtgIkpLVq0kJNKihlXeyOn3qqjjz5aDi+aYNjxqKOOMs2EFK3QwjWB9AsoI1MsvPfee1J4LFu2LM6OGYyZEASxRYgdEM2I/zr88MPleYoZuhdccIFngsir7Trlo48+kp8zaKlFMAHi5ptvljU4MZvZK1zpieDJQiqHTEjm2YKbHDls9txzz7zm5SHBpliF1j777GOaigZMu9czfqcTTgj+RtzMLrvsIi699FKzmZDAgzQpyE81cOBA6QXdfPPN5dAzip5//fXX5uKO8VtoKVCtAbM5x40bZzblFZR3QpiTnsz222+/FbvvvrvtrOZcSd1zOQTeKXipMsVOnGFWD0ARWHjIoDYJKUahhYSixV5aBCkrFAg8twNJRbEchNjll19uNhMSWlCVAYlzMcSM8xv58K644oqMS+EERWgp6tSpk/fJIwrkxMP3WFmZWKIBzh0M786aNctsyomchRa8UqmC31OB6dF2KR/Mad84yeBmhZuPFCfFJrQgHODddQrq3MUKF8fq3ilkZnIUIo6z5kZckeUoVbIeIAoeu7EvzO5C0DcSrerT6m+77TZ540Eag7feektbg5DC54cffpDxX71795bxX6jggD4DSYl/+eUXc/HACS2AiQNnnnmmHDLNJ/BapaNr166mKSfsekrHIH4kG0+WDoLnTc9Wx44d4/5XPP/887JzRS0yUlwUm9BCgHQmxAsti2jx4vLSaHC1VXOvWoiVW2JMH45LVfgYxZFVGRm1H73Islo+uo0aKHQcW9e0ZQKGA5HhHikUkDNs2LBh5iKEkAiY3YoJJUcccYS85rbaait5T4VDBAItiCBtS9OmTU2z62QyZOmm2MpJaOnZ37MFU2Ih1vSs8almVyFgDSdPrgKPhItiE1oYLsgEW6FVLZhEZZkUOgBeJqvWXkX131IhpZFW5Bi26HIJQqtG1EOlloOosvYZ86DFvGZV0fdYV21NrZsJCCHANY+A1UIDBbrhqUNKB0LcBnn2nn32WXm/VA87EF2YXPP++++bi/sGhuwQLoT0NV4CD5pTECPnFlkLLXih0qVyyAQ9k7zp4UrGVVddJTPRpkpgSAqDYhJauMAzLcaeVGhFUN4rJbTihhnxvlqQ6d6mRKEVK4as3utDh3HDiMqDFhVasXXthxtTg6fdsADRhKFM5DzDTDJVaxKzqc855xwZdzdq1CiZdRwxKsjsj9mVWAc3RNwAMSUeuZj69esna/KpGyS8eddcc42MY0VZI0KcYjd0iOB6BNkjNAf1PPFAgxjHSZMmiT///NNcPG+ceuqp8nxHcLrbZNKX4Bgw0c8NMu/1hDueLBO9HiI6EyfgCRf5ZUjhUwxCa+rUqfLiBvhrpjdIRYLQiggn6Z1SgksKoCRCK85WlaXQqooMTVroHi0Fhhozxav6hW6AGFUEJ+P3giiCcPKiaLcJZkudffbZsrYlZmg/8sgjrt0USOFhJ7RSgWFG1A6FhwnnNoYhIfwxLJkvMPyJeKqHH37YbMqaUHm0TjrpJNPkCsgpgorgTiL+UWqiZs2appkUKMUgtNChIbM4QOLOTFIUJAuGt4YLreE6K8YqmdBKN3ToTGip9ZTAy3XoEOJz7dq1ptl3MDEHiShRCql9+/a+JhNF3InKRI+bIyEmmQotHRSoR1xk586d5TmG9AedOnXKS4WKoUOHyn0iPtsNQhmj5SWTJ082TVE22WQT6YYnxUOhCy3lydLBNOPVq1eb5ryge6ayp0pUVcaLtEzxOmYjE1DjDmENmAENz1VQwbAlvFxdunQxm0iRkovQSgUyBODhEPn+0IchoB0jUvDGu5kHE9cbto/8YrkSulmHXgLvlgmGKzGVlRQfhSq0UF4lVUUFuOzzVZxVzSq0vF7ukY3QOu6446THGsNj+O0PPvhgWT8OCRxVzBJe+B92tGM5LA+7m0McGJ7DzQO1B8PG6NGjZZZ9DG+S4sUroZUMxH/BC4Vkq+qaRb1OJGN95513zMUzAvVD4enOllDm0fIKuOR15s2bJwPZ7J78SeFTiEIL9c6aNWuW8ga+bt066UV5+umnzaaCBcIS+bFQIQK5xDDpBkG7U6ZMkaldUIAa8UjIom0H0kG4AWrSYZhk5MiRZlPoQMAzClHrs7tJ8ZBvoWWCGY6DBw8WO++8s7yHl5SUiBEjRthWh0kH+k1sI5frPJSZ4b0AZTQUF110kRg7dmz0fwTNu+mWJMGn0IQWLnDE9jgFM9S86ACCBGoc4kmzrCw2WxJxIZnMgHIrBQQ6crsn3jCDPhPiNdPUIST8+C20UvHEE0+I008/XZbmwXWH+C/EZjnx5MNLhhm6dklanYBYSwg2OHECX+vQC5D5GdOdMT3anOGocmmR4qGQhBa8tdlmQz7//PPlue9X+QovgIcKnylZwGu9evXk07ATsGwuYBgSnXciZrb9irgJA9akA7f7JH3Sgo416SCXTP84VqbFKR6CLLSSAa814r9UOACuTUzEg2cbWQp08HDWsmXLOJtT4DFH+hUvcbtncI2ffvpJTllORarYFlJYFIrQcutmjIcPBDyH8YaJkjrIF7X11lvLmZUoxZEO5JZ6+eWXTXMcqAv3+eefm2bHpP5tTKEVP+sS6+KlcpHJWaARW1zKC9iqBVKZmU8M6TjKkVzWWseiep+jyqLbVsSy75dY+8O6o1T2f+fxcHiQdSpgSbgJo9BKxQsvvCDFFeIPcd4jbgtpp+AR79Wrl6x/6pRQCC09KaL8X2WczgMYZyXFQSEILXhp9SFwN0CHs9tuu8lUA8isHHTGjx8vO0aIrGnTppnNKUFQeipOO+000+SYxx9/PE0B+0Shpeo5xuo6xrLhY9lYSgtL/GA52Gy9X9ViSa2rlpNeM5UOI5LBX8+LJssf4T3WjfS7sXWdkXAcpCApNKGlgxhX9CUnn3yyPJ9Rcgh/IaCcvCCyEKpk2pO9siHnq8xPoQXwhSKxGSlswi60ttxyy4Ri6V6AWWYYmsR1AeExZ84cTzIspwMBqzgWpGHBsey///7iuuuuMxfLCOTTwiwmO5BMEQG22Bc8W5mAcytZfdUYyYWWxMiGry8r32ulkEBChnw9M3/0vX2+M6C8XEpopcrqnw4MtyJXEilcCllo5QrEU2g9WnoGaOvCt0uimFucgQLxLkFMakjcI6xCC4l1EeTpJ4sXL5a5n1RSS7yQEBW5YsaMGSNjHpcsWSJzduF4k000wXA+Sr9gBtHcuXPFhAkTpPDBECZSMWC7KBMDcfXqq6+aq7vC9OnTbb0wOAYFhg8R9A0PmBnfaYJZnc6SGCYKLUs4VcX3dcmEVtz68etIHAotrKeGIuUQYkRo6Vn9M82B9u6779p+p6RwoNBKTqiFltkpySe+6LKqo6nIuFNIBuojkcIljELrm2++EW3btpXVDoICZvChvAaGyfr27StatGgR845orwYNGkiBiOnYiH/AVGi9HV4ztKMm4wMPPCC9SIi9ygcIkDXzZCH9g8ldd90ljxUpIpLhtNxXotBSwfAx0aRnw08UWumHDp0KLeWx0j1a2Q4dKjDJghQuFFrJCafQivNQWZ2T7ATU01ccyWbVZA5mYWE2AilMwia0MJPujDPOMM3EJY4++ujoexRvTgc8b61atZJeOJ0EwZMnEoYOs6YqYegwW/S0GqSwoNBKTiiEFp6w9DgFfdaNQg0TRm0yXsHyaLkltEC3bt1kYj5SeIRJaM2YMYOZuPMARBKSiSK7vlOQsBNevN69e8sM1XktUyM9T3jwjMwWdAuXhBbKqJDChEIrOaEQWiA2pKBNLY52KrEpz9LdHrFZAstdoYVM0YgRIYVHWIQWPCZ+eUmKjYcfflh+16gakSmYsYx1MRWcWKACASlMKLSSExqhFTR4oys8wiC0hgwZkjb3GwkW3bt3N01Fiz6hgBQWFFrJodDKAbui1CS8BF1olZaWsjMLIU4eyhLjqawwiFTTeFKnWKgQFfDkZzrkh1GClNvNjVzTb5Dgwr4pORRaOYDikKlmG5FwEWSh1aFDh4KvQ1ioOBkuSxRaIHXYQypBBJEm181UaAkrpUSm6zjhiy++8LTWG/EXCq3kUGjlCLJQpyvbQcJBUIXWvvvuK/NLkXCC4t7p6kZCaMm0CogvVQJKiSQ5safEKJ0DoZVYOsciFqcqt2FTOkcXaXE1DVVS1Mg2o/kJy7VtRlBlelDqJ5XoA0hou8UWW5hmUkBQaCWHQssFgnqDJpkRtN8RpW/q1q1rmkkIadq0qay5mIw4j1Z5pPJFnNCKtGseKj2VjSl0dI9W1Cumr2sIrZJIvq74momlkf/1XISWly26fRGfdysZEGRIQEsKFwqt5FBouUBVVZW48sorTTMJGUETWrg5DRw40DSTEIJkq4mepxhxQksTWLpHK65NJIolHduhw2Tr1lCxYPFDlRB3iXbrvT68KD1bKYQWsvwjASwpbCi0kkOh5RK33357yo6UBJ8gCS2eS4VJst81vUfLK6FVFffe9GhZJAotpx6tzz77THTq1Mk0kwKEQis5FFousnHjxvwmJySuEgShNWDAAFmKhhQudp5KPUYrKnZyEFqqBE9VEqGl4quwXty6RoyWRaLQku/SxGihDTViSXFAoZUcCi2XqV27tmkiISEIQqt+/fpZJcck4QHDiCi+vWzZMrMplEBwmfVk+/fvL+tAkuKBQis5FFoegADmjz76yDSTgOOn0Pr+++9Z2qnImDhxojjkkENEeXmKHA5BRXrZIh4t5TGrpmvXrkmHR0lhQ6GVnJKSElm+b926dWaTaxTdVffzzz+LZs2amWYScPwSWjvvvLM47bTTTDMpEj744AMpTp544gmzKRQsWLBA5hP06/ohwYBCyx49rclWW22ltbhL0Qkt8Prrr7NSfcjw40bx0ksvifPOO880kyIDxacRm7fTTjvJvFthYfTo0VIkoq4jKW4otBKBB0vv31E7Fde6FxSl0AIIeEU2ZBIO8i20HnroITF06FDTTIqct956S2yzzTaiXr164sUXXzSbfefGG2+U4ooTf4gOhVY8iFG082Dts88+noxgFK3QAnhCTZWokASHfAot3KggtAhJxW+//SYGDx4s2rVrJzbbbDNxww03iH///ddczDNws+jcubM8Xy+++GIxffp0cxFCJBRaMUxPlokXnq2iFlrI7s3g0HCQL6EF4R3WeBziHxUVFaJNmzYy5qNly5Zi0KBBYv78+WL16tXmolnz5ptvimHDhskC5pgB27x5c9G3b1/x5ZdfmosSEgeFVgx4rPCQlIpdd93VNOUEVUY1e+21l2kiAcNrofXPP/+IU089VSxatMhsIiQrcE59/PHHMlaqffv2si5mw4YNo7mw1AszoeER020odv2///1PHH744TJz++OPPy5++eUXcxeEOIJCywKeKnis0oHMBG6mQKHQqmb58uXi2muvNc0kQHgptD7//HNx5JFHyjQOhBBSaFBoWZ4sxGA5BcOLbnm2KLQi4CnyscceM80kIHgptHAx/fXXX6aZEEIKAgotK31DJjk0MbyYiTBLBYWWxtlnny3+/vtv00wCgBdC66mnnhKbbLKJaSaEkIKi2IVWLp4pPddWtlBoGbCWXTBxW2hh/P2OO+4wzYQQUnAUs9BCX5+JJ8sEnq1cUz5QaBk8+uij4tlnnzXNxGfcFlqcbUoIKRaKVWgh+N0NjxSGHXMJjufdxoaOHTuKI444wjQTH3FLaPXs2VMmmyT2/PjjjzJdwOLFi8Xzzz8vXnnlFTkTc9WqVWmnRBNCgkmxCi3EWLnVbyE4Ptt6iBRaScCJOXbsWNNMfMINoXX00UeLTz75xDQXLAjwh1i67777ZKbwRo0aSU/e1ltvLTp16iQuv/xycdttt8nkrNOmTZMlh5YtWyYqKytlTVCABJwbNmwQVVVV4u2335a5oZBqYNy4cWLUqFHiqquuEoceeqjYYYcd5LaRQ+qUU06RT3/Y1vr1642jIoTkm2IUWm54skzsssk7gUIrBRxeCg65Ci0IBeQkKnS++uormaEcYgfnLzqbvffeW1x00UVSILmd8Vjn/fffF2PGjJHlrfbbb79oTij8dpjRizQqhJD8U4xCK1X292xBDq7PPvvMNKeFSiINHTp0ME3EB3IRWuhkunfvbppDD4qj33rrraJWrVqidevWYsCAAdKLFFRWrFghhgwZImrWrCkF2NVXXy1+/fVXczFCiMsUo9AKEhRaaSgvL6dnKwBkK7Tw2+HmXgh8/fXXMn4QnwnCcc2aNeYioQOFmS+77DL5mZABHV4xQoi7UGj5CxWEA0aOHOnpkAtJTzZCC8NYt99+u2kOJTNnzpRiBEOAqKtXaLz11lti//33l58R8V+EEPeg0PIXCi2HHHTQQaaJ5JFMhdYVV1whZsyYYZpDxezZs6XwuPfee4suqLxz587ys0+YMMFsIoRkCIWWv1BoZQA6/lmzZplmkgcyEVo77bSTePPNN01zaMCUZAynYfZfsfP777+LnXfeWc6U3Lhxo9lMCHEAhZa/UGhlwPXXX88cTD7hVGgde+yx4uOPPzbNoWDevHmyuPWwYcPMpqIHni0ILkJI5lBo+QuFVoYgYVnv3r1NM/GYdEJr6dKlYs8993QtOV2+QRoG5KgiqcGUbU5OISQzCkdoVUXTxuBVWh7fmlnfYMW6ltpsx6JCtlWZ5gg1WpSZpqRkclQkwgMPPCATQZL8kUpooWQSgsTDCIqdMv4vc7p165ZTSQxCiolCElolo2LSp6xFTMJUVVr2ivJk0kjHElEgudBKDYVWHmjSpIlYvXq1aSYekUpoZfYUExxQV1N/OlOvskCEZtk87ZWXyuNz0o0B1eFV9Ej2++DptDSyp8zBsSAXFyEkNcUgtNDP6P0n/lc2UxShX5P2HpbgKh1VFuch0/ssvK8aVZKwDfyv+uzoEVXGbNh2dNnoO5IREFkQWyQ/2AmtESNGyBM6jFx33XXiwQcfjP6vdxhBQD3t6ajOpKrciTSKdYjJhVbuIGkrygkRQpJTSEIr/sG01DJXCxzVK0lxVS1ypEDSbPHEe7RUX6UeLE2hhe2XaMIJ6MKrpEaJ1gJi2wfm3kmGhPVGHzZModWnT5/Q5pPCOWPW0TSFVuxpqCL6Pu7CVR1MBPXkZrXFnuDwF12I3hFY76vkPtEmn9aM7ZludSyjjki1wRYVX9r7iCVOaKknxcR1Y8dhPWVax1Gj+hjxZKrvN9m1tmDBAim6CSH2FJLQ0j1a8LKjf9D7CUWCWIrDfugwqdCyQfdYWduytmnZKbRcBYHx2Vb0Js4xhVbjxo3j/g8LmBGJQswmptDSURe0Lob0ixhIoRURV3rHkVRo4Qkt4SkshtkJxR2f1rk5FVrJnyxj62Jf5pOl/jlTfkfVy02ePNk0E0JE4Qst/DVDLlKLJedCK1m/k+DRkqEVMQ9bCYWWuyDHD4aCiHcooXXIIYeINm3aGK3hIZlXxryYdbd4VGhpF7a5vBRamucrrdDSOwUbzE5I7zQUmQgthXpvedGsY9KFltnh6ced2FnGs9dee5kmQogoLKGlDx2a8Vq6za7f0VFxV3b9DlD7sFsX6DFaCqtfwzYsT3102eg7khM33nijTDFAvAFCa/vttzfNoWLOnDnip59+Ms2SeOFUEddZOB46TCG0Yuuio4oNHUpsvFuqTW0LHYgeZCqPrlqsyf1Ent7ihVZMICZ2eLF9q44pmdByMnSoM3jwYNNESNFTOEIrnKTvuYhjDjzwQNNEXKJly5aib9++pjlU9OrVyzRFMT1UEC7yaalarCixpD/N2cUjpBJasdkwJZqoUtuLiSiF3dNe9ElS86yp/ysSPFoxr1yi0JLvoutWRdz+dkILqP2WqXWrP4t5vArkUiOExEOh5S8UWi6CwtMoQE3cBTfZ3XbbzTSHivfee09+joxIISiyIs1wYRCJ9+LFBKIpNBUHHHCAaSKk6KHQ8pcMe36SjkGDBolGjRqZZpIlSpyYwfBhA0WuUcOQeEu/fv1MEyFFD4WWv1BoeUCHDh1ME8kCDBXOnj1bvg+z0LrtttukYEQgP/GWa665xjQRUvRQaPkLhZZHZDxMRKJs2LBB7L333uL999+P2sImtC644AJZgBx/wauvvspzIg8cccQRpomQoodCy1/Y83sI6titWbPGNJMUfPjhh+L44483zYEXWihmfeyxx4r9998/aZxeu3btTFM8ucRQZbiuCnbPBjNwPxP0mCsvoJglJBEKLX9hr+QhRx55pOjYsaNpJklAOZUdd9zRNEuCLLTOO+88seWWW4oBAwaYTXGMHj3aNMWToViKI8N1nQitZNsLstA6/fTTTRMhRQ+Flr942+sR8eyzz4pHHnnENBODadOmiSuvvNI0RwmS0EIurMMPP1x6T9KKJ4PmzZubphiaWIpL6RB5r0rVyHYzq3uadWMpHSqi+alkm5Yfy8SJ0NKPI6FsUKQINYDAQm4wS2jFsjLHBB/SPSRmeVbHIJczao2ZQPASQhKh0PIXCq08cM4558ihJWIPgsXvuece0xyH30Lr3XfflUXEIRyeeeYZs9kxDz30kJg/f75ptjC9UhGhosSS3gbhEUeadVXWZCVWVKLQZGIKJGuLE1qG+FE5r2DHcnHlMoQluNCu7LrQUnmzou+N9BbmvnRatGgRjYcjhMRDoeUvFFp54O+//xZdu3Y1zURYs8ScxNX4JbS+++47cdddd8ljHD9+fNLM7pkAwbZixQrTHO+VkoLEElN2QiuhLESadWPLWCLIElolKYcBMxVa2HY0i3sKoWUdR6z8jhtCq23btmLjxo2mmRAiKLT8JnkvS1zlsccecyQoiomzzz5bzsZzQj6FFmLFEG+FuKvnnnvObM4ZFCGHB+bnn3+Ob4iWwqmK9zw5GTpMs645xKfHaEWH7Byiizx9uDChbJAmqJQtGqOF461ePqXQEjGxl2rokNcVIamh0PIX9lB5Bk/exc4333wjv4dVq1aZTUnxWmhNmTJF5j9DDNWnn35qNnsCJkqgmkB6qgVJkjiqYsL0juH3wsxeQkhqKLT8hUIrz+y1116mqehAhnSkQsgEL4UWEqPWrVvXlxgfeGPGjBljmiPoXp5iJOYl0wPkwdy5c8VBBx0kqqrixRchJBEKLX+h0PIB3FxfeOEF01wU1KlTxzQ5wk2hhYkJxx13nNhvv/1kIL7fLFmyRDRu3Ng0ExsWLFgg06bMnDnTbCKEJIFCy18otHwCN/piYsKECTnF0uQqtD744ANZmLpTp07i8ccfN5sDQbdu3eR39NVXX5lNpBrEzD3//POmmRCSBgotf8n+zkdy4osvvhADBw40zQVL6iGy9GQrtBB4fu+998r9Z5rzyg8gJHCsy5cvN5uKlltvvVXO1IRYJ/6DElnffvtt4mQOElgotPyFQstHysrK5Ay3QmezzTYzTRmTidB67733xFVXXSUFSy45r/wEsx0RLH/SSSeZTUXByy+/LHr27CkOOOAAs4m4DETTa6+9Jq699lrRqlUrGa+IawelsM4//3wxZMgQcffdd8sccHPmzBGLFi2SDwKLFy+W5+msWbPEuHHjxPXXXy8fHk899VSxxRZbyG1gcglsSI1im9KE5AUKLX+h0PKZQw89tGDLhkAo7L777qY5K9IJLcTsdO7cWQ4P6sWoC4EHH3xQHHXUUXKm5kcffWQ2Fwy4kZ922mny5pzJjFSSGbhWWrZsKYUQRBGE0x9//GEu5jqVlZXi3HPPFbvssoto2rSpeOCBB8xFiEdQaPkLhZbP4MZZr1490xx68JR84IEHujYrLJXQuuSSS+QTNDrxQkYld0Xh6rfffttsDi2ff/65nIWKOpd9+vQxm4lLwMsLD+HWW28t7rjjDl/PIYgsiC2Irh49epjNxGUotPyFQisg1K5d2zSFFnTg8C65iS60/v33X+kta9asmbjhhhu0pYoHCNguXbqIHXbYQX4PSIgLwRJ01qxZI66++mrpya1Zs6a45ZZbpEeFeANSl2y11VbisssuM5sCBeLw8BABjyZxHwotf6HQCggIMHXTIwMvDzquoUOHyosMsRUnnHCCOPnkkz0dfsI+vQjyx425pKRExixNnjzZbCbVIG4Ghbm32WYb+Tsccsgh0guGIPLPPvvMXNwzVq9eLQup43xGKgZ1LBdeeKGsGUm8ZdSoUaJRo0YyZiqMjB07Vp4z6MOIO1Bo+QuFVoBA53L77beb5oz55JNPZFJQu0BwxGTAk+AFGA4YPny4ac6J33//XabCwHcThJxXYeHjjz+W31f79u1lklx8fzvvvLOM9YIXEMHPEER//fWXuapjUFsQQ8RIlzFy5Egp5FUQNIaFzjvvPLkveqzyB4LSMQQbhhm2qUCAfevWraX3k+QOhZa/UGgFDMRR5BrXhJtpOnbaaSfTlBPXXXedmDRpkmnOig8//FAG0eOGrXJepYrRIpnz559/Si/XwoULxdNPPy2HHlE8GzPP4JHs3r27nHV2yimnyJqU8C7cdNNN4s4775QeRcw2g1hjGopggN8N10shTiLA58I5SLKHQstfKLQCCAJEswUeDCc8+uijOXkzdOrXry/mzZtnmjOivLxcdqjIkG7nAaHQIsQexOl9/fXXptkxuO7kK1JkPC2ygLlV7Dsd+jZRGDyXklI4RpIdFFr+wjM3gCCHEPLOZMqPP/7ouDPCsA88GbkCjwfyVmWLnvMq1fFQaBGSCGLhrrjiCtPsmBKtv3AqhLBOjR4VptkWXWiVOuybknH//ffLvoJkDoWWv+R25hPPQOBwpjmoMKSD2Bin9O7d2zQ5BsNOqBW4du1asyktiL9A7rBdd91VLFu2zGy2hUKLkHjwcILYuKypLBOmXCprUUOKrYoesVuD/j7q/YqIJoin0vIK+X+0ALgGhBa2qdqwLacizY6KigqxySabmGaSBgotf6HQCjAQM5g15hR4wjLphLKdlfTSSy9lPEMSQf7I4XPMMcfIGZaZQqFFSIzDDz/cNGUMPFimNFJCKJnQilIt0soqLaGlRJQluuIXkx4tOdRYYv1fozRB3GVDIaXDyQcUWv5icwWRIOF0KBDka+jQ6T6AWzmvKLQIiYEZpLmSndCyvFd4KaGlxFVSoVW9F3i15P85eLN03M7TV+hQaPmL8zsm8Q0M0SHNgROeeOIJRyVosM1MwYwzJyILpTZUzisE3bsBhRYhFoMGDTJNWVIVG+6LeKhq1CiRf3VxpURSnDArL81AaIEKUTbKHW+Wwg2vXrFAoeUv6e+axHdQvHXLLbc0zUlB3iRM308GkpjOnTvXNKfk0ksvlSIuGS+88ILMz9W/f3+xYMECszlnKLQIEeLNN9909LCTCXrclR5rpf5PjNGCGKuQyzkXWpl5wp2AXIFIzkrSQ6HlL+6e+cQzpk6dKp566inTbIsXCUuRbdwOPefVjBkzzGbXoNAiRIgRI0aIdu3amWYXqRJlPRymecgQxGe5CZKZokYmSQ+Flr9QaIWITOuAYQgP7nWIIASPDhgwwFwkLUh+ag4z6jmv3nnnnbg2r6DQIsTqA7woceUpMhi+RkI8WK4gxrROnTriv//+M5uIAYWWv1BohQwIHGTwzgSsk82FhvQLKqnp3XffLbdz2GGHZZXSIVcotAgRok+fPqK01F3PUFhByS+ESUBwwYOP/qlHjx7iiy++MBcterLp/4l7UGiFjPvuuy/jWIdshBYyvZ9zzjlZ5bzyAgotQoQYNmwYr4UImMWslxtbuXKlFKHo71q2bCmeffbZ2MJFTqb9P3GXzO7YJDCggK9TMhVaWB5lPbLNeeUFvLnkB6T9+OWXX2TNPGTtRwzeihUrxM8//2wuSnyiQYMGpslDKhJK86RLOqpyZlnvvbvFoJ966623THMUnMvIQ3jwwQeLbbfdVlbbKNbanJn0/8R9vLsKiKf8+uuv8uJx8lLDjaY92QvLI2C+devW8j1eiNO67LLL5BCik/QRbkOhlRsPPvigzGeG31H9vnvuuadMPDt27Fjx0EMPySEYFIpGrUkUNl+/fr34/vvv5VAMZr4iUS3i8x5++GEZlN23b1+x7777Rs8R5Err1auXPNeCItALEYiFVDOA/UYXWl7x1VdfyfMwUz7++GOZgwvnK/q3F1980VykIEG/TvyDQqsIyNSjNXz4cLkOilvDu4EhQwgszFiESx5t22+/vTj00EPFkCFDZGeFwHsvodDKnIkTJ4o2bdrI1CAY+r3yyivl7+j2BIZ169bJcwTD2oiRadGihTxHIOKwv99++81cheQIvDRpQW6scisQHb+HAmkY8H/JqDKZjgH5sZTXSr2PzhCsxPuYBwttth4ttRy2GxFadklP5frYR/Vy0S1E1i0dFcsgn45sJvboIAXNjTfeKPeLfH933HGHuUhBkUn/T9yHQqsIyFRoKbAehNRmm20mHn/8cbM5DsRHTJo0ScZ1qZmOtWrVkolL+/XrJ5/A3333XXM1x1BopQapP84//3z5vSN2Zfbs2dE2eWPUbrT5BufemWeeKc8HHMe3335rLkIyBN5FeClTUmkJKfUeCUaRaFQXOMmEVqkpqCJldEoiWeNNoRWfLyuF0NJK8GAdfd84NrVuKuBdRUkvt0H/hZnUOEeRN7CQvLLZ9P/EPfzrfUneyFZogYYNG8oAU3issJ1MYsNMfvrpJym4kNS0Q4cOMuUEttmkSRMp0OCBmT9/vrmahEIrkTPOOEN+fxBYanZoGHjllVdkdnMcO35zkh3KI5MUJa609/FldyqSCi2gF4OWy0b2ZSu0tP/TebTUFhO8Y1pNxGTAM9ulSxfT7Anw1A8ePFh+xxhuHDdunLlIaMi2/yfukOIqJYVCLkJryZIlYo899pAlgDA81L17d1frjC1cuFBMmTJFigV0ojhWeNCOO+44ccEFF4jp06eL7777jkJLA3mDMDy3S/V3dcxNeoxJpKSKccPCzSx2w0xHhaiQXhDrJhzXYt4UjSDp1Fj17vTjGHfPXJkIt1GjRmL16tXassQpEFsI8rbFRmil82jJ31h/byOCbIVWSo+WVuvQEFqZeLRefvll6RnNN4hTRF+EfhDJmaf9//buBUaK+o4D+GGhsURRQJQgvmJqPQXxBYogxggtNoZCbKuePWhFxBahEQ0NRdsiKEIOaqktWG0FETC+sFcOoRajoKWoVOTRIoeHoiDWR3k0KCj+e9//7MzO/m72dmd2Zmf+O99PsuHuP7O3e8fd7Hf/j99/0SL1wQcfyNMSLej1n8LBoJUCpQQtG1YgYiKpDT1b+LpRz80CTL5HsEChRkzm7tChg35sTGa95ppr1Ny5c9XWrVvVoUOH5F0ryrx581SXLl3Uvffeqz9vueWJa+86u6XR/ry4oJX9mi2DlltdD2tPvGK1fB65z3XhwoU6YKN8AfmDAII3IljEkMMraKmWc7RAB57mNj1/yh2gM/On3MHKK2jh90Wfh6/rCkv2ffP1aGmZx8g3Rws94Qg6SepRwhtElJZo166dvhaWMi2iHEq9/lNpGLRSIIygBeh1QiVmN8zdwgsk5nJFqVCPFlbGYUgKL9SXXnqp6t69u/6+zzzzTDV48GC9J1qLFyJDYHXVEUccoXsX3fIGLaf3oSn7gpjZBBiyw03WfnVu7qDlTIjO3Nf9Amv/i54KfAW8UKPFfY7zsetFHudZH7cMhYCVjtnnR36gZ7hXr16yOZfr9wD/Py3/B8rLCnjW7xl+l2SAQ+85eu2SDtcfTH/ANAisxMUKXvwuJ0UY138Kjle0FAgraMH48eP1cJ4bggAmvWPJf1QKBS0vWAb/+9//Xs8Hwiot/BxQT+e8887T38fSpUvV5s2b5d0SB8/b7sVys3sm3LecoNX8r/tlywlJ7mEe8cLmDlo583Pqc0OUe5J1Ta1VJFKf6RW03JzQ5R20AC9SQ4cO1asZyR+sxsPfSkOD7HHKcn5ffA39Rkf/nuD5uH5XNm7cqFew+t12LAnq6up0+RR8T1iYkgRhXf8pGAatFAgzaMHs2bPVtGnTZLOGoa3TTjtNNpcsSNAqxq5du/SG3SNHjtTDo23atNG9R5iLge1OMKT197//Xd6tbPJt5g2FerTsXibJ/YImg5D30KEIWo3Z4R9wv2h7Bq3M0JD93AoFLfj000/VgAEDdL048g+9n1jleeutt+pVeibYuXOnXk2I3xXUa6sU6PVHzTl8X7jO4JpSbmFe/8k/Bq0UCDtoAS6EmJ+QDyoy9+7dW2/hE4aoglYx8GKPcgl40UJPC8IPfqaYxP39739f149avnx5qCv/1q9f7/QS5VMoaOmhQ2dOTLaHqrWglZ2wnj9oZSc5W89BywxJWUNB1jwbu5fCHfhQ08kZwpS9XR4K/QyoMAQt1L3DGwf04iYJ5jpNmjRJ/z8/++yz8nDFQu8/vue2bdtGUqpCCvv6T/7wKpYCUQQtePHFF/Vk9HzGjh2rH7u1YYxixRm0vKDoJ96p3nzzzboiOoqC4ntFL8yIESP0xPVSVtJdddVVeo/J1hQOWpl5Lwg8rsDSWtCyJ0U3tRK0auy5W5kgZ7Pn2thDQTlzujLPoa7RFfhwjnNvb/l6Tsk/7AyAF/a+ffuqZcuWxdpb+PLLL+tCofgduOCCC2LZqD5uKOSLN3BY4IMtz6677jq9I0MUorj+U/EYtFIgqqAFmASK6uPYEiMfDGPgOaDuU1BJC1rFePPNN3VP14QJE3TvHnrA8HM499xzdc8YhmAxF8XrBQ8X38TRy+/tkFU+pdRuI2/ofUXRU7wxwO8k3ixgiy38vm7btk2eHhjejKEWFcoyYCENJuvjDZhp5RHKBddKBGIM+6LwM35+YYjq+k/FYdBKgSiDlg1FBDEMUMigQYPU6NGj9UbFfpgYtIqBKumYA3b33XerK664Qtfqwf9X1Ks4TdLaEDWFD3+bKKWAXlUsHEG1dMxbtHslccP/iftz3DA8ibmNmOuILW2eeeYZ9dlnn8kvTz6gpw/Xy69//eu6ziDmk2JeqV9RX/+pdQxaKVCOoAV4F1aMfv366efkZyuWSg1aXjB8gPk0ZDnxxBNlE8UAQ10IYXhjgKrp2C8Q9evwwo8iuhQtzAXt1KmTvnZiJbWfOaHluP5TfgxaKVCuoAV4rGILC2L7FZRbQG9OIWkKWoCf4/bt22VzKt11112yiSj1sLABC3Rwrbj22mvVH/7wB3mKo1zXf/LGoJUC2K+wtTIBYUP39u233y6bW4Xn+MADD8hmR9qCFja4xQW0VJgU71XBPWfrk6Dc27lEBMUfiag4s2bNcvaQvfPOO512Bq14lX4lp0TDtjXo2r/88svloUgVO4xow7AELhD5JoGnLWgBVnQePnxYNvuSL2iZAnN+iMif559/Xq8uPeqoo9SQIUO4eXvMGLQqGIaefvnLXzqfY0JrOWH7G0x+92vMmDF6Qq27rk4agxZgcjxCaFCoW2X3XGHFIHqg8tXBcgqVtuhJy5ZxsGtiZetzZWt1ue9X6upEvBsPo0ePiKxRBtT8w8gBFjigvAcXKpQPr2QVCku1UZvFDb0jKDNQzs2XUboAK2aCWLdunX6xxR6FaQ1aUFNTo+t0BVGdCVfgrmtl18uywkyTrreV1ZDbC5ZviFCXe7CCHIKWeyjSHeb8wgbib7zxhmwmooDk0CF2XkB9Q5SawW4e6D1vbDS469unP//5z6pnz5762oqFHStXrtTbV2GKDYZfwxb8akiJht4rdB9LCF8IYeWEiZpB68FgZRNezLt27SoPpcrMmTN1+Qe/vIKWVVDU3bslgpZrE2jNI2hZIS1TAd4jaOUGt+J88sknatSoUfqCR0ThkUHL7ZFHHlE//OEP9d/0T37yE/Xkk0/KUyoOvldMq5F+85vfBH5T2xr/V0NKPPRatTa3B8OJ5V7Rhi15ShkKQo8W5hzcdtttqS52eNlll+mf44YNG+QhT15Dh7lDfEUOHdoV5HUIy35uT6ovZejwww8/1MvWsQE4EYWvtaDl5Y477tDXBhSZ/fWvfy0PG62Y16Gjjz5aNpWk8COSUVAk0KsnS5LDiuVSzC+5F/fQ4YMPPqhfmNNcuwdbmGADbBQxNHGPOGxhhK1XUAX7qaeekoeJKER+g5aEFeEYXsT1e/z48aFsqxYHDBEWu/PB5MmTZVNgwV71KJHQS4W6VMVAGEMoK7fFixfrP1S/5BwtdPF2795d/5tWqBqNmmW4+F1//fX6Z5t0K1as0CsJ8ZzDvJARUX6lBi3b2rVr1cCBA/XUFExlWLNmjTwl0VB3rFgXXnihbAqMQauCoJdq9+7dsjkvlHzAMGO54Y8T1b799EjJoGXbv3+/HlNftGiRPJRKP/7xj3WIQeBG9WjstxgXFFREmDrppJP0EARWPWEeFhGVV1hBS0LpoAULFqiTTz5ZnXHGGermm29WH3/8sTwtMbCKu1i4ju7YsUM2B8KgVSGK7cmS4urZAmzFU+xu9fmClg29eQgZeLdFWVhJ9Nhjj+l3n9YE9ip9QcTkV5RQwLAjLowHDhyQd80Ly8LR/Y6LN6r6f/vb39YrePC1UT/toosuUg899JC8GxHFJKqg5eWFF15wtlnDfpnr16+Xp8Tm0ksvlU154fl//vnnsjkQBq0KgHINpRQkDRrSSoUlxhhG+uc//ykPtVAoaNlGjBihC/QVs8F12uzZs0dt3LhRzZ07Vw0fPlz/zqA30A5g7du3171PCGJYeICLJIIrLpqoiYZl4CiAaJ+PG87DLgAYwkUZDiJKnnIGLRuuN6iJiOsEpnnMnz9fnlJ2HDqkwEotRIrhxnKXfHDDkuKnn35aNucoNmjZUE4Cf+BbtmyRh4iIUiWOoOXl3nvv1UWscW2eOnWq3qC83FBCphD0yO/cuVM2B8agZTD0ZBUq5VAslHyIq2cLZsyY0eoyYr9By4YVbX369FETJkyQh4iIUiEpQUt6//331Q033KCDFwpbP/744/KU0GG6Q2sLhzDU+d3vflc2l4RBy2Be1d+DQljDUFI5q8ZL+GNzbxnkFjRo2VBt/Fe/+pVsJiKqeEkNWrZNmzap2bNn6/pVF198sfr5z38uTwkVXmtYsJQKwuTvfKGkFKUOQ5YK2yFgnpVUatCyocI8VsgQEaVF0oOWF0wnqa62tgqrra0NbQWgG8ritG3bVtckxKKeUvaVbQ2DFiUOShKgAjoqhtvCClo2vGM6//zz9Yo8IqJKZmLQkrDYZvr06ToYYfRlypQp8pRA0GGB15soMWhRImEZbq9evZzPww5agK5jvFuqr9d7zxARVaRKCFo2lFzAnFvsLNGxY0e9dVcpi54YtCj17An6UQQtG/YNROAaOnSoPEREZLxKClpeNm/erK/fuI5PnDhRPffcc/KUvBi0iJQ1cfEb3/iGbI7E4MGD1Y033qi2bt0qDxERGanSg5a0b98+/T0Xc8OcYIyeyPZ8tyAYtCjxZs6cqcNWuQwYMEA/3nvvvScPEREZJ2hASAP2aBFlYOgQK0PKad68eboS+l133SUPEREZg0ErPwYtogx7jtapp56qt4Ypt+OPP15PuiQiMg2DVn4MWuRommHVE3FutQ3yFE9VVTU5n1dXVau6xpwmI9hBC5sZn3vuueqDDz4QZ0QLGymjd+uss86Sh4iIEo1BKz8GLXIgaDW5G+prVDFRq9KClg0rTNauXZvTVi7jxo3T87iWLl0qDyXewYMH1fPPP6/3GRs9erTq2bNnboDP3Dp16qS3xEBxV2wmjUK27uNHHnmkPo6JpA888IB69tln1d69e+XDEVECMGjlx6BFDhm0apzJ4U1O71aVR4jKF7TqemT/6637Nzhf0+o9s+7n9TXjIIMW2HWw4oI9sfD4//jHP+Sh2OG5jRkzRm8ngec4bNgwtXDhQrVq1apQ9sb08sorr+j9KocPH64fE9se4ePVq1fLU4mojBi08mPQIoccOqyekYldjXVOz1ZDbcshxXxBKxvUMuprVFWPuswnTU4QQ1tOT1pMvIIWYP9C9KjEBbvP4//jBz/4gTwUi1mzZuneJjyn73znO7rXDRu3ltv+/fv1c8HPBc8Fy6cnTZokTyOiMmDQyo9Bixw5PVrN4coOVGhvbQixukXQcg85Wr1YCGM6pDlBK0sGt7jkC1rw8MMP6yJ1cevfv7/uZdu1a5c8FJkVK1ao0047TfXp08eI1ZG/+93vdPDq0KGDWrRokTxMRBFg0MqPQYsccugQPU7W501OQEJocnq6MhCgnKjUHNBqMrvNuHu0rF6v7NAhzqvOfGxC0AJcSDp37iybY/GnP/1JB4lDhw7JQ6F44403dFiZNm1a2RcFhA1bLeF7MXG+G5EpGLTyY9AihwxaeqgvE4IQunKGEwX3kKMDvWKZtuwcrAanzQ5kpgQteP311/UO7Elw//33q65du+rhszD96Ec/0v8/S5YskYeMtWbNGv09LV++XB4iohAwaOXHoEWUUUzQgv/+97+6BMO//vUveSgWBw4cUO3bt1ePPPKIPOTL008/rU4//XTZXFHWrVunBg0apOrqWg5hE1FwDFr5MWgRZRQbtGwjR45Uy5Ytk82x2bFjh7rlllt8fx8IjthYu5J6sAr597//rc4880zd00VEpWPQyo9BiyjDb0CBnKHShLjhhhv08OYLL7wgD3nCHCYEj7RBfa5jjjlGNhNRAAxa+TFoEWUECVqAsHXPPffI5ti99NJL+rlt2rRJHnKgBww9YRUts/Ai3/zCiy66SDYRkU8MWvkxaBFlBA1aUF9fr6ugJ9EzzzyjLrnkEjV+/PicdrShAr2be6VodtVpafwsdihYU605NAUqbusqVyI9+uij6qOPPpLNROQDg1Z+eMPbsWNH2RwqBi0yQilBC7ApdJJh/8Y77rhDF/oE/PGjjEOO+prsatCq6txjAeULOF4iC1oFoNo8EQXHoOVt+/btuug1tiXDm96oMGiREUoNWoCinu+++65sTpTZs2erbt266TlKXqwCs7l/ttnq/w3WEFxmOA6hyC79AWizg5pNBy19vhXcrB0I8HFDy3MzQct9rg5Wdt019ExlzmlZSDe724Czg4E7mNkf1+cW2IVTTz1VNhGRDwxa3k444QTn48svvzyy2ocMWmSEMIIWfO9738v540qq2tpa2aQhBFX3cBWhddU+s241LYOTq6Bti/Dk6tGyQ1xxQctV4NbmFZxc7G2k3AV03ee767e5ofI9EQXHoJULPVlYzS0dccQRkfRsMWiREcIKWjBq1Cj1l7/8RTYnSr9+/WSTFaD0pPGGbEBqzFb7d/gNWpkeqWxvWDRBy2IHQysQFj7feqdJRMExaOXq3bu353UFE+O9AlipGLTICGEGLbj77rt19fakwioYOYHfPS8Lw292MHG361DlM2hZPU3WkB0CV3E9Wu7hwcywYKvByRXMsKtBZtsne7Uh7u8VtB566CG1d+9e2UxEPjBoZaHHCnOy8tm9e7f66U9/KptLwqBFRgg7aMHChQt170pS3XbbbWrr1q2yOVUGDBggm4jIJwYtC+ZgefVkSejZwvBiWJL7KkPkEkXQgoaGBnXjjTfK5sTAdkLlgl6yYtiT2qN27bXXpj5oEoWBQcuCnir0WBVy+PBhPbwY1uT48lwxiUoUVdACFA0dOHCg2rNnjzwUu4MHD6qvfvWruvctLbDn4fnnn682bNggDxFRAAxaSs+9Qk9VsTC8iMnxYWDQIiNEGbTgf//7nxo8eLBav369PJQIK1asUF27dpXNFWX16tW6UOucOXPkISIqQdqDVrE9WZLds1UqBi0yQtRBy9alSxfZlBgorIctaZ544gl5yHjYQBrz5YYPHy4PEVGJ0h60SumZCqMcEIMWGaFcQQvwgj9//nzZnBjbtm1TX/va13Ql+aYma9WeiQ4cOKCHCPHzTvsLAVGU0vr3hTlW6JFCz1QpMOxYyuR4Bi0yQjmDFsydO1dNnjxZNifOyy+/rHr27KnOPvtsNWHCBHk4caZPn66D1Yknnqj3oCSi6KU1aKEnq7VSDsXCsGMpPVsMWmSEcgctSHLpBwkBBqUQsH3PokWL1JYtW+QpsXnvvffUxIkTnUC4atUqeQoRRSiNQQs9UH4mvxdSyn6I5rySUKrFEbQAPS/Dhg2TzYmH4cWf/exnqnPnzjowDho0SPfSLVu2LJLVlZ9++qlauXKlmjJliv554TH79u2rxowZk9gFBkRpkcagVUoPVD5B90Nk0CIjxBW04P3339dziemBhLwAAAlISURBVCrFq6++qu677z5dEBVhCOUjcvdLrFLt2rXTqxw7duyojjzyyBbHjzvuOHXeeeepW265RfegYcXgl19+KR+KiBIgjUErSRi0yAhxBi1bp06dQhnvJyIqJwateDFokRGSELQwDFbKMmEiojgwaMWLQYuMkISgZTNpkjwREYNWvPiKQUZIUtAChK1x48bJZiKixGHQiheDFhkhaUHrr3/9q+rQoYNsJiJKHAateDFokRGSFrRs55xzjvrwww9lMxFRYjBoxYtBi4yQ1KAFQ4YMUaeccopsJiJKhDQGrYbaKlVdVaVqvDagaKxrPlYtWyPDoEVGSHLQAmyG/Nxzz8lmIqLYpTFo1TSHrLoeVaqqtkEeYtAi8pL0oAV33nmnevDBB2UzEVGs0he0mjIBq0EHLkv2Y/xblQlaWNike73qa1RVj7rme1q9YfgXgayu0T6/JnN+tW7zg0GLjGBC0II//vGPLP9ARImStqDVNKPaCkrQHKAQjBCenN4tV49WtserwRlmdO7vClr2MffHxeIrAhnBlKAFTz31lN6ahogoCdIVtKyeK/eWYdUzmhi0iAoxKWjBunXr1FVXXaU+++wzeYiIqKzSFLRyAlWGNcqQZ+iQQYvIYlrQgo8//ljv9r5lyxZ5KDY7duxQjz32mC62OmzYMHX88cfnvPM7+uijdVt1dbXq37+/6t27tzr77LP1BtNy8+ljjjlGXXnllWrq1Klq/vz5qrHR58QFIiqLNAWtJGLQIiOYGLTgiy++UN27d5fNZYMaX8uXL1dXX321+spXvqIDUpcuXdTQoUPV2LFjdeh666231K5du9TBgwfl3Vv4/PPP1e7du9Vrr72mlixZom6//XZ1ySWXqJNOOkl/bQSyb37zm+qJJ56QdyWimDBoxYtBi4xgatCyIYQg1ERt4sSJ+rHatGmjRo0apV555RUd9uLw6KOPqltvvVX3knXr1k3ddNNN6vDhw/I0IooYg1a8GLTICKYHLbjvvvvU9OnTZXNg6F1asGCBOuqoo/R8sDlz5shTEufxxx9XnTt31mEQPw8iih6DVrwYtMgIlRC0IKzSD5s2bVLHHnus6tixY1l6ysKG4q6nn366qqmpYaFXoogxaMUrnKs+UcQqJWjBcccdp6677jrZXBRs94Owtnr1annIWNu2bdPzxzDUSEThY9CKF4MWGaGSghZs375d9e3bVzbnhYrzffr0kc0V5e2331bXXHONnmdGROFh0IoXgxYZodKCFlxxxRVq8+bNsrkFTCIPa8jRBNigu6nJqetMRCVi0IpXeq7eZLRKDFowcuRI1b59e9nsOOecc3Q5BRPZ+4YFgdWKaQqXRFFi0IoXr2RkhEoNWjavUDFixAi1b98+2dwqd0FRexNU51imAnJ1cwCKHDZobX58pz5zfUP2Yx/OOuss2UREPjFoxavl1Z0ogSo9aP32t79V99xzj/P54sWLPcNXIehFsmEbCfcu83priir/20cEgW0q3Fth5IQuH7AykYhKw6AVL/9XcqIYVHrQgvr6er3NDSAQvfnmm+KMwtxBC7BxqhW2mlr0dCGINTTfcnq/9GarmY1YM3uB2XS7E5yswOY+J/uxeCzdu2V9HsS0adNkExH5wKAVr2BXPqIyS0PQsp1xxhmqtrZWNhdk91jpWyZweW2AivNAB61Mm72Jqntelb3pqhvuW9OjyjnHO2hl2Y8VtEcLsL0PEQXHoBUvBi0yQpqCFjZ+njRpkmwuiuzRcgcthCl3z5KzQ73rY/eu917BCTvcuwNYvqAlH6uUoNW2bVvZREQ+MGjFi0GLjJCmoAUXXHCBbCqKDFp2cELgstX1aCVotdqj1aTvi+FGOzS5w5V1foPrsazzrWPBg9bAgQNlExH5wKAVLwYtMkLagta3vvUtdf3118vmgrJzo1zzrqCxzmm3hwy9glZrc7TQZveO4ZzqGU2ur1udPd9uaw559mMhcAWZo4X9EA8ePCibicgHBq14+b/yEcUgbUFrzZo1gYJJmKpFeYg4YGseIioNg1a84r2SExUpbUHL1q1bN9kUKfeE+rhdeeWV6j//+Y9sJiKfGLTiFf/VlKgIaQ1agNBz//33y+aK9be//U1vT/Tuu+/KQ0QUAINWvBi0yAhpDlooZoqw9dZbb8lDFSkJvWlElYRBK168opER0hy0bAhcqJQ+Z84cech4S5cu1QELexwSUbgYtOLFoEVGYNDK2rt3rzr55JPV6NGj1dq1a+VhY7z99tu6GGm7du3Uxo0b5WEiCgmDVrwYtMgIDFotDRo0yMheoPXr16upU6fq5z5r1iwdHIkoOgxa8WLQIiMwaLXu4YcfVldffbWuoo7aU6tWrZKnxOb1119XI0eOVCeccIL+f9yyZYs8hYgixKAVLwYtMgKDlj/79u1TM2fOVNXV1lY4vXr1UlOmTFHz5s1TW7dulaeX7J133lGLFy9WY8eOVf3799ePOWTIEDV58mS1c+dOeToRlRGDVrwYtMgIDFrB7dmzR9XV1al+/frpuV0IQehduvDCC9W4cePUggUL1JNPPqkvxhs2bFCNjY3qk08+0fc9dOiQHtprampSr776qnrxxRfVkiVL9MT8CRMm6K/Zpk0b52sOGzZM/eIXv2BpBqIEYdCKF4MWGYFBqzw++ugjHZIwj2rlypXqpZdeUuvWrdMT1/fv36+++OILeRciSjgGrXgxaJERGLSIiIJh0IoXgxYZgUGLiCgYBq14MWiRERi0iIiCYdCKF4MWGYFBi4goGAateDFokREYtIiIgmHQiheDFhmBQYuIKBgGrXgxaJERGLSIiIJh0IoXgxYZgUGLiCgYBq14MWiRERi0iIiCYdCKF4MWGYFBi4goGAateDFokREYtIiIgmHQiheDFhmBQYuIKBgGrXgxaJERGLSIiIJh0IoXgxYZgUGLiCgYBq14MWiRERi0iIiCYdCKF4MWGYFBi4goGAateDFokREYtIiIgmHQiheDFhmBQYuIKBgGrXgxaJERELRwseCNN954483/jeLDoEVGQNCqqqrijTfeeOMtwI3iw58+ERERUUQYtIiIiIgiwqBFREREFBEGLSIiIqKIMGgRERERRYRBi4iIiCgiDFpEREREEWHQIiIiIooIgxYRERFRRBi0iIiIiCLCoEVEREQUkf8DKZ9tdpR4CvcAAAAASUVORK5CYII=>