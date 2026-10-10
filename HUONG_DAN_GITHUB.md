# HƯỚNG DẪN ĐƯA WEBSITE TRẮC NGHIỆM OOP LÊN GITHUB PAGES (MIỄN PHÍ)

Chỉ với 4 bước đơn giản, bạn có thể đưa toàn bộ hệ thống lên Internet để sinh viên và bạn bè truy cập làm bài trên máy tính hoặc điện thoại bất cứ lúc nào!

---

### BƯỚC 1: TẠO KHO LƯU TRỮ TRÊN GITHUB (REPOSITORY)
1. Đăng nhập vào tài khoản [GitHub](https://github.com/).
2. Bấm vào dấu **+** ở góc trên bên phải -> chọn **New repository**.
3. Điền thông tin:
   - **Repository name**: ví dụ `WebsiteOOP2026` hoặc `TracNghiemOOP`.
   - Chọn chế độ: **Public**.
   - Bấm **Create repository**.

---

### BƯỚC 2: TẢI MÃ NGUỒN LÊN GITHUB
Bạn có thể dùng Git lệnh trong PowerShell tại thư mục `d:\WEBSITEOOP2026`:

```bash
git init
git add index.html practice.html admin.html README.md css/ js/ assets/
git commit -m "Khoi tao he thong thi trac nghiem OOP 2026 voi 3 goi thi va 6 module thuc hanh"
git branch -M main
git remote add origin https://github.com/<TEN_GITHUB_CUA_BAN>/WebsiteOOP2026.git
git push -u origin main
```

*(Hoặc kéo thả toàn bộ thư mục lên giao diện web của GitHub).*

---

### BƯỚC 3: KÍCH HOẠT GITHUB PAGES
1. Tại trang Repository trên GitHub, bấm vào tab **Settings** (Cài đặt).
2. Ở cột bên trái, chọn mục **Pages**.
3. Tại phần **Build and deployment**:
   - **Source**: Chọn `Deploy from a branch`.
   - **Branch**: Chọn nhánh `main` và thư mục `/ (root)`.
   - Bấm **Save**.

---

### BƯỚC 4: HOÀN TẤT VÀ TRUY CẬP
Sau 1-2 phút, GitHub sẽ cung cấp đường link website trực tiếp của bạn:
👉 `https://<TEN_GITHUB_CUA_BAN>.github.io/WebsiteOOP2026/`

- Trang thi chính thức: `https://<TEN_GITHUB_CUA_BAN>.github.io/WebsiteOOP2026/`
- Trang học thực hành 6 chương: `https://<TEN_GITHUB_CUA_BAN>.github.io/WebsiteOOP2026/practice.html`
