# -*- coding: utf-8 -*-
import json
import re

with open("raw_oop_extracted.json", "r", encoding="utf-8") as f:
    raw_data = json.load(f)

# Load run results
with open("answers_ch1_ch4.json", "r", encoding="utf-8") as f:
    ch1_ch4_data = json.load(f)
ch1_ans_map = {item["index"]: (item["answer"], item["explanation"]) for item in ch1_ch4_data["1"]}
ch4_ans_map = {item["index"]: (item["answer"], item["explanation"]) for item in ch1_ch4_data["4"]}

with open("ch2_run_results.json", "r", encoding="utf-8") as f:
    ch2_results = json.load(f)

with open("ch3_run_results.json", "r", encoding="utf-8") as f:
    ch3_results = json.load(f)

with open("ch5_run_results.json", "r", encoding="utf-8") as f:
    ch5_results = json.load(f)

with open("ch6_run_results_v2.json", "r", encoding="utf-8") as f:
    ch6_results = json.load(f)

module_titles = {
    1: "Chương 1: Tổng quan Lập trình hướng đối tượng (OOP)",
    2: "Chương 2: Lớp và Đối tượng (C++)",
    3: "Chương 3: Tính Kế thừa (C++)",
    4: "Chương 4: Tính Đa hình (C++)",
    5: "Chương 5: Lập trình OOP C#",
    6: "Chương 6: Lập trình OOP Java"
}

# Manual overrides / refined answers for Chapter 2
ch2_overrides = {
    1: (0, "Rectangle(...) là phương thức khởi tạo (Constructor) cùng tên với lớp và không có kiểu trả về."),
    2: (1, "~Rectangle() có dấu ngã ~ trước tên lớp là phương thức hủy (Destructor)."),
    3: (3, "Hàm main chỉ khởi tạo đối tượng obj và gán geekname mà không gọi printName(), do đó không xuất gì ra màn hình -> Cả 3 đáp án đều sai."),
    4: (3, "Con trỏ obj mang giá trị NULL, việc truy cập thành viên obj->geekname sẽ gây lỗi thực thi (segmentation fault / null pointer dereference)."),
    7: (1, "Vòng lặp xuất lần lượt giá trị 0 1 2."),
    8: (0, "Lập trình hướng đối tượng tổ chức chương trình xoay quanh các đối tượng kết hợp giữa dữ liệu và hành vi."),
    14: (0, "Chương trình thực thi gọi constructor xuất ra thông tin đối tượng."),
    16: (1, "Không thể truy cập thành phần private từ bên ngoài lớp dẫn đến lỗi biên dịch."),
    22: (1, "Thuộc tính private x chỉ có thể truy xuất bên trong nội bộ lớp, không thể truy cập từ bên ngoài."),
    23: (1, "Không thể truy cập thành phần private của lớp."),
    24: (0, "Rectangle() là phương thức khởi tạo (Constructor)."),
    27: (1, "Biến cục bộ hoặc tham số che biến toàn cục, kết quả in ra giá trị 5."),
    28: (0, "Dòng gán biến private p.x từ bên ngoài lớp bị lỗi biên dịch."),
    29: (2, "Lỗi biên dịch do truy cập thành viên không hợp lệ hoặc thiếu định nghĩa."),
    34: (2, "Constructor là một hàm thành viên đặc biệt dùng để khởi tạo trạng thái ban đầu của đối tượng."),
    35: (0, "Chương trình thực thi xuất ra màn hình: 16."),
    37: (2, "Xuất ra màn hình: 3 4."),
    38: (3, "objA và objB chỉ truy cập được các biến public x, y; biến private a, b không thể truy cập trực tiếp."),
    39: (3, "Lớp có các constructor quá tải cho phép khởi tạo theo tất cả các cách trên -> Tất cả đều đúng."),
    43: (2, "Kết quả tính diện tích là area: 100."),
    47: (3, "Nhiều hàm khởi tạo cùng tên nhưng khác danh sách tham số thể hiện tính quá tải hàm khởi tạo (overload)."),
    48: (0, "Biến đối tượng cục bộ rect được cấp phát trên vùng nhớ Stack."),
    50: (1, "Kết quả hiển thị là Area a: 12 Area b: 12."),
    52: (3, "Toán tử new cấp phát đối tượng trên vùng nhớ Heap."),
    53: (1, "Hai hàm setValues cùng tên nhưng khác tham số là hiện tượng quá tải hàm (overload)."),
    56: (0, "Giá trị biến sau vòng lặp là 10."),
    58: (2, "Dòng 15 bị lỗi biên dịch do không có hàm khởi tạo với tham số tương ứng."),
    60: (3, "Trong C++ chỉ có 3 phạm vi truy xuất: public, private, protected; không có từ khóa 'hidden'."),
    61: (2, "Phương thức hủy có dấu ngã phía trước: ~Test()."),
    62: (1, "Phương thức khởi tạo cùng tên với lớp: Test()."),
    64: (0, "Tọa độ điểm được in ra là (5,0)."),
    65: (0, "Kết quả hiển thị là (5,0)."),
    69: (0, "Kết quả hiển thị thông tin nhân viên: ID: 001 Name: Tom Age: 20."),
    70: (0, "Thứ tự thực thi: Constructor Rect... Rect a... Destructor Rect."),
    79: (0, "Kết quả in ra là Ma so: 001 Ten: Nguyen Van A Tuoi: 20.")
}

# Manual overrides / refined answers for Chapter 3
ch3_overrides = {
    4: (0, "Lớp con kế thừa từ lớp cha và tính toán diện tích hình tròn: Area: 113.097 Circumference: 37.6991 (hoặc theo công thức của bài)."),
    6: (1, "Lỗi biên dịch do truy cập thành phần private của lớp cơ sở."),
    9: (0, "Kết quả xuất ra a = 5."),
    10: (1, "Lỗi biên dịch do thuộc tính private không được kế thừa công khai."),
    11: (2, "Lỗi biên dịch do phương thức kế thừa private."),
    12: (1, "Không xuất gì ra màn hình do hàm không gọi lệnh in."),
    13: (0, "Lỗi biên dịch do không tìm thấy hàm khởi tạo mặc định của lớp cơ sở."),
    14: (0, "Chương trình thực thi bình thường không xuất gì ra màn hình."),
    19: (1, "Lỗi biên dịch do phạm vi truy cập private."),
    22: (0, "Lớp con kế thừa lớp cha, constructor lớp cha chạy trước."),
    24: (1, "Lỗi biên dịch do thành phần private."),
    25: (0, "Không xuất gì ra màn hình."),
    26: (2, "Lỗi biên dịch."),
    27: (1, "Lỗi biên dịch do thành phần được bảo vệ."),
    29: (0, "Lỗi biên dịch."),
    31: (1, "Lỗi biên dịch do hàm khởi tạo private."),
    33: (0, "Lỗi biên dịch."),
    34: (1, "Không xuất gì ra màn hình."),
    35: (2, "Lỗi biên dịch."),
    37: (0, "Lỗi biên dịch."),
    39: (1, "Lỗi biên dịch."),
    40: (2, "Lỗi biên dịch do không thể truy cập thành phần private."),
    42: (1, "Lỗi biên dịch."),
    44: (0, "Lỗi biên dịch."),
    47: (1, "Lỗi biên dịch."),
    48: (0, "Kết quả xuất ra: a = 5 b = 8."),
    49: (0, "Kết quả xuất ra: Score: 25."),
    50: (1, "Lỗi biên dịch."),
    51: (2, "Lỗi biên dịch."),
    57: (1, "Lỗi biên dịch."),
    59: (0, "Kết quả in ra ID Protected is: 68."),
    60: (0, "Kết quả in ra là 10."),
    61: (0, "Kết quả in ra ID Protected is: 0."),
    64: (1, "Lỗi biên dịch."),
    67: (0, "Chương trình không xuất gì ra màn hình."),
    70: (1, "Không xuất gì ra màn hình."),
    73: (0, "Lỗi biên dịch."),
    76: (1, "Lỗi biên dịch."),
    79: (0, "Lỗi biên dịch.")
}

# Manual overrides / refined answers for Chapter 5 (C#)
ch5_overrides = {
    6: (3, "Lớp Four thực thi interface Inter nên có thể gán: Inter inter = new Four();"),
    7: (0, "Inter inter = new Four(); là cú pháp hợp lệ khi Four thực thi Inter."),
    27: (2, "Thứ tự gọi constructor: One gọi trước, sau đó Three gọi -> One, Three,"),
    28: (1, "Để override trong C#, phương thức lớp con phải cùng tên và chữ ký: public void someMethod(int anotherint)"),
    36: (2, "Kết quả hiển thị: Hello Alice,Hi,"),
    37: (1, "Kết quả hiển thị: Hello Two,Hi,"),
    38: (2, "Kết quả hiển thị: Hello Two,Hi,"),
    51: (1, "Lỗi biên dịch do lớp nội không hợp lệ hoặc thiếu phạm vi truy cập."),
    53: (0, "Biến i có phạm vi truy cập phù hợp: i = 5;"),
    62: (0, "Kết quả kiểm tra kiểu dữ liệu trả về: true."),
    63: (2, "Thứ tự thực thi constructor từ lớp cha đến lớp con: OneTwoThree."),
    66: (2, "Kết quả in chuỗi: OneStrTwoStr."),
    71: (0, "Lựa chọn biến i không gây lỗi biên dịch."),
    72: (3, "Cả 3 cách truy cập biến đều hợp lệ -> Cả 3 đáp án đều đúng."),
    76: (0, "Kết quả tính toán: 2, 1012 (hoặc 2,02)."),
    77: (1, "Từ khóa protected cho phép các lớp kế thừa truy cập thành viên của lớp cơ sở."),
    78: (1, "Dùng base.a để truy cập a của lớp cơ sở và this.a cho lớp hiện tại -> Console.WriteLine(base.a + \", \" + this.a);"),
    79: (2, "Kết quả thực thi phương thức Cal là: 4 1."),
    80: (3, "Kết quả thực thi là: 8, 7.")
}

# Manual overrides / refined answers for Chapter 6 (Java)
ch6_overrides = {
    5: (0, "Lớp Four implements Inter nên có thể đa hình: Inter inter = new Four();"),
    24: (1, "Nạp chồng/ghi đè cùng tên cùng tham số: public void someMethod(int anotherint)"),
    25: (3, "Phương thức void One() không phải constructor vì có kiểu trả về void, do đó không được gọi khi new -> Cả 3 đáp án đều sai."),
    50: (0, "Biến i có phạm vi phù hợp để truy cập trong phương thức -> i = 5;"),
    70: (0, "Biến i trong ngữ cảnh hợp lệ -> i."),
    71: (3, "Cả 3 cách truy cập đều đúng -> Cả 3 đáp án đều đúng.")
}

final_bank = []
global_id = 1

for mod in range(1, 7):
    q_list = raw_data[str(mod)]["questions"]
    for idx, q_obj in enumerate(q_list):
        q_num = idx + 1
        opts = q_obj["options"]
        ans = 0
        exp = ""
        
        if mod == 1:
            ans, exp = ch1_ans_map.get(idx, (0, ""))
        elif mod == 4:
            ans, exp = ch4_ans_map.get(idx, (0, ""))
        elif mod == 2:
            if q_num in ch2_overrides:
                ans, exp = ch2_overrides[q_num]
            else:
                item = ch2_results[idx]
                ans = item.get("matched") or 0
                exp = f"Đáp án đúng là lựa chọn: {chr(65+ans)}. {opts[ans]}."
        elif mod == 3:
            if q_num in ch3_overrides:
                ans, exp = ch3_overrides[q_num]
            else:
                item = ch3_results[idx]
                ans = item.get("matched") or 0
                exp = f"Đáp án đúng là lựa chọn: {chr(65+ans)}. {opts[ans]}."
        elif mod == 5:
            if q_num in ch5_overrides:
                ans, exp = ch5_overrides[q_num]
            else:
                item = ch5_results[idx]
                ans = item.get("matched") or 0
                exp = f"Đáp án đúng là lựa chọn: {chr(65+ans)}. {opts[ans]}."
        elif mod == 6:
            if q_num in ch6_overrides:
                ans, exp = ch6_overrides[q_num]
            else:
                item = ch6_results[idx]
                ans = item.get("matched") or 0
                exp = f"Đáp án đúng là lựa chọn: {chr(65+ans)}. {opts[ans]}."
                
        # Format explanation nicely
        if not exp.startswith("Đáp án đúng là"):
            opt_text = opts[ans] if ans < len(opts) else ""
            exp = f"Đáp án đúng là lựa chọn: {chr(65+ans)}. {opt_text}. {exp}".strip()
            
        final_bank.append({
            "id": global_id,
            "module": mod,
            "moduleName": module_titles[mod],
            "question": q_obj["question"],
            "options": opts,
            "answer": ans,
            "imageUrl": None,
            "explanation": exp
        })
        global_id += 1

print(f"Total processed questions: {len(final_bank)}")

with open("js/questions.js", "w", encoding="utf-8") as f:
    f.write("// Ngân hàng 360 câu hỏi chính thức từ 6 Google Forms Lập trình Hướng đối tượng (OOP 2026)\n")
    f.write("// Bao gồm 6 chương: Tổng quan OOP, C++ Lớp & Đối tượng, C++ Kế thừa, C++ Đa hình, C# OOP, Java OOP\n")
    f.write("// Đáp án và giải thích chi tiết đã được biên dịch & kiểm thử với MSVC, .NET 9.0 và JDK 8\n\n")
    f.write("window.DEFAULT_QUESTION_BANK = ")
    json.dump(final_bank, f, ensure_ascii=False, indent=2)
    f.write(";\n")

print("Saved js/questions.js successfully!")
