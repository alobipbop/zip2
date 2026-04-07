# **Product Requirements Document**

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
\- Platform: Web 

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
| FR-06 | Xuất báo cáo cuối tháng | Should have | người dùng truy vấn thông tin cần sử dụng, xuất báo cáo thành pdf/ảnh/excel |
| FR-07 | Báo cáo hàng tháng | Must have | Tự động tạo báo cáo ngắn gọn cho người dùng mỗi cuối tháng, gửi qua mail hoặc hiện khi user đăng nhập |
| FR-08 | Thanh hiển thị tiến độ | Should have | thanh hiển thị % hoàn thành task và cả tháng |
| FR-09 | Thanh hiển thị thời gian tháng | Should have | thanh thời gian trong một chu kỳ tháng |
| FR-10 | Cảnh báo tiến độ | Nice to have | Hiển thị màu sắc trên thanh tiến độ (xanh \> vàng \> đỏ) dựa trên thời gian tháng |
| FR-11 | Update thông tin tracking | Must have | check box or smt để checkin mỗi ngày |
| FR-12 | Xem lại lịch sử | Must have | xem lại báo cáo của các tháng trước |
| FR-13 | Đặt trọng số cho task | Nice to have | đánh giá kế hoạch, set trọng số theo từng task riêng |
| FR-14 | Mail nhắc cuối/đầu chu kỳ | Should have | Gửi mail cho user khi kết thúc 1 chu kỳ |
| FR-15 | Mail nhắc tiến độ | Nice to have | Gửi mail thúc giục cho user khi chậm tiến độ or không truy cập \>7 ngày |
| FR-16 | Tạo task riêng lẻ | Should have | Có thể tạo task lẻ, không phụ thuộc vào mục tiêu tháng |
| FR-17 | Phân rã mục tiêu theo quý | Should have | Hỗ trợ chia nhỏ mục tiêu theo quý để tracking |
| FR-18 | Hệ thống nghị lực | Nice to have | Hệ thống điểm công thức ẩn tính theo mức độ duy trì và hoàn thành mục tiêu |
| FR-19 | Tiếp nhận phản hồi | Nice to have | Box nhận phản hồi của user về lỗi/điểm cần cải thiện |
| FR-20 | Ủng hộ NPT | Nice to have | Nhận quyên góp 🙂 |
| FR-21 | Xác minh email | Should have | tài khoản của người dùng bắt buộc phải xác minh email mới được tiếp tục tạo todo |
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

Table users {  
  id int \[pk, increment\]  
  email varchar \[unique, not null\]  
  password\_hash text  
  name varchar  
  avatar text  
  age int  
  gender varchar  
  onboarding\_completed boolean \[default: false\]  
  last\_login timestamp \[default: \`CURRENT\_TIMESTAMP\`\]  
  created\_at timestamp \[default: \`CURRENT\_TIMESTAMP\`\]  
}

Table goals {  
  id int \[pk, increment\]  
  user\_id int  
  title varchar \[not null\]  
  description text  
  status varchar \[default: 'active'\]  
  start\_date timestamp  
  end\_date timestamp  
  created\_at timestamp \[default: \`CURRENT\_TIMESTAMP\`\]  
}

Table types {  
  id int \[pk, increment\]  
  goal\_id int  
  name varchar \[not null\]  
  color varchar \[default: '\#ffdac1'\]  
  weight numeric \[default: 10\]  
  created\_at timestamp \[default: \`CURRENT\_TIMESTAMP\`\]  
}

Table tasks {  
  id int \[pk, increment\]  
  goal\_id int  
  type\_id int  
  title varchar \[not null\]  
  description varchar  
  status int \[default: 1\]  
  unit varchar  
  target\_value numeric  
  target\_total numeric  
  weight numeric \[default: 10\]  
  created\_at timestamp \[default: \`CURRENT\_TIMESTAMP\`\]  
}

Table trackings {  
  id int \[pk, increment\]  
  task\_id int  
  value numeric \[not null\]  
  track\_date timestamp \[not null\]  
  track\_note text  
  created\_at timestamp \[default: \`CURRENT\_TIMESTAMP\`\]  
}

Ref: goals.user\_id \> users.id \[delete: cascade\]  
Ref: types.goal\_id \> goals.id \[delete: cascade\]  
Ref: tasks.goal\_id \> goals.id \[delete: cascade\]  
Ref: tasks.type\_id \> types.id \[delete: cascade\]  
Ref: trackings.task\_id \> tasks.id \[delete: cascade\]

Chi tiết: [https://dbdiagram.io/d/696cd888d6e030a0245cb31f](https://dbdiagram.io/d/696cd888d6e030a0245cb31f)

# **7\. Use Case** {#7.-use-case}

## **7.1. Use Case Diagram** {#7.1.-use-case-diagram}

Hình dưới đây thể hiện các use case cơ bản và các actor của hệ thống:  
![][image1]  
[Link Draw.io](https://viewer.diagrams.net/?tags=%7B%7D&lightbox=1&highlight=0000ff&edit=_blank&layers=1&nav=1&title=Kairo%20Usecase&dark=auto#R%3Cmxfile%20pages%3D%222%22%3E%3Cdiagram%20name%3D%22Page-1%22%20id%3D%221mk53Zy113-U2Xo4b4iL%22%3E7Vxbd6M2EP41PIaDkLg9%2BpKkZzfbps12s%2FvUg0GxSTBysbyx8%2BsrgYS5%2BRIMjveUPCRoANn%2B5tPMp2FiBY7m69vYXcy%2BEB%2BHiq75awWOFV0HuumwP9yySS2GY6aGaRz4qUnbGh6CNyzulNZV4OOlsKUmSkhIg0XR6JEowh4t2Nw4Jq%2FFy55I6BcMC3eKK4YHzw2r1sfAp7PUahva1v4bDqYz%2BcpAE2fmrrxYGJYz1yevORO8VuAoJoSmR%2FP1CIccvCIuNzvOZm8sxhE95gbjc%2Fjl7fn%2B0XuOwadP93f%2FLK7%2FutKrs4iJl3QjMYjJKvIxn0ZT4PB1FlD8sHA9fvaVeZ3ZZnQeshFgh%2BndP91wJe4WBhxTvM69gniTt5jMMY037JJZDkfDQOl9r1vQkQRdTMMuSseCWrZ0u3D5NJt6iwo7EMC8AyTzGJCYexf8cDUPBx4lMYOCf%2BaAUenOneDwniwDGpCIXTIhlJJ57oJBGEz5CUpKYJIVDYMIjzJya3UI%2F73EMV8XM2VkKkNNuQbKcKg442jaCHtTq0APi8gDq4g8MvSOoLcuHPqBPw%2BijlC27BLKMnS2jjLQLhzmCL8yQ8rzszAa2J1hXRO4LwrrDlFGRZD17ggt4hH2K9m9ijpZxR4%2BHP5z3sGRP%2BDagqMfEu%2BFwchMQrwAMx3eBPw9JxjnfFDMpXgd0O%2B54x%2F8WIWlH3FyvM5dOd7kBvc4DhhwzG95n1I3nmJ6BBVLybrq5RiHLg1%2BFqHMuRlI19c5Ukx3TwIG%2FJYKepELEJW4kLpF3JWXNaWJDPvARCkMlYkSXmWf8QSqwRapJgNxz7Wea3UgorNxLSIRPoZNoF02sU8Rb77nB%2BnEhhxup0pGm%2Fex0DmShIWtiMDpEDGN9%2FOyJDqg1ZSXZYLrnfESDP99QMOnt8m32%2Beb9R83cBjMMir1vGzIS2D2xOyEmMZuHl6E2L69Vc6zedTLqaqJ1q7H2G5z8RsnLf4dq7Ru%2Be9ZtMmoEgFqA4uxN5JUV%2F9ell7K6j%2Bkco5e%2FfDAfq%2Fr1e80Y2b9ZLBnZs%2FMlpiptymY9tYnfnm9VM9L%2FaJ4WS5sIVCa4lhewpJeQtp5eYnazOX%2FQ17qqOdlJ7xsmMl7Xgr8YM%2FLLnhp9Hn8NF728bITXloNH0rUT6afRMyL3%2Fnsazy4EGIaJWKaoOHGp1wWMrNeqfM8wUC7abhlF8VrWqRUXc%2FRksbkBY9IyAt2koZPQRiWTK6o0HnsFXG%2BtidLd%2FPA9%2FlLl4jrrihZisds%2FCRmA3eSvEd%2B%2BolEVD6FM%2BpKe4puhvxjTNjBlB98doOYhBtpZ%2Fhlp8TN7ysCwmoRUHbbyf2y3B%2FLDilrN%2FFOet7uHONWNk%2BwWOId7tzbQjZCiqPx3zbkTU3aizKCynDcDDakarpjG5qFTN20TbOColMspUJQ6g0xLFVDyLJMABzE5uoK1eOq113Aqk2SJrKBMgTJiYZlaqSrBrQggAjqNjRs%2FRDUqFSXAY6jsts02zEM5gjb7grpo1r8miP9%2B0zgORgvlLRTjwGNEmwpbyDTPG4ZsNfUouTkQG%2FWVvZuyMvs5jMIXqdrBJ6Oef1euZlE2Rd%2F6hUKWeBIKXRNMBCHvrucJbEeHKdetpL3R0Gg7JArstkiUyM%2FcjrlJGVS%2B6zQdOecgyKx5EdB5IUrH2fGaeGSLPt8SCMGsBlbTQuYCFgOYDG1tL6b9mUcmrdj9d1qR9DeB2JddATtl8%2FZggCnbghPatDogpyldnJgMaFgOJYGkKPzmAqbkRM6pQBrmmrKSqEgzsrNowR4R5KCp7URS2%2FttaqfLjCQVqsGW892RrOYsM%2BHfUjoQ0Irj8n1M8eEqKCGz7KFKy17Nla3XmTho4Ut3N6ugQ%2FC9sP2caWFAzWg5vWY7C9rH%2B9z57ci3kJVR5PlIlXZiQT3g5%2By0HMwCWa1odxNH%2BQzQ1fzLmth712%2FD2y4Edzr%2F4vLjZrqGE4xP5q21aToXU2bp7VIdJE3EVT1ApmQZqv5eAsb1q8RKM8MTaAmpSGZmEuhpetOnjaftOzvMfuVlV1P0Q%2BkaMc58avMgICwE3ORzgaGxzkQJAlvsFJk1XOQKJERHxfuo%2B7yReF9cUM%2BiF3vJWi4KTRAsTxvV%2Fmil%2BShHGdUgOr2di4zO8p9qGN5%2BHUmvDEE3BuzQAxtKyqgXK9FtPVqk7qvYS3aUUEN%2BBoqgl%2FS5sgCqlQr7QPe8Vr4jufMEGbMDrIRA33ocdm3lAtkXKMPU%2FqnKjFZFl522JoyhFZVCppFl6BiADP0rvZHsregK3%2F8uZKugFHiClGNqgA%2FehjffaT6ziCWqwCZqnOGupR17g3TOvOIQZvR992bf9k9KNlsOQza7fOBFr42pB7ahjW%2FvjmsSM0L6cH5FZvDhuP5DOGNH0%2FDK%2FL4dLV6vENXoEVa6lVasmkfxJDEdEamJHLD6621xM3tNXeE%2Fw9dQtJnTOlGbHJ4H06R3B0%2BXH3PBuSUgGHab95kqv38dvfX4u3Z%2BRYZr3dXHYvBYZYKE70dp6Uovn4yVZgqQaEBwbkeypRzn6GVcl8LLQi1gDf8d%2Fp9zuubJPsmyd0Bmg23X%2FiWXr792jx4%2FR8%3D%3C%2Fdiagram%3E%3Cdiagram%20id%3D%22IPVtbq6rYsZXsSf3zGPu%22%20name%3D%22Page-2%22%3E7V1Zc%2BLIsv41jvt0IrS27UdAAuShJAskQLxMgEQLhFjGgEH1629mlsTSLDa0p%2BN0x4mYBQqpVMuXmV8uJT%2Bolem29tZfjNg8GqYPihS%2FjaMH1XhQFBn%2BhYZFPx4eNeAVrTEvGqW8dT2OhsujC1fzeboaL44bw%2FlsNgxXR239t7f55viy7%2FP0dBitsJ8OT1o742g1Eq1PurRvrw%2FH8ah4kCzlv0z7xcV5w3LUj%2BabgybVfFC%2BPSjqtv%2Bglh%2Bw7fgftfI2n68%2BvKy4eLqtDFNc2WJdxXOr93ewm%2FvbcLa6r09%2FOXxzBgluhCKl%2FQFsPfWT95z2Zyt%2Fmhr9VT9vfyyLjmG79x1%2F%2B2eNC1GO8Lrdtwe1dPTrgyYtV%2F231XqaPuiVWTr8viJwwH%2FeaIcUKRq%2FwVDG8xlegP%2F2w9X8DXvRK%2FuO7Da0%2FLN%2BMOWHcumhpM5w7A8V9aEMQ5S8VuWhoj08H9%2BD6FrCf%2BDeS93%2BlXdYrophQYcleXa2l7%2B8i72458d1rhe3UUwTZ92fxQDqz%2FWmSJMx%2FVB%2BeFKn%2BJVGS%2BttKg9P0sOzipMY9Wejzy0Obmw%2BGLGr6%2BUw7C9PBtQoxmMs6LEHSzaaF7%2FJ4ejyEM%2BthF%2BRP3xyV2xIiO04BbnovUxzXIx2T8envY9vHsHfH4%2FhdURdKHhVSIuqzWL4PDtoX%2BbPLMu3j0D57Ahwp6N1VnT%2BuPrazfhb%2FRQYaqOxmHyBidnRMFbHYnrrKD5ejNac1lsI6uhg7Z%2F1%2FQ80%2Ff%2BQNOx2BkG02i%2FXhed%2FAhBnVyDM9yiXvWKPoPnSgz6e6rHcDcb5E%2FDzkYa4%2FdnqLZL30zPVPgWsXEfl%2FaEgbXc40le3abb80eondvPDx07XffxvgbLy%2BFMP%2Fnh3vd2yPk8v6LfjtpOxXXr2x7t7RaOcrjJyi3PLcOnx2menXkjlaKchHmd37rP%2B4TMrR8J0gOnVNR1ypF%2Bv8wMcxrefG8bqbafAycSsxDbJn4PcIz380Sik7f9QB%2F4HtWBpuZyH4z6SrGXeCL8TpcLfv8V5V7lJPveDcumHXMbO%2F6QUYwHydNqlQMq5n4qVhH%2BBMJ2OUkD83E%2FqXtvs52%2FNwnQd4V68DVOxDCP0TXZLgRM%2F8xRs3DHaVPwg%2Fj8ueiyuz%2F9%2FuS%2FlC%2FtS7%2BlL9Kec24c753m2rzvnebavu%2BZ5oS%2Ft%2FjVT%2Fz6zC%2Bq9o1P%2FPjO%2Bn%2BhNPS8Ed%2FamnetNv7c3%2Fbxof2Vvj%2FfuK7imw1mUO6aHGrVyxdv9Pn%2Bb9leX%2Fd3le3zY1b6fR%2BFh7%2Fz4XnVjvf718jd%2FiiJZMfThovvyH%2FkzIYgLAYLDiEAeJFiusiJkshz1F%2FhxPKWITnk2b%2BSOvwzf3odvq3HYT0vpOJ5B22q%2BgNb%2BciGCNd%2FH22GEC4o3l4pWqWiBzxQEUEviq1KlVShvYWmVymvdVnpZWRt0tuuQS%2BN%2BvSmFxvy9oUZqlOkqy%2FT3cBq%2Bs6S0YZVnHk3DsVUfrQY1nTuz0bLf0d9eWy%2FzqN7cOOOnd7hLbcxC3pg%2BZ73saet4E72hiuuscTkZKLrU6%2BiSrzb1Qa3tD7vlFO6Xet2R1FBsHmZW3KtVpaAlT%2Fqd6iycVleNblMPa%2F6zNWlWfclutdplv%2BU%2FO9DfvNdJZ%2F26%2B2wl8daelTVo24TTNu91X5SeX%2BVhrZ1E1ZdRVEvf4TlreH4K1%2FConi57Huy3kk6iWvyNeYHsdMuao4zSfieaR8ZcY15vMzRW46Bjv%2FXUl%2Feoo0%2BcsV1rTnrwb%2FAI%2FSjwHN7vPK9fW9a2kZiwNr1FrxtVBmoMYyrFrFLa2omvWwaMb2zF%2BfPgN1OxvXQzrFjxcPr8PvCr6161PBok0ngA8x5M0%2BmwZcE%2BvdaaaW%2FG3l%2BT7ew12YwaLTkZ1Ns8qrUzq1qVXxUtHhhPcV%2BZwN4OWuW316y0surNedDR51ZtA61Wtem5%2FGnV8LQn2O1kUIOVgd0OlK0cqs0U9rRY9XQway6i%2BuTZSqtyYwp9VzTse409N8ZHPa%2Bp30wbW7UmrLC5CpVnOZzaaaOzXQymsGNJuPst6qQT2AHo390woyTD6i16xsEY0udm1NLX1G9ttWhMpbifaXGjVZb6teq6XykvG%2BOy70tsbSXaE%2BxyElXK035nuzzY2QNEBBkDNIUzXG1rbbfw82T%2FmRAIY5zZUjh9fut584R58dYxTM1R87aWrPY7TalvzLdOdrR7kuP5sNv0WXZwFwFNjheMG1x7gr3R9mOzEpgvznkD45uiBDQ6vdGgky7xnlCprsNMRsQuergP0%2Bd1VJF5v7tIEVV2Zdem7uY2fXkf1FxY2206mEZS36xO%2BjPABKxnqJZHgZKuezheHIeZXwO%2FscRUYQwa9Ks6Hkoyroe5ZS0tY9yVrESHPQgSm8cS4yvci6nFLZnxJWIAPoeazf1HxMLLmOE9j1ZFgueMRoNpDFgJEpb43Mlon%2FBelSXLpwbs77DuIporzwWKC6TFbZ9tGy2JsB7GgIdRqDKYY3sNUiuBFJzBZttg%2B3Y%2BUNtZoPiglWDeuA%2F73%2BR%2BxxV90R4EsGYFDrGv9Ds%2BHfHUg73qd8u81yonQ1qrQGsksc447HPN1mHNOPPCtWPAGqCWmqbLAVxnScG2mVRrrFVgLc4aCRP31V%2Fwvq1T0WDdYvVQ8wD%2BsoGySp0xI8wB9h6LtkY3WvRAzpyktLa95b%2BCKdC%2B657anLud5j9R15ZgTUBbVhPQ1DPokzSyl19D9xilAu86zsfxGMqwWJfExHXZOKSxvAohCFCz2li1ZY4a89Gqjd4BNapjuFtHseco5eJ7KDsKSjuih0kO37zTbA3tqaGEhBpz1egUeCi3XV79zlrSCnUi7M0y6Np8v6eTnc5BS9MH6wG%2F5fdcxgzzSpd0lVroqqK%2Frgz4az%2BdxY3txXIjcVWbsJbjxsD1mUiEy4u4mUiNZCLuE7jJQC6547n6b42bJM5x429gPpLNXWWHG8OHdYlVRrjpkPawAAssRu1ic%2FYo8BFzRwGLUy%2FP9%2FgBrTOdXNRKoGdoJKBr3nuwChagpdg9q0q7l92hc%2BAuGPsk6DZHja79HnVfErARyG5ofdhFvROf1Ttdbo0Bw%2Bmgtl2EdTsFvKBulh1YF1i3LdqVQCUdLcPabRgPJNy3Yi8JP36whbYMsed48ZpsWGVn60AXlbidgK2o29Kws0W2BVh6ee8r%2FjeLE34AR6uibbVjRBVNBpuHvINW0qr1FoPa5tkas02OIZhT7x1kZNUDlgZjQjnjwA04rE0aAoPZYaxrL4bEB0wc%2FxJ2YgY2o9yrLcD2u2iDN8CygDOgTUJb0WTiGtI3Ktprki1jAjqZxlzYLtnGdUliGWyX2xcIUhzgRAFpE1cC5ICO0OeEjCR4HIAsEYo80MtZ%2Ba0v7J1qe6uV0FYWt43P2KwuZyeMaoexAiWF1gLpyu%2B5wpbMA3S1dxoHVxs1xw5R2F%2F7WWi0THDE9hL02CZUfMALyZoG6wJ3TgodpDhGaYeNyzrIJBml%2BwodNNYU1DO%2Fsw5yDCvXQa5uV4r5IX4CDb5vQSeNX9PyfMdpak15mOPC8VbSv2XFrFvxc1X7EFM8p33Isp1on%2Bwy65kcWi%2FJ9tz%2FWS%2FQOoAU%2FcB6wbrEB9arqYwWuZ4BLAAHBh2EWEAMMcRQvSrnuOE%2FpXeyLjdvxg3cc03vyBf0Dlm0U73z8p21ruidQl8k%2BHTbA3Zf2KCdDbHJbjXJY35Bm4eccpvfl%2BF9oMfXzGAK7tqNvtqmkfjgnT%2FhCMmauHvccoEftveqpkFHXgxQG8zs0WDGYH3aWb8T7KxbqKTfBEO8w%2BPyQjn3uKRD65yvDDDFUgZoAe1jv1t18pgyQAR6u8JKGRNECxfWy38MlFh4xMSxJxkgK7Hq7k47fch70rt4T3qd99jjS5rHOqt5rvEeBv6mveM9LnzWVDvxt9d4D6zE7j7Be0zQYpZie%2BbvzHs4xi%2BET4HziQEZbm63XNnBdfFCDryn3q9NYvC%2FBQo8hhwnEVyIScScyY9HhEwQQZ%2FSMTdzm%2BwDbqNe1DHZBR1zjduA1EzkQscwHuqNJJRhfld1DFgkNb8v1zFgabivOrfHg%2F6rdAxJAkkQM1yYUawTY6aViTmuDHig49fJZoeQsFIeowUSCAG2PD6M%2Btg7JlREdXImlPSNj1nNy3e7cqtvjvdc883jC745ydWpb54%2BSZd9cybkSLAb9AlgxQKZXWU3iK%2F8vn1MJ8v10m%2FLbhhKrPDNKUYFFkbK2Q3svpANIYWHvvmXahp%2BB5vh19mMtbmkaeyzbMa%2ByGbAawLO53i%2BfsBmkOdCm3VN05D3ld8nNI03WYP3qsN6%2F9aaxi3ix1uYHc5Idlo7NoOeg479vo4REWHmFPyXL%2BNh3RfIMPxHwPwupk%2BRHkCSyCXk933Cd4JdG9%2BqZfCeK1omMS9pGeWslpGfrvhQR5FjhXn%2B%2FyLHp5FjBeViHzkWUT8rj%2FqFyHy1Ih9hkx8uy0GrvMqZse4ooEOqtlHc9yH7lZ%2F4HewX7rrCfjN2kf2G59gvR550mf2aG9RSgv0GG4xu2Yn1Aftlu%2Fty9quCX6EQnn9f9rt1iqifZ4HVjrfM8IuoDeAF1sVzkf36wheKQd%2BCJ022CJFDbRrymX6lJDJRvIjigLapjwpvXHZU91N2yr3DTrnX7BS%2FZKfQQzxnp0D6ztqpyRZjE6Bj9l53UkI7BfO%2FaqdgTcO144kMZh4x5rv7fl%2Fs6OiRUkQcdHcD12cXMQbsUBzH5%2FuIMXCXrDyJupMddzlroSpP8aDbHlk1ia5zvMlj3%2FuMpbJvzlXhPdcslXvJUukXLJV81lJ5Fkf%2F%2BtCXAl9z8z9fimTD80GGLE1k%2BifEkika4ZW2e72Tx2BqoyIKrKM%2F9dMZcdAdwR36Jrimby5F%2BTJ2Sd%2BMz%2BsbU7Yxo%2BmFEsqZsFWMC9tO8d4rGSp3d1%2Bub7bIeWyKyP%2B2%2BkahmJ5gyLKdHcWJuW1YB3FiNzvMjh%2FEi1U3DsVvOvLlMCs8LswxHOQf6s33Iho4SD6lfbI7tE92TfsEF7QP8ZRz2kc9r31AIlq7tTrQPrHAwxXtcxCLz7WPCRxI5Ch%2Ba%2B2jFdoH%2FCR1n1HZaR8NNAxqH2OPm9KRR46WKyyiOd4KniOixQJLN%2FBlU%2B%2FcyJUneucKT77EdjbIn3%2FQPk77gubxwbPaeVWSzcOrXniBDucncwhlwHoc45g9j0awtI1YtswNRmHlhuFv2bhs25i1b22Ah7LYg10S1024ZUqH17H8Ohl4arzrzzMz6A90BF2XHfqJA0Be7zfHdanIghRakSwIMHFJcFovDeKwW0QIKK50X2Sg0b4t9gjXX9Z0FzOqBjvx7Fqye86ry%2Bxkl4PPa%2Fkuev%2BF1%2F9TuXbwxEHeyzg2GzS13jAsRBaOA9EIiIO1H284q5QZw4iDwTaA0P3vBv2u2JVyfj9YdLjfMazlUQ5vqr8Dr%2FiNrTYxFbFHGDUv4lg8PsBla5fBXQKqn3b5ueuRhiq7NcpQZVc05yXetrFPeVvTu%2BAjWoqziyuEErseh%2FqXkBjKrIWoo8%2BqQwjzFWx3WgUa6bN9cA3Lr9FZ9mM7Xa%2BzP0pXCiZMOwYY1IpImYae%2Bh6X%2FgVdeQ6XqM36WRlsalkaZMgJTyPu4poTZK4YzAJ084nmbHjWh1W4jJ9UVC4H02W2t%2Ffomay%2Be2lvV4V7iBmKMPMAtBLGU12wtwx8MqwKAE0ENrKRgB9mmBxsJmirjcS4tQYtFgOv3IDW2trjsoF7DiwKtZxmjzXdqYC3g7FYbwJ2lgHWsPrH1yzDkhhVAvlLxpkO93CKGfyo7YTWh7WUYS1lXMvbNeBOPp6Xw070PjjwlwqM4jmGASAkqrMCCZqdgdbmwZqNNxnjGCtkINPYBhorCTn8DpqsBHPzVZvaMSsO6zMW7fBZgzlLFCviDD7%2F2O9dVfHv17F2WuN0N9auxe75SexeYC07i7XsR6wxz8QqFQmtHcs0DjoIsIM4KAF2XMSObLfwLEcM%2BHOxTXWwmtULMsCgDj4fVhQCLkPApanaifUJ7NwRY7sdOxuYjwIYALZMEZol8yYY40MPAGUL57gBrGA7yFmoADZwHig3HDwMbMf4KzCAENsVuAa9kiVLStBPQGvBMC5y36mKD%2FBjn6v0Ls4THUdBWtJWrO8ZbCWfyRyyk%2FrLQU1%2FE9E2gSl8blfSO7lfe6Kz9jgCrp%2BBPskIR7BmroZtgCPg%2BIgjYL9JoLIM%2FQCQzcTkFq4RVUiHnHyAirZxiGl%2BhCPKYN659lvAylbvKc%2FrAyZW2HfAZ%2Fkd5iyh3AocIPZpbDprbeC6EOTBVwFfMuU4eUkFfbJ1PMCaEeBnmJ8L87M2TgWvR93rS%2FaY%2FB9YA9DpdD1mEwGPnoVx6zuy6mZhv%2FfxNIES8GMxZpLnf85WP%2BH%2BL8%2FoHfPYp93jLPtUPvGgHuZQJ%2B2z0Ec6iedVURt41tyqwe8TacsM0MsJyJ3ngqzFXNhAzJnF0OZjG9g7rCMz4XuAcq0DjmRW2cgg3zHYJ%2FIpcR8AS2t7XIK1NtfMCxX0QfEz%2BJ4qtGdoW20%2BydtjYUfGp9yKxg7r0ug23xvtPA96%2F34Bwgb1dDZQtAPOlWtA9NtrzwuQYk6ZNhiVjVoINBaiBCwYnV0CaUKJw6gQnjgU7aCRAVFbbHeoXoihxgINF8jClylthbYLoR3rq1y1YQTA8xDZX6bJwL8sNNnZuphrmuzQN%2F1Rk2XXc0vsxGcQmiz4QZOt%2FMN6mWPGjlYCmbcv5%2ByLQxsgBNYf2UerhD4IogcshAnX%2BLJlYL3eZmt7E0Ceq1BEGL9zQBz4lqgR0Ko0DBOtJ1xbkhzDRQsDPiijCklENsNTo8D0LdSieaQP9hSzoTAGFywuRkiwjpvaEQOYDcz2kefdeUCaO%2FjmK%2FDeVrt1%2B9etrs8BfxtkZCCdWMe6zLOYGrIEwKEiMgsutgP2YO7GBHGI0XAN2B22w%2FpjnCTGdpR0ZLjQzuBzSc0xvqEzjl%2BOVYz9fxlWP8hLMOU8VsPzWJWflPNYJSaioPVFrNpkaWjdwbcvSYhZG78nYQzMXqKoG3x2gf3bFJ0LVMDVwWcTWHaQX2MCEwpA95j0Hfw6XVjnCeJPwlowBpaMNC9ZNcxAAqtGb4W7%2FLC27FiLrvwDLar8Ei0K0slAe4LUcawTCGAGOGqSbImh34A5YQPsTAslGdFZ0hj6CIjkxNLB1mM78NwA%2FM8J9oOxTo5aFXwrDhIL2pgB9wG%2F7Ot8iqa3Qyeee7kJnRgVuYTOD87kMO08OuNjdMpVlp8K5BfQCWuCNhdQg74Fd3O%2FNJRJw40BoejhG8EW1lclTmiAxI9LMp46hfXGdsVBjuVNJHbJLqdVtkNUm%2BpW%2Fn1EAXoQGcBIkokq7DKxX2SE2AYyCbaZdBfZWQ2QRTNB75Qi4cLTl0BfqljByjD%2FTBHy436%2FkBVWq%2ByAFUo3ssLDeN0ZVni1lpVPzrJC5wdW6Pvb70UNyQ%2BsMAO9BjoGbAdHLy1WSd%2BJ0wXYhtwIbSSgBPQSoMkmBs5i8F7BboQZq5QNjHogowRdh1VZG0CghjWfWAPqwP7YiDr0EislrJgB1IXUjteA3coOY9kXEQgr%2B0sQqFHUlpBiAVJCvWHEVLvJyFIGGcZ5AGUgb7FKJ8ASH9tJV4F8LbHaDDh0hn4w%2BCQyriCs3Em%2FX4lAjJ4daLTbvFwReboUKcGzyZfjydJpxdp23edsU%2FAl0riyOGEoNKT5IwbBvgouiDIMq0U21yELEeQWIQSP1sUML1oUFfMMgoe7yBNFRCUR7RSZw%2FYL%2FI3eELDXaj%2BjBz6PKWCjwBw8nA2ytUDDOBDGhgAPCo6a%2FHvD1Ck%2BlOFsUMeL2Yj4Gl2vCvaK9hQwyE2FYkw4e2QIyCoo3n4fI%2F3K2k5kkjfWdlJeM8%2Bi8H2dDMMaKzyhgfGRqYU%2BqLcCrWYvo04zfaGdCq%2FFqhHdmG%2FJz9neFkOkWPJF7Vy96rPbxlmfnbMftDONS85PhJ%2FYe8AH1mAalvA8yd6j54neqKWK2EkJNHYJmD0DHuUDc2TAKMFbMGL0nFAvbeyKiK9gPlnEwM0tXL%2FEM2XCovrAZLHOL9BFe4A45TbVHZ%2BNGVHsP%2FeE6PT5L%2FCE0IOTiTMmPsa5gAWg9x5nqFcZxSxcheJBdOodxk%2FXBljPoRMLMDAuAfLWyj1J8BgoboYxJvSmvEBuiBrZu7XCV%2BZ82O05H4xr5NWuMOsi57OlM9tYSV5UR%2BP8H0EW8Q1Akx6e3%2FFi9VJOnPgLSdCO6bTP1z9fYzpHOZ4bubMrneXO3PqBO%2BPIjs6zH1VcMMzMbBhqy0RIA8gHxg%2FQdnAbNXKlJIlzPIAGjvEKjMpTLAK0kok%2BXkb1ii2Mgse5RGFlKGpsX6bodR6LAOuvi1iEhVEyzHnj2TKQUFcnP89Ajymg9w6gT5%2FHKCSbPKlAofiRZ33Wlv0qhk7nD5DHoLxhdKGkIxNH%2F83GKE9S2jjIHil%2BzZT8WvwsMY7taANLXFyPfVgZRYIo8hNrNPOMbMGfJYMUR%2FgCGcx2Mpg%2BnX3b0QcyeDmn8cHZbvd8dIWzUxlMj852H8ugqBOu5FmkJEAZ1EAeMOso5ZFlOhHPUDYrqLUpNghMAD1YioOIdvRdPKzCvuQ%2F4GyLzMbLL8lsCL%2FUFBka9MZz68LAv6LMhoE6I0C%2FlcYPLA4sez4XwApdb2BsGrwGuhd1EXBf%2Bpz7ZZ5Jb0j44yREcr5eQm7N0nwoIdY1CTk5mSwkxL0sIeMzEoL6D3dcIs%2BZOF9IZ28bBtUEY96POxjdaIlrQMfGWLOKvzvokRsYl0NdSqe7JYpaJhgZCbeiX8w9%2B5iHJulCCSieB1In25eijD9K1N0xuVskCu2FqeVzzxjVRWKucKKJMTPid0K6TDGXVjEXE%2FOD4vokQD9JskV9L1hpvD4QEkUVsn8g78Oqgq%2BWqHt431WJusr7zsdMuX9Zos7xPm5jdc4YK3vw9Gxuc4DHoc0hvme46BkBS3G3mMezDWQ1DOOOsWAmrsjvcYxBunja8IpnZB3kiNiv8IzoDTkN9PxalCuCcWNVAGZjN0UsRRF2BueK70LB9oCi8Dv7Y4Scqp9QiigSgXFT%2BJzhtaCZjfAPiy7AXo9%2FNrpgFdGF7Ny5vg%2BiC9nl6ML19xiIUw2n0QV7fBJdyD7Iy4Lv42KOUbcraGmQW5icqt4qmHVBps5EtQ%2BnXBf4KQI%2FtueSHMEa5j5VsAaOxm3MAGEUgSIVYW6ZLA0rWGwDo59YCWWhNlfAF8LoKnIkqiITufZQA19og5bOTqgd5qWBVxFqV3yhbOcLpb8oViykBnwgPPcHjAzr7TeYzaNMNsVjQtTA6PPgSkgUWxEx4Y0tfCeMv0DfLrS7GxGLmSDDwzyPTDNHFnk%2Fc%2F3Kymh%2Be2V0fsqCqlDZ%2Fl0iCdZcYtbaFCf8vXDrgDbDN%2Fj2aliPamo2v3C2bR%2FzxqqpfeblHrskP12J79nf2ZWzS%2FRGoHMSmJ1IIO%2BK6HdxXvso%2Bo2ZKcSLjbWmCUYYmGSTNgd%2BRpIFEkX1dugjB5grVfIYn2wnIsaHb7zCuBdGJMA%2FB0uG5%2F8LLMVUZwdcByyZhflaLtopl6iLN9lesmRYD3ZQG3Z3hcAtfM9SMFaQV%2BGIui%2Fkq0kJtY4M2hpjfwrxPax9MyyaO1o5PP9vF1aOi5o4wRVj4VlRLBArJfAdc%2BGf50HJFO38eb6HFWSFXePn3uD0gV3jh37SSU7p%2BlsQ5As5Je00pwSITJ8LZJ6J9oFcKJRpRBZD0TvyrbDGkNocjJ1TbTNG6yySmVy2FMxygmxljKwgfV9TnJwsGF0vUR2diA4W16uYv8E8Ib2zEPwu4XuA5QR26dCbV6nqCD%2FDPdgPskuwE8bFOt%2B8PvCXy6EsqraCbV7bTXIFLJDT%2BmEkBtfA8GmNGL7PBq9taVjzR2fUyF%2FjFNPDa4BZY77Lz%2FAaWlN6H%2BSfxipp73%2BSVeIeH1RQ3Vbt96PtOlNFda3izz85Xyl8rsmpzwWSnP%2F%2FhF3i3yoQfju%2BewSrBEooX1x8L6k2RfKwcqoEjDLGakkhq8a1nBPOay8Hd7zR8WY5cAzK2epi3Bt82%2F2aTrhh1SeOu7Ub9xJ0iVpcC22ayMlOxBz%2FCFsD1kTbvXHHYF9ka9wDW%2BPfYWvca7ZGvmZrTs9loq1xz9QvANqqz8X7NE5szUQTmZ8NvXvHoQiDuaHzNFj552HOFTM%2F5paRPWDEX%2Bj8LtVjlbAd39mkgF3BSkMd8yLMu24T7MqBLPySun1TRa7Jipp7ypniOws08AZ9Uc%2BPlUIcZB%2FmKt4nhBYdr6dsGdX0w1w3mFkT1alYhQr%2BEKzTmf7%2FBNuA7xuSdgzta2LcKCkHUnP6ho%2BPpca%2FJjXKVak5eTs9Sc32rNQcvwHkSGrMDD0bqpQCa9mgXJDJESnAYzEqi1ID1sGUxGm0AGv8uDjhUQKtW9qKCoASvulsyTh6R%2BAlJNdicygpB1LzCyLYeIqQ6s3HGDMBtklS42KsDrOpmHtWqEoDK4TgWqriTKjSR6ETFxyvwb8Tg7FLF2vnuJ2gV2NJVOFAUQSWFacQfyIq%2F18ULTD5%2Fk1L7hdUAeG%2BHzCq26p%2Bf3yP0hlGFV5jVGczp4LxnzAq%2BfBNJ8cnwhieVRA1seJUoUIVQHRiysRa8g0ba5r4HWTDwIjSRJwgu5bRgWce1Fn%2BlFd8Q%2B04VdgXowMUG0zNv2MEG3%2FfXvgdfIzND%2Ff%2FaYj38wrH2xHvyy%2FGa3sV%2BKa97swWxsBrG%2B16sxN1oonX7XU7bVfqmS8v7faowSY6Y7XI9LwU1iXUh9WyFZoRD7svXksZ9WDtth0%2F3Ay6zQXrSNBe3dq%2B7TBzshkk6V9OPX1pyr2p3Z1I0az3V9RJLcfrzTw1%2Bt6ebqWusvo%2BTF86g6qfDTrV944x6g5q9muTt%2FthTZ61%2FbTrVO1m4DMtrEZqX%2FUzb5K2hvVFue%2FZtfY0rQ3bvcpAHVWbfCR1aqOqm9oLX6lKXTXesulibCdtw%2BlUnbbS3oTmyGGpJfX4aNZXo3IvbX%2F3gHJ1pnqtOavWB97LbGiUYT%2Br3sCX54E62gZYq5uktXYnVjpeUwrro9dh92Xu%2BNGEpc%2B1fjqaO9WqM6hGuj3Vv3tp1G6n5aDvv7y11J7S6OgVpzMKgna46debXVt2lSCN%2FgqnTd4yQ96s9tKg89Kzk5EfjeVJc%2FKCccFXW26vWn5TC7pRy5ulTpS2nU46V33zWfcncebL9l%2FMT%2FtRDS5Te6tGN9U7RrXXSstqTx1tQiXUW2k6ZWqse94LWNHR2DeaCvSlupPnRVNpe81u5LrqSPPTl8SrL9aRUQ68qd4MZi%2F1sNueD2cvahPGamey1mmXayD1Zr%2FWrAXyS8tuSRmruarLR%2FVBO32xO5IGPOzF85urTnUxAt3Dh92y1FQWW1tdjNvSaht51RW0zXpKsIomsh%2Bl0WvTGEktXuKu%2FPzmtUfvvlwed4xoHfia1jKlbAD46XVGelSrToe1icz8xcivt3kbuHCr03P7U3sUyPbIln0Jxl9zp%2Bkb84EhVduNfibPOjVt1fN73Z787MG%2Btuxu9ZsNexNOo1nk9RbtSbNnTxZtf1qtsO7Ca0%2Bjfkt5TqK0mrm8uRxO23V3FildNYBx2t%2F8KuiTbu97v%2B7Lg%2BmiMzSbUyaNNMabesdsmq3p9p9hF7BSs5tRtWpEiV0Pk7bdlXtNd%2Foy7aXNtKvY3%2Bx0wvvpRA2UnteurdJBOur2wVNrKVXH6%2FibSK1Wm92F1ak2Lbe7UHsde9qVowarSsTlCtZHfykRPtEficS%2F9oh%2FxHG4PfgDkLf8Icn9n5OsDefT4eotg%2B%2Bj4Tge5X9S8kn%2BJh6zGUerUf6Ub%2FqzaMwfi73g1%2Bz4a38pvse7rhX8m9K3%2FaFLuCP%2FW5efu4%2Fu8JfDN2eQ0B%2Bs%2FOAuuv5tPr92ZT6K2lsfcD6P8O9nmv8P%3C%2Fdiagram%3E%3C%2Fmxfile%3E)

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

[image1]: <data:image/png;base64,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bhstCJp+dnMrotm+fftE06ZN1WIiihODoL6sr36klTvuuEPUqFFDLaYi69evl5Mqdu7cqR6ylI4gOHv2bPm4AwcOFF988YV62BG4f6vJMaHu24KwcXy2u4aLy8LPC9weYc843+hmDXUhF0ZtFbQW2vou/PGMUBlogQx1DQeCnBEKg2MEi37mYFdylCBop2sYk3WitbgSkT0MgvqyvvqRdrZv3y569+6tFvvau+++K2644Qa1OKpIFb6T8LvCen94LKz3t2vXLvWUlPjss8/ExRdfLIcUxLShMEKrnD9hcoqqdu3acjFyIkoeg6C+Ul8rkmPcCDFeksjrkcht4oGZ3ngMTFr56quv1MMpd9ppp4njjz9eLQ5yY4kVrzAmm8jvldbLsWPHii5duoSVEVHiGAT1ldpakRyHSv7nn39Wi30lLw/LgyT21k30dpFs2hRY7w/3O2nSJG1akDCUYMmSJWoxxTBt2jQ5lhPbERKRcxgE9eVsrUgp980334gqVaqoxb7Rp08f8dprr6nFtjkRBI31/g477DDx/vvvq4e18fbbb4tmzZqJBx98UD1Eiptvvll07NhRLuVDRM5jENRX8rUiuQ6TD1544QW1OOOhq65SpUpqcVySCYIICSeccIK8D6z3t3//fvUULR111FGiZs2a9sYO+szatWvl2FsEZiJKHQZBfSVeK1Ja5eTkiMaNG6vFGat58+Ziw4bkB7fFGwSN9f6wr++yZcvUw56CdfDw82PfYr+bMWOGfC3eeust9RBpaMGCBWLChAnisssuk9e9unXrylZ5/A4jfaHFHn8ANWnSRC68PmzYMLF06VKxY8cO9e7JBQyC+oqvViStYCmSkSNHqsUZ5fPPP5ezN//55x/1UEJiBUGs9/fkk0/K87BN3Y8//qiekhHwvsFOGahYnVzTUFdr1qyRrX74vU6cOFH8+eef6imUZgjlQ4YMCQa5iy66SK65iTVUnWp937t3r1i5cqUYNWqUuOmmm2RQrFixorjkkkuSXtidomMQ1Ff0WpG0FyvYeF3lypVF586d1eKERXu93njjDXm8Vq1aKVvvTzfdu3eXP/MFF1wgNm7cqB72vE8++UTcc8898me86667xKpVq9RTKI3++usvMX/+fNlih9/R+eefL5eFcuoPPzsw5hhjj41WxEcffVQ9hRzAIKivyLUieQZmOWaayZMn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kLz44otq165d5uFJEbBBCLqpqalRX//61yX+Fzf8qDdbTJg1TKzgzTdzSw7JBKwniMko1d2VG/ygsVh4LeK5CEEN4jm+//3vizCoNPL5PALDsPglLHj5UJckRgth6dKlqmXLlrQEFhm47SZOnBgXcuedd54s0GgvWYjHwg16kMN6eNddd6nhw4eLUDzmmGOk8w6yUUl42CYETTZs2CBzPHoin3/++WJdDhvWESQlJwhLoIktlkGAXpaIiXNT6I8KEwSOUUkdJtCbOcxA5HLhL3/5i+rfvz87sBSB//3vf2IN+cQnPiG/p0mTJslYKUGIC9p6de3aVeKeUZqEBIftQtBk06ZN0vHjyCOPlO/oPffcY+4SGJ/5zGfEkwWP1u9+9zuxfkOQLl682Nw1FApbFUnZArGWb3JIJmBhtCF5RIMfMGoGuv9fKPjssIChqGklAGvLTTfdJL0+EW8VVfDduPjii81hEjAvvPCCOuqoo1Tz5s3FCmhjPN/jjz8urb/at29fsV0tik25CUENEjvgJUBlCnwfvve976n333/f3K0g3L2GUfifvYYJCRjUzoN1EAQhBN3AqlquBU29gGiGWzQqIKsQyVI/+MEPzE0kQBDojt9eu3bt1GuvvWZuth5knqL00tixY81NxCflKgS9WL58uRo/frx8p0eMGBGoaAsqXCsXgl0VCbEULEDarRskcGfBdYCA9EoBLhDc+SKYupJZsGCBfB9Gjx5tbiIBgj7f+JyL5eYKC4QMnHvuueqGG24wNxEfVJIQ1GzdulV985vflDhTvD/Uoy0UCkFCQgSJLEELQTdwreL4KGZaKWByw3uaO3euuaksQeIB3k+nTp3U3r17zc0kQHBDgazMMEJQSk2HDh3kQfxTiULQBAmYuGFAxjrmmdtvv93cJSsUgoSEDH6ceKA0TFggngTnQNxdJYGSMyi1UE79PREWgLph+Hug9dS///1vcxcSMHPmzFHV1dXqnXfeMTdVHGeddZbq3LmzOUw8KFchCKsfLH3wIEyZMkUswsguxt8e5cX0mgKr4Omnn6769esnVSaQADVv3jx53XPPPef7ge5W5limRxBQCJJIoa1bYVoGwa9+9SvJPrzzzjsDK31hAwjs//a3vy1lNzDpIdj/vffeM3crKQcPHlR33323+trXvqY+/elPq2984xuepYRIOIT927KJw4cP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>