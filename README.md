# HỆ THỐNG THI VÀ HỌC TRẮC NGHIỆM LẬP TRÌNH HƯỚNG ĐỐI TƯỢNG (OOP 2026)
### TRƯỜNG CAO ĐẲNG CÔNG THƯƠNG TP.HCM (HITC) - KHOA CÔNG NGHỆ THÔNG TIN

---

## 🌟 TỔNG QUAN DỰ ÁN

Hệ thống thi và ôn luyện trắc nghiệm trực tuyến dành cho sinh viên Trường Cao Đẳng Công Thương TP.HCM (HITC), phục vụ học tập và thi học phần **Lập trình Hướng đối tượng (OOP)** năm 2026.
Toàn bộ ngân hàng câu hỏi gồm **360 câu hỏi** trích xuất từ **6 Google Forms chính thức** của giảng viên:
1. **Chương 1 (10 câu)**: Tổng quan Lập trình Hướng đối tượng (`https://forms.gle/bCyynR8j6AFwSJBb9`)
2. **Chương 2 (80 câu)**: Lớp và Đối tượng C++ (`https://forms.gle/Cu694ZH6GfSD4JDCA`)
3. **Chương 3 (80 câu)**: Tính Kế thừa C++ (`https://forms.gle/Z9oeLfaJuC7tE9926`)
4. **Chương 4 (30 câu)**: Tính Đa hình C++ (`https://forms.gle/4K46XXh6QAz6bo9LA`)
5. **Chương 5 (80 câu)**: Lập trình OOP C# (`https://forms.gle/1GYWNQSZzPuL4Qzn8`)
6. **Chương 6 (80 câu)**: Lập trình OOP Java (`https://forms.gle/MppHSxcTfQ7N7iqq6`)

---

## 🎯 CÁC TÍNH NĂNG NỔI BẬT

### 1. Phòng Thi Trắc Nghiệm (`index.html`)
- **Menu lựa chọn 3 phương án thi chuẩn**:
  - **Gói 30 câu (30 phút)**:
    - Chương 1: 3 câu
    - Chương 2: 7 câu
    - Chương 3: 7 câu
    - Chương 4: 7 câu
    - Chương 5 (C#): 3 câu
    - Chương 6 (Java): 3 câu
  - **Gói 60 câu (60 phút)**:
    - Chương 1: 2 câu
    - Chương 2: 16 câu
    - Chương 3: 16 câu
    - Chương 4: 16 câu
    - Chương 5 (C#): 5 câu
    - Chương 6 (Java): 5 câu
  - **Gói 90 câu (90 phút)**:
    - Chương 1: 3 câu
    - Chương 2: 25 câu
    - Chương 3: 26 câu
    - Chương 4: 26 câu
    - Chương 5 (C#): 5 câu
    - Chương 6 (Java): 5 câu
- **Giao diện chuẩn thi trắc nghiệm**:
  - Logo chính thức Trường Cao Đẳng Công Thương TP.HCM (HITC).
  - Lưới ô số câu hỏi trực quan (thích ứng 30, 60, 90 ô kèm cuộn thông minh).
  - Trạng thái trực quan: Đã làm (xanh đậm), Đang làm (viền đỏ), Đặt cờ (🚩 cờ cam).
  - Khối hiển thị mã nguồn C++, C#, Java chuyên nghiệp (`Consolas`, giao diện tối dễ đọc).
  - Đồng hồ đếm ngược có cảnh báo khi còn dưới 5 phút, tự động nộp bài khi hết giờ.
  - Tính điểm theo thang điểm 10.0, thống kê chi tiết tỷ lệ đúng từng chương.
  - Chế độ xem lại bài thi (Review) hiển thị đáp án đúng và lời giải chi tiết.

### 2. Học Thực Hành 6 Module (`practice.html`)
- **Giao diện tổng quan 6 Chương**:
  - Hiển thị đầy đủ thông tin từng chương, số lượng câu, mô tả trọng tâm.
  - Liên kết trực tiếp đến Google Form gốc.
  - Lưu tiến độ học tập (% hoàn thành, số câu đúng/sai) vào `localStorage`.
- **2 Chế độ ôn luyện linh hoạt**:
  - **Chế độ từng câu (Interactive)**: Chọn đáp án -> Phản hồi ngay Đúng/Sai + Hiển thị lời giải chi tiết.
  - **Chế độ danh sách (List Mode)**: Cuộn xem toàn bộ 10, 30 hoặc 80 câu kèm đáp án để ôn tập nhanh.
- **Bộ lọc câu hỏi**: Lọc theo Chưa làm, Đã làm sai, Đã làm đúng.
- Nút "Làm lại chương này" để xóa tiến độ và luyện tập lại từ đầu.

### 3. Trang Quản Trị & Tra Cứu (`admin.html`)
- Tra cứu nhanh toàn bộ 360 câu hỏi theo từ khóa hoặc lọc theo từng chương.
- Kiểm tra đáp án và lời giải chi tiết.

---

## 🚀 HƯỚNG DẪN CHẠY VÀ SỬ DỤNG

1. **Mở trực tiếp trên trình duyệt**:
   - Nhấp đúp vào tệp `index.html` để vào phòng thi.
   - Nhấp đúp vào tệp `practice.html` để vào học thực hành 6 chương.
   - Hoàn toàn không cần cài đặt Web Server hay phần mềm bổ sung (chạy Offline 100%).

2. **Đưa lên mạng Internet miễn phí**:
   - Xem hướng dẫn chi tiết tại `HUONG_DAN_GITHUB.md` để triển khai lên GitHub Pages trong 2 phút.
