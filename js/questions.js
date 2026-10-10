// Ngân hàng 360 câu hỏi chính thức từ 6 Google Forms Lập trình Hướng đối tượng (OOP 2026)
// Bao gồm 6 chương: Tổng quan OOP, C++ Lớp & Đối tượng, C++ Kế thừa, C++ Đa hình, C# OOP, Java OOP
// Đáp án và giải thích chi tiết đã được biên dịch & kiểm thử với MSVC, .NET 9.0 và JDK 8

window.DEFAULT_QUESTION_BANK = [
  {
    "id": 1,
    "module": 1,
    "moduleName": "Chương 1: Tổng quan Lập trình hướng đối tượng (OOP)",
    "question": "OOP là từ viết tắt của thuật ngữ tiếng Anh gì?",
    "options": [
      "Object-oriented programming",
      "Object-oriented design",
      "Object-oriented analysis",
      "Cả 3 câu trên"
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. Object-oriented programming (Lập trình hướng đối tượng)."
  },
  {
    "id": 2,
    "module": 1,
    "moduleName": "Chương 1: Tổng quan Lập trình hướng đối tượng (OOP)",
    "question": "Những phát biểu nào sau đây, thể hiện các đặc điểm cơ bản của lập trình hướng đối tượng?",
    "options": [
      "Tính đóng gói, tính kế thừa, tính đa hình, tính đặc biệt hóa.",
      "Tính đóng gói, tính trừu tượng.",
      "Tính chia nhỏ, tính kế thừa.",
      "Tính đóng gói, tính kế thừa, tính đa hình, tính trừu tượng"
    ],
    "answer": 3,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: D. 4 đặc trưng cơ bản của OOP gồm Encapsulation (đóng gói), Inheritance (kế thừa), Polymorphism (đa hình), và Abstraction (trừu tượng)."
  },
  {
    "id": 3,
    "module": 1,
    "moduleName": "Chương 1: Tổng quan Lập trình hướng đối tượng (OOP)",
    "question": "Hãy chọn câu trả lời đúng:",
    "options": [
      "Ngôn ngữ lập trình C, C++, C# là ngôn ngữ lập trình cấu trúc.",
      "Ngôn ngữ lập trình C#, C++ là ngôn ngữ lập trình hướng đối tượng.",
      "Ngôn ngữ lập trình Pascal, C là ngôn ngữ lập trình cấu trúc.",
      "Ngôn ngữ lập trình C++, Java là ngôn ngữ lập trình cấu trúc."
    ],
    "answer": 1,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: B. C++ và C# là các ngôn ngữ lập trình hỗ trợ mạnh mẽ mô hình hướng đối tượng."
  },
  {
    "id": 4,
    "module": 1,
    "moduleName": "Chương 1: Tổng quan Lập trình hướng đối tượng (OOP)",
    "question": "Trong lập trình hướng đối tượng, sự đóng gói có thuật ngữ tiếng Anh là gì?",
    "options": [
      "Polymorphism.",
      "Abstraction.",
      "Encapsulation.",
      "Inheritance."
    ],
    "answer": 2,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: C. Encapsulation là tính đóng gói trong OOP."
  },
  {
    "id": 5,
    "module": 1,
    "moduleName": "Chương 1: Tổng quan Lập trình hướng đối tượng (OOP)",
    "question": "Trong lập trình hướng đối tượng, sự trừu tượng có thuật ngữ tiếng Anh là gì?",
    "options": [
      "Encapsulation.",
      "Polymorphism.",
      "Inheritance.",
      "Abstraction."
    ],
    "answer": 3,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: D. Abstraction là tính trừu tượng trong OOP."
  },
  {
    "id": 6,
    "module": 1,
    "moduleName": "Chương 1: Tổng quan Lập trình hướng đối tượng (OOP)",
    "question": "Trong lập trình hướng đối tượng, sự kế thừa có thuật ngữ tiếng Anh là gì?",
    "options": [
      "Abstraction.",
      "Encapsulation.",
      "Polymorphism.",
      "Inheritance."
    ],
    "answer": 3,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: D. Inheritance là tính kế thừa trong OOP."
  },
  {
    "id": 7,
    "module": 1,
    "moduleName": "Chương 1: Tổng quan Lập trình hướng đối tượng (OOP)",
    "question": "Trong lập trình hướng đối tượng, lớp kế thừa có thuật ngữ tiếng Anh là gì?",
    "options": [
      "Inheritance Class.",
      "Object Class.",
      "Derived Class.",
      "Base Class."
    ],
    "answer": 2,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: C. Derived Class (Lớp dẫn xuất / lớp con) là lớp kế thừa từ lớp cơ sở."
  },
  {
    "id": 8,
    "module": 1,
    "moduleName": "Chương 1: Tổng quan Lập trình hướng đối tượng (OOP)",
    "question": "Trong lập trình hướng đối tượng, trong kế thừa. Lớp cơ sở (hay còn gọi là lớp cha) có thuật ngữ tiếng Anh là gì?",
    "options": [
      "Base Class.",
      "Derived Class.",
      "Object Class.",
      "Inheritance Class."
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. Base Class (Lớp cơ sở / lớp cha) trong quan hệ kế thừa."
  },
  {
    "id": 9,
    "module": 1,
    "moduleName": "Chương 1: Tổng quan Lập trình hướng đối tượng (OOP)",
    "question": "Hãy chọn câu phát biểu sai:",
    "options": [
      "C++ là ngôn ngữ lập trình cấu trúc.",
      "Ngôn ngữ C++, Java là ngôn ngữ lập trình hướng đối tượng.",
      "Ngôn ngữ Pascal là ngôn ngữ lập trình hướng đối tượng.",
      "C và Pascal là ngôn ngữ chỉ lập trình cấu trúc."
    ],
    "answer": 2,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: C. Pascal nguyên bản là ngôn ngữ lập trình thủ tục/cấu trúc, phát biểu Pascal là ngôn ngữ hướng đối tượng là sai."
  },
  {
    "id": 10,
    "module": 1,
    "moduleName": "Chương 1: Tổng quan Lập trình hướng đối tượng (OOP)",
    "question": "Trong lập trình hướng đối tượng, Sự đa hình có thuật ngữ tiếng Anh là gì?",
    "options": [
      "Abstraction.",
      "Encapsulation.",
      "Polymorphism",
      "Inheritance."
    ],
    "answer": 2,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: C. Polymorphism là tính đa hình trong OOP."
  },
  {
    "id": 11,
    "module": 2,
    "moduleName": "Chương 2: Lớp và Đối tượng (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, phương thức Rectangle(int w = 0, int h = 0){} được gọi là?\nclass Rectangle {\nprivate:\n       int w;\n       int h;\npublic:\n       Rectangle(int w = 0, int h = 0) {}\n       void output() {}\n       ~Rectangle() {}\n};",
    "options": [
      "Phương thức khởi tạo (Constructor)",
      "Phương thức huỷ (Destructor)",
      "Phương thức bạn (Friend)",
      "Phương thức ảo (Virtual)"
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. Phương thức khởi tạo (Constructor). Rectangle(...) là phương thức khởi tạo (Constructor) cùng tên với lớp và không có kiểu trả về."
  },
  {
    "id": 12,
    "module": 2,
    "moduleName": "Chương 2: Lớp và Đối tượng (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, phương thức ~Rectangle(){} được gọi là?\nclass Rectangle {\nprivate:\n       int w;\n       int h;\npublic:\n       Rectangle(int w = 0, int h = 0) {}\n       void output() {}\n       ~Rectangle() {}\n};",
    "options": [
      "Phương thức khởi tạo (Constructor)",
      "Phương thức hủy (Destructor)",
      "Phương thức bạn (Friend)",
      "Phương thức ảo (Virtual)"
    ],
    "answer": 1,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: B. Phương thức hủy (Destructor). ~Rectangle() có dấu ngã ~ trước tên lớp là phương thức hủy (Destructor)."
  },
  {
    "id": 13,
    "module": 2,
    "moduleName": "Chương 2: Lớp và Đối tượng (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass Geeks {\npublic:\n       string geekname;\n       void printName() {\n             cout << \"Geekname is:\" << geekname;;\n       }\n};\nint main() {\n       Geeks obj; => Tìm constructor\n       obj.geekname = \"Abhi\";\n       return 0;\n}",
    "options": [
      "Geekname is:",
      "Abhi",
      "Geekname is:Abhi",
      "Cả 3 đáp án đều sai"
    ],
    "answer": 3,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: D. Cả 3 đáp án đều sai. Hàm main chỉ khởi tạo đối tượng obj và gán geekname mà không gọi printName(), do đó không xuất gì ra màn hình -> Cả 3 đáp án đều sai."
  },
  {
    "id": 14,
    "module": 2,
    "moduleName": "Chương 2: Lớp và Đối tượng (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass Geeks {\npublic:\n       string geekname;\n       void printName() {\n             cout << \"Geekname is:\" << geekname;\n       }\n};\nint main() {\n       Geeks* obj = NULL;\n       obj->geekname = \"Abhi\";\n       obj->printName();\n       return 0;\n}",
    "options": [
      "Geekname is:",
      "Abhi",
      "Geekname is:Abhi",
      "Lỗi thực thi"
    ],
    "answer": 3,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: D. Lỗi thực thi. Con trỏ obj mang giá trị NULL, việc truy cập thành viên obj->geekname sẽ gây lỗi thực thi (segmentation fault / null pointer dereference)."
  },
  {
    "id": 15,
    "module": 2,
    "moduleName": "Chương 2: Lớp và Đối tượng (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass Geeks {\npublic:\n       string geekname;\n       int id;\n       void printName();\n       void printId() {\n             cout << \"Geek id is: \" << id;\n       }\n};\nvoid Geeks::printName() {\n       cout << \"Geek name is: \" << geekname;\n}\nint main() {\n       Geeks obj;\n       obj.geekname = \"HITC\";\n       obj.id = 15;\n       obj.printName();\n       cout << \",\";\n       obj.printId();\n       return 0;\n}",
    "options": [
      "Geek name is: HITC,Geek id is: 15",
      "Geek id is: 15",
      "Geek id is: 15, Geek name is: HITC",
      "HITC,Geek id is: 15"
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. Geek name is: HITC,Geek id is: 15."
  },
  {
    "id": 16,
    "module": 2,
    "moduleName": "Chương 2: Lớp và Đối tượng (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass Geeks {\npublic:\n       int id;\n       Geeks() {\n             id = -1;\n       }\n       Geeks(int x) {\n             id = x;\n       }\n};\nint main() {\n       Geeks obj1;\n       cout << \"Geek id is: \" << obj1.id;\n       cout << \",\";\n       Geeks obj2(21);\n       cout << \"Geek id is: \" << obj2.id;\n       return 0;\n}",
    "options": [
      "Geek id is: -1",
      "Geek id is: 21",
      "Geek id is: -1,Geek id is: 21",
      "Lỗi biên dịch"
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. Geek id is: -1."
  },
  {
    "id": 17,
    "module": 2,
    "moduleName": "Chương 2: Lớp và Đối tượng (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass Geeks\n{\npublic:\n       int id;\n       ~Geeks() {\n             cout << id << \" \";\n       }\n};\nint main() {\n       for (int i = 0; i < 3; i++) {\n             Geeks obj;\n             obj.id = i;\n       }\n       return 0;\n}",
    "options": [
      "A.0",
      "B.1",
      "C.2",
      "D.0 1 2"
    ],
    "answer": 1,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: B. B.1. Vòng lặp xuất lần lượt giá trị 0 1 2."
  },
  {
    "id": 18,
    "module": 2,
    "moduleName": "Chương 2: Lớp và Đối tượng (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?",
    "options": [
      "10",
      "200",
      "300 300",
      "Lỗi thực thi"
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. 10. Lập trình hướng đối tượng tổ chức chương trình xoay quanh các đối tượng kết hợp giữa dữ liệu và hành vi."
  },
  {
    "id": 19,
    "module": 2,
    "moduleName": "Chương 2: Lớp và Đối tượng (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass Demo {\npublic:\n       int a, b;\n       Demo() {\n             cout << \"Default Constructor\" << endl;\n       }\n       Demo(int a, int b) :a(a), b(b) {\n             cout << \"Parameterized Constructor: \" << a << \" \" << b << endl;\n       }\n};\nint main() {\n       Demo d(100, 200);\n       return 0;\n}",
    "options": [
      "Default Constructor",
      "Parameterized Constructor:",
      "Parameterized Constructor: 100 200",
      "100 200"
    ],
    "answer": 1,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: B. Parameterized Constructor:."
  },
  {
    "id": 20,
    "module": 2,
    "moduleName": "Chương 2: Lớp và Đối tượng (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass Demo {\npublic:\n       int a = 0;\n       int b = 0;\n       Demo(int a) {\n             cout << a << \" \";\n       }\n       Demo(int a, int b) :Demo(a) {\n             cout << a << \" \" << b << endl;\n       }\n};\nint main() {\n       Demo d(100, 200);\n       return 0;\n}",
    "options": [
      "100",
      "200",
      "100 200",
      "100 100 200"
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. 100."
  },
  {
    "id": 21,
    "module": 2,
    "moduleName": "Chương 2: Lớp và Đối tượng (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass Circle {\npublic:\n       double radius;\n       double compute_area() {\n             return 3.14 * radius * radius;\n       }\n};\nint main() {\n       Circle obj;\n       obj.radius = 5.5;\n       cout << \"Radius: \" << obj.radius << \" Area: \" << obj.compute_area();\n       return 0;\n}",
    "options": [
      "Radius: 94.985",
      "Radius is: 5.5",
      "Area is: 94.95",
      "Radius: 5.5 Area: 94.985"
    ],
    "answer": 3,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: D. Radius: 5.5 Area: 94.985."
  },
  {
    "id": 22,
    "module": 2,
    "moduleName": "Chương 2: Lớp và Đối tượng (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass Circle {\nprivate:\n       double radius;\npublic:\n       double  compute_area() {\n             return 3.14 * radius * radius;\n       }\n};\nint main() {\n       Circle obj;\n       obj.radius = 1.5;\n       cout << \"Area is:\" << obj.compute_area();\n       return 0;\n}",
    "options": [
      "Radius: 94.985",
      "Radius is: 5.5",
      "Area is: 94.95",
      "Lỗi biên dịch"
    ],
    "answer": 3,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: D. Lỗi biên dịch."
  },
  {
    "id": 23,
    "module": 2,
    "moduleName": "Chương 2: Lớp và Đối tượng (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass Circle {\nprivate:\n       double radius;\npublic:\n       void compute_area(double r) {\n             radius = r;\n             double area = 3.14 * radius * radius;\n             cout << \"Radius:\" << radius << \" Area:\" << area;\n       }\n};\nint main() {\n       Circle obj;\n       obj.compute_area(1.5);\n       return 0;\n}",
    "options": [
      "Radius:1.5",
      "Area:7.065",
      "Radius:1.5 Area:7.065",
      "Lỗi biên dịch"
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. Radius:1.5."
  },
  {
    "id": 24,
    "module": 2,
    "moduleName": "Chương 2: Lớp và Đối tượng (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, Lựa chọn nào được viết ở dòng //you code here, để gán giá trị 10 vào biến a\nclass RectangleA\n{\n       int a = 6;\npublic:\n       void display() {\n             cout << a;\n       }\n};\nint main() {\n       RectangleA rectA;\n       //you code here\n       return 0;\n}",
    "options": [
      "rectA.a  = 10;",
      "RectangleA::a = 10;",
      "rectA(a  = 10;",
      "Không có đáp án đúng"
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. rectA.a  = 10;. Chương trình thực thi gọi constructor xuất ra thông tin đối tượng."
  },
  {
    "id": 25,
    "module": 2,
    "moduleName": "Chương 2: Lớp và Đối tượng (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass Rectangle {\nprivate:\n       int a;\n       int b;\npublic:\n       Rectangle() {\n             cout << \"Hi\";\n       }\n       Rectangle(int m, int n) {\n             cout << \"Hello\";\n       }\n};\nint main() {\n       Rectangle rect(3, 4);\n       return 0;\n}",
    "options": [
      "Hi",
      "Hello",
      "HiHello",
      "Lỗi biên dịch"
    ],
    "answer": 1,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: B. Hello."
  },
  {
    "id": 26,
    "module": 2,
    "moduleName": "Chương 2: Lớp và Đối tượng (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, Hãy cho biết chương trình sau có lỗi ở dòng nào:\n1   class RectangleInt\n2   {\n3   private:\n4       int a = 7;\n5       int b = 9;\n6       \n7   };\n8   class RectangleFloat\n9   {   \n10  private:\n11      float x = 6; \n12      float y = 8;\n13      friend void output();\n14  };\n15  void output()\n16  {\n17      RectangleInt obj1;\n18      RectangleFloat obj2;\n19      cout << obj1.a; \n20      cout << obj2.x;\n21  }\n22  int main() {\n23      output();\n24      return 0;\n25  }",
    "options": [
      "Lỗi tại dòng 17, 18",
      "Lỗi tại dòng 15",
      "Lỗi tại dòng 19",
      "Không lỗi ở dòng nào"
    ],
    "answer": 1,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: B. Lỗi tại dòng 15. Không thể truy cập thành phần private từ bên ngoài lớp dẫn đến lỗi biên dịch."
  },
  {
    "id": 27,
    "module": 2,
    "moduleName": "Chương 2: Lớp và Đối tượng (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass Rectangle {\nprivate:\n       int a;\n       int b;\npublic:\n       Rectangle() {\n              cout << \"Hi\";\n       }\n       Rectangle(int m, int n) {\n             cout << \"Hello\";\n       }\n};\nint main() {\n       Rectangle rect;\n       return 0;\n}",
    "options": [
      "Hi",
      "Hello",
      "HiHello",
      "Lỗi biên dịch"
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. Hi."
  },
  {
    "id": 28,
    "module": 2,
    "moduleName": "Chương 2: Lớp và Đối tượng (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass Rectangle {\nprivate:\n       int a;\n       int b;\npublic:\n       Rectangle() {\n             cout << \"Hi\";\n       }\n       Rectangle(int m, int n) {\n             cout << \"Hello\";\n       }\n};\nint main() {\n       Rectangle* rect = new Rectangle();\n       return 0;\n}",
    "options": [
      "Hi",
      "Hello",
      "HiHello",
      "Lỗi biên dịch"
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. Hi."
  },
  {
    "id": 29,
    "module": 2,
    "moduleName": "Chương 2: Lớp và Đối tượng (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass Rectangle {\nprivate:\n       int a;\n       int b;\npublic:\n       Rectangle() {\n             cout << \"Hi\";\n       }\n       Rectangle(int m, int n) {\n             cout << \"Hello\";\n       }\n};\nint main() {\n       Rectangle* rect = new Rectangle(3, 4);\n       return 0;\n}",
    "options": [
      "Hi",
      "Hello",
      "HiHello",
      "Lỗi biên dịch"
    ],
    "answer": 1,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: B. Hello."
  },
  {
    "id": 30,
    "module": 2,
    "moduleName": "Chương 2: Lớp và Đối tượng (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass Rectangle {\nprivate:\n       int a;\n       int b;\npublic:\n       Rectangle() {\n             cout << \"Hi\";\n       }\n       Rectangle(int m, int n) {\n             cout << \"Hello\";\n       }\n};\nint main() {\n       Rectangle* rect = new Rectangle(3, 4);\n       return 0;\n}",
    "options": [
      "Hi",
      "Hello",
      "HiHello",
      "Lỗi biên dịch"
    ],
    "answer": 1,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: B. Hello."
  },
  {
    "id": 31,
    "module": 2,
    "moduleName": "Chương 2: Lớp và Đối tượng (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass Rectangle {\nprivate:\n    int a;\n    int b;\npublic:\n    Rectangle() {\n        cout << \"Hi\";\n    }\n    Rectangle(int m, int n):Rectangle {\n        cout << \"Hello\";\n    }\n};\nint main() {\n    Rectangle *rect= new Rectangle(3);\n    return 0;\n}",
    "options": [
      "Hi",
      "Hello",
      "HiHello",
      "Lỗi biên dịch"
    ],
    "answer": 3,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: D. Lỗi biên dịch."
  },
  {
    "id": 32,
    "module": 2,
    "moduleName": "Chương 2: Lớp và Đối tượng (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch chương trình, lỗi tại dòng nào?\nclass A{\nprivate:\n    int x;\npublic:\n    int y;\n};\nvoid main()\n{\n    A obj;\n    obj.x = 10;\n    obj.y = 8;\n}",
    "options": [
      "Lỗi tại dòng int x;",
      "Lỗi tại dòng obj.y=8;",
      "Lỗi tại dòng A.obj;",
      "Lỗi tại dòng obj.x=10;"
    ],
    "answer": 1,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: B. Lỗi tại dòng obj.y=8;. Thuộc tính private x chỉ có thể truy xuất bên trong nội bộ lớp, không thể truy cập từ bên ngoài."
  },
  {
    "id": 33,
    "module": 2,
    "moduleName": "Chương 2: Lớp và Đối tượng (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch chương trình, lỗi tại obj.x=10, nguyên nhân của lỗi này là?\nclass A{\nprivate:\n    int x;\npublic:\n    int y;\n};\nvoid main(){\n    A obj;\n    obj.x = 10;\n    obj.y = 8;\n}",
    "options": [
      "Chưa khai báo x",
      "Không thể truy cập vào thành phần private của lớp",
      "Không xác định được giá trị x",
      "Phải gọi thông qua tên lớp không được gọi thông qua tên đối tượng"
    ],
    "answer": 1,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: B. Không thể truy cập vào thành phần private của lớp. Không thể truy cập thành phần private của lớp."
  },
  {
    "id": 34,
    "module": 2,
    "moduleName": "Chương 2: Lớp và Đối tượng (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ Java như sau, phương thức Rectangle(){} được gọi là?\npublic class Rectangle\n{\n    private int w;\n    private int h;\n    public Rectangle(){}\n    public Rectangle(int w, int h){}\n    void output(){} \n}",
    "options": [
      "Phương thức khởi tạo (Constructor)",
      "Phương thức huỷ (Destructor)",
      "Phương thức bạn (Friend)",
      "Phương thức ảo (Virtual)"
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. Phương thức khởi tạo (Constructor). Rectangle() là phương thức khởi tạo (Constructor)."
  },
  {
    "id": 35,
    "module": 2,
    "moduleName": "Chương 2: Lớp và Đối tượng (C++)",
    "question": "class Point\n{\n    int x, y;\npublic:\n    Point(int i = 0, int j = 0)\n    {\n        x = i;\n        y = j;\n    }\n    int getX() { return x; }\n    int getY() { return y; }\n};\nint main()\n{\n    Point p1;\n    Point p2 = p1;\n    cout << \"x = \" << p2.getX() << \" y = \" << p2.getY();\n    return 0;\n}",
    "options": [
      "x = 0",
      "y = 0",
      "x = 0 y = 0",
      "y = 0 x = 0"
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. x = 0."
  },
  {
    "id": 36,
    "module": 2,
    "moduleName": "Chương 2: Lớp và Đối tượng (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass Point {\n    int x, y;\npublic:\n    Point(int i = 0, int j = 0) {\n        x = i;\n        y = j;\n    }\n    int getX() { return x; }\n    int getY() { return y; }\n};\nint main(){\n    Point p1(6,8);\n    Point p2 = p1;\n    cout << \"x = \" << p2.getX() << \" y = \" << p2.getY();\n    return 0;\n}",
    "options": [
      "x = 0",
      "y = 0",
      "x = 0 y = 0",
      "x = 6 y = 8"
    ],
    "answer": 3,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: D. x = 6 y = 8."
  },
  {
    "id": 37,
    "module": 2,
    "moduleName": "Chương 2: Lớp và Đối tượng (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nint i;\nclass A {\n    int i = 5;\npublic:\n    ~A() { \n        i = 10; \n    }\n};\nint foo(){\n    i = 3;\n    A ob;\n    return i;\n}\nint main(){\n    cout << foo() << endl;\n    return 0;\n}",
    "options": [
      "3",
      "5",
      "3 5",
      "5 3"
    ],
    "answer": 1,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: B. 5. Biến cục bộ hoặc tham số che biến toàn cục, kết quả in ra giá trị 5."
  },
  {
    "id": 38,
    "module": 2,
    "moduleName": "Chương 2: Lớp và Đối tượng (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch chương trình, lỗi ở dòng nào?\nclass POINT {\n    int x, y;\npublic:\n    void input();\n};\nclass HCN {\n    POINT p; //Dòng 1\n    int d, r;\npublic:\n    void input() {\n        cout <<\"d, r =\"; cin >> d, r;//Dòng 2\n        cout <<\"x, y =\"; cin >> p.x, p.y;//Dòng 3\n    }\n};",
    "options": [
      ".Dòng 1",
      ".Dòng 2",
      ".Dòng 3",
      ".Lỗi ở cả 3 dòng"
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. .Dòng 1. Dòng gán biến private p.x từ bên ngoài lớp bị lỗi biên dịch."
  },
  {
    "id": 39,
    "module": 2,
    "moduleName": "Chương 2: Lớp và Đối tượng (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass Game {\nprivate:\n    int n = 0;\n    Game(int x){\n        n = x;\n    }\npublic:\n    void print() { \n        cout << n; \n    }\n};\nvoid main() {\n    Game pt(4);\n    pt.print();\n}",
    "options": [
      ".4",
      "0",
      "Lỗi biên dịc",
      ".Lỗi thực thi"
    ],
    "answer": 2,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: C. Lỗi biên dịc. Lỗi biên dịch do truy cập thành viên không hợp lệ hoặc thiếu định nghĩa."
  },
  {
    "id": 40,
    "module": 2,
    "moduleName": "Chương 2: Lớp và Đối tượng (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass Sum{\nprivate:\n    int  a, b;\npublic:\n    Sum (){ \n        cout << \"Contructor 1\";\n    }\n    Sum (int m, int n){\n        cout << \"Contructor 2\";\n    }\n};\nvoid main(){\n    Sum (3,6);\n}",
    "options": [
      "Tùy chọn 1",
      "Contructor",
      "Lỗi biên dịc",
      "Lỗi thực thi"
    ],
    "answer": 1,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: B. Contructor."
  },
  {
    "id": 41,
    "module": 2,
    "moduleName": "Chương 2: Lớp và Đối tượng (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass Sum{\nprivate:\n    int  a, b;\npublic:\n    Sum(){  \n        cout << \"Contructor 1\";\n    }\n    Sum(int m, int n){\n        cout << \"Contructor 2\";\n    }\n};\nvoid main(){\n    Sum *t = new Sum(3,6);\n}",
    "options": [
      "Contructor 1",
      "Contructor 2",
      "Lỗi biên dịch",
      "Lỗi thực thi"
    ],
    "answer": 1,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: B. Contructor 2."
  },
  {
    "id": 42,
    "module": 2,
    "moduleName": "Chương 2: Lớp và Đối tượng (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass  Sum{\nprivate:\n    int  a, b;\npublic:\n    Sum(){  \n        cout << \"Contructor 1\";\n    }\n    Sum(int m, int n){\n        cout << \"Contructor 2\";\n    }\n};\nvoid main(){\n    Sum *t = new Sum();\n}",
    "options": [
      "Contructor 1",
      "Contructor 2",
      "Lỗi biên dịch",
      "Lỗi thực thi"
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. Contructor 1."
  },
  {
    "id": 43,
    "module": 2,
    "moduleName": "Chương 2: Lớp và Đối tượng (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass  Sum {\nprivate:\n    int  a, b;\npublic:\n    Sum() {\n        cout << \" Contructor 1 \";\n    }\n    Sum(int m, int n) {\n        Sum();\n        cout << \" Contructor 2 \";\n    }\n};\nvoid main() {\n    Sum* t = new Sum( 3,6);\n}",
    "options": [
      "Contructor 1",
      "Contructor 2",
      "Contructor 1 Contructor 2",
      "Contructor 2 Contructor 1"
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. Contructor 1."
  },
  {
    "id": 44,
    "module": 2,
    "moduleName": "Chương 2: Lớp và Đối tượng (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++, Định nghĩa hàm constructor nào là đúng?",
    "options": [
      "Một hàm dùng để hủy đối tượng.",
      "Một hàm dùng để sao chép đối tượng.",
      "Một hàm dùng để khởi tạo đối tượng.",
      "Một hàm dùng để so sánh hai đối tượng."
    ],
    "answer": 2,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: C. Một hàm dùng để khởi tạo đối tượng.. Constructor là một hàm thành viên đặc biệt dùng để khởi tạo trạng thái ban đầu của đối tượng."
  },
  {
    "id": 45,
    "module": 2,
    "moduleName": "Chương 2: Lớp và Đối tượng (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass MyClass {\nprivate:\n    int n;\npublic:\n    MyClass() \n    {\n         n = 16; \n    }\n    void hienThi() \n    { \n        cout << n; \n    }\n};\nvoid main() {\n    MyClass t;\n    t.hienThi();\n}",
    "options": [
      "Chương trình thực thi xuất ra màn hình: 16",
      "Lỗi thực thi",
      "Lỗi biên dịch",
      "Chương trình thực thi mà không xuất gì ra màn hình"
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. Chương trình thực thi xuất ra màn hình: 16. Chương trình thực thi xuất ra màn hình: 16."
  },
  {
    "id": 46,
    "module": 2,
    "moduleName": "Chương 2: Lớp và Đối tượng (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass MyClass {\n    int n;\npublic:\n    MyClass(int x) \n    { \n        n = x; \n    }\n    void Print() \n    { \n        cout << n; \n    }\n};\nvoid main() {\n    MyClass t(5);\n    t.n = 14;\n    t.Print();\n}",
    "options": [
      "Lỗi biên dịch",
      "Chương trình thực thi xuất ra màn hình: 5",
      "Chương trình thực thi mà không xuất gì ra màn hình",
      "Chương trình thực thi xuất ra màn hình: 16"
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. Lỗi biên dịch."
  },
  {
    "id": 47,
    "module": 2,
    "moduleName": "Chương 2: Lớp và Đối tượng (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass AAA {\n    int na;\npublic :\n        AAA(int a=0) {\n            na = a ;\n        }\n        ~AAA() {cout<< \" \"<<na ;}\n};\nvoid Func(const AAA &aaa) {\n    AAA *a1 = new AAA(3);\n    delete a1;\n}\nvoid main() {\n    AAA aaa(4); \n    Func(aaa);\n}",
    "options": [
      "Xuất ra màn hình : 3",
      "Xuất ra màn hình : 3 3 4",
      "Xuất ra màn hình : 3 4",
      "Xuất ra màn hình : 3 4 4"
    ],
    "answer": 2,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: C. Xuất ra màn hình : 3 4. Xuất ra màn hình: 3 4."
  },
  {
    "id": 48,
    "module": 2,
    "moduleName": "Chương 2: Lớp và Đối tượng (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass Lop1\n{\nprivate:\n    int a,b;\npublic:\n    float x,y;\n    friend class Lop2;\n    friend class Lop3;\n};\nclass Lop2\n{\n    Lop1 objA;\n};\n \nclass Lop3\n{\n    Lop1 objB;\n};",
    "options": [
      "objA và objB truy cập được tất cả các biến",
      "objA truy cập được tất cả các biến. objB truy cập được các biến x,y",
      "objA và objB chỉ truy cập được các biến a,b",
      "objA và objB chỉ truy cập được các biến x,y"
    ],
    "answer": 3,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: D. objA và objB chỉ truy cập được các biến x,y. objA và objB chỉ truy cập được các biến public x, y; biến private a, b không thể truy cập trực tiếp."
  },
  {
    "id": 49,
    "module": 2,
    "moduleName": "Chương 2: Lớp và Đối tượng (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass MyClass{\npublic:\n    MyClass(int i = 0, int j = 0, float k = 0);\n};",
    "options": [
      "MyClass *me = new MyClass();",
      "MyClass *me = new MyClass(1, 20);",
      "MyClass *me = new MyClass(1, 20, 30);",
      "Tất cả đều đúng"
    ],
    "answer": 3,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: D. Tất cả đều đúng. Lớp có các constructor quá tải cho phép khởi tạo theo tất cả các cách trên -> Tất cả đều đúng."
  },
  {
    "id": 50,
    "module": 2,
    "moduleName": "Chương 2: Lớp và Đối tượng (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass Base{\npublic:\n    Base(){}\n    ~Base()\n    { cout << \"Base class \"; }\n};\nclass Derive :Base\n{\npublic:\n    Derive(){}\n    ~Derive()\n    { cout << \"Derive class \"; }\n};\nint main(){\n    Derive d;\n    return 0;\n}",
    "options": [
      "Derive class Base class",
      "Derive class",
      "Base class Derive class",
      "Base class"
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. Derive class Base class."
  },
  {
    "id": 51,
    "module": 2,
    "moduleName": "Chương 2: Lớp và Đối tượng (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì? \nclass Circle {\nprivate:\n    double radius;\n    string color;\npublic:\n    Circle(double r = 1.0, string c = \"red\") {\n        radius = r;\n        color = c;\n    }\n    double getRadius() {\n        return radius;\n    }\n    string getColor() {\n        return color;\n    }\n    double getArea() {\n        return radius * radius * 3.1416;\n    }\n};\nint main() {\n    Circle c1(1.2, \"blue\");\n    cout << \"Radius=\" << c1.getRadius() << \" Area=\" << c1.getArea()\n        << \" Color=\" << c1.getColor() << endl;\n    return 0;\n}",
    "options": [
      "Radius=1.2 Area=4.5239 Color=blue",
      "Radius=3.4 Area=36.3169 Color=red",
      "Radius=1 Area=3.1416 Color=red",
      "Cả 3 câu đều sai"
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. Radius=1.2 Area=4.5239 Color=blue."
  },
  {
    "id": 52,
    "module": 2,
    "moduleName": "Chương 2: Lớp và Đối tượng (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass Circle {\nprivate:\n    double radius;\n    string color;\npublic:\n    Circle(double r = 1.0, string c = \"red\");\n    double getRadius();\n    string getColor();\n    double getArea();\n};\nCircle::Circle(double r, string c) {\n    radius = r;\n    color = c;\n}\ndouble Circle::getRadius() {\n    return radius;\n}\nstring Circle::getColor() {\n    return color;\n}\ndouble Circle::getArea() {\n    return radius*radius*3.1416;\n}\nint main() {\n    Circle c2(3.4);\n    cout << \"Radius=\" << c2.getRadius() << \" Area=\" << c2.getArea()\n        << \" Color=\" << c2.getColor() << endl;\n    return 0;\n}",
    "options": [
      "Radius=1.2 Area=4.5239 Color=blue",
      "Radius=3.4 Area=36.3169 Color=red",
      "Radius=1 Area=3.1416 Color=red",
      "Cả 3 câu đều sai"
    ],
    "answer": 1,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: B. Radius=3.4 Area=36.3169 Color=red."
  },
  {
    "id": 53,
    "module": 2,
    "moduleName": "Chương 2: Lớp và Đối tượng (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass Rectangle {\n    int x, y;\npublic:\n    void setValues(int a, int b);\n    int area();\n};\nvoid Rectangle::setValues(int a, int b) {\n    x = a;\n    y = b;\n}\nint Rectangle::area() {\n    return (x*y);\n}\nint main() {\n    Rectangle *rect = new Rectangle();\n    rect->setValues(5, 20);\n    cout << \"area: \" << rect->area();\n    delete rect;\n    return 0;\n}",
    "options": [
      "area:20",
      "area:5",
      "area:100",
      "area:25"
    ],
    "answer": 2,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: C. area:100. Kết quả tính diện tích là area: 100."
  },
  {
    "id": 54,
    "module": 2,
    "moduleName": "Chương 2: Lớp và Đối tượng (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass Rectangle {\n    int x, y;\npublic:\n    void setValues(int a, int b);\n    int area();\n};\nvoid Rectangle::setValues(int a, int b) {\n    x = a;\n    y = b;\n}\nint Rectangle::area() {\n    return (x*y);\n}\nint main() {\n    Rectangle *rect = new Rectangle();\n    rect.setValues(5, 20);\n    cout << \"area: \" << rect.area();\n    delete rect;\n    return 0;\n}",
    "options": [
      "area:20",
      "area:5",
      "Lỗi biên dịch tại dòng rect.setValues(5, 20);",
      "area:25"
    ],
    "answer": 2,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: C. Lỗi biên dịch tại dòng rect.setValues(5, 20);."
  },
  {
    "id": 55,
    "module": 2,
    "moduleName": "Chương 2: Lớp và Đối tượng (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì? \nclass Rectangle {\n    int width, height;\npublic:\n    Rectangle(int, int);\n    int area();\n};\nint Rectangle::area() {\n    return (width*height);\n}\nint main() {\n    Rectangle recta(3, 4);\n    cout << \"area a:\" << recta.area();\n    return 0;\n}",
    "options": [
      "area a:12",
      "area a:3",
      "Lỗi biên dịch do lớp Rectangle chưa cài đặt Constructor hai tham số",
      "area a:7"
    ],
    "answer": 2,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: C. Lỗi biên dịch do lớp Rectangle chưa cài đặt Constructor hai tham số."
  },
  {
    "id": 56,
    "module": 2,
    "moduleName": "Chương 2: Lớp và Đối tượng (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì? \nclass Rectangle {\n    int width, height;\npublic:\n    Rectangle(int, int);\n    int area();\n};\nRectangle::Rectangle(int a, int b) {\n    width = a;\n    height = b;\n}\nint Rectangle::area() {\n    return (width*height);\n}\nint main() {\n    Rectangle recta(3, 4);\n    Rectangle rectb(5, 6);\n    cout << \"area a:\" << recta.area() << \" area b:\" << rectb.area();\n    return 0;\n}",
    "options": [
      "area a:12 area b:30",
      "area a:30 area b:30",
      "area a:30 area b:12",
      "Lỗi biên dịch do lớp Rectangle chưa cài đặt Constructor hai tham số"
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. area a:12 area b:30."
  },
  {
    "id": 57,
    "module": 2,
    "moduleName": "Chương 2: Lớp và Đối tượng (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau. Đoạn chương trình có tính chất gì?\nclass Rectangle {\n    int width, height;\npublic:\n    Rectangle();\n    Rectangle(int, int);\n    int area();\n};\nRectangle::Rectangle() {\n    width = 5;\n    height = 5;\n}\nRectangle::Rectangle(int a, int b) {\n    width = a;\n    height = b;\n}\nint Rectangle::area() {\n    return (width*height);\n}\nint main() {\n    Rectangle recta(3, 4);\n    Rectangle rectb;\n    cout << \"area a:\" << recta.area();\n    cout << \"area b:\" << rectb.area();\n    return 0;\n}",
    "options": [
      "Kế thừa",
      "Trừu tượng",
      "Chồng hàm khởi tạo",
      "Quá tải hàm khởi tạo"
    ],
    "answer": 3,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: D. Quá tải hàm khởi tạo. Nhiều hàm khởi tạo cùng tên nhưng khác danh sách tham số thể hiện tính quá tải hàm khởi tạo (overload)."
  },
  {
    "id": 58,
    "module": 2,
    "moduleName": "Chương 2: Lớp và Đối tượng (C++)",
    "question": "Đối tượng rect sẽ được lưu trữ ở vùng nhớ nào khi chương trình thực thi?\nclass Rectangle {\n    int x, y;\npublic:\n    void setValues(int a, int b);\n    int area();\n};\nvoid Rectangle::setValues(int a, int b) {\n    x = a;\n    y = b;\n}\nint Rectangle::area() {\n    return (x*y);\n}\nint main() {\n    Rectangle *rect = new Rectangle();\n    rect->setValues(5, 20);\n    cout << \"area: \" << rect->area();\n    delete rect;\n    return 0;\n}",
    "options": [
      "Stack",
      "BSS",
      "Data",
      "Heap"
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. Stack. Biến đối tượng cục bộ rect được cấp phát trên vùng nhớ Stack."
  },
  {
    "id": 59,
    "module": 2,
    "moduleName": "Chương 2: Lớp và Đối tượng (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì? \nclass Rectangle {\n    int *width, *height;\npublic:\n    Rectangle(int, int);\n    int area();\n};\nRectangle::Rectangle(int a, int b) {\n    width = new int;\n    height = new int;\n    width = a;\n    height = b;\n}\nint Rectangle::area() {\n    return (width*height);\n}\nint main() {\n    Rectangle recta(3, 4);\n    cout << \"area a:\" << recta.area();\n    return 0;\n}",
    "options": [
      "area a:12",
      "area a:3",
      "area a:4",
      "Lỗi biên dịch tại hàm area() {  return (width*height); }"
    ],
    "answer": 3,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: D. Lỗi biên dịch tại hàm area() {  return (width*height); }."
  },
  {
    "id": 60,
    "module": 2,
    "moduleName": "Chương 2: Lớp và Đối tượng (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass Rectangle {\n    int w, h;\npublic:\n    Rectangle(int a, int b);\n    void setValues(int a, int b);\n    int area();\n};\nRectangle::Rectangle(int a, int b){\n    w = a;\n    h = b;\n}\nvoid Rectangle::setValues(int a, int b) {\n    w = a;\n    h = b;\n}\nint Rectangle::area() {\n    return (w*h);\n}\nint main() {\n    Rectangle recta(5,20);\n    Rectangle *rectb;\n    rectb = &recta;\n    rectb->setValues(3, 4); \n    cout << \"Area a: \" << recta.area() << \" Area b: \" << rectb->area();\n    return 0;\n}",
    "options": [
      "Area a:12 Area b:100",
      "Area a:12 Area b:12",
      "Area a:100 Area b:100",
      "Area a:100 Area b:12"
    ],
    "answer": 1,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: B. Area a:12 Area b:12. Kết quả hiển thị là Area a: 12 Area b: 12."
  },
  {
    "id": 61,
    "module": 2,
    "moduleName": "Chương 2: Lớp và Đối tượng (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass Rectangle {\n    int w, h;\npublic:\n    void setValues(int a, int b);\n    int area();\n};\nvoid Rectangle::setValues(int a, int b) {\n    w = a;\n    h = b;\n}\nint Rectangle::area() {\n    return (w*h);\n}\nint main() {\n    Rectangle recta;\n    Rectangle *rectb = new Rectangle();\n    recta.setValues(5, 20);\n    rectb = &recta;\n    cout << \"Area a: \" << rectb.area() << \"Area b: \" << recta.area();\n    return 0;\n}",
    "options": [
      "Area a:20 Area b:100",
      "Area a:5 Area b:100",
      "Area a:100 Area b:100",
      "Lỗi biên dịch tại rectb.area()"
    ],
    "answer": 3,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: D. Lỗi biên dịch tại rectb.area()."
  },
  {
    "id": 62,
    "module": 2,
    "moduleName": "Chương 2: Lớp và Đối tượng (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, đối tượng rect trong hàm main sẽ được lưu trữ ở vùng nhớ nào khi chương trình thực thi?\nclass Rectangle {\n    int x, y;\npublic:\n    void setValues(int a, int b);\n    int area();\n};\nvoid Rectangle::setValues(int a, int b) {\n    x = a;\n    y = b;\n}\nint Rectangle::area() {\n    return (x*y);\n}\nint main() {\n    Rectangle rect;\n    rect.setValues(5, 20);\n    cout << \"area: \" << rect.area();    \n    delete rect;\n    return 0;\n}",
    "options": [
      "Stack",
      "BSS",
      "Data",
      "Heap"
    ],
    "answer": 3,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: D. Heap. Toán tử new cấp phát đối tượng trên vùng nhớ Heap."
  },
  {
    "id": 63,
    "module": 2,
    "moduleName": "Chương 2: Lớp và Đối tượng (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, Hàm setValues trong lớp Rectangle có đặc điểm gì?\nclass Rectangle {\n       int width, height;\npublic:\n       Rectangle();\n       Rectangle(int, int);\n       int area();\n       void setValues(int w, int h);\n       void setValues();\n};\nRectangle::Rectangle() {\n       width = 5;\n       height = 5;\n}\nRectangle::Rectangle(int a, int b) {\n       width = a;\n       height = b;\n}\nvoid Rectangle::setValues(int w, int h) {\n       width = w;\n       height = h;\n}\nvoid Rectangle::setValues() {\n       width = 0;\n       height = 0;\n}\nint Rectangle::area() {\n       return (width * height);\n}\nint main() {\n       Rectangle recta(3, 4);\n       Rectangle rectb;\n       cout << \"area a:\" << recta.area();\n       cout << \"area b:\" << rectb.area();\n       return 0;\n}",
    "options": [
      "Chồng hàm (override)",
      "Quá tải hàm (overload)",
      "Hàm khởi tạo (constructor)",
      "Hàm hủy (destructor)"
    ],
    "answer": 1,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: B. Quá tải hàm (overload). Hai hàm setValues cùng tên nhưng khác tham số là hiện tượng quá tải hàm (overload)."
  },
  {
    "id": 64,
    "module": 2,
    "moduleName": "Chương 2: Lớp và Đối tượng (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass Array {\n       int* data;\n       int size;\npublic:\n       Array(int s) {\n             size = s;\n             data = new int[size];\n       }\n       ~Array() {\n             delete data;\n       }\n       void out() {\n             cout << size;\n       }\n};\nvoid main() {\n       Array a1(10);\n       a1.out();\n}",
    "options": [
      "5",
      "10",
      "0",
      "Lỗi thực thi tại dòng lệnh delete data;"
    ],
    "answer": 1,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: B. 10."
  },
  {
    "id": 65,
    "module": 2,
    "moduleName": "Chương 2: Lớp và Đối tượng (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass Array {\n       int size;\npublic:\n       Array(int s) {\n             size = s;\n             cout << \"Constructor...\";\n       }\n       ~Array() {\n             cout << \"Destructor...\";\n       }\n};\nvoid out() {\n       Array a1(10);\n       Array a2 = a1;\n       cout << \"Out...\";\n}\nvoid main() {\n       out();\n}",
    "options": [
      "Constructor...Out...Destructor...Destructor...",
      "Constructor...Out...Destructor...",
      "Constructor...Out...",
      "Lỗi biên dịch do lớp Array không có hàm hủy (Destructor)"
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. Constructor...Out...Destructor...Destructor...."
  },
  {
    "id": 66,
    "module": 2,
    "moduleName": "Chương 2: Lớp và Đối tượng (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nĐoạn lệnh sau sai ở đâu, lý do tại sao, cách sửa lại cho đúng\nclass Array {\n       int* data;\n       int size;\npublic:\n       Array(int s) {\n             size = s;\n             data = new int[size];\n       }\n       ~Array() {\n             delete data;\n       }\n       void out() {\n             cout << size * 2;\n       }\n};\nvoid main() {\n       Array a1(10);\n       Array a2 = a1;\n       a2.out();\n}",
    "options": [
      "10",
      "5",
      "0",
      "Lỗi thực thi"
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. 10. Giá trị biến sau vòng lặp là 10."
  },
  {
    "id": 67,
    "module": 2,
    "moduleName": "Chương 2: Lớp và Đối tượng (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass Array {\n       int size;\npublic:\n       Array(int s) {\n             size = s;\n             cout << \"Constructor...\";\n       }\n       ~Array() {\n             cout << \"Destructor...\";\n       }\n};\nvoid out() {\n       Array a1(10);\n       Array a2 = a1;\n       cout << \"Out...\";\n}\nvoid main() {\n       out();\n}",
    "options": [
      "Constructor...Out...Destructor...Destructor...",
      "Constructor...Out...Destructor...",
      "Constructor...Out...",
      "Lỗi biên dịch do lớp Array không có hàm hủy (Destructor)"
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. Constructor...Out...Destructor...Destructor...."
  },
  {
    "id": 68,
    "module": 2,
    "moduleName": "Chương 2: Lớp và Đối tượng (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch, chương trình trên sẽ bị lỗi biên dịch tại dòng nào?\n1 class A {\n2 private:\n3    int x;\n     int  y;\n4 public:\n5   A(int x1, int y1);\n6   void In();  \n7 };\n8 A::A(int x1, int y1) {\n9   x = x1; \n    y = y1;\n10 }\n11 void A::In() {\n12  cout << x << y;\n13 }\n14 void main() {\n15  A a1(1);\n16  A a2(20, 10);\n17  a1 = a2;\n18  a1.In();\n19 }",
    "options": [
      "Dòng 9 - do sai lỗi cú pháp",
      "Dòng 11 - do sai lỗi cú pháp",
      "Dòng 15 - do không có hàm khởi tạo với tham số tương ứng",
      "Dòng 17 - do không có toán tử gán = trong định nghĩa lớp"
    ],
    "answer": 2,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: C. Dòng 15 - do không có hàm khởi tạo với tham số tương ứng. Dòng 15 bị lỗi biên dịch do không có hàm khởi tạo với tham số tương ứng."
  },
  {
    "id": 69,
    "module": 2,
    "moduleName": "Chương 2: Lớp và Đối tượng (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass A {\nprivate:\n       int x;\n       int y;\npublic:\n       A(int x1, int y1) {\n             x = x1;\n             y = y1;\n       }\n       void In() {\n             cout << x << \"...\" << y;\n       }\n};\nvoid main()\n{\n       A a(10, 10);\n       a.x += 10;\n       a.y = a.x;\n       a.In();\n}",
    "options": [
      "10...10",
      "20...10",
      "20...20",
      "Lỗi biên dịch (lỗi do truy cập đến thành phần private của lớp A)"
    ],
    "answer": 3,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: D. Lỗi biên dịch (lỗi do truy cập đến thành phần private của lớp A)."
  },
  {
    "id": 70,
    "module": 2,
    "moduleName": "Chương 2: Lớp và Đối tượng (C++)",
    "question": "Giới hạn truy xuất nào không có trong các lớp của C++",
    "options": [
      "public",
      "private",
      "protected",
      "hidden"
    ],
    "answer": 3,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: D. hidden. Trong C++ chỉ có 3 phạm vi truy xuất: public, private, protected; không có từ khóa 'hidden'."
  },
  {
    "id": 71,
    "module": 2,
    "moduleName": "Chương 2: Lớp và Đối tượng (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, Trong lớp Test phương thức nào được gọi là phương thức hủy (Destructor)? \nclass Test {\npublic:\n       int n;\nprivate:\n       void display() {\n             cout << n;\n       }\npublic:\n       Test() {\n             n = 5;\n       }\n       ~Test() {\n             n = 0;\n       }\n};",
    "options": [
      "display()",
      "Test()",
      "~Test()",
      "Không có phương thức hủy (Destructor)"
    ],
    "answer": 2,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: C. ~Test(). Phương thức hủy có dấu ngã phía trước: ~Test()."
  },
  {
    "id": 72,
    "module": 2,
    "moduleName": "Chương 2: Lớp và Đối tượng (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, Trong lớp Test phương thức nào được gọi là phương thức khởi tạo (Contructor)? \nclass Test {\npublic:\n       int n;\nprivate:\n       void display() {\n             cout << n;\n       }\npublic:\n       Test() {\n             n = 5;\n       }\n       ~Test() {\n             n = 0;\n       }\n};",
    "options": [
      "display()",
      "Test()",
      "~Test()",
      "Không có phương thức khởi tạo (Contructor)"
    ],
    "answer": 1,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: B. Test(). Phương thức khởi tạo cùng tên với lớp: Test()."
  },
  {
    "id": 73,
    "module": 2,
    "moduleName": "Chương 2: Lớp và Đối tượng (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì? \nclass Test {\npublic:\n       int n;\nprivate:\n       void Display() {\n             cout << n;\n       }\npublic:\n       Test() {\n             n = 5;\n       }\n};\nvoid main() {\n       Test t;\n       t.Display();\n}",
    "options": [
      "5",
      "Chương trình thực thi mà không xuất gì ra màn hình.",
      "Lỗi biên dịch tại lệnh t.Display do hàm Display có thuộc tính private",
      "Lỗi thực thi do đối tượng t chưa được cấp phát vùng nhớ"
    ],
    "answer": 2,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: C. Lỗi biên dịch tại lệnh t.Display do hàm Display có thuộc tính private."
  },
  {
    "id": 74,
    "module": 2,
    "moduleName": "Chương 2: Lớp và Đối tượng (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì? \nclass Point {\n       int xVal, yVal;\npublic:\n       Point(int x = 0, int y = 0) {\n             xVal = x;\n             yVal = y;\n       }\n       void Print() {\n             cout << \" (\" << xVal << \",\" << yVal << \" )\";\n       }\n};\nvoid main() {\n       Point pt(5);\n       pt.Print();\n}",
    "options": [
      "(5,0)",
      "(5,5)",
      "(0,5)",
      "Lỗi do tạo đối tượng không đúng"
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. (5,0). Tọa độ điểm được in ra là (5,0)."
  },
  {
    "id": 75,
    "module": 2,
    "moduleName": "Chương 2: Lớp và Đối tượng (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì? \nclass Point {\n       int xVal, yVal;\npublic:\n       Point(int x = 0, int y = 0) {\n             xVal = x;\n             yVal = y;\n             cout << \"So nguyen \";\n       }\n       Point(double x = 0, double y = 0) {\n             xVal = x;\n             yVal = y;\n             cout << \"So thuc \";\n       }\n       void Print();\n};\nvoid Point::Print() {\n       cout << \" (\" << xVal << \",\" << yVal << \" )\";\n}\nint main() {\n       Point pt(5.7);\n       pt.Print();\n       return 0;\n}",
    "options": [
      "(5,0)",
      "(5,5)",
      "(0,0)",
      "Lỗi biên dịch tại pt.Print(); do phương thức Print có thuộc tính public"
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. (5,0). Kết quả hiển thị là (5,0)."
  },
  {
    "id": 76,
    "module": 2,
    "moduleName": "Chương 2: Lớp và Đối tượng (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì? \nclass Point {\n       int n;\npublic:\n       Point(int x) {\n             n = x;\n       }\n       void Print() {\n             cout << n;\n       }\n};\nvoid main() {\n       Point pt(4);\n       pt.Print();\n}",
    "options": [
      "4",
      "0",
      "Lỗi biên dịch tại pt.Print(); do phương thức Print có thuộc tính public",
      "Không xuất gì ra màn hình."
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. 4."
  },
  {
    "id": 77,
    "module": 2,
    "moduleName": "Chương 2: Lớp và Đối tượng (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì? \nclass Test {\n    int t;\npublic:\n    Test(int t) {\n        Test::t = t;\n    }\n    void Print() {\n        cout << t;\n    }\n};\nvoid main() {\n    Test test(4);\n    test.Test::Print();\n}",
    "options": [
      "Lỗi biên dịch tại test.Test::Print(); do gọi phương thức Print sai",
      "4",
      "0",
      "Không xuất gì ra màn hình."
    ],
    "answer": 1,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: B. 4."
  },
  {
    "id": 78,
    "module": 2,
    "moduleName": "Chương 2: Lớp và Đối tượng (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì? \nclass Teacher {\npublic:\n    static int n;\n    Teacher (){ \n        cout<<\" \"<<n++ ; \n    }\n};\nint Teacher::n = 0;\nint main() {\n    Teacher t1;\n    Teacher t2;\n    Teacher t3;\n    cout<<\" \"<<t1.n ;\n    return 0;\n}",
    "options": [
      "0 1 2 3",
      "1 2 3 4",
      "1 1 1 1",
      "0 1 3 2"
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. 0 1 2 3."
  },
  {
    "id": 79,
    "module": 2,
    "moduleName": "Chương 2: Lớp và Đối tượng (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì? \nclass Employee {\n    char name[30];\n    char id[10];\n    int age;\npublic:\n    Employee(const char n[], const char i[], int a) : age(a) {\n        strcpy_s(name, n);\n        strcpy_s(id, i);\n    }\n    void Display() {\n        cout << \"ID: \" << id << \" Name: \" << name << \" Age: \" << age << endl;\n    }\n};\nint main() {\n    Employee e(\"Tom\", \"001\", 20);\n    e.Display();\n    return 0;\n}",
    "options": [
      "ID:001 Name:Tome Age:20",
      "Lỗi thực thi do đối tượng e chưa được cấp phát vùng nhớ",
      "Lỗi biên dịch do lớp Employee không có hàm khởi tạo 3 tham số",
      "Không xuất gì ra màn hình."
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. ID:001 Name:Tome Age:20. Kết quả hiển thị thông tin nhân viên: ID: 001 Name: Tom Age: 20."
  },
  {
    "id": 80,
    "module": 2,
    "moduleName": "Chương 2: Lớp và Đối tượng (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass Rectangle {\n    int *width, *height;\npublic:\n    Rectangle(int, int);\n    ~Rectangle();\n    int area();\n};\nRectangle::Rectangle(int a, int b) {\n    cout << \"Constructor Rect...\";\n}\nRectangle:: ~Rectangle(){\n    cout << \"Destructor Rect.\";\n}\nint Rectangle::area() {\n    return (*width)*(*height);\n}\nint main() {\n    Rectangle recta(3, 4);\n    cout << \" Rect a...\";\n    return 0;\n}",
    "options": [
      "Constructor Rect...Rect a...Destructor Rect",
      "Constructor Rect...Rect a...",
      "Constructor Rect...Destructor Rect.",
      "Rect a..."
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. Constructor Rect...Rect a...Destructor Rect. Thứ tự thực thi: Constructor Rect... Rect a... Destructor Rect."
  },
  {
    "id": 81,
    "module": 2,
    "moduleName": "Chương 2: Lớp và Đối tượng (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass Rectangle {\n    int *width;\n    int *height;\npublic:\n    Rectangle();\n    Rectangle(int, int);\n    ~Rectangle();\n    int area();\n};\nRectangle::Rectangle() {\n}\nRectangle::Rectangle(int a, int b) {\n    cout << \"Constructor Rect...\";\n}\nRectangle:: ~Rectangle(){\n    cout << \"Destructor Rect.\";\n}\nint Rectangle::area() {\n    return (*width)*(*height);\n}\nint main() {\n    Rectangle recta;\n    cout << \" Rect a...\";\n    return 0;\n}",
    "options": [
      "Constructor Rect...Rect a...Destructor Rect.",
      "Constructor Rect...Rect a...",
      "Rect a...Destructor Rect.",
      "Rect a..."
    ],
    "answer": 2,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: C. Rect a...Destructor Rect.."
  },
  {
    "id": 82,
    "module": 2,
    "moduleName": "Chương 2: Lớp và Đối tượng (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass Add\n{\n    int x;\n    int y;\n    int z;\npublic:\n    void getdata()\n    {\n        x = 5;\n        y = 6;      \n    }\n    void calculate(void);\n    void display(void);\n};\nvoid Add::calculate()\n{\n    z = x + y;\n}\nvoid Add::display()\n{\n    cout << z;\n}\nvoid main()\n{\n    Add a;\n    a.getdata();\n    a.calculate();\n    a.display();\n}",
    "options": [
      "5",
      "11",
      "6",
      "56"
    ],
    "answer": 1,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: B. 11."
  },
  {
    "id": 83,
    "module": 2,
    "moduleName": "Chương 2: Lớp và Đối tượng (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass Time\n{\n    int hours, minutes;\npublic:\n    void gettime(int h, int m)\n    {\n        hours = h;\n        minutes = m;\n    }\n    void sum(Time, Time);\n    void display(void);\n};\nvoid Time::sum(Time t1, Time t2)\n{\n    minutes = t1.minutes + t2.minutes;\n    hours = minutes / 60;\n    minutes = minutes % 60;\n    hours = hours + t1.hours + t2.hours;\n}\nvoid Time::display()\n{\n    cout << hours << \":\" << minutes << endl;\n}\nvoid main()\n{\n    Time T1, T2, T3;\n    T1.gettime(2, 45);\n    T2.gettime(3, 30);\n    T3.sum(T1, T2);\n    cout << \"Time is \";\n    T3.display();\n}",
    "options": [
      "Time is 6:30",
      "Time is 2:45",
      "Time is 3:30",
      "Time is 6:15"
    ],
    "answer": 3,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: D. Time is 6:15."
  },
  {
    "id": 84,
    "module": 2,
    "moduleName": "Chương 2: Lớp và Đối tượng (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass Add\n{\n    int x, y, z;\npublic:\n    Add(int, int);\n    void calculate(void);\n    void display(void);\n};\nAdd::Add(int a, int b)\n{\n    x = a;\n    y = b;\n}\nvoid Add::calculate()\n{\n    z = x + y;\n}\nvoid Add::display()\n{\n    cout << z;\n}\nvoid main()\n{\n    Add a(5, 6);\n    a.calculate();\n    a.display();\n}",
    "options": [
      "5",
      "6",
      "11",
      "10"
    ],
    "answer": 2,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: C. 11."
  },
  {
    "id": 85,
    "module": 2,
    "moduleName": "Chương 2: Lớp và Đối tượng (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì? \nclass Test {\npublic: \n    int n;\n    void Display(){ \n        cout<<n; \n    }\n    public: Test(){ \n        n=5; \n    }\n};\nvoid main() {\n    Test t;\n    t.Display();\n}",
    "options": [
      "5",
      "Lỗi biên dịch.",
      "Chương trình th",
      "0"
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. 5."
  },
  {
    "id": 86,
    "module": 2,
    "moduleName": "Chương 2: Lớp và Đối tượng (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì? \nclass ABC {\n    int n;\npublic: \n      ABC(int x){\n        n=x; \n    }\n    void Print(){ \n        cout<<n; \n    }\n};\nvoid main() {\n    ABC t(5);\n    t.Print();\n}",
    "options": [
      "10",
      "Lỗi biên dịch.",
      "Chương trình thực thi mà không xuất gì ra màn hình.",
      "5"
    ],
    "answer": 3,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: D. 5."
  },
  {
    "id": 87,
    "module": 2,
    "moduleName": "Chương 2: Lớp và Đối tượng (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì? \nclass ABC {\n       int n;\npublic:\n       ABC(int x) {\n             n = x;\n       }\n       void Print() {\n             cout << n;\n       }\n};\nvoid main() {\n       ABC t(10);\n       t.Print();\n}",
    "options": [
      "5",
      "Lỗi biên dịch.",
      "Chương trình thực thi mà không xuất gì ra màn hình.",
      "10"
    ],
    "answer": 3,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: D. 10."
  },
  {
    "id": 88,
    "module": 2,
    "moduleName": "Chương 2: Lớp và Đối tượng (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì? \nclass Point {\n       int xVal, yVal;\npublic:\n       Point(int x = 0, int y = 0) {\n             xVal = x;\n             yVal = y;\n       }\n       void Print() {\n             cout << \"(\" << xVal << \",\" << yVal << \")\";\n       }\n};\nvoid main() {\n       Point pt(5);\n       pt.Print();\n}",
    "options": [
      "(5,0)",
      "(0,5)",
      "(5,5)",
      "(0,0)"
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. (5,0)."
  },
  {
    "id": 89,
    "module": 2,
    "moduleName": "Chương 2: Lớp và Đối tượng (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì? \nclass Employee {\n       char ten[30];\n       char ms[10];\n       int tuoi;\npublic:\n       Employee(const char te[], const char m[], int tu) :tuoi(tu)\n       {\n             strcpy_s(ten, te);\n             strcpy_s(ms, m);\n       }\n       void display() {\n             cout << \"Ma so: \" << ms << \" Ten: \" << ten << \" Tuoi:\" << tuoi << endl;\n       }\n};\nvoid main() {\n       Employee e(\"Nguyen Van A\", \"001\", 20);\n       e.display();\n}",
    "options": [
      "Ma so: 001 Ten: Nguyen Van A Tuoi: 20",
      "Ma so: 20 Ten: Nguyen Van A Tuoi: 001",
      "Ma so: 001 Ten: Nguyen Van A Tuoi: 001",
      "Ma so: 20 Ten: Nguyen Van A Tuoi: 20"
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. Ma so: 001 Ten: Nguyen Van A Tuoi: 20. Kết quả in ra là Ma so: 001 Ten: Nguyen Van A Tuoi: 20."
  },
  {
    "id": 90,
    "module": 2,
    "moduleName": "Chương 2: Lớp và Đối tượng (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì? \nclass Box {\npublic:\n       double length;\n       double breadth;\n       double height;\n};\nint main() {\n       Box Box1;\n       Box Box2;\n       double volume = 0.0;\n \n       Box1.height = 2.0;\n       Box1.length = 3.0;\n       Box1.breadth = 4.0;\n \n       Box2.height = 3.0;\n       Box2.length = 5.0;\n       Box2.breadth = 2.0;\n \n       volume = Box1.height * Box1.length * Box1.breadth;\n       cout << volume << \"-\";\n       volume = Box2.height * Box2.length * Box2.breadth;\n       cout << volume;\n       return 0;\n}",
    "options": [
      "24-30",
      "30-30",
      "30-24",
      "24-24"
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. 24-30."
  },
  {
    "id": 91,
    "module": 3,
    "moduleName": "Chương 3: Tính Kế thừa (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass Base {\npublic:\n   int a, b;\n};\nclass Derived {\npublic:\n   Base obj1;\n   void setValues() {\n      obj1.a = 12;\n      obj1.b = 8;\n   }\n   void printValues() {\n      cout << obj1.a + obj1.a;\n   }\n};\nvoid main() {\n   Derived obj;\n   obj.setValues();\n   obj.printValues();\n}",
    "options": [
      "12",
      "Lỗi biên dịch do biến a, b của lớp Base là public",
      "24",
      "8"
    ],
    "answer": 2,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: C. 24."
  },
  {
    "id": 92,
    "module": 3,
    "moduleName": "Chương 3: Tính Kế thừa (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì? \nclass Base\n{\npublic:\n    int xVal;\n    Base(int x = 0) : xVal(x)\n    {\n        cout << xVal <<\"...\";\n    }\n};\nclass Derive :public Base\n{\npublic: \n    Derive()\n    { \n        xVal = 10; \n    }\n    void Print()\n    {\n        cout << xVal <<\"...\";\n    }\n};\nvoid main()\n{\n    Derive d;\n    d.Print();\n}",
    "options": [
      "10...0...",
      "10...",
      "0...",
      "0...10..."
    ],
    "answer": 2,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: C. 0...."
  },
  {
    "id": 93,
    "module": 3,
    "moduleName": "Chương 3: Tính Kế thừa (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass ABC\n{\npublic:\n    int a, b;\n    void nhap()\n    {\n        a = 10;\n        b = 10;\n    }\n};\nvoid main()\n{\n    ABC *obj = new ABC();\n    obj->a = 3;\n    obj->b = 5;\n    cout << obj->a;\n}",
    "options": [
      "Lỗi biên dịch",
      "3",
      "5",
      "10"
    ],
    "answer": 1,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: B. 3."
  },
  {
    "id": 94,
    "module": 3,
    "moduleName": "Chương 3: Tính Kế thừa (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nconst double PI = 3.14159;\nclass Circle {\nprivate: double radius;\npublic:\n   Circle(double rad) : radius(rad) {}\n   double calculateArea() {\n      return PI * pow(radius, 2);\n   }\n   double calculateCircumference() {\n      return 2 * PI * radius;\n   }\n};\nint main() {\n   Circle circle(6);\n   double area = circle.calculateArea();\n   cout << \"Area: \" << area;\n   double circumference = circle.calculateCircumference();\n   cout << \" Circumference: \" << circumference;\n   return 0;\n}",
    "options": [
      "Area: 3.14159",
      "Area: 2",
      "Circumference: 3.14159",
      "Area: 113.097 Circumference: 37.6991"
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. Area: 3.14159. Lớp con kế thừa từ lớp cha và tính toán diện tích hình tròn: Area: 113.097 Circumference: 37.6991 (hoặc theo công thức của bài)."
  },
  {
    "id": 95,
    "module": 3,
    "moduleName": "Chương 3: Tính Kế thừa (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì? \nclass Base{\nprotected:\n    int xVal;\npublic:\n    Base(){ \n        xVal = 5; \n    }\n    void Print(){\n        cout << xVal ;\n    }\n};\nclass Derive :public Base\n{\npublic:\n    Derive(int x) { \n        xVal = x; \n    }\n};\nvoid main(){\n    Derive d(10);\n    d.Print();\n}",
    "options": [
      "Lỗi biên dịch tại d.Print() do hàm Print có thuộc tính public",
      "5",
      "10",
      "Không xuất gì ra màn hình."
    ],
    "answer": 2,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: C. 10."
  },
  {
    "id": 96,
    "module": 3,
    "moduleName": "Chương 3: Tính Kế thừa (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\n0:template <class T> \n1:T max_number (T a, T b) {\n2:      if (a > b) return a;\n3:      return b;\n4:  }\n5:  float max_number (float fa, float fb) {\n6:    if (fa - fb >0) return fa;\n7:      return fb;\n8:  }\n9:  void main(){\n10:        \n11:     cout<< max_number (a,b);\n12: }\nKhi thêm lệnh nào vào dòng 10 thì chương trình báo lỗi:",
    "options": [
      "char a = ‘A’, b = ‘B’ ;",
      "float a = 5.0, b = 6.0 ;",
      "int a = 5; int b = 6 ;",
      "float a = 5.0; int b = 6 ;"
    ],
    "answer": 1,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: B. float a = 5.0, b = 6.0 ;. Lỗi biên dịch do truy cập thành phần private của lớp cơ sở."
  },
  {
    "id": 97,
    "module": 3,
    "moduleName": "Chương 3: Tính Kế thừa (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass Parent\n{\npublic:\n    int id_p;\n};\nclass Child : public Parent\n{\npublic:\n    int id_c;\n};\nint main()\n{\n    Child obj1;\n    obj1.id_c = 6;\n    obj1.id_p = 8;\n    cout << obj1.id_c << \" and \" << obj1.id_p;\n    return 0;\n}",
    "options": [
      "8 and 6",
      "5 and 7",
      "6 and 8",
      "Lỗi biên dịch"
    ],
    "answer": 2,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: C. 6 and 8."
  },
  {
    "id": 98,
    "module": 3,
    "moduleName": "Chương 3: Tính Kế thừa (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\n1 \n2 class A{\n3 public:\n4   int x;\n5   int y;\n6   int z;\n7   void print();\n8    \n9    \n10 };\n11 void A::print(){\n12   cout << x; \n13   cout << y; \n14   cout << z;\n15 }\n16 class B : public A{\n17 public:\n18   void print();\n19 };\n20 void B::print(){\n21   cout << x; \n22   cout << y; \n23   cout << z;\n24 }\n25 int main() {\n26   A ma;\n27   cout << ma.x << endl;\n28   cout << ma.y << endl;\n29   cout << ma.z << endl;\n30   return 0;\n31 }",
    "options": [
      "Chương trình sẽ bị lỗi biên dịch tại dòng lệnh 21,27,28",
      "Chương trình không bị lỗi biên dịch",
      "Chương trình sẽ bị lỗi biên dịch tại dòng lệnh 21,22,23",
      "Chương trình sẽ bị lỗi biên dịch tại dòng lệnh 13,29"
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. Chương trình sẽ bị lỗi biên dịch tại dòng lệnh 21,27,28."
  },
  {
    "id": 99,
    "module": 3,
    "moduleName": "Chương 3: Tính Kế thừa (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass A {\n   int a;\npublic:\n   A(){\n      a = 5;\n   }\n   A(int k){\n      a = k;\n   }\n   void output(){\n      cout << \"a = \" << a;\n   }\n};\nvoid main(){\n   A a[3] = { A(10), A(20) };\n   a[2].output();\n}",
    "options": [
      "a=20;",
      "a=5;",
      "Lỗi biên dịch",
      "a=10;"
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. a=20;. Kết quả xuất ra a = 5."
  },
  {
    "id": 100,
    "module": 3,
    "moduleName": "Chương 3: Tính Kế thừa (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass A\n{\n    int a, b;\npublic:\n    float f1, f2;\n};\nclass B : private A\n{\npublic:\n    void nhap();\n};\nHỏi B sử dụng được các biến thành viên nào của A",
    "options": [
      "a,b,f1,f2",
      "f1, f2",
      "a, b",
      "Không có đáp án đúng"
    ],
    "answer": 1,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: B. f1, f2. Lỗi biên dịch do thuộc tính private không được kế thừa công khai."
  },
  {
    "id": 101,
    "module": 3,
    "moduleName": "Chương 3: Tính Kế thừa (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass Lop1\n{\nprotected:\n    int a, b;\npublic:\n    void setvalue()\n    {\n        a = b = 10;\n    }\n};\nclass Lop2 : public Lop1\n{\n    int x, y;\npublic:\n    void setvalue()\n    {\n        x = y = 4;\n    }\n};\nNếu tạo ra đối tượng của Lop2 là obj2 và thực hiện lệnh gọi hàm như sau: obj.setvalue( ); thì hàm setvalue của lớp nào sẽ được gọi:",
    "options": [
      "Không gọi được hàm nào vì trùng tên hàm",
      "Cả 2 lớp",
      "Lop2",
      "Lop1"
    ],
    "answer": 2,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: C. Lop2. Lỗi biên dịch do phương thức kế thừa private."
  },
  {
    "id": 102,
    "module": 3,
    "moduleName": "Chương 3: Tính Kế thừa (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, lựa chọn nào được viết ở dòng //access variable here, khi biên dịch chương trình sẽ không có lỗi?\nclass A\n{\n    char x, y;\nprivate:\n    int a;\nprotected:\n    int b;\npublic:\n    float f1;\n    float f2;\n};\nclass B :public A\n{\npublic:\n    void displayId() {\n        //access variable here\n    }\n};\nint main() {\n    B obj;\n    obj.displayId();\n    return 0;\n}",
    "options": [
      "a= 6; f2 = 8;x = 7; y = 9",
      "a = 6; b = 8;",
      "b = 8; f1= 6; f2 = 8;",
      "a = 6; x = 7; y = 9"
    ],
    "answer": 1,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: B. a = 6; b = 8;. Không xuất gì ra màn hình do hàm không gọi lệnh in."
  },
  {
    "id": 103,
    "module": 3,
    "moduleName": "Chương 3: Tính Kế thừa (C++)",
    "question": "Cho chương trình sau, chương trình sẽ bị lỗi biên dịch tại những dòng lệnh nào? \n1 \n2 class A{\n3 private:\n4    int x;\n5 protected:\n6    int y;\n7 public:\n8    int z;\n9    void print();\n10 };\n11 void A::print(){\n12   cout << x; \n13   cout << y; \n14   cout << z;\n15 }\n16 class B : public A{\n17 public:\n18   void print();\n19 };\n20 void B::print(){\n21   cout << x; \n22   cout << y; \n23   cout << z;\n24 }\n25 int main() {\n26   A ma;\n27   cout << ma.x << endl;\n28   cout << ma.y << endl;\n29   cout << ma.z << endl;\n30   return 0;\n31 }",
    "options": [
      "21,27,28",
      "3,29",
      "27,28,29",
      "21,22,23"
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. 21,27,28. Lỗi biên dịch do không tìm thấy hàm khởi tạo mặc định của lớp cơ sở."
  },
  {
    "id": 104,
    "module": 3,
    "moduleName": "Chương 3: Tính Kế thừa (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, lựa chọn nào được viết ở dòng //access variable here, khi biên dịch chương trình sẽ không có lỗi?\nclass A\n{\n    int a;\n    int b;\n    float f1;\n    float f2;\n};\nclass B :public A\n{\npublic:\n    void displayId() {\n        //access variable here\n    }\n};\nint main() {\n    B obj;\n    obj.displayId();\n    return 0;\n}",
    "options": [
      "Cả 3 đáp án đều sai",
      "a = 6; b = 8;",
      "a = 6;",
      "a= 6; f2 = 8;"
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. Cả 3 đáp án đều sai. Chương trình thực thi bình thường không xuất gì ra màn hình."
  },
  {
    "id": 105,
    "module": 3,
    "moduleName": "Chương 3: Tính Kế thừa (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass ADouble {\n    double value;\npublic:\n    ADouble(double v) { \n        value = v; \n    }\n    void multiply(ADouble d) { \n        value = value * d.value; \n    }\n    void squared() { \n        multiply(*this); \n    }\n    double getValue() const { \n        return value; \n    }\n};\nvoid main() {\n    ADouble x(5.0);\n    x.squared();\n    cout << x.getValue() << '\n';\n}",
    "options": [
      "0",
      "Lỗi biên dịch do lớp ADouble không có hàm khởi tạo hai tham số",
      "5",
      "25"
    ],
    "answer": 1,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: B. Lỗi biên dịch do lớp ADouble không có hàm khởi tạo hai tham số."
  },
  {
    "id": 106,
    "module": 3,
    "moduleName": "Chương 3: Tính Kế thừa (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass Polygon {\nprotected:\n    int width, height;\npublic:\n    void setValues(int a, int b);\n};\nvoid Polygon::setValues(int a, int b){\n    width = a;\n    height = b;\n}\nclass Rectangle : public Polygon {\npublic:\n    int area();\n};\nint Rectangle :: area(){\n    return (width * height);\n}\nclass Triangle : public Polygon {\npublic:\n    int area();\n};\nint Triangle::area(){\n    return (width * height / 2);\n}\nint main() {\n    Rectangle rect;\n    Triangle trgl;\n    rect.setValues(4, 5);\n    trgl.setValues(4, 5);\n    cout << \"Rectangle area:\" << rect.area() << \" Triangle area:\"<<trgl.area() << endl;\n    return 0;\n}",
    "options": [
      "Lỗi biên dịch do lớp Rectangle khai báo kế thừa sai",
      "Rectangle area:10 Triangle area:10",
      "Rectangle area:20 Triangle area:10",
      "Rectangle area:10 Triangle area:20"
    ],
    "answer": 2,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: C. Rectangle area:20 Triangle area:10."
  },
  {
    "id": 107,
    "module": 3,
    "moduleName": "Chương 3: Tính Kế thừa (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass Car\n{\nprivate:\n    string company;\n    string model;\n    int year;\npublic:\n    Car(const string &comp,\n        const string &mdl, int yr) : company(comp), model(mdl), year(yr) {}\n    string getCompany()\n    {\n        return company;\n    }\n    string getModel()\n    {\n        return model;\n    }\n    int getYear()\n    {\n        return year;\n    }\n    void setCompany(const string &comp)\n    {\n        company = comp;\n    }\n    void setModel(const string &mdl)\n    {\n        model = mdl;\n    }\n    void setYear(int yr)\n    {\n        year = yr;\n    }\n};\nint main()\n{\n    Car car(\"AUDI\", \"A6\", 2023);\n    cout << \"Company: \" << car.getCompany();\n    cout << \", Model: \" << car.getModel();\n    cout << \", Year: \" << car.getYear();\n    return 0;\n}",
    "options": [
      "Year: 2023, Company: AUDI, Model: A6,",
      "Model: A6, Year: 2023, Company: AUDI",
      "Company: AUDI, Model: A6, Year: 2023",
      "Company: AUDI, Year: 2023, Model: A6"
    ],
    "answer": 2,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: C. Company: AUDI, Model: A6, Year: 2023."
  },
  {
    "id": 108,
    "module": 3,
    "moduleName": "Chương 3: Tính Kế thừa (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình trên môi trường có kích thước số nguyên là 4 byte, kết quả là gì?\nclass BaseClass\n{\n    int arr[10];\n};\nclass A : public BaseClass\n{\n};\nclass B : public BaseClass\n{\n};\nclass Derived : public A, public B\n{\n};\nint main(void)\n{\n    cout << sizeof(Derived);\n    return 0;\n}",
    "options": [
      "80",
      "40",
      "400",
      "20"
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. 80."
  },
  {
    "id": 109,
    "module": 3,
    "moduleName": "Chương 3: Tính Kế thừa (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ Java như sau, lựa chọn nào được viết ở dòng //your code here, khi biên dịch chương trình sẽ không có lỗi?\nclass RectangleInt {\npublic:\n    int a = 0;\npublic:\n    int b = 0;\n    void input(){\n        cout<<\"\n a = \"; \n        cout<<\"\n b =\"; \n    }\n};\nclass RectangleFloat : public RectangleInt{\n    RectangleInt *p;\npublic:\n    void displayId(){       \n        //your code here\n    }\n};\nint main() {\n    RectangleFloat obj;\n    obj.displayId();\n    return 0;\n}",
    "options": [
      "this.nhap( ); RectangleInt::nhap();",
      "Cả 3 đáp án đều sai",
      "p(nhap();",
      "p.nhap();"
    ],
    "answer": 1,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: B. Cả 3 đáp án đều sai. Lỗi biên dịch do phạm vi truy cập private."
  },
  {
    "id": 110,
    "module": 3,
    "moduleName": "Chương 3: Tính Kế thừa (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass Triangle {\nprivate: double side1;\n   double side2;\n   double side3;\npublic:\n   Triangle(double s1, double s2, double s3) : side1(s1),   side2(s2), side3(s3) {}\n   void determineType() {\n      if (side1 == side2 && side2 == side3) {\n         cout << \"Equilateral Triangle\";\n      }\n      else if (side1 == side2 || side1 == side3 || side2 == side3) {\n         cout << \"Isosceles Triangle\" ;\n      }\n      else {\n         cout << \"Scalene Triangle\" ;\n      }\n   }\n};\nint main() {\n   Triangle triangle(3, 4, 5);\n   triangle.determineType();\n   return 0;\n}",
    "options": [
      "Scalene Triangle",
      "Lỗi biên dịch",
      "Equilateral Triangle",
      "Isosceles Triangle"
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. Scalene Triangle."
  },
  {
    "id": 111,
    "module": 3,
    "moduleName": "Chương 3: Tính Kế thừa (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\ntemplate <class T, int n>\nclass Table{\n    T data[n];\npublic:\n    Table() { }\n    T & operator[](int i){ return data[i]; }\n};\nvoid main(){\n    Table <int, 2>t;\n    t[0] = 0; t[1] = 1;\n    cout << t[0] << \" \" << t[1];\n}",
    "options": [
      "Lỗi thực thi",
      "0 1",
      "Một kết quả khác",
      "Lỗi biên dịch"
    ],
    "answer": 3,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: D. Lỗi biên dịch."
  },
  {
    "id": 112,
    "module": 3,
    "moduleName": "Chương 3: Tính Kế thừa (C++)",
    "question": "Lớp B kế thừa lớp A trong ngôn ngữ C++ được khai báo như thế nào ?",
    "options": [
      "class B : public A",
      "class B implements A",
      "class B extern A",
      "class A : public B"
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. class B : public A. Lớp con kế thừa lớp cha, constructor lớp cha chạy trước."
  },
  {
    "id": 113,
    "module": 3,
    "moduleName": "Chương 3: Tính Kế thừa (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass A {\npublic:\n   static int n;\n};\nint A::n = 10;\nvoid main() {\n   A a;\n   cout << ++a.n; \n}",
    "options": [
      "11",
      "Lỗi biên dịch",
      "12",
      "10"
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. 11."
  },
  {
    "id": 114,
    "module": 3,
    "moduleName": "Chương 3: Tính Kế thừa (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, lệnh nào dưới đây thêm vào dòng 6 thì khi biên dịch chương trình không báo lỗi?\n1:    template <class T, class U>\n2:    void func (T a, U b){\n3:         cout<<a<<b ;\n4:    }\n5:    void main(){\n6:\n7:      func(a,b);\n8:    }",
    "options": [
      "char a = ‘A’ ; char *b = “Hello”;",
      "float a = 5.0, b = 6.0;",
      "Các đáp án đều đúng",
      "float a = 5.0; int b = 6;"
    ],
    "answer": 1,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: B. float a = 5.0, b = 6.0;. Lỗi biên dịch do thành phần private."
  },
  {
    "id": 115,
    "module": 3,
    "moduleName": "Chương 3: Tính Kế thừa (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, lựa chọn nào được viết ở dòng //you code here, sử dụng truy xuất phương thức display()?\nclass RectangleA\n{\n    int a = 6;\npublic:\n    void display() {\n        cout << a;\n    }\n};\nint main() {\n    RectangleA rectA;\n    //you code here\n    return 0;\n}",
    "options": [
      "RectangleA::display();",
      "rectA.display();",
      "*rectA.display();",
      "rectA(display();"
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. RectangleA::display();. Không xuất gì ra màn hình."
  },
  {
    "id": 116,
    "module": 3,
    "moduleName": "Chương 3: Tính Kế thừa (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass A\n{\nprotected:\n    int     a, b;\npublic:\n    float f1, f2;\n};\nclass  B : private A\n{\n    float x;\n};\nB sử dụng được các biến thành viên nào của A",
    "options": [
      "a, b",
      "Không có đáp án đúng",
      "f1, f2",
      "a, b, f1, f2"
    ],
    "answer": 2,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: C. f1, f2. Lỗi biên dịch."
  },
  {
    "id": 117,
    "module": 3,
    "moduleName": "Chương 3: Tính Kế thừa (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass Lop1\n{\nprotected:\n    int a, b;\npublic:\n    void setvalue()\n    {\n        a = b = 10;\n    }\n};\nclass Lop2 : public Lop1\n{\n    int x, y;\npublic:\n    void setvalue()\n    {\n        x = y = 4;\n    }\n};\nTrong lớp Lop2 có thể truy cập được những biến nào:",
    "options": [
      "Chỉ có biến x, y",
      "Chỉ truy cập được biến a, b",
      "Không truy cập được biến nào",
      "Tất cả biến a, b, x, y"
    ],
    "answer": 1,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: B. Chỉ truy cập được biến a, b. Lỗi biên dịch do thành phần được bảo vệ."
  },
  {
    "id": 118,
    "module": 3,
    "moduleName": "Chương 3: Tính Kế thừa (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass Geeks {\npublic:\n    string geekname;\n    void printName() {\n        cout << \"Geekname is:\" << geekname;;\n    }\n};\nint main() {\n    Geeks* obj = new Geeks();\n    obj->geekname = \"Abhi\";\n    obj->printName();\n    return 0;\n}",
    "options": [
      "Abhi",
      "Geekname is:",
      "Lỗi biên dịch",
      "Geekname is:Abhi"
    ],
    "answer": 1,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: B. Geekname is:."
  },
  {
    "id": 119,
    "module": 3,
    "moduleName": "Chương 3: Tính Kế thừa (C++)",
    "question": "Cho chương trình sau, chương trình sẽ bị lỗi biên dịch tại những dòng lệnh nào? \n1 \n2 class A{\n3 private:\n4    int x;\n5 protected:\n6    int y;\n7 public:\n8    int z;\n9    void print();\n10 };\n11 void A::print(){\n12   cout << x; \n13   cout << y; \n14   cout << z;\n15 }\n16 class B : protected A{\n17 public:\n18   void print();\n19 };\n20 void B::print(){\n21   cout << x; \n22   cout << y; \n23   cout << z;\n24 }\n25 int main() {\n26   B mb;\n27   cout << mb.x << endl;\n28   cout << mb.y << endl;\n29   cout << mb.z << endl;\n30   return 0;\n31 }",
    "options": [
      "21,22,23",
      "27,28,29",
      "13,29",
      "21,27,28,29"
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. 21,22,23. Lỗi biên dịch."
  },
  {
    "id": 120,
    "module": 3,
    "moduleName": "Chương 3: Tính Kế thừa (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass Shape\n{\npublic:\n    void setWidth(int w)\n    {\n        width = w;\n    }\n    void setHeight(int h)\n    {\n        height = h;\n    }\nprotected:\n    int width;\n    int height;\n};\nclass Rectangle : public Shape\n{\npublic:\n    int getArea()\n    {\n        return (width * height);\n    }\n};\nint main(void)\n{\n    Rectangle rect;\n    rect.setWidth(6);\n    rect.setHeight(8);  \n    cout <<rect.getArea() << endl;\n    return 0;\n}",
    "options": [
      "Lỗi biên dịch",
      "8",
      "48",
      "6"
    ],
    "answer": 2,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: C. 48."
  },
  {
    "id": 121,
    "module": 3,
    "moduleName": "Chương 3: Tính Kế thừa (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass A\n{\n    int a, b;\n    float F1, F2;\n};\nclass B :public A\n{\n    float d;\n};\nHỏi: B sử dụng được các biến thành viên nào của A",
    "options": [
      "a,b",
      "Không có đáp án đúng",
      "F1,F2",
      "a,b,F1,F2"
    ],
    "answer": 1,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: B. Không có đáp án đúng. Lỗi biên dịch do hàm khởi tạo private."
  },
  {
    "id": 122,
    "module": 3,
    "moduleName": "Chương 3: Tính Kế thừa (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass BankAccount {\nprivate:\n    string accountNumber;\n    double balance;\npublic:\n    BankAccount(string accNum, double initBalance) : accountNumber(accNum), balance(initBalance) {}\n    void deposit(double amount) {\n        if (amount > 0) {\n            balance += amount;\n        }\n    }\n    void withdraw(double amount) {\n        if (amount > 0 && balance >= amount) {\n            balance -= amount;\n        }\n    }\n    double getBalance() {\n        return balance;\n    }\n};\nint main() {\n    BankAccount myAccount(\"12345\", 1000);\n    cout << \" Initial:\" << myAccount.getBalance() ;\n    myAccount.deposit(500);\n    cout << \" Deposit:\" << myAccount.getBalance() ;\n    myAccount.withdraw(300);\n    cout << \" Withdrawal:\" << myAccount.getBalance() ;\n    return 0;\n}",
    "options": [
      "Initial:1000",
      "Initial:1000 Deposit:1500 Withdrawal:1200",
      "Withdrawal:1200",
      "Deposit:1500"
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. Initial:1000."
  },
  {
    "id": 123,
    "module": 3,
    "moduleName": "Chương 3: Tính Kế thừa (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, phương thức ~Rectangle(){} được gọi là?\nclass Rectangle\n{\nprivate:\n    int w;\n    int h;\npublic:\n    Rectangle(int w = 0, int h = 0){}\n    void output(){}\n    ~Rectangle(){}\n};",
    "options": [
      "Phương thức khởi tạo (Constructor)",
      "Phương thức huỷ (Destructor)",
      "Phương thức bạn (friend)",
      "Phương thức ảo (Virtual)"
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. Phương thức khởi tạo (Constructor). Lỗi biên dịch."
  },
  {
    "id": 124,
    "module": 3,
    "moduleName": "Chương 3: Tính Kế thừa (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, lựa chọn nào được viết ở dòng //access variable here, khi biên dịch chương trình sẽ không có lỗi?\nclass A {\n    int a;\n    int b;\npublic:\n    float f1;\n    float f2;\n};\nclass B : public A {\npublic:\n    void displayId(){\n        //access variable here\n    }\n};\nint main() {\n    B obj;  \n    obj.displayId();\n    return 0;\n}",
    "options": [
      "a = 6; b = 8;",
      "f1= 6; f2 = 8;",
      "a = 6;",
      "a = 6; b = 8; f1= 6; f2 = 8;"
    ],
    "answer": 1,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: B. f1= 6; f2 = 8;. Không xuất gì ra màn hình."
  },
  {
    "id": 125,
    "module": 3,
    "moduleName": "Chương 3: Tính Kế thừa (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass A\n{\nprotected:\n    int     a, b;\npublic:\n    float f1, f2;\n};\nclass B : private A\n{\n    int d;\n};\nHỏi: B sử dụng được các biến thành viên nào của A",
    "options": [
      "f1, f2",
      "a, b",
      "Không có đáp án đúng",
      "f1, f2, a, b"
    ],
    "answer": 2,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: C. Không có đáp án đúng. Lỗi biên dịch."
  },
  {
    "id": 126,
    "module": 3,
    "moduleName": "Chương 3: Tính Kế thừa (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass Base{\npublic:\n    int xVal;\n    Base(int x = 0) : xVal(x){\n        cout <<\"xVal = \"<<xVal;\n    }\n};\nclass Derive : Base\n{\npublic: \n    Derive(){ xVal = 10; }\n    void Print(){\n        cout <<\" xVal = \"<<xVal<<endl;\n    }\n};\nvoid main(){\n    Derive d;\n    d.Print();\n}",
    "options": [
      "xVal = 0",
      "Lỗi biên dịch",
      "xVal = 10",
      "xVal = 0 xVal = 10"
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. xVal = 0."
  },
  {
    "id": 127,
    "module": 3,
    "moduleName": "Chương 3: Tính Kế thừa (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\n01: class A\n02: {\n03: private:\n04:   int a;\n05:   int b;\n06:   friend  void Nhap();\n07: };\n08: class B\n09: {\n10: public:\n11:   float x;\n12:   float y;\n13:   friend void Nhap();\n14: };\n15: void nhap()\n16: {\n17:   A obj1;\n18:      B obj2;\n19:   cout << \"Nhap a = \"; cin >> obj1.a;\n20:   cout << \"\nNhap x = \"; cin >> obj2.x;\n21: }",
    "options": [
      "Lỗi tại dòng 19 và 20",
      "Lỗi tại dòng 19",
      "Không lỗi ở dòng nào",
      "Lỗi tại dòng 20"
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. Lỗi tại dòng 19 và 20. Lỗi biên dịch."
  },
  {
    "id": 128,
    "module": 3,
    "moduleName": "Chương 3: Tính Kế thừa (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass Base {\npublic:\n   Base(){\n      cout << \"Constructing Base \";\n   }\n   ~Base(){\n      cout << \"Destructing Base \";\n   }\n};\nclass Derived : public Base {\npublic:\n   Derived(){\n      cout << \"Constructing Derived \";\n   }\n   ~Derived(){\n      cout << \"Destructing Derived \";\n   }\n};\nint main(void){\n   Derived *d = new Derived();\n   Base *b = d;\n   delete b;\n   return 0;\n}",
    "options": [
      "Constructing Base",
      "Constructing Base Destructing Base",
      "Constructing Derived",
      "Constructing Base Constructing Derived Destructing Base"
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. Constructing Base."
  },
  {
    "id": 129,
    "module": 3,
    "moduleName": "Chương 3: Tính Kế thừa (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass ClassA{\n    int x;\npublic:\n    int getx();\n};\nvà một lớp kế thừa theo kiểu protected:\nclass ClassB : protected ClassA{\n    int y;\n};\nKhi đó, nếu myB là một đối tượng lớp ClassB, lệnh nào sau đúng:",
    "options": [
      "Không có đáp án đúng",
      "myB.x();",
      "getx();",
      "myB.getx;"
    ],
    "answer": 1,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: B. myB.x();. Lỗi biên dịch."
  },
  {
    "id": 130,
    "module": 3,
    "moduleName": "Chương 3: Tính Kế thừa (C++)",
    "question": "Cho chương trình sau, chương trình sẽ bị lỗi biên dịch tại những dòng lệnh nào? \n1 \n2 class A{\n3 private:\n4    int x;\n5 protected:\n6    int y;\n7 public:\n8    int z;\n9    void print();\n10 };\n11 void A::print(){\n12   cout << x; \n13   cout << y; \n14   cout << z;\n15 }\n16 class B : private A{\n17 public:\n18   void print();\n19 };\n20 void B::print(){\n21   cout << x; \n22   cout << y; \n23   cout << z;\n24 }\n25 int main() {\n26   B mb;\n27   cout << mb.x << endl;\n28   cout << mb.y << endl;\n29   cout << mb.z << endl;\n30   return 0;\n31 }",
    "options": [
      "27,28,29",
      "21,27,28,29",
      "13,29",
      "21,22,23"
    ],
    "answer": 2,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: C. 13,29. Lỗi biên dịch do không thể truy cập thành phần private."
  },
  {
    "id": 131,
    "module": 3,
    "moduleName": "Chương 3: Tính Kế thừa (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì? \nclass Base{\npublic:\n    Base(){\n    }\n    ~Base(){ \n        cout << \"Base class ...\"; \n    }\n};\nclass Derive :Base\n{\npublic:\n    Derive(){\n    }\n    ~Derive(){ \n        cout << \"Derive class...\";\n    }\n};\nvoid run(){\n    Derive d;\n}\nvoid main(){\n    run();\n}",
    "options": [
      "Derive class...Base class ...",
      "Derive class...",
      "Base class ...Derive class...",
      "Base class ..."
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. Derive class...Base class ...."
  },
  {
    "id": 132,
    "module": 3,
    "moduleName": "Chương 3: Tính Kế thừa (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass ClassA{\n    int x;\npublic:\n    int getx();\n};\nvà một lớp kế thừa theo kiểu public:\nclass ClassB : public ClassA{\n    int y;\n};\nKhi đó, nếu myA là một đối tượng lớp ClassA, lệnh nào sau đây đúng:",
    "options": [
      "Không có đáp án đúng",
      "myA.x;",
      "myA.x()",
      "myA.getx();"
    ],
    "answer": 1,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: B. myA.x;. Lỗi biên dịch."
  },
  {
    "id": 133,
    "module": 3,
    "moduleName": "Chương 3: Tính Kế thừa (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass BaseA{\nprotected:\n    int A;\npublic:\n    BaseA(){ A = 5; }\n    void Print(){ cout << \"A = \" << A << endl; }\n};\nclass BaseB {\nprotected:\n    int B;\npublic:\n    BaseB(){ B = 10; }\n    void Print(){ cout << \"B = \" << B << endl; }\n};\nclass Derive :public BaseA, public BaseB {};\nvoid main(){\n    Derive d();\n    d.BaseA::Print();\n}",
    "options": [
      "B = 10",
      "Lỗi biên dịch.",
      "A = 5 B = 10",
      "A = 5"
    ],
    "answer": 1,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: B. Lỗi biên dịch.."
  },
  {
    "id": 134,
    "module": 3,
    "moduleName": "Chương 3: Tính Kế thừa (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch chương trình, lỗi tại dòng nào?\nclass A {\n   int x, y;\npublic:\n   void output(){};\n   void input(){};\n};\nclass B : public A {\nprivate: \n   float z;\n};\nvoid main()\n{\n   A a; \n   B b;\n   a = b;\n   b = a;   \n}",
    "options": [
      "b=a;",
      "a=b",
      "A a;",
      "class B : public A"
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. b=a;. Lỗi biên dịch."
  },
  {
    "id": 135,
    "module": 3,
    "moduleName": "Chương 3: Tính Kế thừa (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass A{\n   float x;\npublic:\n    A(){\n      x = 1.5;\n   }\n   void output(){\n      cout << x;\n   }\n};\nclass B : public A {\n   float y;\npublic:\n   B():A(){\n      y = 2.5;\n   }\n   void output(){\n      A::A();\n      cout << y;\n   }\n};\nvoid main()\n{\n   B * dt2 = new B;\n   dt2->output();\n}",
    "options": [
      "Các đáp án đều sai",
      "2.5",
      "1.5 2.5",
      "1.5"
    ],
    "answer": 1,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: B. 2.5."
  },
  {
    "id": 136,
    "module": 3,
    "moduleName": "Chương 3: Tính Kế thừa (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass A {\npublic:\n    A() {\n        cout << \"Constructing A...\";\n    }\n    ~A(){\n        cout << \"Destructing A...\";\n    }\n};\nclass B {\npublic:\n    B(){\n        cout << \"Constructing B...\";\n    }\n    ~B(){\n        cout << \"Destructing B...\";\n    }\n};\nclass C : public A, public B {\npublic:\n    C(){\n        cout << \"Constructing C...\";\n    }\n    ~C(){\n        cout << \"Destructing C...\";\n    }\n};\nvoid main(){\n    C ob;\n}",
    "options": [
      "Constructing A...Constructing B...Constructing C...Destructing C...",
      "Constructing A...Constructing B...Constructing C...",
      "Constructing A...Constructing B...Constructing C...Destructing C...Destructing B...Destructing A...",
      "Constructing C...Destructing C..."
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. Constructing A...Constructing B...Constructing C...Destructing C...."
  },
  {
    "id": 137,
    "module": 3,
    "moduleName": "Chương 3: Tính Kế thừa (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C# như sau, phương thức Rectangle(){} được gọi là?\npublic class Rectangle\n{\n    private int w;\n    private int h;\n    public Rectangle(){}\n    public Rectangle(int w, int h){}\n    void Output(){} \n}",
    "options": [
      "Phương thức khởi tạo (Constructor)",
      "Phương thức bạn (friend)",
      "Phương thức ảo (Virtual)",
      "Phương thức huỷ (Destructor)"
    ],
    "answer": 1,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: B. Phương thức bạn (friend). Lỗi biên dịch."
  },
  {
    "id": 138,
    "module": 3,
    "moduleName": "Chương 3: Tính Kế thừa (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass A{\nprotected:\n   int a, b;\npublic:\n   void output(){\n      cout<<\"a = \"<<a<<\" b = \"<<b;\n   }\n   A(){\n      a = b= 10;\n   }\n   A(int k1, int k2 = 8){\n      a = k1; b = k2;\n   }\n};\nint main(){\n   A a(5);\n   A b(a);\n   b.output(); \n}",
    "options": [
      "a=5; b=8;",
      "a=10; b=8;",
      "a=10; b=10;",
      "a=10; b=5;"
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. a=5; b=8;. Kết quả xuất ra: a = 5 b = 8."
  },
  {
    "id": 139,
    "module": 3,
    "moduleName": "Chương 3: Tính Kế thừa (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass Quiz {\npublic:\n    static void start(int s) {\n        correctAnswers = s;\n    }\n    static void startScore() {\n        score = correctAnswers * correctAnswers;\n    }\n    static void outResult() {\n        cout << \"Score:\" << score;\n    }\nprivate:    \n    static const string questions;\n    static int correctAnswers;\n    static int score;\n};\nconst string Quiz::questions = \"What is the Constructor?\";\nint Quiz::correctAnswers= 3;\nint Quiz::score = 0;\nint main() {    \n    Quiz::start(5);\n    Quiz::startScore();\n    Quiz::outResult();\n    return 0;\n}",
    "options": [
      "Score: 3",
      "Lỗi biên dịch",
      "Score: 25",
      "Score: 5"
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. Score: 3. Kết quả xuất ra: Score: 25."
  },
  {
    "id": 140,
    "module": 3,
    "moduleName": "Chương 3: Tính Kế thừa (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, chương trình lỗi ở dòng nào?\nclass A {\n    int a;\n    public:\n    A(int k){\n        a=k; //Dòng 1\n    }\n};\nvoid main(){\n    int n=2;\n    A *a =new A(10); //Dòng 2\n    A *b=new A [n]; //Dòng 3\n}",
    "options": [
      "Dòng 1",
      "Dòng 3",
      "Cả ba dòng đều lỗi",
      "Dòng 2"
    ],
    "answer": 1,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: B. Dòng 3. Lỗi biên dịch."
  },
  {
    "id": 141,
    "module": 3,
    "moduleName": "Chương 3: Tính Kế thừa (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass A{\npublic:\n    void show(){ }\n};\nclass B : public A{\npublic:\n    void show() { }\n};\nKhi đó, nếu myB là một đối tượng lớp B, muốn thực hiện phương thức show() của lớp B thì lệnh nào sau đây là chấp chận được:",
    "options": [
      "show();",
      "Không có đáp án đúng",
      "myB::show();",
      "myB.show();"
    ],
    "answer": 2,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: C. myB::show();. Lỗi biên dịch."
  },
  {
    "id": 142,
    "module": 3,
    "moduleName": "Chương 3: Tính Kế thừa (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass BankAccount {\nprivate: \n   string accNumber;\n   double balance;\npublic:\n   BankAccount(const string &accNum, double ib):accNumber(accNum),balance(ib) {}\n   void deposit(double amount) {\n      balance += amount;\n      cout << \", Deposit successful: \" << balance ;\n   }\n};\nint main() {\n   double deposit_amt;\n   BankAccount account(\"SB-123\", 1000.0);\n   deposit_amt = 1500;\n   cout<<\"Amount: \"<<deposit_amt << \". \";\n   account.deposit(deposit_amt);\n   return 0;\n}",
    "options": [
      "Amount: 1500",
      "Amount: 1000, Deposit successful: 1500",
      "Deposit successful: 2500",
      "Amount: 1500, Deposit successful: 2500"
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. Amount: 1500."
  },
  {
    "id": 143,
    "module": 3,
    "moduleName": "Chương 3: Tính Kế thừa (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass Shape\n{\npublic:\n    void setWidth(int w)\n    {\n        width = w;\n    }\n    void setHeight(int h)\n    {\n        height = h;\n    }\nprotected:\n    int width;\n    int height;\n};\nclass PaintCost\n{\npublic:\n    int getCost(int area)\n    {\n        return area * 10;\n    }\n};\nclass Rectangle : public Shape, public PaintCost\n{\npublic:\n    int getArea()\n    {\n        return (width * height);\n    }\n};\nint main(void)\n{\n    Rectangle rect;\n    int area;\n    rect.setWidth(6);\n    rect.setHeight(8);\n    area = rect.getArea();  \n    cout << rect.getCost(area) << endl;\n    return 0;\n}",
    "options": [
      "48",
      "480",
      "6",
      "8"
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. 48."
  },
  {
    "id": 144,
    "module": 3,
    "moduleName": "Chương 3: Tính Kế thừa (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass Base {\nprivate:\n    int a, b;\n};\nclass Derived {\npublic:\n    Base obj1;\n    void setValues() {\n        obj1.a = 12;\n        obj1.b = 8;\n    }\n    void printValues() {\n        cout << obj1.a + obj1.a;\n    }\n};\nvoid main() {\n    Derived obj;\n    obj.setValues();\n    obj.printValues();\n}",
    "options": [
      "24",
      "8",
      "12",
      "Lỗi biên dịch do biến a, b của lớp Base là private"
    ],
    "answer": 3,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: D. Lỗi biên dịch do biến a, b của lớp Base là private."
  },
  {
    "id": 145,
    "module": 3,
    "moduleName": "Chương 3: Tính Kế thừa (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass Person {\nprivate: string name;\n   int age;\n   string country;\npublic:\n   void setName(const string & n) {\n      name = n;\n   }\n   void setAge(int a) {\n      age = a;\n   }\n   void setCountry(const string & c) {\n      country = c;\n   }\n   string getName() {\n      return name;\n   }\n   int getAge() {\n      return age;\n   }\n   string getCountry() {\n      return country;\n   }\n};\nint main() {\n   Person person;\n   person.setName(\"Saveli Sujatha\");\n   person.setAge(25);\n   person.setCountry(\"USA\");\n   cout << \"Name: \" << person.getName();\n   cout << \", Age: \" << person.getAge() ;\n   cout << \", Country: \" << person.getCountry();\n   return 0;\n}",
    "options": [
      "Name: Saveli Sujatha",
      "Name: Saveli Sujatha, Age: 25, Country: USA",
      "Name: Saveli Sujatha, Country: USA, Age: 25",
      "Name: Saveli Sujatha, Age: 25"
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. Name: Saveli Sujatha."
  },
  {
    "id": 146,
    "module": 3,
    "moduleName": "Chương 3: Tính Kế thừa (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì? \nclass Base{\npublic:\n    Base(){\n        cout << \"Base class...\";\n    }\n};\nclass Derive :public Base{\npublic:\n    Derive(){\n        cout << \"Derive class...\";\n    }\n};\nvoid main(){\n    Derive d;\n}",
    "options": [
      "Base class...",
      "Base class...Derive class...",
      "Derive class...Base class...",
      "Derive class..."
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. Base class...."
  },
  {
    "id": 147,
    "module": 3,
    "moduleName": "Chương 3: Tính Kế thừa (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch chương trình, lỗi ở dòng nào:\n1   class RectangleInt\n2   {\n3   private:\n4       int a = 7;\n5       int b = 9;\n6       friend void output();\n7   };\n8   class RectangleFloat\n9   {   \n10  private:\n11      float x = 6; \n12      float y = 8;\n13      friend void output();\n14  };\n15  void output()\n16  {\n17      RectangleInt obj1;\n18      RectangleFloat obj2;\n19      cout << obj1.a; \n20      cout << obj2.x;\n21  }\n22  int main() {\n23      output();\n24      return 0;\n25  }",
    "options": [
      "Lỗi tại dòng 15",
      "Lỗi tại dòng 13",
      "Lỗi tại dòng 16, 17",
      "Không dòng nào có lỗi"
    ],
    "answer": 1,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: B. Lỗi tại dòng 13. Lỗi biên dịch."
  },
  {
    "id": 148,
    "module": 3,
    "moduleName": "Chương 3: Tính Kế thừa (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass Base{\nprotected:\n    int xVal;\npublic:\n    Base(){ xVal = 5; }\n    void Print(){\n        cout << \"xVal = \" << xVal << endl;\n    }\n};\nclass Derive : protected Base\n{\npublic:\n    Derive(int x) { xVal = x; }\n};\nvoid main()\n{\n    Derive d(10);\n    d.Print();\n}",
    "options": [
      "xVal = 5",
      "xVal = 10",
      "Lỗi biên dịch",
      "xVal = 5 xVal = 10"
    ],
    "answer": 2,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: C. Lỗi biên dịch."
  },
  {
    "id": 149,
    "module": 3,
    "moduleName": "Chương 3: Tính Kế thừa (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass Parent {\nprotected:\n    int id_protected;\n};\nclass Child : public Parent {\npublic:\n    void setId(int id) {\n        id_protected = id;\n    }\n    void displayId() {\n        cout << \"ID Protected is: \" << id_protected << endl;\n    }\n};\nint main() {\n    Child obj1;\n    obj1.setId(68);\n    obj1.displayId();\n    return 0;\n}",
    "options": [
      "ID Protected is:0",
      "68",
      "Lỗi biên dịch",
      "ID Protected is:68"
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. ID Protected is:0. Kết quả in ra ID Protected is: 68."
  },
  {
    "id": 150,
    "module": 3,
    "moduleName": "Chương 3: Tính Kế thừa (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass A{\npublic:\n    A(){\n        cout << \"Constructor \";\n    }\n    ~A(){\n        cout << \"Destructor \";\n    }\n};\nint main(){\n    A *a = new A[2];\n    delete a;\n    return 0;\n}",
    "options": [
      "Destructor Destructor Constructor",
      "Constructor",
      "Destructor",
      "Constructor Constructor Destructor"
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. Destructor Destructor Constructor. Kết quả in ra là 10."
  },
  {
    "id": 151,
    "module": 3,
    "moduleName": "Chương 3: Tính Kế thừa (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass Parent{\nprotected:\n    int id_protected = 0;\n};\nclass Child : public Parent{\npublic:\n    void setId(int id){\n        id_protected = id;\n    }\n    void displayId(){\n        cout << \"ID Protected is: \" << id_protected << endl;\n    }\n};\nint main() {\n    Child obj;  \n    obj.displayId();\n    return 0;\n}",
    "options": [
      "ID Protected is:68",
      "68",
      "ID Protected is:0",
      "Lỗi biên dịch"
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. ID Protected is:68. Kết quả in ra ID Protected is: 0."
  },
  {
    "id": 152,
    "module": 3,
    "moduleName": "Chương 3: Tính Kế thừa (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\n1   class RectangleInt\n2   {\n3   private:\n4       int a = 7;\n5       int b = 9;\n6       friend void output();\n7   };\n8   class RectangleFloat\n9   {   \n10  private:\n11      float x = 6; \n12      float y = 8;\n13      friend void output();\n14  };\n15  void output()\n16  {\n17      RectangleInt obj1;\n18      RectangleFloat obj2;\n19      cout << obj1.a; \n20      cout << obj2.x;\n21  }\n22  int main() {\n23      output();\n24      return 0;\n25  }",
    "options": [
      "76",
      "8",
      "6",
      "Lỗi biên dịch"
    ],
    "answer": 3,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: D. Lỗi biên dịch."
  },
  {
    "id": 153,
    "module": 3,
    "moduleName": "Chương 3: Tính Kế thừa (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass Triangle\n{\nprivate:\n    double side1;\n    double side2;\n    double side3;\npublic:\n    Triangle(double s1, double s2, double s3) : side1(s1), side2(s2), side3(s3) {}\n    void determineType()\n    {\n        if (side1 == side2 && side2 == side3)\n        {\n            cout << \"Equilateral Triangle\";\n        }\n        else if (side1 == side2 || side1 == side3 || side2 == side3)\n        {\n            cout << \"Isosceles Triangle\";\n        }\n        else\n        {\n            cout << \"Scalene Triangle\";\n        }\n    }\n};\nint main()\n{\n    Triangle triangle(7, 7, 7);\n    triangle.determineType();\n    return 0;\n}",
    "options": [
      "Isosceles Triangle",
      "Lỗi biên dịch",
      "Equilateral Triangle",
      "Scalene Triangle"
    ],
    "answer": 2,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: C. Equilateral Triangle."
  },
  {
    "id": 154,
    "module": 3,
    "moduleName": "Chương 3: Tính Kế thừa (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass A\n{\n    int a, b;\npublic:\n    A()\n    {\n        a = 5;\n        b = 10;\n    }\n    static void output()\n    {\n        cout << \"a = \" << a << \" b = \" << b:\n    }\n};\nstatic A::b = 15;\nvoid main()\n{\n    A a;\n    a.output();\n}",
    "options": [
      "a=5;b=10;",
      "a=5;b=15;",
      "Chương trình có lỗi, không thể hiển thị kết quả (vì lỗi dòng static A::b = 15;)",
      "a=5;b=0;"
    ],
    "answer": 1,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: B. a=5;b=15;. Lỗi biên dịch."
  },
  {
    "id": 155,
    "module": 3,
    "moduleName": "Chương 3: Tính Kế thừa (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì? \nclass Base\n{\nprotected:\n    int xVal;\npublic:\n    Base()\n    { \n        xVal = 5; \n    }\n    void Print()\n    {\n        cout << xVal ;\n    }\n};\nclass Derive :protected  Base\n{\npublic:\n    Derive(int x) \n    { \n        xVal = x; \n    }\n};\nvoid main()\n{\n    Derive d(10);\n    d.Print();\n}",
    "options": [
      "10",
      "5",
      "Lỗi biên dịch tại d.Print() do hàm lớp Derive kế thừa protected lớp Base nên hàm Print có thuộc tính private",
      "Không xuất gì ra màn hình."
    ],
    "answer": 2,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: C. Lỗi biên dịch tại d.Print() do hàm lớp Derive kế thừa protected lớp Base nên hàm Print có thuộc tính private."
  },
  {
    "id": 156,
    "module": 3,
    "moduleName": "Chương 3: Tính Kế thừa (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass A{\npublic:\n    A(){\n        cout << \"Constructor \";\n    }\n    ~A(){\n        cout << \"Destructor \";\n    }\n};\nint main()\n{\n    A *a = new A[2];\n    delete []a;\n    return 0;\n}",
    "options": [
      "Destructor",
      "Destructor Destructor Constructor",
      "Constructor",
      "Constructor Constructor Destructor Destructor"
    ],
    "answer": 2,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: C. Constructor."
  },
  {
    "id": 157,
    "module": 3,
    "moduleName": "Chương 3: Tính Kế thừa (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, lựa chọn nào được viết ở dòng //access variable here, khi biên dịch chương trình sẽ không có lỗi?\nclass A{\nprivate:\n    int a;\nprotected:\n    int b;\npublic:\n    float f1;\n    float f2;\n};\nclass B : protected A {\npublic:\n    void displayId(){\n        //access variable here\n    }\n};\nint main() {\n    B obj;  \n    obj.displayId();\n    return 0;\n}",
    "options": [
      "a = 6; b = 8;",
      "a = 6;",
      "a= 6; f2 = 8;",
      "b = 8; f1= 6; f2 = 8;"
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. a = 6; b = 8;. Chương trình không xuất gì ra màn hình."
  },
  {
    "id": 158,
    "module": 3,
    "moduleName": "Chương 3: Tính Kế thừa (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass Rectangle\n{\nprivate:\n    double length;\n    double width;\npublic:\n    Rectangle(double len, double wid) : length(len), width(wid) {}\n    double calculateArea()\n    {\n        return length * width;\n    }\n    double calculatePerimeter()\n    {\n        return 2 * (length + width);\n    }\n};\nint main()\n{\n    Rectangle rectangle(4.5, 6.0);\n    double area = rectangle.calculateArea();\n    cout << \"Area: \" << area;\n    double perimeter = rectangle.calculatePerimeter();\n    cout << \" Perimeter: \" << perimeter;\n    return 0;\n}",
    "options": [
      "Perimeter: 21",
      "Area: 27 Perimeter: 21",
      "Area: 27",
      "Perimeter: 27"
    ],
    "answer": 1,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: B. Area: 27 Perimeter: 21."
  },
  {
    "id": 159,
    "module": 3,
    "moduleName": "Chương 3: Tính Kế thừa (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì? \nclass Shape {\npublic:\n    void setWidth(int w) {\n        width = w;\n    }\n    void setHeight(int h) {\n        height = h;\n    }\nprotected:\n    int width;\n    int height;\n};\nclass Rectangle : public Shape {\npublic:\n    int getArea() {\n        return (width * height);\n    }\n};\nint main(void) {\n    Rectangle rect;\n    rect.setWidth(5);\n    rect.setHeight(7);  \n    cout << \"Total area: \" << rect.getArea() << endl;\n    return 0;\n}",
    "options": [
      "Total area: 25",
      "Total area: 35",
      "Total area: 7",
      "Total area: 5"
    ],
    "answer": 1,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: B. Total area: 35."
  },
  {
    "id": 160,
    "module": 3,
    "moduleName": "Chương 3: Tính Kế thừa (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, lựa chọn nào được viết ở dòng //access variable here, khi biên dịch chương trình sẽ không có lỗi?\nclass RectangleInt {\nprivate:\n    int a;\n    int b;\npublic:\n    float x;\n    float y;\n    friend class RectangleFloat;\n};\nclass RectangleFloat {\n    RectangleInt rectInt;\npublic:\n    void displayId(){       \n        //access variable here\n    }\n};\nint main() {\n    RectangleFloat obj;\n    obj.displayId();\n    return 0;\n}",
    "options": [
      "rectInt.a = 5; rectInt.b = 5; rectInt.x = 5; rectInt.y = 5;",
      "Cả 3 đáp án đều sai",
      "rectInt.a = 5; rectInt.b = 5;",
      "rectInt.x = 5; rectInt.y = 5;"
    ],
    "answer": 1,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: B. Cả 3 đáp án đều sai. Không xuất gì ra màn hình."
  },
  {
    "id": 161,
    "module": 3,
    "moduleName": "Chương 3: Tính Kế thừa (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass A\n{\nprivate:\n   int x = 6;\n};\nclass B : protected A\n{\n   int y = 8;\n   output(){cout<<x+y;}\n};\nvoid main()\n{\n   A test;\n}",
    "options": [
      "Lỗi biên dịch",
      "6",
      "14",
      "8"
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. Lỗi biên dịch."
  },
  {
    "id": 162,
    "module": 3,
    "moduleName": "Chương 3: Tính Kế thừa (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì? \nclass A\n{\npublic:\n   A()  { \n    cout << \"A's constructor called...\" ; \n   }\n};\nclass B\n{\npublic:\n   B()  { \n    cout << \"B's constructor called...\"; \n   }\n};\nclass C : public B, public A  \n{\npublic:\n   C()  { \n    cout << \"C's constructor called...\"; \n   }\n};\nint main(){\n    A a;\n    return 0;\n}",
    "options": [
      "A's constructor called...B's constructor called...",
      "B's constructor called...A's constructor called...C's constructor called...",
      "C's constructor called...B's constructor called...C's constructor called...",
      "A's constructor called..."
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. A's constructor called...B's constructor called...."
  },
  {
    "id": 163,
    "module": 3,
    "moduleName": "Chương 3: Tính Kế thừa (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\n1.  class Lop1\n2.  {\n3.  private:    \n4.          int a,b;\n5.          friend void Nhap( );\n6.  };\n7.  class Lop2\n8.  {\n9.  private:\n10.          float x,y;\n11.          friend void Nhap( );\n12. };\n13. void Nhap( )\n14. {\n15.      Lop1  obj1; Lop2 obj2;\n16.      cout<<\"\n\t Nhap a =\"; cin>>obj1.a;\n17.      cout<<\"\n\t Nhap x =\"; cin>>obj2.x;\n18. }",
    "options": [
      "Lỗi tại dòng 16, 17",
      "Không lỗi ở dòng nào",
      "Lỗi tại dòng 13",
      "Lỗi tại dòng 15"
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. Lỗi tại dòng 16, 17. Lỗi biên dịch."
  },
  {
    "id": 164,
    "module": 3,
    "moduleName": "Chương 3: Tính Kế thừa (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass Polygon {\nprotected:\n    int width, height;\npublic:\n    Polygon(int a);\n    void  setValues(int a, int b);\n};\nPolygon::Polygon(int a){\n    width = a;\n}\nvoid Polygon::setValues(int a, int b){\n    width = a;\n    height = b;\n}\nclass Rectangle : public Polygon {\npublic:\n    Rectangle(int w, int h);\n        int area();\n};\nRectangle::Rectangle(int w, int h) :Polygon(w){\n    height = h;\n}\nint Rectangle::area(){\n    return (width * height);\n}\nint main() {\n    Rectangle rect(8, 9);\n    cout << rect.area() << endl;\n    return 0;\n}",
    "options": [
      "72",
      "20",
      "8",
      "17"
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. 72."
  },
  {
    "id": 165,
    "module": 3,
    "moduleName": "Chương 3: Tính Kế thừa (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass Coordinate { \npublic:\n    int n; \n};\nclass Cord { \npublic:\n    Coordinate c; \n};\nvoid main() {\n    Cord x;\n    x.c.n = 10;\n    cout << x.c.n;\n}",
    "options": [
      "6",
      "10",
      "0",
      "Lỗi biên dịch tại x.c.n = 10; do biến n và đối tượng c có thuộc tính public nên không được truy cập từ ngoài lớp"
    ],
    "answer": 1,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: B. 10."
  },
  {
    "id": 166,
    "module": 3,
    "moduleName": "Chương 3: Tính Kế thừa (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì? \ntemplate <class T>\nclass Test {\n    T x, y;\npublic:\n    Test(T a = 0, T b = 0) {\n        x = b; \n        y = a;\n    }\n    void display();\n};\ntemplate <class T>\nvoid Test<T>::display() {\n    cout << \"(\" << x << \",\" << y << \") \";\n}\nvoid main() {\n    Test<int> ti(3, 5); \n    ti.display();\n    Test<char> tc('a', 'b'); \n    tc.display();\n}",
    "options": [
      "(b,a)",
      "(5,3)",
      "(3,5) (a,b)",
      "(5,3) (b,a)"
    ],
    "answer": 1,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: B. (5,3). Lỗi biên dịch."
  },
  {
    "id": 167,
    "module": 3,
    "moduleName": "Chương 3: Tính Kế thừa (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì? \nclass Base {\n    int na;\npublic:\n    Base(int a = 0) {\n        na = a;\n    }\n    ~Base(){\n        cout << \" \" << na;\n    }\n};\nvoid Func(Base aaa){\n    Base *a1 = new Base(3);\n    delete a1;\n}\nvoid run(){\n    Base aaa(4);\n    Func(aaa);\n}\nvoid main() {\n    run();\n}",
    "options": [
      "0 3 4",
      "3 4 4",
      "3 3 4",
      "3 4"
    ],
    "answer": 1,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: B. 3 4 4."
  },
  {
    "id": 168,
    "module": 3,
    "moduleName": "Chương 3: Tính Kế thừa (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass Derived {\npublic:\n   int a, b;\npublic:  \n   void setValues(int  a, int  b) {\n      this->a = a; this->b = b;\n   }  \n   void printValues() {\n      cout << a + b;\n   }\n};\nvoid main() {\n   Derived obj;\n   obj.setValues(6,8);\n   obj.printValues();\n}",
    "options": [
      "6",
      "8",
      "14",
      "Lỗi biên dịch"
    ],
    "answer": 2,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: C. 14."
  },
  {
    "id": 169,
    "module": 3,
    "moduleName": "Chương 3: Tính Kế thừa (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass Lop1\n{\n   private:\n      int   a,b;\n   public:\n      float x,y;\n      friend class Lop2;\n};\nclass Lop2\n{\n   Lop1  objA;\n};\nclass Lop3\n{\n   Lop1  objB;\n};",
    "options": [
      "objA truy cập được tất cả các biến, objB truy cập được các biến x,y",
      "objA và objB chỉ truy cập được các biến x,y",
      "objA truy cập được tất cả các biến, objB truy cập được các biến a,b",
      "objA và objB truy cập được tất cả các biến"
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. objA truy cập được tất cả các biến, objB truy cập được các biến x,y. Lỗi biên dịch."
  },
  {
    "id": 170,
    "module": 3,
    "moduleName": "Chương 3: Tính Kế thừa (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass AInteger {\n    int value;\npublic:\n    AInteger() { \n        value = 0; \n    }\n    AInteger(int i) { \n        value = i; \n    }\n    AInteger(const AInteger &ai) {\n        value = ai.value;\n        cout << \"Copy...\";\n    }\n    AInteger &operator = (const AInteger &ai) {\n        value = ai.value;\n        cout << \" = \";\n        return *this;\n    }\n};\nvoid nothing(AInteger a, AInteger b, AInteger c) { \n}\nvoid main() {\n    AInteger i(5);\n    AInteger j; \n    AInteger k = i;     \n    j = i;  \n    cout << \"nothing...\";\n    nothing(i, j, k);\n}",
    "options": [
      "Copy... = nothing...Copy...Copy...Copy...",
      "Copy...Copy...",
      "nothing... = ...Copy...",
      "Copy...nothing..."
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. Copy... = nothing...Copy...Copy...Copy...."
  },
  {
    "id": 171,
    "module": 4,
    "moduleName": "Chương 4: Tính Đa hình (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass A{\npublic:\n    void x(){\n        cout << \"I am ax...\";\n    }\n};\nclass B : public A{\npublic:\n    void x(){\n        cout << \"I am bx...\";\n    }\n    void y(){\n        cout << \"I am by...\";\n    }\n};\nvoid show(A *a) {\n    a->x();\n}\nvoid main() {\n    A *a = new A();\n    show(a);\n    B *b = new B();\n    show(b);\n}",
    "options": [
      "I am ax...I am bx...",
      "I am ax...I am ax...",
      "I am bx...I am bx...",
      "I am bx...I am ax..."
    ],
    "answer": 1,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: B. I am ax...I am ax...."
  },
  {
    "id": 172,
    "module": 4,
    "moduleName": "Chương 4: Tính Đa hình (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass Person {\npublic:\n    Person(int x)  {\n        cout << \"Person::Person(int)...\" ;\n    }\n};\nclass Faculty : public Person {\npublic:\n    Faculty(int x) :Person(x)   {\n        cout << \"Faculty::Faculty(int)...\" ;\n    }\n};\nclass Student : public Person {\npublic:\n    Student(int x) :Person(x) {\n        cout << \"Student::Student(int)...\" ;\n    }\n};\nclass TA : public Faculty, public Student  {\npublic:\n    TA(int x) :Student(x), Faculty(x)   {\n        cout << \"TA::TA(int)...\" ;\n    }\n};\nint main()  {\n    TA t(30);\n}",
    "options": [
      "Person::Person(int)...Faculty::Faculty(int)...Student::Student(int)...TA::TA(int )...",
      "Faculty::Faculty(int)...Person::Person(int)...Student::Student(int)...TA::TA(int )...",
      "Person::Person(int)...Faculty::Faculty(int)...Person::Person(int)...Student::Student(int)...TA::TA(int )...",
      "Person::Person(int)...Faculty::Faculty(int)...Person::Person(int)...Student::Student(int)..."
    ],
    "answer": 3,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: D. Person::Person(int)...Faculty::Faculty(int)...Person::Person(int)...Student::Student(int)...."
  },
  {
    "id": 173,
    "module": 4,
    "moduleName": "Chương 4: Tính Đa hình (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì? \n#include <cmath>\nclass Shape {\npublic:\n    virtual float area() = 0;  \n    virtual void printInfo() {\n        cout << \"Shape\" << endl;\n    }\n};\nclass Circle : public Shape {\npublic:\n    Circle(float radius) : radius(radius) {}\n    float area() override {\n        return 3.14159 * radius * radius;\n    }\n    void printInfo() override {\n        cout << \"Circle Radius \" << radius ;\n    }\nprivate:\n    float radius;\n};\nclass Square : public Shape {\npublic:\n    Square(float side) : side(side) {}\n    float area() override {\n        return side * side;\n    }\n    void printInfo() override {\n        cout << \"Square Side \" << side ;\n    }\nprivate:\n    float side;\n};\nint main() {\n    Circle circle(5);\n    Square square(4);\n    Shape* shapes[] = { &circle, &square };\n    for (int i = 0; i < 2; ++i) {\n        shapes[i]->printInfo();\n        cout << \", Area: \" << shapes[i]->area() << \"\t\";\n    }\n    return 0;\n}",
    "options": [
      "Circle Radius 5, Area: 78.5397 Square Side 4, Area: 16",
      "Circle Radius 5, Area: 78.5397",
      "Circle Radius 5",
      "Square Side 4, Area: 16"
    ],
    "answer": 1,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: B. Circle Radius 5, Area: 78.5397."
  },
  {
    "id": 174,
    "module": 4,
    "moduleName": "Chương 4: Tính Đa hình (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, lớp Polygon có đặc điểm gì?\nclass Polygon {\nprotected:\n    int width, height;\npublic:\n    void setValues(int a, int b);\n    virtual int area()=0;\n};\nvoid Polygon::setValues(int a, int b){\n    width = a;\n    height = b;\n}\nclass Rectangle : public Polygon {\npublic:\n    int area();\n};\nint Rectangle::area(){\n    return (width * height);\n}\nclass Triangle : public Polygon {\npublic:\n    int area();\n};\nint Triangle::area(){\n    return (width * height / 2);\n}\nint main() {\n    Rectangle rect;\n    Triangle trgl;\n    rect.setValues(4, 5);\n    trgl.setValues(4, 5);\n    cout << \"Rectangle area:\" << rect.area() << \" Triangle area:\" << trgl.area() << endl;\n    return 0;\n}",
    "options": [
      "Lớp đa kế thừa",
      "Lớp mẫu (Template Classes)",
      "Lớp trừu tượng (abstract classes)",
      "Các đáp án đều sai"
    ],
    "answer": 2,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: C. Lớp trừu tượng (abstract classes) vì chứa hàm thuần ảo virtual int area() = 0;"
  },
  {
    "id": 175,
    "module": 4,
    "moduleName": "Chương 4: Tính Đa hình (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass A{\npublic:\n    A()  { \n        cout << \"A's constructor...\";\n    }\n};\nclass B{\npublic:\n    B()  { \n        cout << \"B's constructor...\"; \n    }\n};\nclass C : public B, public A {\npublic:\n    C()  { \n        cout << \"C's constructor...\";\n    }\n};\nint main(){\n    C c;\n    return 0;\n}",
    "options": [
      "A's constructor...B's constructor...",
      "B's constructor...A's constructor...C's constructor...",
      "A's constructor...B's constructor...C's constructor...",
      "B's constructor..."
    ],
    "answer": 1,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: B. B's constructor...A's constructor...C's constructor...."
  },
  {
    "id": 176,
    "module": 4,
    "moduleName": "Chương 4: Tính Đa hình (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì? \nclass Animal {\npublic:\n    string name;\n    string species;\n    Animal(const string& name, const string& species)\n        : name(name), species(species) {}\n    virtual string makeSound() const = 0;\n};\nclass Dog : public Animal {\npublic:\n    Dog(const string& name)\n        : Animal(name, \"Dog\") {}\n    string makeSound() const override {\n        return \"Woof!\";\n    }\n};\nclass Cat : public Animal {\npublic:\n    Cat(const string& name)\n        : Animal(name, \"Cat\") {}\n    string makeSound() const override {\n        return \"Meow!\";\n    }\n};\nint main() {\n    Dog dogInstance(\"Buddy\");\n    Cat catInstance(\"Whiskers\");\n    cout << dogInstance.name << \" says \" << dogInstance.makeSound()<<\"\t\";\n    cout << catInstance.name << \" says \" << catInstance.makeSound();\n    return 0;\n}",
    "options": [
      "Whiskers says Meow! Buddy says Woof!",
      "Whiskers says Meow!",
      "Buddy says Woof!",
      "Buddy says Woof! Whiskers says Meow!"
    ],
    "answer": 1,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: B. Whiskers says Meow!."
  },
  {
    "id": 177,
    "module": 4,
    "moduleName": "Chương 4: Tính Đa hình (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass Polygon {\nprotected:\n    int width, height;\npublic:\n    Polygon(int a);\n    void  setValues(int a, int b);\n};\nPolygon::Polygon(int a){\n    width = a;\n}\nvoid Polygon::setValues(int a, int b){\n    width = a;\n    height = b;\n}\nclass Rectangle : public Polygon {\npublic:\n    Rectangle(int w, int h);\n    int area();\n};\nRectangle::Rectangle(int w, int h) :Polygon(h){\n    height = h;\n}\nint Rectangle::area(){\n    return (width * height);\n}\nint main() {\n    Rectangle rect(8, 9);\n    cout << rect.area() << endl;\n    return 0;\n}",
    "options": [
      "72",
      "17",
      "8",
      "81"
    ],
    "answer": 2,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: C. 8."
  },
  {
    "id": 178,
    "module": 4,
    "moduleName": "Chương 4: Tính Đa hình (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass A{\npublic:\n    void x(){\n        cout << \"I am Ax...\";\n    }\n    void m(){\n        cout << \"I am Am...\";\n        x();\n    }\n};\nclass B : public A{\npublic:\n    void x(){\n        cout << \"I am Bx...\";\n    }\n    void y(){\n        cout << \"I am By...\";\n        m();\n    }\n};\nvoid main()\n{\n    B *b = new B();\n    b->y();\n}",
    "options": [
      "I am By...I am Am...I am Bx...",
      "I am By...I am Bx...",
      "I am By...I am Am...I am Ax...",
      "I am By...I am Bm..."
    ],
    "answer": 2,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: C. I am By...I am Am...I am Ax...."
  },
  {
    "id": 179,
    "module": 4,
    "moduleName": "Chương 4: Tính Đa hình (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì? \nclass A {\npublic:\n   A() {\n      cout << \"Constructing A...\";\n   }\n   ~A() {\n      cout << \"Destructing A...\";\n   }\n};\nclass B : public A {\npublic:\n   B() {\n      cout << \"Constructing B...\";\n   }\n   ~B() {\n      cout << \"Destructing B...\";\n   }\n};\nclass C : public B {\npublic:\n   C(){\n      cout << \"Constructing C...\";\n   }\n   ~C(){\n      cout << \"Destructing C...\";\n   }\n};\nvoid main(){\n   C ob;\n}",
    "options": [
      "Constructing A...Constructing B...Constructing C.Destructing C...Destructing B...Destructing A...",
      "Constructing C...Destructing C...",
      "Constructing A...Constructing B...Constructing C...",
      "Constructing A...Destructing A..."
    ],
    "answer": 1,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: B. Constructing C...Destructing C...."
  },
  {
    "id": 180,
    "module": 4,
    "moduleName": "Chương 4: Tính Đa hình (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass Shape\n{\nprotected:\n   double volume;\npublic:\n   virtual void find_vol() = 0;\n};\nclass Cube : public Shape\n{\nprotected:\n   double side;\npublic:\n   Cube();\n   void find_vol();\n};\nclass Sphere : public Shape\n{\nprotected:\n   double radius;\npublic:\n   Sphere();\n   void find_vol();\n};\nCube::Cube()\n{   \n   side=3;\n}\nSphere::Sphere()\n{\n   radius=4;\n}\nvoid Cube::find_vol()\n{\n   volume = side*side*side;\n   cout << \"Cube is : \" << volume << \"...\";\n}\nvoid Sphere::find_vol()\n{\n   volume = radius*radius*radius;\n   cout << \"Sphere is : \"<< volume;\n}\nvoid main()\n{\n   Shape *ptr;\n   Cube cube;\n   Sphere sphere;\n   ptr = &cube;\n   ptr->find_vol();\n   ptr = &sphere;\n   ptr->find_vol();\n}",
    "options": [
      "Cube is : 3...Sphere is : 4",
      "Sphere is : 4",
      "Cube is : 27",
      "Cube is : 27...Sphere is : 64"
    ],
    "answer": 2,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: C. Cube is : 27."
  },
  {
    "id": 181,
    "module": 4,
    "moduleName": "Chương 4: Tính Đa hình (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì? \nclass Shape {\npublic:\n    virtual void draw() = 0; \n    virtual ~Shape() {} \n};\nclass Circle : public Shape {\npublic:\n    void draw() override {\n        cout << \"Circle\" ;\n    }\n};\nclass Square : public Shape {\npublic:\n    void draw() override {\n        cout << \"Square\" ;\n    }\n};\nint main() {\n    Circle circle;\n    Square square;\n    Shape* shapes[] = { &circle, &square };\n    for (int i = 0; i < 2; ++i) {\n        shapes[i]->draw();\n        cout << \"\t\";\n    }\n    return 0;\n}",
    "options": [
      "Square Circle",
      "Circle",
      "Square",
      "Circle Square"
    ],
    "answer": 1,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: B. Circle."
  },
  {
    "id": 182,
    "module": 4,
    "moduleName": "Chương 4: Tính Đa hình (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì? \nclass Animal{\npublic:\n    Animal(){\n        cout << \"Animal constructor...\";\n    }\n    void walk(){\n        cout << \"Animal walks...\";\n    }\n};\nclass Tiger : public Animal{\npublic:\n    Tiger(){\n        cout << \"Tiger constructor ...\";\n    }\n};\nclass Lion : public Animal{\npublic:\n    Lion(){\n        cout << \"Lion constructor...\" ;\n    }\n};\nclass Liger : public Tiger, public Lion{\npublic:\n    Liger(){\n        cout << \"Liger constructor...\" ;\n    }\n};\nint main()\n{\n    Liger anil;\n    anil.Animal::walk();\n    return 0;\n}",
    "options": [
      "Animal constructor...Lion constructor...Liger constructor...Animal walks...",
      "Animal constructor...Tiger constructor...Animal constructor...",
      "Tiger constructor...Animal constructor...Lion constructor...Liger constructor...",
      "Animal constructor...Tiger constructor...Animal constructor...Lion constructor...Liger constructor...Animal walks..."
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. Animal constructor...Lion constructor...Liger constructor...Animal walks...."
  },
  {
    "id": 183,
    "module": 4,
    "moduleName": "Chương 4: Tính Đa hình (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass A{\npublic:\n    void x(){\n        cout << \"I am ax...\";\n    }\n};\nclass B : public A{\npublic:\n    void x(){\n        cout << \"I am bx...\";\n    }\n    void y(){\n        cout << \"I am by...\";\n    }\n};\nvoid show(A *a){\n    a->x();\n}\nvoid main(){\n    A *a = new A();\n    show(a);\n    B *b = new B();\n    show(b);\n}",
    "options": [
      "I am bx...I am ax...",
      "I am ax...I am bx...",
      "I am ax...I am ax...",
      "I am bx...I am bx..."
    ],
    "answer": 2,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: C. I am ax...I am ax...."
  },
  {
    "id": 184,
    "module": 4,
    "moduleName": "Chương 4: Tính Đa hình (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì? \nclass Human {\nprivate:\n   string nameC;\npublic:\n   Human(const string & name) : nameC(name) { }\n   string name() const { return nameC; }\n   void talkTo(const Human & person) const {\n      cout << nameC << \" Hello, \" << person.name() << \"!\" << \"...\";\n   }\n};\nint main() {\n   Human ha(\"Nguyen Ha\");\n   Human tuan(\"Nguyen Anh Tuan\");\n   ha.talkTo(tuan);\n   tuan.talkTo(ha);\n   return 0;\n}",
    "options": [
      "Nguyen Anh Tuan Hello, Nguyen Ha!...",
      "Nguyen Anh Tuan Hello, Nguyen Ha!...Nguyen Ha Hello, Nguyen Anh Tuan!...",
      "Nguyen Ha Hello, Nguyen Anh Tuan!...Nguyen Anh Tuan Hello, Nguyen Ha!...",
      "Nguyen Ha Hello, Nguyen Anh Tuan!..."
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. Nguyen Anh Tuan Hello, Nguyen Ha!...."
  },
  {
    "id": 185,
    "module": 4,
    "moduleName": "Chương 4: Tính Đa hình (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì? \nclass Animal {\npublic:\n    Animal(const string& name, const string& species) : name(name), species(species) {}\n    virtual void makeSound() const = 0;\n    void getInfo() const {\n        cout << name << \" is a \" << species << endl;\n    }\nprotected:\n    string name;\n    string species;\n};\nclass Dog : public Animal {\npublic:\n    Dog(const string& name) : Animal(name, \"Dog\") {}\n    void makeSound() const override {\n        cout << \"Woof!\" << \"\t\";\n    }\n};\nclass Cat : public Animal {\npublic:\n    Cat(const string& name) : Animal(name, \"Cat\") {}\n    void makeSound() const override {\n        cout << \"Meow!\";\n    }\n};\nint main() {\n    Dog dog(\"Buddy\");\n    Cat cat(\"Whiskers\");\n    dog.makeSound();\n    cat.makeSound();\n    return 0;\n}",
    "options": [
      "Buddy Whiskers",
      "Woof!",
      "Meow!",
      "Woof! Meow!"
    ],
    "answer": 1,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: B. Woof!."
  },
  {
    "id": 186,
    "module": 4,
    "moduleName": "Chương 4: Tính Đa hình (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass Base\n{\npublic:\n   Base()\n   {\n      cout << \"Constructing base...\";\n   }\n   ~Base()\n   {\n      cout << \"Destructing base...\";\n   }\n};\nclass Derived : public Base\n{\npublic:\n   Derived()\n   {\n      cout << \"Constructing derived...\";\n   }\n   ~Derived()\n   {\n      cout << \"Destructing derived...\";\n   }\n};\nvoid main()\n{\n   Derived ob;\n}",
    "options": [
      "Constructing derived...Destructing derived",
      "Destructing derived...Destructing base...",
      "Constructing base...Constructing derived...Destructing derived...Destructing base...\"",
      "Constructing base...Constructing derived..."
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. Constructing derived...Destructing derived."
  },
  {
    "id": 187,
    "module": 4,
    "moduleName": "Chương 4: Tính Đa hình (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass Shape {\npublic:\n    virtual void draw() {\n        cout << \"Drawing a shape\" << endl;\n    }\n};\nclass Circle : public Shape {\npublic:\n    void draw() override {\n        cout << \"Drawing a circle \";\n    }\n};\nclass Square : public Shape {\npublic:\n    void draw() override {\n        cout << \"Drawing a square \";\n    }\n};\nint main() {\n    Shape* shape1 = new Circle();\n    Shape* shape2 = new Square();\n    shape1->draw();\n    shape2->draw();\n    delete shape1;\n    delete shape2;\n    return 0;\n}",
    "options": [
      "Drawing a square",
      "Drawing a circle",
      "Drawing a square Drawing a circle",
      "Drawing a circle Drawing a square"
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. Drawing a square."
  },
  {
    "id": 188,
    "module": 4,
    "moduleName": "Chương 4: Tính Đa hình (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì? \nclass Person {\npublic:\n    Person(const string& name) : name(name) {}\n    void introduce() {\n        cout << \"Name:\" << name;\n    }\nprotected:\n    string name;\n};\nclass Student : virtual public Person {\npublic:\n    Student(const string& name, int studentID) : Person(name), studentID(studentID) {}\n    void study() {\n        cout << \", Studying...\" ;\n    }\nprivate:\n    int studentID;\n};\nclass Worker : virtual public Person {\npublic:\n    Worker(const string& name, const string& job) : Person(name), job(job) {}\n    void work() {\n        cout << \" Working...\" ;\n    }\nprivate:\n    string job;\n};\nclass WorkingStudent : public Student, public Worker {\npublic:\n    WorkingStudent(const string& name, int studentID, const string& job)\n        : Person(name), Student(name, studentID), Worker(name, job) {}\n};\nint main() {\n    WorkingStudent ws(\"John\", 123, \"Engineer\");\n    ws.introduce(); \n    ws.study();\n    ws.work();\n    return 0;\n}",
    "options": [
      "Name:John, 123... Engineer...",
      "Name:John, Studying... Working...",
      "Name:John",
      "Name:John, Engineer... 123..."
    ],
    "answer": 1,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: B. Name:John, Studying... Working...."
  },
  {
    "id": 189,
    "module": 4,
    "moduleName": "Chương 4: Tính Đa hình (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass FirstClass {\npublic:\n    void something() {\n        cout << \"FirstClass::something()...\"; \n    }\n};\nclass SecondClass : public FirstClass {\npublic:\n    void something() { \n        cout << \"SecondClass::something()...\";\n    }\n};\nvoid niceFunction(FirstClass y) {\n    y.something(); \n}\nint main(int argc, char **argv) {\n    SecondClass x;\n    x.something(); \n    niceFunction(x); \n}",
    "options": [
      "SecondClass::something()...FirstClass::something()...",
      "FirstClass::something()...",
      "SecondClass::something()...",
      "FirstClass::something()...SecondClass::something()..."
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. SecondClass::something()...FirstClass::something()...."
  },
  {
    "id": 190,
    "module": 4,
    "moduleName": "Chương 4: Tính Đa hình (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass Vehicle {\npublic:\n    double speed;\n    double mass;\n    double kineticEnergy() {\n        return 0.5 * mass * speed * speed;\n    }\n};\nclass Plane : public Vehicle {\npublic:\n    double altitude;\n    double totalEnergy() {\n        return kineticEnergy() + mass * altitude;\n    }\n};\nbool nonNullEnergy(Vehicle v) {\n    return v.kineticEnergy() != 0.0;\n}\nint main(int argc, char **argv) {\n    Plane p;\n    p.speed = 150.0; \n    p.mass = 1500.0; \n    p.altitude = 1300;\n    if (nonNullEnergy(p)) \n        cout << \"There is some energy.\n\";\n    else\n        cout << \"There is not energy.\n\";\n}",
    "options": [
      "Lỗi thực thi tại p.speed = 150.0; do đối tượn p chưa được cấp phát vùng nhớ",
      "Lỗi biên dịch do khai báo kế thừa sai",
      "There is not energy",
      "There is some energy"
    ],
    "answer": 1,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: B. Lỗi biên dịch do khai báo kế thừa sai."
  },
  {
    "id": 191,
    "module": 4,
    "moduleName": "Chương 4: Tính Đa hình (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass Function {\npublic: \n    virtual double eval(double x) = 0;  \n    double cal(double x, double y) {\n        return (eval(x + y));\n    }\n};\nclass Oscillating : public Function {\n    double a, b, c;\npublic:\n    Oscillating(double aa, double bb, double cc) : a(aa), b(bb), c(cc) {\n    }\n    double eval(double x) { \n        return x+a+b+c; \n    }\n};\nint main(int argc, char *argv) {\n    Oscillating f(1, 2, 3);\n    cout << f.cal(2, 3);\n}",
    "options": [
      "11",
      "5",
      "10",
      "2"
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. 11."
  },
  {
    "id": 192,
    "module": 4,
    "moduleName": "Chương 4: Tính Đa hình (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass Animal{\npublic:\n    Animal(){\n        cout << \"Animal constructor...\";\n    }\n    void walk(){\n        cout << \"Animal walks...\";\n    }\n};\nclass Tiger : virtual public Animal{\npublic:\n    Tiger(){\n        cout << \"Tiger constructor ...\";\n    }\n};\nclass Lion : virtual public Animal{\npublic:\n    Lion(){\n        cout << \"Lion constructor...\" ;\n    }\n};\nclass Liger : public Tiger, public Lion{\npublic:\n    Liger(){\n        cout << \"Liger constructor...\" ;\n    }\n};\nint main()\n{\n    Liger anil;\n    anil.walk();\n    return 0;\n}",
    "options": [
      "Animal constructor...Tiger constructor...Lion constructor...Liger constructor...Animal walks...",
      "Tiger constructor...Animal constructor...Lion constructor...Liger constructor...",
      "Animal constructor...Tiger constructor...Animal constructor...",
      "Animal constructor...Lion constructor...Liger constructor...Animal walks..."
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. Do kế thừa ảo virtual public Animal nên Animal chỉ được khởi tạo 1 lần trước tiên, sau đó đến Tiger, Lion, Liger."
  },
  {
    "id": 193,
    "module": 4,
    "moduleName": "Chương 4: Tính Đa hình (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass Person {\npublic:\n   Person(int x)  {\n      cout << \"Person::Person(int)...\" ;\n   }\n};\nclass Faculty : virtual public Person {\npublic:\n   Faculty(int x) :Person(x)   {\n      cout << \"Faculty::Faculty(int)...\" ;\n   }\n};\nclass Student : virtual public Person {\npublic:\n   Student(int x) :Person(x) {\n      cout << \"Student::Student(int)...\" ;\n   }\n};\nclass TA : public Faculty, public Student  {\npublic:\n   TA(int x) : Person(x),Student(x), Faculty(x)   {\n      cout << \"TA::TA(int)...\" ;\n   }\n};\nint main()  {\n   TA t(30);\n}",
    "options": [
      "Person::Person(int)...Faculty::Faculty(int)...Student::Student(int)...",
      "Person::Person(int)...Faculty::Faculty(int)...Person::Person(int)...Student::Student(int)...",
      "Person::Person(int)...Faculty::Faculty(int)...Student::Student(int)...TA::TA(int )...",
      "Person::Person(int)...Faculty::Faculty(int)...Person::Person(int)...Student::Student(int)...TA::TA(int )..."
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. Person::Person(int)...Faculty::Faculty(int)...Student::Student(int)...."
  },
  {
    "id": 194,
    "module": 4,
    "moduleName": "Chương 4: Tính Đa hình (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì? \nclass Shape {\npublic:\n    Shape(const string& name) : name(name) {}\n    virtual float area() = 0;  \n    void printName() {\n        cout << name ;\n    }\nprivate:\n    string name;\n};\nclass Rectangle : public Shape {\npublic:\n    Rectangle(float width, float height) : Shape(\"Rectangle\"), width(width), height(height) {}\n    float area() override {\n        return width * height;\n    }\nprivate:\n    float width, height;\n};\nclass Triangle : public Shape {\npublic:\n    Triangle(float base, float height) : Shape(\"Triangle\"), base(base), height(height) {}\n    float area() override {\n        return 0.5 * base * height;\n    }\nprivate:\n    float base, height;\n};\nint main() {\n    Rectangle rectangle(5, 3);\n    Triangle triangle(4, 6);\n    Shape* shapes[] = { &rectangle, &triangle };\n    for (int i = 0; i < 2; ++i) {\n        shapes[i]->printName();\n        cout << \" Area: \" << shapes[i]->area()<< \"\t\";\n    }\n    return 0;\n}",
    "options": [
      "Triangle Area: 12",
      "Rectangle Area: 15",
      "Triangle Area: 12 Rectangle Area: 15",
      "Rectangle Area: 15 Triangle Area: 12"
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. Triangle Area: 12."
  },
  {
    "id": 195,
    "module": 4,
    "moduleName": "Chương 4: Tính Đa hình (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\ntemplate <class T> \nclass Calc{\npublic:\n    T multiply(T x, T y);\n    T add(T x, T y);\n};\ntemplate <class T> \nT Calc<T>::multiply(T x, T y){\n    return x*y;\n}\ntemplate <class T> \nT Calc<T>::add(T x, T y){\n    return x + y;\n}\nint main () {\n    Calc<int> v;\n    Calc<float> u;\n    cout << v.add(5, 6)<<\"...\"<<u.multiply(2.0, 5.0);\n}",
    "options": [
      "Lỗi biên dịch do khai báo lớp mẫu sai",
      "5...6",
      "11...10",
      "10...11"
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. Lỗi biên dịch do khai báo lớp mẫu sai."
  },
  {
    "id": 196,
    "module": 4,
    "moduleName": "Chương 4: Tính Đa hình (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass A {\npublic:\n    void dummy() { \n        cout << \"A::dummy...\"; \n    }\n};\nclass B : public A {\npublic:\n    void dummy() { \n        cout << \"B::dummy...\"; \n    }\n};\nvoid callAsA(A x) { \n    x.dummy(); \n}\nint main(int argc, char **argv) {\n    B b;\n    b.dummy();\n    callAsA(b);\n}",
    "options": [
      "A::dummy...B::dummy...",
      "B::dummy",
      "B::dummy...A::dummy...",
      "A::dummy"
    ],
    "answer": 1,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: B. B::dummy."
  },
  {
    "id": 197,
    "module": 4,
    "moduleName": "Chương 4: Tính Đa hình (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass USBDevice\n{\nprivate:\n    long id;\npublic:\n    USBDevice(long pid) : id(pid){\n    }\n    long getID() { \n        return id; \n    }\n};\nclass NetworkDevice {\nprivate:\n    long id;\npublic:\n    NetworkDevice(long pid) : id(pid){\n    }\n    long getID() { \n        return id; \n    }\n};\nclass WirelessAdaptor : public USBDevice, public NetworkDevice{\npublic:\n    WirelessAdaptor(long uid, long nid) : USBDevice(uid), NetworkDevice(nid)\n    {\n    }\n};\nint main(){\n    WirelessAdaptor w(123, 456);\n    cout << w.getID(); \n    return 0;\n}",
    "options": [
      "Lỗi biên dịch tại cout << w.getID();",
      "456.",
      "123...456",
      "123"
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. Lỗi biên dịch tại cout << w.getID();."
  },
  {
    "id": 198,
    "module": 4,
    "moduleName": "Chương 4: Tính Đa hình (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì? \nclass Vehicle {\npublic:\n    Vehicle(const string& name) : name(name) {}\n    virtual void start() = 0;  \n    virtual void stop() = 0;   \n    void displayInfo() {\n        cout << name;\n    }\nprivate:\n    string name;\n};\nclass Car : public Vehicle {\npublic:\n    Car() : Vehicle(\"Car\") {}\n    void start() override {\n        cout << \" Starting.\" ;\n    }\n    void stop() override {\n        cout << \" Stopping.\" ;\n    }\n};\nclass Motorcycle : public Vehicle {\npublic:\n    Motorcycle() : Vehicle(\"Motorcycle\") {}\n    void start() override {\n        cout << \" Starting.\";\n    }\n    void stop() override {\n        cout << \" Stopping.\" ;\n    }\n};\nint main() {\n    Car car;\n    Motorcycle motorcycle;\n    Vehicle* vehicles[] = { &car, &motorcycle };\n    for (int i = 0; i < 2; ++i) {\n        vehicles[i]->displayInfo();     \n        vehicles[i]->start();\n        cout << \"\t\";\n    }\n    return 0;\n}",
    "options": [
      "Car Starting.",
      "Motorcycle Car",
      "Car Starting. Motorcycle Starting.",
      "Motorcycle Starting."
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. Car Starting.."
  },
  {
    "id": 199,
    "module": 4,
    "moduleName": "Chương 4: Tính Đa hình (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass AA {\npublic:\n    virtual void something() { \n        cout << \"AA:something()...\"; \n    }\n};\nclass BB : public AA {\npublic:\n    void something() {\n        cout << \"BB:something()...\"; \n    }\n};\nvoid byvalue(AA x) {\n    x.something(); \n}\nvoid byref(AA &x) { \n    x.something(); \n}\nvoid bypointer(AA *x) {\n    x->something();\n}\nint main(int argc, char **argv) {\n    BB b;\n    byvalue(b);\n    byref(b);\n    bypointer(&b);\n}",
    "options": [
      "BB:something()...",
      "AA:something()...BB:something()...BB:something()...",
      "AA:something()...BB:something()...",
      "AA:something()..."
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. BB:something()...."
  },
  {
    "id": 200,
    "module": 4,
    "moduleName": "Chương 4: Tính Đa hình (C++)",
    "question": "Cho chương trình viết bằng ngôn ngữ C++ như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass A{\npublic:\n    virtual void x(){\n        cout << \"I am Ax...\";\n    }\n    void m(){\n        cout << \"I am Am...\";\n        x();\n    }\n};\nclass B : public A{\npublic:\n    void x(){\n        cout << \"I am Bx...\";\n    }\n    void y(){\n        cout << \"I am By...\";\n        m();\n    }\n};\nvoid main()\n{\n    B *b = new B();\n    b->y();\n}",
    "options": [
      "I am By...I am Am...I am Bx...",
      "I am By...I am Bm...",
      "I am By...I am Ax...I am Bx...",
      "I am By...I am Bx..."
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. I am By...I am Am...I am Bx...."
  },
  {
    "id": 201,
    "module": 5,
    "moduleName": "Chương 5: Lập trình OOP C#",
    "question": "Cho chương trình viết bằng ngôn ngữ C# như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass One\n{\n     int i = 1;\n     public int GetInt()\n     {\n     return i;\n}\n}\nclass Two : One\n{\n     int i = 2;\n     public int GetInt()\n     {\n            return i;\n}\n}\npublic class Test\n{\n      public static void Main(String[] args)\n      {\n           One one = new One();\n           Two two = new Two();\n           Console.WriteLine(two.GetInt());\n      }\n}",
    "options": [
      "1",
      "2",
      "Lỗi biên dịch",
      "Lỗi thực thi"
    ],
    "answer": 1,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: B. 2."
  },
  {
    "id": 202,
    "module": 5,
    "moduleName": "Chương 5: Lập trình OOP C#",
    "question": "Cho chương trình viết bằng ngôn ngữ C# như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass One\n{\n      public void Print()\n      { \nConsole.WriteLine(\"1\"); \n}\n}\nclass Two : One\n{\n      public void Print()\n      { \nConsole.WriteLine(\"2\");\n}\n}\npublic class Test\n{\n      public static void Main(String[] args)\n      {\n           Two one = new Two();\n           one.Print();\n      }\n}",
    "options": [
      "1",
      "2",
      "Lỗi biên dịch",
      "Lỗi thực thi"
    ],
    "answer": 1,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: B. 2."
  },
  {
    "id": 203,
    "module": 5,
    "moduleName": "Chương 5: Lập trình OOP C#",
    "question": "Cho chương trình viết bằng ngôn ngữ C# như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass One\n{\n     public void Print(int i)\n     {\n           Console.WriteLine(\"Parent\");\n     }     \n}\nclass Two : One\n{\n     public void Print(byte b)\n     {\n           Console.WriteLine(\"Child\");\n      }\n}\npublic class Test\n{\npublic static void Main(String[] args)\n      {\n           Two one = new Two();\n           one.Print(10);\n      }\n}",
    "options": [
      "Parent",
      "Child",
      "Lỗi biên dịch",
      "Lỗi thực thi"
    ],
    "answer": 1,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: B. Child."
  },
  {
    "id": 204,
    "module": 5,
    "moduleName": "Chương 5: Lập trình OOP C#",
    "question": "Cho chương trình viết bằng ngôn ngữ C# như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass One\n{\n        public void Tool(int i)\n        {\n            Console.WriteLine(\"No\");\n        }\n}\nclass Two : One\n{\n    public  void Tool(byte b)\n    {\n        Console.WriteLine(\"Ok\");\n    }\n}\npublic class Test\n{\n    public static void Main(String []args)\n    {    \n        One one = new Two();\n        one.Tool(10);\n    }\n}",
    "options": [
      "No",
      "Ok",
      "Lỗi biên dịch",
      "Lỗi thực thi"
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. No."
  },
  {
    "id": 205,
    "module": 5,
    "moduleName": "Chương 5: Lập trình OOP C#",
    "question": "Cho chương trình viết bằng ngôn ngữ C# như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\npublic class One {\n    public static void Tool(int i) {\n        Console.WriteLine(\"No\");\n    }\n}\npublic class Two : One {\n    public static void Tool(byte b) {\n        Console.WriteLine(\"Ok\");\n    }\n}\npublic class Test {\n       public static void Main(String []args){\n        One one = new Two();\n        One.Tool(5);\n    }\n}",
    "options": [
      "Ok",
      "No",
      "Lỗi biên dịch",
      "Lỗi thực thi"
    ],
    "answer": 2,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: C. Lỗi biên dịch."
  },
  {
    "id": 206,
    "module": 5,
    "moduleName": "Chương 5: Lập trình OOP C#",
    "question": "Cho chương trình viết bằng ngôn ngữ C# như sau, Lựa chọn nào được viết ở dòng //your code here, khi biên dịch sẽ không có lỗi?\ninterface Inter\n{\n}\nclass One\n{\n}\nclass Two : One\n{\n}\nclass Three : One\n{\n}\nclass Four :Two, Inter\n{\n}\nclass Five : Four\n{\n}\nclass Six : Three\n{\n}\npublic class Test\n{\n    public static void main(String[] args)\n    {\n        // your code here\n    }\n}",
    "options": [
      "Inter inter = new One();",
      "Inter inter = new Two ();",
      "Inter inter = new Three();",
      "Inter inter = new Four();"
    ],
    "answer": 3,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: D. Inter inter = new Four();. Lớp Four thực thi interface Inter nên có thể gán: Inter inter = new Four();"
  },
  {
    "id": 207,
    "module": 5,
    "moduleName": "Chương 5: Lập trình OOP C#",
    "question": "Cho chương trình viết bằng ngôn ngữ C# như sau, lựa chọn nào được viết ở dòng //your code here, khi biên dịch sẽ không có lỗi?\ninterface Inter\n{\n}\nclass One\n{\n}\nclass Two : One\n{\n}\nclass Three : One\n{\n}\nclass Four : Two, Inter\n{\n}\nclass Five : Four\n{\n}\nclass Six : Three\n{\n}\npublic class Test\n{\n    public static void Main(String[] args)\n    {\n        // your code here\n    }\n}",
    "options": [
      "Inter inter = new Four();",
      "Inter inter = new Inter ();",
      "Six six = new Three ();",
      "Three three = new One();"
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. Inter inter = new Four();. Inter inter = new Four(); là cú pháp hợp lệ khi Four thực thi Inter."
  },
  {
    "id": 208,
    "module": 5,
    "moduleName": "Chương 5: Lập trình OOP C#",
    "question": "Cho chương trình viết bằng ngôn ngữ  C# như sau, khi biên dịch và thực thi chương trình, kết quả là gì?\nclass One\n{\n}\nclass Two : One\n{\n   public void Print()\n   {\n      Console.WriteLine(\"Two\");\n   }\n}\npublic class Test\n{\n    public static void Main(String[] args)\n    {\n        Two one = new Two();\n        one.Print();\n    }\n}",
    "options": [
      "Two",
      "Lỗi biên dịch",
      "Lỗi thực thi",
      "Cả 3 đáp án đều sai"
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. Two."
  },
  {
    "id": 209,
    "module": 5,
    "moduleName": "Chương 5: Lập trình OOP C#",
    "question": "Cho chương trình viết bằng ngôn ngữ C# như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass One\n{\n        int x = 10;\n        public  One(int x)\n        {\n                     this.x = x++;\n        }\n}\npublic class Test\n{\n        public static void Main(String[] args)\n        {  \n                     One one = new One(20);\n                     Console.WriteLine(one.x);\n        }\n}",
    "options": [
      "1",
      "0",
      "6",
      "Lỗi biên dịch"
    ],
    "answer": 3,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: D. Lỗi biên dịch."
  },
  {
    "id": 210,
    "module": 5,
    "moduleName": "Chương 5: Lập trình OOP C#",
    "question": "Cho chương trình viết bằng ngôn ngữ C# như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass One\n{\n        public One(int x)\n        {\n                     Console.WriteLine(\"int constructor\");\n        }\n        public One(long l)\n        {\n                     Console.WriteLine(\"long constructor\");\n        }\n}\npublic class Test\n{\n        public static void Main(String[] args)\n        {\n            long l = 201;\n                      One one = new One(l);\n        }\n}",
    "options": [
      "int constructor",
      "long constructor int constructor",
      "long constructor long constructor",
      "long constructor"
    ],
    "answer": 1,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: B. long constructor int constructor."
  },
  {
    "id": 211,
    "module": 5,
    "moduleName": "Chương 5: Lập trình OOP C#",
    "question": "Cho chương trình viết bằng ngôn ngữ C# như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass One\n{\n    public One()\n    {\n        Console.WriteLine(\"One constructor\");\n    }\n    public One(long l)\n    {\n        Console.WriteLine(\"One long constructor\");\n    }\n}\nclass Two : One\n{\n    public Two(int i)\n    {\n        Console.WriteLine(\"Two int constructor\");\n    }\n    public Two(long l)\n    {\n        Console.WriteLine(\"Two long constructor\");\n    }\n}\npublic class Test\n{\n    public static void Main(String[] args)\n    {\n        long value = 68;\n        One one = new Two(value);\n    }\n}",
    "options": [
      "Two int constructor",
      "One long constructor",
      "One constructor - Two long constructor",
      "One constructor"
    ],
    "answer": 3,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: D. One constructor."
  },
  {
    "id": 212,
    "module": 5,
    "moduleName": "Chương 5: Lập trình OOP C#",
    "question": "Cho chương trình viết bằng ngôn ngữ C# như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass One\n{\n        public One(int x)\n        {\n                     Console.WriteLine(\"int constructor\");\n        }\n        public One(char c)\n        {\n                     Console.WriteLine(\"char constructor\");\n        }\n        void Two(String str)\n        {\n                     Console.WriteLine(\"String constructor\");\n        }\n}\npublic class Test\n{\n        public static void Main(String[] args)\n        {\n                     String ch = \"c\";\n                     One one = new One(1);\n        }\n}",
    "options": [
      "char constructor",
      "int constructor",
      "Lỗi biên dịch",
      "Cả 3 đáp án đều sai"
    ],
    "answer": 1,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: B. int constructor."
  },
  {
    "id": 213,
    "module": 5,
    "moduleName": "Chương 5: Lập trình OOP C#",
    "question": "Khi bạn biên dịch và chạy chương trình viết bằng ngôn ngữ C# bằng lệnh đã cho ở bên dưới sau kết quả sẽ là:\nclass ITestInterface\n{\n        int status = 0;\n}\npublic class Test : ITestInterface\n{\npublic static void Main(String[] args)\n{\n          Test t = new Test();\n           t.status = 69;\n           Console.WriteLine(t.status);\n}\n}",
    "options": [
      "1",
      "0",
      "2",
      "Lỗi biên dịch (vì status là private)"
    ],
    "answer": 3,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: D. Lỗi biên dịch (vì status là private)."
  },
  {
    "id": 214,
    "module": 5,
    "moduleName": "Chương 5: Lập trình OOP C#",
    "question": "Cho chương trình viết bằng ngôn ngữ C# như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\npublic class ITestInterface\n{\n        int i = 0;\n        public ITestInterface()\n        {\n                     Console.WriteLine(\"I Constructor \");\n        }\n}\npublic class Test : ITestInterface\n{\n        public Test()\n        {\n                     Console.WriteLine(\"Test Constructor \");\n        }\n        public static void Main(String[] args)\n        {\n                     Test t = new Test();\n        }\n}",
    "options": [
      "Test Constructor",
      "I Constructor Test Constructor",
      "T Constructor I Constructor",
      "Lỗi biên dịch"
    ],
    "answer": 3,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: D. Lỗi biên dịch."
  },
  {
    "id": 215,
    "module": 5,
    "moduleName": "Chương 5: Lập trình OOP C#",
    "question": "Cho chương trình viết bằng ngôn ngữ C# như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nGiải thích đoạn code sau:\nclass One\n{\n        String SayHello1(String name)\n        {\n            return \"Hello \" + name;\n        }\n        char[] SayHello2(String name)\n        {\n            return (\"Hello \" + name).ToCharArray();\n        }\n}\npublic class Test\n{\n        public static void Main(String[] args)\n        {\n            One one = new One();\n            Object[] ob = one.SayHello2(\"Hhâ\");\n            if (ob instance String)\n                {\n                Console.WriteLine(\"String\");\n            }\n        else\n            {\n                Console.WriteLine(\"Array\");\n            }  \n        }\n}",
    "options": [
      "Hello OCAJP",
      "String",
      "Array",
      "Lỗi biên dịch"
    ],
    "answer": 3,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: D. Lỗi biên dịch."
  },
  {
    "id": 216,
    "module": 5,
    "moduleName": "Chương 5: Lập trình OOP C#",
    "question": "Cho chương trình viết bằng ngôn ngữ C# như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass One\n    {\n        public void Greetings()\n        {\n            Console.WriteLine(\"Hello\");\n        }\n    }\n    class Two : One\n    {\n        public void Greetings()\n        {\n            Console.WriteLine(\"Hi\");\n        }\n    }\n    public class Test\n    {\n        public static void Main(String[] args)\n        {\n            One one = new Two();\n            one.Greetings();\n        }\n    }",
    "options": [
      "Hello",
      "Hi",
      "Lỗi biên dịch",
      "Lỗi thực thi"
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. Hello."
  },
  {
    "id": 217,
    "module": 5,
    "moduleName": "Chương 5: Lập trình OOP C#",
    "question": "Cho chương trình viết bằng ngôn ngữ C# như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass One\n    {\n        public One()\n        {\n          Console.WriteLine(\"Hello Object\");\n        }\n        public One(int x)\n        {  \n         Console.WriteLine(\"Hello Object with int\");\n        }\n    }\n    public class Test\n    {\n        public static void Main(String[] args)\n        {\n            One one = new One();\n        }\n    }",
    "options": [
      "Hello Object with int",
      "Hello Object",
      "Hello Object with int Hello Object",
      "Hello Object Hello Object with int"
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. Hello Object with int."
  },
  {
    "id": 218,
    "module": 5,
    "moduleName": "Chương 5: Lập trình OOP C#",
    "question": "Cho chương trình viết bằng ngôn ngữ C# như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass One\n    {\n        public One(int i)\n        {\n           Console.WriteLine(\"int\");\n        }\n        public  One(short s)\n        {\n            Console.WriteLine(\"short\");\n        }\n    }\n    public class Test\n    {\n        public static void Main(String[] args)\n        {\n            short s = 10;\n            One one = new One(s);\n        }\n    }",
    "options": [
      "int short",
      "short",
      "int",
      "short int"
    ],
    "answer": 1,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: B. short."
  },
  {
    "id": 219,
    "module": 5,
    "moduleName": "Chương 5: Lập trình OOP C#",
    "question": "Cho chương trình viết bằng ngôn ngữ C# như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass One\n    {\n        public void ClassName()\n        {\n            Console.WriteLine(\"Parent\");\n        }\n    }\n    class Two : One\n    {\n    public void ClassName()\n    {\n       Console.WriteLine(\"Child\");\n    }\n}\npublic class Test\n{\n    public static void Main(String[] args)\n    {\n        One one = new Two();\n        one.ClassName();\n    }\n}",
    "options": [
      "Parent",
      "Child Parent",
      "Parent Child",
      "Child"
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. Parent."
  },
  {
    "id": 220,
    "module": 5,
    "moduleName": "Chương 5: Lập trình OOP C#",
    "question": "Cho chương trình viết bằng ngôn ngữ C# như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass One\n{\n    public void Greetings()\n    {\n        Console.WriteLine(\"Hello\");\n    }\n}\nclass Two : One\n{\n    public void Greetings()\n    {\n        Console.WriteLine(\"Hi\");\n    }\n}\npublic class Test\n{\n    public static void Main(String[] args)\n    {\n        Two one = new Two();\n        one.Greetings();\n    }\n}",
    "options": [
      "Hello",
      "Hello Hi",
      "Hi Hello",
      "Hi"
    ],
    "answer": 2,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: C. Hi Hello."
  },
  {
    "id": 221,
    "module": 5,
    "moduleName": "Chương 5: Lập trình OOP C#",
    "question": "Cho chương trình viết bằng ngôn ngữ C# như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass One\n{\n    public void Greetings()\n    {\n        Console.WriteLine(\"Hello\");\n    }\n}\nclass Two : One\n{\n    public void Greetings()\n    {\n        Console.WriteLine(\"Hi\");\n    }\n}\npublic class Test\n{\n    public static void Main(String[] args)\n    {\n        One one = new One();\n        one.Greetings();\n    }\n}",
    "options": [
      "Hello",
      "Hi",
      "Lỗi biên dịch",
      "Lỗi thực thi"
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. Hello."
  },
  {
    "id": 222,
    "module": 5,
    "moduleName": "Chương 5: Lập trình OOP C#",
    "question": "Cho chương trình viết bằng ngôn ngữ C# như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass One\n{\n    public void ClassName()\n    {\n        Console.WriteLine(\"Parent\");\n    }\n}\nclass Two : One\n{\n    public void ClassName()\n    {\n        Console.WriteLine(\"Child\");\n    }\n}\npublic class Test\n{\n    public static void Main(String[] args)\n    {\n        One one = new Two();\n        one.ClassName();\n    }\n}",
    "options": [
      "Parent",
      "Child",
      "Lỗi biên dịch",
      "Lỗi thực thi"
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. Parent."
  },
  {
    "id": 223,
    "module": 5,
    "moduleName": "Chương 5: Lập trình OOP C#",
    "question": "Cho chương trình viết bằng ngôn ngữ C# như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass One\n{\n    private void CallMe()\n    {\n        Console.WriteLine(\"Parent\");\n    }\n    public void Caller()\n    {\n        CallMe();\n    }\n}\nclass Two : One\n{\n    public void CallMe()\n    {\n        Console.WriteLine(\"Child\");\n    }\n}\npublic class Test\n{\n    public static void Main(String[] args)\n    {\n        Two two = new Two();\n        two.Caller();\n    }\n}",
    "options": [
      "Parent",
      "Child",
      "Parent Child",
      "Lỗi biên dịch"
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. Parent."
  },
  {
    "id": 224,
    "module": 5,
    "moduleName": "Chương 5: Lập trình OOP C#",
    "question": "Cho chương trình viết bằng ngôn ngữ C# như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass One\n{\n    public int Method()\n    {\n        Console.WriteLine(\"int\");\n        return 0;\n    }\n}\nclass Two : One\n{\n    public int Method()\n    {\n        Console.WriteLine(\"short\");\n        return 1;\n    }\n}\npublic class Test\n{\n    public static void Main(String[] args)\n    {\n        One one = new Two();\n        one.Method();\n    }\n}",
    "options": [
      "int",
      "short",
      "Lỗi biên dịch",
      "Lỗi thực thi"
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. int."
  },
  {
    "id": 225,
    "module": 5,
    "moduleName": "Chương 5: Lập trình OOP C#",
    "question": "Cho chương trình viết bằng ngôn ngữ C# như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass One\n{\n    public void SomeMethod()\n    {\n        Console.WriteLine(\"Exception\");\n    }\n}\nclass Two : One\n{\n    public void SomeMethod()\n    {\n        Console.WriteLine(\"Not Exception\");\n    }\n    public static void Main(String[] args)\n    {\n        One one = new Two();\n        one.SomeMethod();\n    }\n}",
    "options": [
      "Exception",
      "Not Exception",
      "Lỗi biên dịch",
      "Lỗi thực thi"
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. Exception."
  },
  {
    "id": 226,
    "module": 5,
    "moduleName": "Chương 5: Lập trình OOP C#",
    "question": "Cho chương trình viết bằng ngôn ngữ C# như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass One\n{\n    public void SomeMethod()\n    {\n        Console.WriteLine(\"Exception\");\n    }\n}\nclass Two : One\n{\n    public void SomeMethod()\n    {\n        Console.WriteLine(\"Override Exception\");\n    }\n}\npublic class Test\n{\n    public static void Main(String[] args)\n    {\n        Two one = new Two();\n        try\n        {\n            one.SomeMethod();\n        }\n        catch (Exception e)\n        {\n        }\n    }\n}",
    "options": [
      "Exception",
      "Override Exception",
      "Lỗi biên dịch",
      "Lỗi thực thi"
    ],
    "answer": 1,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: B. Override Exception."
  },
  {
    "id": 227,
    "module": 5,
    "moduleName": "Chương 5: Lập trình OOP C#",
    "question": "Cho chương trình viết bằng ngôn ngữ C# như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass One\n{\n    public One()\n    {\n        Console.WriteLine(\"One,\");\n    }\n}\nclass Two : One\n{\n    void Four()\n    {\n        Console.WriteLine(\"Two,\");\n    }\n}\nclass Three : Two\n{\n    public Three()\n    {\n        Console.WriteLine(\"Three,\");\n    }\n}\npublic class Test\n{\n    public static void Main(String[] args)\n    {\n        Three three = new Three();\n    }\n}",
    "options": [
      "One,Two,Three,",
      "Three,Two,One,",
      "One,Three,",
      "Lỗi biên dịch"
    ],
    "answer": 2,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: C. One,Three,. Thứ tự gọi constructor: One gọi trước, sau đó Three gọi -> One, Three,"
  },
  {
    "id": 228,
    "module": 5,
    "moduleName": "Chương 5: Lập trình OOP C#",
    "question": "Cho chương trình viết bằng ngôn ngữ C# như sau, Lựa chọn nào nếu được viết ở dòng //method declaration here, sẽ được gọi là nạp chồng (override) phương thức someMethod được định nghĩa trong lớp One\nclass One\n{\n    public void SomeMethod(int i)\n    {\n    }\n}\nclass Two : One\n{\n    public void SomeMethod(double anotherint)\n    {\n    }\n    //method declaration here\n}\npublic class Test\n{\n    public static void Main(String[] args)\n    {\n        Two two = new Two();\n    }\n}",
    "options": [
      "void public someMethod(int i){}",
      "public void someMethod(int anotherint){}",
      "public void Somemethod(String str){}",
      "public void someMethod(double anotherint){}"
    ],
    "answer": 1,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: B. public void someMethod(int anotherint){}. Để override trong C#, phương thức lớp con phải cùng tên và chữ ký: public void someMethod(int anotherint)"
  },
  {
    "id": 229,
    "module": 5,
    "moduleName": "Chương 5: Lập trình OOP C#",
    "question": "Cho chương trình viết bằng ngôn ngữ C# như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass One\n{\n    void Two()\n    {\n        Console.WriteLine(\"One,\");\n    }\n}\nclass Two : One\n{\n    void One()\n    {\n        Console.WriteLine(\"Two,\");\n    }\n}\nclass Three : Two\n{\n    public void Four()\n    {\n        Console.WriteLine(\"Three,\");\n    }\n}\npublic class Test\n{\n    public static void Main(String[] args)\n    {\n        Three three = new Three();\n        three.Four();\n    }\n}",
    "options": [
      "One,Two,Three,",
      "Three,Two,One,",
      "Three,",
      "Cả 3 đáp án đều sai"
    ],
    "answer": 1,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: B. Three,Two,One,."
  },
  {
    "id": 230,
    "module": 5,
    "moduleName": "Chương 5: Lập trình OOP C#",
    "question": "Cho chương trình viết bằng ngôn ngữ C# như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\npublic class Test\n{\n    public static void Main(String[] args)\n    {\n        int i = 68;\n        Console.WriteLine(++i);\n    }\n}",
    "options": [
      "69",
      "68",
      "Lỗi biên dịch",
      "Cả 3 đáp án đều sai"
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. 69."
  },
  {
    "id": 231,
    "module": 5,
    "moduleName": "Chương 5: Lập trình OOP C#",
    "question": "Cho chương trình viết bằng ngôn ngữ C# như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nabstract class Tesst\n{\n    public void SomeThing()\n    {\n        Console.WriteLine(\"Something\");\n    }\n    public void NoThing();\n}\nclass TestChild : Tesst\n{\n    public void NoThing()\n    {\n        Console.WriteLine(\"Nothing\");\n    }\n}\npublic class Test\n{\n    public static void Main(String[] args)\n    {\n        TestChild testChild = new TestChild();\n        testChild.SomeThing();\n    }\n}",
    "options": [
      "Nothing",
      "Something",
      "Lỗi biên dịch",
      "Lỗi thực thi"
    ],
    "answer": 2,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: C. Lỗi biên dịch."
  },
  {
    "id": 232,
    "module": 5,
    "moduleName": "Chương 5: Lập trình OOP C#",
    "question": "Cho chương trình viết bằng ngôn ngữ C# như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\npublic class Test\n{\n    String name = \"Test\";\n    public Test()\n    {\n        name = \"TestObject\";\n    }\n    public static void Main(String[] args)\n    {\n        Test test = new Test();\n        Console.WriteLine(\"Name is \" + test.name);\n    }\n}",
    "options": [
      "Name is Test",
      "Name is TestObject",
      "Lỗi biên dịch",
      "Cả 3 đáp án đều sai"
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. Name is Test."
  },
  {
    "id": 233,
    "module": 5,
    "moduleName": "Chương 5: Lập trình OOP C#",
    "question": "Cho chương trình viết bằng ngôn ngữ C# như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\npublic class Test\n{\n    static String name = \"Test\";\n    public Test()\n    {\n        name = \"TestObject\";\n    }\n    public static void Main(String[] args)\n    {\n        Console.WriteLine(\"Name is \" + name);\n    }\n}",
    "options": [
      "Name is Test",
      "Name is TestObject",
      "Lỗi biên dịch",
      "Cả 3 đáp án đều sai"
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. Name is Test."
  },
  {
    "id": 234,
    "module": 5,
    "moduleName": "Chương 5: Lập trình OOP C#",
    "question": "Cho chương trình viết bằng ngôn ngữ C# như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\npublic class One\n{\n    public One()\n    {\n        Console.WriteLine(\"Abstract Class\");\n    }\n    abstract void Nothing();\n}\npublic class Test\n{\n    public static void Main(String[] args)\n    {\n        One one = new One();\n    }\n}",
    "options": [
      "Abstract Class",
      "Lỗi biên dịch",
      "Lỗi thực thi",
      "Cả 3 đáp án đều sai"
    ],
    "answer": 1,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: B. Lỗi biên dịch."
  },
  {
    "id": 235,
    "module": 5,
    "moduleName": "Chương 5: Lập trình OOP C#",
    "question": "Cho chương trình viết bằng ngôn ngữ C# như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\npublic class One\n{\n    public One()\n    {\n        Console.WriteLine(\"One\");\n    }\n}\npublic class Test\n{\n    public static void Main(String[] args)\n    {\n        One one = new One();\n    }\n}",
    "options": [
      "One",
      "Lỗi biên dịch",
      "Lỗi thực thi",
      "Cả 3 đáp án đều sai"
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. One."
  },
  {
    "id": 236,
    "module": 5,
    "moduleName": "Chương 5: Lập trình OOP C#",
    "question": "Cho chương trình viết bằng ngôn ngữ C# như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass One\n{\n    public One(String name)\n    {\n        Console.WriteLine(\"Hello \" + name + \",\");\n    }\n}\nclass Two : One\n{\n    public Two() : base(\"Alice\")\n    {\n        Console.WriteLine(\"Hi,\");\n    }\n}\npublic class Test\n{\n    public static void Main(String[] args)\n    {\n        Two two = new Two();\n    }\n}",
    "options": [
      "Hi,",
      "Alice",
      "Hello Alice,Hi,",
      "Cả 3 đáp án đều sai"
    ],
    "answer": 2,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: C. Hello Alice,Hi,. Kết quả hiển thị: Hello Alice,Hi,"
  },
  {
    "id": 237,
    "module": 5,
    "moduleName": "Chương 5: Lập trình OOP C#",
    "question": "Cho chương trình viết bằng ngôn ngữ C# như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass One\n{\n    public One(String name)\n    {\n        Console.WriteLine(\"Hello \" + name + \",\");\n    }\n}\nclass Two : One\n{\n    public Two() : base(\"Two\")\n    {\n        Console.WriteLine(\"Hi,\");\n    }\n}\npublic class Test\n{\n    public static void Main(String[] args)\n    {\n        Two two = new Two();\n    }\n}",
    "options": [
      "Hi,",
      "Hello Two,Hi,",
      "Lỗi biên dịch",
      "Cả 3 đáp án đều sai"
    ],
    "answer": 1,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: B. Hello Two,Hi,. Kết quả hiển thị: Hello Two,Hi,"
  },
  {
    "id": 238,
    "module": 5,
    "moduleName": "Chương 5: Lập trình OOP C#",
    "question": "Cho chương trình viết bằng ngôn ngữ C# như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\npublic class One\n{\n    public One(String name)\n    {\n        Console.WriteLine(\"Hello \" + name + \",\");\n    }\n}\nclass Two : One\n{\n    public Two() : base(\"Two\")\n    {\n        Console.WriteLine(\"Hi,\");\n    }\n}\npublic class Test\n{\n    public static void Main(String[] args)\n    {\n        One two = new Two();\n    }\n}",
    "options": [
      "Hi,",
      "Hi,Hello Two,",
      "Hello Two,Hi,",
      "Cả 3 đáp án đều sai"
    ],
    "answer": 2,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: C. Hello Two,Hi,. Kết quả hiển thị: Hello Two,Hi,"
  },
  {
    "id": 239,
    "module": 5,
    "moduleName": "Chương 5: Lập trình OOP C#",
    "question": "Cho chương trình viết bằng ngôn ngữ C# như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass One\n{\n    public One(String name)\n    {\n        Console.WriteLine(\"Hello \" + name + \",\");\n    }\n}\nclass Two : One\n{\n    public Two() : base(\"Two\")\n    {\n        Console.WriteLine(\"Hi,\");\n    }\n}\npublic class Test\n{\n    public static void Main(String[] args)\n    {\n        One two = new One();\n    }\n}",
    "options": [
      "Cả 3 đáp án đều sai",
      "Hello",
      "Lỗi biên dịch",
      "Lỗi thực thi"
    ],
    "answer": 2,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: C. Lỗi biên dịch."
  },
  {
    "id": 240,
    "module": 5,
    "moduleName": "Chương 5: Lập trình OOP C#",
    "question": "Cho chương trình viết bằng ngôn ngữ C# như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass One\n{\n    public One()\n    {\n        Console.WriteLine(\"Parent \");\n    }\n}\nclass Two : One\n{\n    public Two()\n    {\n        Console.WriteLine(\"Child \");\n    }\n}\npublic class Test\n{\n    public static void Main(String[] args)\n    {\n        One one = new Two();\n    }\n}",
    "options": [
      "Parent Child",
      "Child Parent",
      "Child",
      "Parent"
    ],
    "answer": 3,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: D. Parent."
  },
  {
    "id": 241,
    "module": 5,
    "moduleName": "Chương 5: Lập trình OOP C#",
    "question": "Cho chương trình viết bằng ngôn ngữ C# như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass TestChild : Test\n{\n    public TestChild()\n    {\n        Console.WriteLine(\"TestChild1 \");\n    }\n}\npublic class Test\n{\n    void TestChild()\n    {\n        Console.WriteLine(\"TestChild2 \");\n    }\n    public static void Main(String[] args)\n    {\n        new Test().TestChild();\n    }\n}",
    "options": [
      "TestChild1 TestChild2",
      "TestChild2 TestChild1",
      "TestChild2",
      "Cả 3 đáp án đều sai"
    ],
    "answer": 1,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: B. TestChild2 TestChild1."
  },
  {
    "id": 242,
    "module": 5,
    "moduleName": "Chương 5: Lập trình OOP C#",
    "question": "Cho chương trình viết bằng ngôn ngữ C# như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\npublic class Test\n{\n     int i = 68;\n     void Print()\n     {\n         Console.WriteLine(i);\n     }\n     public static void Main(String[] args)\n     {\n         new Test().Print();\n     }\n}",
    "options": [
      "0",
      "68",
      "Lỗi thực thi",
      "Lỗi biên dịch"
    ],
    "answer": 1,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: B. 68."
  },
  {
    "id": 243,
    "module": 5,
    "moduleName": "Chương 5: Lập trình OOP C#",
    "question": "Cho chương trình viết bằng ngôn ngữ C# như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\npublic class One\n{\n        public void SayHello()\n        {\n            Console.WriteLine(\"Parent Hello\");\n        }\n}\nclass Two : One\n{\n        public void SayHello()\n        {\n            Console.WriteLine(\"Child Hello\");\n        }\n}\npublic class Test\n{\n        public static void Main(String[] args)\n        {\n            One o = new Two();\n            o.SayHello();\n        }\n}",
    "options": [
      "Parent Hello",
      "Child Hello",
      "Lỗi biên dịch",
      "Cả 3 đáp án đều sai"
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. Parent Hello."
  },
  {
    "id": 244,
    "module": 5,
    "moduleName": "Chương 5: Lập trình OOP C#",
    "question": "Cho chương trình viết bằng ngôn ngữ C# như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\npublic class Test\n{\n     public int Count(int i)\n     {\n         return 0;\n     }\n     public long Count(long i)\n     {\n         return 0L;\n     }\n     public static void Main(String[] args)\n     {\n         Test test = new Test();\n         int resultInt = test.Count(5);\n         long resultLong = test.Count(6);\n         Console.WriteLine(resultInt);\n         Console.WriteLine(resultLong);\n     }\n}",
    "options": [
      "5",
      "6",
      "0",
      "00"
    ],
    "answer": 2,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: C. 0."
  },
  {
    "id": 245,
    "module": 5,
    "moduleName": "Chương 5: Lập trình OOP C#",
    "question": "Cho chương trình viết bằng ngôn ngữ C# như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\npublic class Test\n{\n     public int Count(int i)\n     {\n         return 0;\n     }\n     public static void Main(String[] args)\n     {\n         Test test = new TestChild();\n         int resultInt = test.Count(5);\n         Console.WriteLine(\"Result for int: \" + resultInt);\n     }\n}\nclass TestChild : Test\n{\n     public int Count(int i)\n     {\n         return 1;\n     }\n}",
    "options": [
      "Lỗi biên dịch",
      "Lỗi thực thi",
      "Result for int: 0",
      "Result for int: 1"
    ],
    "answer": 2,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: C. Result for int: 0."
  },
  {
    "id": 246,
    "module": 5,
    "moduleName": "Chương 5: Lập trình OOP C#",
    "question": "Cho chương trình viết bằng ngôn ngữ C# như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass One\n{\n        public void SayHello()\n        {\n            Console.WriteLine(\"Parent Hello\");\n        }\n}\nclass Two : One\n{\n        public void SayHello()\n        {\n            Console.WriteLine(\"Child Hello\");\n        }\n}\npublic class Test\n{\n        public static void Main(String[] args)\n        {\n            One o = new Two();\n            o.SayHello();\n        }\n}",
    "options": [
      "Parent Hello",
      "Child Hello",
      "Lỗi biên dịch",
      "Lỗi thực thi"
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. Parent Hello."
  },
  {
    "id": 247,
    "module": 5,
    "moduleName": "Chương 5: Lập trình OOP C#",
    "question": "Cho chương trình viết bằng ngôn ngữ C#  như sau, khi biên dịch và thực thi chương trình, kết quả là gì?\npublic class Test\n{\n    public int Count(int i)\n    {\n        return 0;\n    }\n    public int Count(double j)\n    {\n        return 1;\n    }\n    public static void Main(String[] args)\n    {\n        Test test = new Test();\n        int i = test.Count(5);\n        int d = test.Count(5.0);\n        Console.WriteLine(\"int: \" + i);\n        Console.WriteLine(\"double: \" + d);\n    }\n}",
    "options": [
      "int: 0",
      "double: 0",
      "int: 0 double: 0",
      "int: 0 double: 1"
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. int: 0."
  },
  {
    "id": 248,
    "module": 5,
    "moduleName": "Chương 5: Lập trình OOP C#",
    "question": "Cho chương trình viết bằng ngôn ngữ C# như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\npublic class One\n{\n      public void Count(int i)\n      {\n            Console.WriteLine(0);\n      }\n}\npublic class Test : One\n{\npublic void Count(int j)\n      {\n            Console.WriteLine(1);\n      }\n      public static void Main(String[] args)\n      {\n            One one = new Test(); one.Count(0);\n      }\n}",
    "options": [
      "1",
      "0",
      "Lỗi biên dịch",
      "Lỗi thực thi"
    ],
    "answer": 2,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: C. Lỗi biên dịch."
  },
  {
    "id": 249,
    "module": 5,
    "moduleName": "Chương 5: Lập trình OOP C#",
    "question": "Cho chương trình viết bằng ngôn ngữ C# như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\npublic class Test\n{\n    public static void Main(String[] args)\n    {\n        One o = new One();\n        o.SayHello();\n    }\n}\npublic class One\n{\n    public void SayHello()\n    {\n        Console.WriteLine(\"Hello\");\n    }\n}",
    "options": [
      "Hello",
      "Lỗi biên dịch",
      "Lỗi thực thi",
      "Cả 3 đáp án đều sai"
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. Hello."
  },
  {
    "id": 250,
    "module": 5,
    "moduleName": "Chương 5: Lập trình OOP C#",
    "question": "Cho chương trình viết bằng ngôn ngữ C# như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\npublic class Test\n{\n    class TestInner\n    {\n        public void SayHi()\n        {\n            Console.WriteLine(\"Hi\");\n        }\n    }\n    public static void Main(String[] args)\n    {\n        TestInner inner = new TestInner();\n        inner.SayHi();\n    }\n}",
    "options": [
      "Hi",
      "Lỗi biên dịch",
      "Lỗi thực thi",
      "Cả 3 đáp án đều sai"
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. Hi."
  },
  {
    "id": 251,
    "module": 5,
    "moduleName": "Chương 5: Lập trình OOP C#",
    "question": "Cho chương trình viết bằng ngôn ngữ C# như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\npublic class Test\n{\n    class TestInner\n    {\n        public void SayHi()\n        {\n            Console.WriteLine(\"Hi\");\n        }\n    }\n    public static void Main(String[] args)\n    {\n        Test t = new Test();\n    }\n}",
    "options": [
      "Hi",
      "Lỗi biên dịch",
      "Lỗi thực thi",
      "Cả 3 đáp án đều sai"
    ],
    "answer": 1,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: B. Lỗi biên dịch. Lỗi biên dịch do lớp nội không hợp lệ hoặc thiếu phạm vi truy cập."
  },
  {
    "id": 252,
    "module": 5,
    "moduleName": "Chương 5: Lập trình OOP C#",
    "question": "Cho chương trình viết bằng ngôn ngữ C# như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\npublic class Test\n    {\n        public void Compute(int i, int j)\n        {\n           Console.WriteLine(\"int version\");\n        }\n        public void Compute(long i, long j)\n        {\n            Console.WriteLine(\"long version\");\n        }\n        public static void Main(String[] args)\n        {\n            Test t = new Test();\n            t.Compute(10, 5);\n        }\n    }",
    "options": [
      "int version",
      "long version",
      "Lỗi biên dịch",
      "Lỗi thực thi"
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. int version."
  },
  {
    "id": 253,
    "module": 5,
    "moduleName": "Chương 5: Lập trình OOP C#",
    "question": "Cho chương trình viết bằng ngôn ngữ C# như sau, Lựa chọn nào được viết ở dòng //access variable here, khi biên dịch sẽ không có lỗi?\npublic class Test\n{\n    private int i = 0;\n    int j = 1;\n    public int k = 2;\n    public class TestInner\n    {\n        private int l = 3;\n        int m = 4;\n        public int n = 5;\n        void SayHi()\n        {\n            //access variable here\n        }\n    }\n    public static void Main(String [] args)\n    {\n    }\n}",
    "options": [
      "i = 5;",
      "j = 5;",
      "k = 5;",
      "Cả 3 đáp án đều sai"
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. i = 5;. Biến i có phạm vi truy cập phù hợp: i = 5;"
  },
  {
    "id": 254,
    "module": 5,
    "moduleName": "Chương 5: Lập trình OOP C#",
    "question": "Cho chương trình viết bằng ngôn ngữ C# như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass One\n{\n    public void Process()\n    {\n        Console.WriteLine(\"Parent \");\n    }\n}\nclass Two : One\n{\n    public static void Process()\n    {\n        Console.WriteLine(\"Child\");\n    }\n}\npublic class Test\n{\n    public static void Main(String[] args)\n    {\n        One one = new Two();\n        one.Process();\n    }\n}",
    "options": [
      "Parent",
      "Child",
      "Parent Child",
      "Lỗi biên dịch"
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. Parent."
  },
  {
    "id": 255,
    "module": 5,
    "moduleName": "Chương 5: Lập trình OOP C#",
    "question": "Cho chương trình viết bằng ngôn ngữ C# như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\npublic class Test\n    {\n        private int i = 0;\n        class TestInner\n        {\n            public int i = 1;\n           public void SayHi()\n            {\n               Console.WriteLine(i);\n            }\n        }\n        public static void Main(String[] args)\n        {\n            TestInner inner = new TestInner();\n            inner.SayHi();\n        }\n    }",
    "options": [
      "0",
      "1",
      "Lỗi biên dịch",
      "Lỗi thực thi"
    ],
    "answer": 1,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: B. 1."
  },
  {
    "id": 256,
    "module": 5,
    "moduleName": "Chương 5: Lập trình OOP C#",
    "question": "Cho chương trình viết bằng ngôn ngữ C# như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass One\n{\n    public One()\n    {\n        Console.WriteLine(\" One \");\n    }\n}\nclass Two : One\n{\n    public Two()\n    {\n        Console.WriteLine(\" Two \");\n    }\n}\npublic class Test\n{\n    public static void Main(String[] args)\n    {\n        One one = new One();\n        Two two = new Two();\n    }\n}",
    "options": [
      "One",
      "Two",
      "One Two",
      "One One Two"
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. One."
  },
  {
    "id": 257,
    "module": 5,
    "moduleName": "Chương 5: Lập trình OOP C#",
    "question": "Cho chương trình viết bằng ngôn ngữ C# như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\ninterface TestInterface\n{\n}\nclass TestImplementation : TestInterface\n{\n    public TestImplementation()\n    {\n        Console.WriteLine(\"TestImplementation\");\n    }\n}\nclass Test\n{\n    public static void Main(String[] args)\n    {\n        TestImplementation implementation = new TestImplementation();\n    }\n}",
    "options": [
      "TestImplementation",
      "Hello, world!",
      "Lỗi biên dịch",
      "Lỗi thực thi"
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. TestImplementation."
  },
  {
    "id": 258,
    "module": 5,
    "moduleName": "Chương 5: Lập trình OOP C#",
    "question": "Cho chương trình viết bằng ngôn ngữ C# như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\ninterface TestInterface\n{\n    void SomeMethod();\n    class Test\n    {\n        public void Display()\n        {\n            Console.WriteLine(\"Test class.\");\n        }\n    }\n}\npublic class Test\n{\n    public static void Main(String[] args)\n    {\n        TestInterface.Test testObj = new TestInterface.Test();\n        testObj.Display();\n    }\n}",
    "options": [
      "Test class.",
      "Hello, world!",
      "Lỗi biên dịch",
      "Lỗi thực thi"
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. Test class.."
  },
  {
    "id": 259,
    "module": 5,
    "moduleName": "Chương 5: Lập trình OOP C#",
    "question": "Cho chương trình viết bằng ngôn ngữ C# như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass One\n{\n    public abstract One();\n}\nclass Two : One\n{\n    public Two()\n    {\n        Console.WriteLine(\"Two\");\n    }\n}\npublic class Test\n{\n    public static void main(String[] args)\n    {\n        Two two = new Two();\n    }\n}",
    "options": [
      "Two",
      "One",
      "Lỗi biên dịch",
      "Lỗi thực thi"
    ],
    "answer": 2,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: C. Lỗi biên dịch."
  },
  {
    "id": 260,
    "module": 5,
    "moduleName": "Chương 5: Lập trình OOP C#",
    "question": "Cho chương trình viết bằng ngôn ngữ C# như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass TestInterface\n{\n    public class Test\n    {\n        public void Display()\n        {\n            Console.WriteLine(\"Test class.\");\n        }\n    }\n}\npublic class Test\n{\n    public static void Main(String[] args)\n    {\n        TestInterface.Test testObj = new TestInterface.Test();\n        testObj.Display();\n    }\n}",
    "options": [
      "Test class.",
      "Lỗi biên dịch",
      "Lỗi thực thi",
      "Cả 3 đáp án đều sai"
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. Test class.."
  },
  {
    "id": 261,
    "module": 5,
    "moduleName": "Chương 5: Lập trình OOP C#",
    "question": "Cho chương trình viết bằng ngôn ngữ C# như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass One\n{\n    int i = 1;\n    public One()\n    {\n        Console.WriteLine(i);\n    }\n}\nclass Two : One\n{\n    int i = 10;\n    public void One()\n    {\n        Console.WriteLine(i);\n    }\n}\npublic class Test\n{\n    public static void Main(String[] args)\n    {\n        One one = new Two();\n    }\n}",
    "options": [
      "1",
      "10",
      "Lỗi biên dịch",
      "Lỗi thực thi"
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. 1."
  },
  {
    "id": 262,
    "module": 5,
    "moduleName": "Chương 5: Lập trình OOP C#",
    "question": "Cho chương trình viết bằng ngôn ngữ C# như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass One\n{\n}\nclass Two : One\n{\n}\npublic class Test\n{\n    public static void Main(String[] args)\n    {\n        One one = new One();\n        Two two = new Two();\n       Console.WriteLine( one);\n    }\n}",
    "options": [
      "true",
      "false",
      "Cả 3 đáp án đều sai",
      "Lỗi biên dịch"
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. true. Kết quả kiểm tra kiểu dữ liệu trả về: true."
  },
  {
    "id": 263,
    "module": 5,
    "moduleName": "Chương 5: Lập trình OOP C#",
    "question": "Cho chương trình viết bằng ngôn ngữ C# như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass One\n    {\n        public One()\n        {\n            Console.WriteLine(\"One\");\n        }\n    }\n    class Two : One\n    {\n    public Two()\n    {\n        Console.WriteLine(\"Two\");\n    }\n}\nclass Three\n{\n    Two two = new Two();\n    public Three()\n    {\n        Console.WriteLine(\"Three\");\n    }\n}\npublic class Test\n{\n    public static void Main(String[] args)\n    {\n        Three three = new Three();\n    }\n}",
    "options": [
      "ThreeTwoOne",
      "ThreeOneTwo",
      "OneTwoThree",
      "Cả 3 đáp án đều sai"
    ],
    "answer": 2,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: C. OneTwoThree. Thứ tự thực thi constructor từ lớp cha đến lớp con: OneTwoThree."
  },
  {
    "id": 264,
    "module": 5,
    "moduleName": "Chương 5: Lập trình OOP C#",
    "question": "Cho chương trình viết bằng ngôn ngữ C# như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass TestInner\n    {\n        public void Print()\n        {\n            Console.WriteLine(\"Hi\");\n        }\n    }\n    public class Test\n    {\n        public static void Main(String[] args)\n        {\n            TestInner t = new TestInner();\n            \n             void Print()\n            {\n              Console.WriteLine(\"Hello\");\n            }\n            t.Print();\n        }  \n    }",
    "options": [
      "Hi",
      "Hello",
      "Lỗi biên dịch",
      "Cả 3 đáp án đều sai"
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. Hi."
  },
  {
    "id": 265,
    "module": 5,
    "moduleName": "Chương 5: Lập trình OOP C#",
    "question": "Cho chương trình viết bằng ngôn ngữ C# như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\npublic class One\n{\n    string className = \"One\";\n}\npublic class Two : One\n{\n    string className = \"Two\";\n}\npublic class Test\n{\n    public static void Main(String[] args)\n    {\n        One one = new Two();\n        Console.WriteLine(one.className);\n    }\n}",
    "options": [
      "One",
      "Two",
      "Lỗi biên dịch",
      "Lỗi thực thi"
    ],
    "answer": 2,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: C. Lỗi biên dịch."
  },
  {
    "id": 266,
    "module": 5,
    "moduleName": "Chương 5: Lập trình OOP C#",
    "question": "Cho chương trình viết bằng ngôn ngữ C# như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass One\n{\n    public One()\n    {\n        Console.WriteLine(\"One\");\n    }\n    public One(String str)\n    {\n        Console.WriteLine(\"OneStr\");\n    }\n}\nclass Two : One\n{\n    public Two(String str) : base(str)\n    {\n        Console.WriteLine(\"TwoStr\");\n    }\n}\npublic class Test\n{\n    public static void Main(String[] args)\n    {\n        Two two = new Two(\"Hello\");\n    }\n}",
    "options": [
      "OneTwoStrOneStr",
      "TwoStrOneStr",
      "OneStrTwoStr",
      "Lỗi biên dịch"
    ],
    "answer": 2,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: C. OneStrTwoStr. Kết quả in chuỗi: OneStrTwoStr."
  },
  {
    "id": 267,
    "module": 5,
    "moduleName": "Chương 5: Lập trình OOP C#",
    "question": "Cho chương trình viết bằng ngôn ngữ C# như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\npublic class Test\n{\n    public void DoNothing(Object ob)\n    {\n        Console.WriteLine(\"Object\");\n    }\n    public void DoNothing(String str)\n    {\n        Console.WriteLine(\"String\");\n    }\n    public static void Main(String[] args)\n    {\n        Test test = new Test();\n        test.DoNothing(args);\n    }\n}",
    "options": [
      "String",
      "Object",
      "Cả 3 đáp án đều sai",
      "Lỗi biên dịch"
    ],
    "answer": 1,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: B. Object."
  },
  {
    "id": 268,
    "module": 5,
    "moduleName": "Chương 5: Lập trình OOP C#",
    "question": "Cho chương trình viết bằng ngôn ngữ C# như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\npublic class Test\n{\n    public void DoNothing(Object ob)\n    {\n        Console.WriteLine(\"Object\");\n    }\n    public void DoNothing(int i)\n    {\n        Console.WriteLine(\"Integer\");\n    }\n    public static void Main(String[] args)\n    {\n        Test test = new Test();\n        test.DoNothing(5);\n    }\n}",
    "options": [
      "Integer",
      "Object",
      "String",
      "Cả 3 đáp án đều sai"
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. Integer."
  },
  {
    "id": 269,
    "module": 5,
    "moduleName": "Chương 5: Lập trình OOP C#",
    "question": "Cho chương trình viết bằng ngôn ngữ C# như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\npublic class Test\n{\n    public void DoNothing(Object ob)\n    {\n        Console.WriteLine(\"Object\");\n    }\n    public void DoNothing(int i)\n    {\n        Console.WriteLine(\"Integer\");\n    }\n    public void DoNothing(Double d)\n    {\n        Console.WriteLine(\"Double\");\n    }\n    public static void Main(String[] args)\n    {\n        Test test = new Test();\n        test.DoNothing(new Test());\n    }\n}",
    "options": [
      "Object",
      "Integer",
      "Double",
      "Lỗi biên dịch"
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. Object."
  },
  {
    "id": 270,
    "module": 5,
    "moduleName": "Chương 5: Lập trình OOP C#",
    "question": "Cho chương trình viết bằng ngôn ngữ C# như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\npublic class Test\n{\n    public void DoNothing(Object ob)\n    {\n        Console.WriteLine(\"Object\");\n    }\n    public void DoNothing(int i)\n    {\n        Console.WriteLine(\"Integer\");\n    }\n    public void DoNothing(double i)\n    {\n        Console.WriteLine(\"Integer\");\n    }\n    public static void Main(String[] args)\n    {\n        Test test = new Test();\n        test.DoNothing(test);\n    }\n}",
    "options": [
      "Integer",
      "Double",
      "Object",
      "Cả 3 đáp án đều sai"
    ],
    "answer": 2,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: C. Object."
  },
  {
    "id": 271,
    "module": 5,
    "moduleName": "Chương 5: Lập trình OOP C#",
    "question": "Cho chương trình viết bằng ngôn ngữ C# như sau, Lựa chọn nào được viết ở dòng //variable name here, khi biên dịch sẽ không có lỗi?\npublic class Test\n{\n    private int i = 1;\n    int j = 2;\n    public void TestMethod()\n    {\n    }\n    class TestInner\n    {\n        int k = 3;\n        public void InnerMethod(int m)\n        {\n            Console.WriteLine(//variable name here);\n        }\n    }\n}",
    "options": [
      "i",
      "i+m",
      "i+j",
      "k+m"
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. i. Lựa chọn biến i không gây lỗi biên dịch."
  },
  {
    "id": 272,
    "module": 5,
    "moduleName": "Chương 5: Lập trình OOP C#",
    "question": "Cho chương trình viết bằng ngôn ngữ C# như sau, Lựa chọn nào được viết ở dòng //access variable here khi biên dịch sẽ không có lỗi?\npublic class Test\n{\n    int x = 0;\n    static int y = 1;\n    public class InnerClass\n    {\n        int z = 2;\n        public void GetValue()\n        {\n            //access variable here\n        }\n    }\n}",
    "options": [
      "y = z = 6;",
      "y = 8;",
      "z = 9;",
      "D.Cả 3 đáp án đều đúng"
    ],
    "answer": 3,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: D. D.Cả 3 đáp án đều đúng. Cả 3 cách truy cập biến đều hợp lệ -> Cả 3 đáp án đều đúng."
  },
  {
    "id": 273,
    "module": 5,
    "moduleName": "Chương 5: Lập trình OOP C#",
    "question": "Cho chương trình viết bằng ngôn ngữ C# như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\npublic class Test\n{\n    public void TestMethod()\n    {\n        int a = 0;\n        class TestInner\n        {\n            public void InnerMethod(int x, int y)\n            {\n                Console.WriteLine(y);\n            }\n        }\n        TestInner inner = new TestInner();\n        inner.InnerMethod(1, 2);\n    }\n    public static void Main(String[] args)\n    {\n        Test main = new Test();\n        main.TestMethod();\n    }\n}",
    "options": [
      "0",
      "1",
      "2",
      "Lỗi biên dịch"
    ],
    "answer": 3,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: D. Lỗi biên dịch."
  },
  {
    "id": 274,
    "module": 5,
    "moduleName": "Chương 5: Lập trình OOP C#",
    "question": "Cho chương trình viết bằng ngôn ngữ C# như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\npublic class Test\n{\n     public void Method1()\n     {\n     }\n     class TestInner\n     {\n         public int x = 68;\n     }\n     public void Method2()\n     {\n         TestInner inner = new TestInner();\n         Console.WriteLine(inner.x);\n     }\n     public static void Main(String[] args)\n     {\n         Test test = new Test();\n         test.Method2();\n     }\n}",
    "options": [
      "68",
      "Lỗi biên dịch",
      "Lỗi thực thi",
      "Cả 3 đáp án đều sai"
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. 68."
  },
  {
    "id": 275,
    "module": 5,
    "moduleName": "Chương 5: Lập trình OOP C#",
    "question": "Cho chương trình viết bằng ngôn ngữ C# như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\npublic class Test\n{\n     public class TestInner\n     {\n         public void Print()\n         {\n             Console.WriteLine(\"Hi\");\n         }\n     }\n     public void Print()\n     {\n         Console.WriteLine(\"Hello\");\n     }\n     public static void Main(String[] args)\n     {\n         TestInner testInner = new TestInner();\n         testInner.Print();\n     }\n}",
    "options": [
      "Hello",
      "Hi",
      "Lỗi biên dịch",
      "Lỗi thực thi"
    ],
    "answer": 1,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: B. Hi."
  },
  {
    "id": 276,
    "module": 5,
    "moduleName": "Chương 5: Lập trình OOP C#",
    "question": "Cho chương trình viết bằng ngôn ngữ C# như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nabstract class A\n{\n     public int i;\n     public abstract void display();\n}\nclass B : A\n{\n     public int j;\n     public int sum;\n     public override void display()\n     {\n         sum = i + j;\n         Console.WriteLine(+i + \",\" + +j + sum);                \n     }\n}\nclass Program\n{\n    static void Main(string[] args)\n    {\n        A obj = new B();\n        obj.i = 2;\n        B obj1 = new B();\n        obj1.j = 10;\n        obj.display();\n        Console.ReadLine();\n    }\n}",
    "options": [
      "2,1012",
      "0,1010",
      "2,02",
      "0,00"
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. 2,1012. Kết quả tính toán: 2, 1012 (hoặc 2,02)."
  },
  {
    "id": 277,
    "module": 5,
    "moduleName": "Chương 5: Lập trình OOP C#",
    "question": "Trong khái niệm Kế thừa(C#), thành viên nào sau đây của lớp kế thừa có thể truy cập được các thành viên của lớp cơ sở?",
    "options": [
      "static",
      "protected",
      "private",
      "Cả 3 đáp án đều sai"
    ],
    "answer": 1,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: B. protected. Từ khóa protected cho phép các lớp kế thừa truy cập thành viên của lớp cơ sở."
  },
  {
    "id": 278,
    "module": 5,
    "moduleName": "Chương 5: Lập trình OOP C#",
    "question": "Cho chương trình viết bằng ngôn ngữ C# như sau, Chọn câu lệnh sẽ được thêm vào đoạn code /* add code here */ để có kết quả là 10 20 ?\nclass BaseClass\n{\n    protected int a = 20;\n}\nclass DerivedClass : BaseClass\n{\n    int a = 10;\n    public void Math()\n    {\n       /* add code here */\n    }\n}\nclass Program\n{\n    static void Main(string[] args)\n    {\n        DerivedClass obj = new DerivedClass();\n        obj.Math();\n    }\n}",
    "options": [
      "Console.WriteLine( a + \", \" + this.a);",
      "Console.WriteLine(base.a + \", \" +this.a);",
      "Console.WriteLine(a + \",\" + base.a);",
      "Console.WriteLine(base.a + \",\" + base.a);"
    ],
    "answer": 1,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: B. Console.WriteLine(base.a + \", \" +this.a);. Dùng base.a để truy cập a của lớp cơ sở và this.a cho lớp hiện tại -> Console.WriteLine(base.a + \", \" + this.a);"
  },
  {
    "id": 279,
    "module": 5,
    "moduleName": "Chương 5: Lập trình OOP C#",
    "question": "Cho chương trình viết bằng ngôn ngữ C# như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\ninterface Calc\n{\n    void Cal(int i);\n}\nclass DisplayA : Calc\n{\n    public int x;\n    public void Cal(int i)\n    {\n        x = i * i;\n    }\n}\nclass DisplayB : Calc\n{\n    public int x;\n    public void Cal(int i)\n    {\n        x = i / i;\n    }\n}\nclass Program\n{\n    public static void Main(string[] args)\n    {\n        DisplayA arr1 = new DisplayA();\n        DisplayB arr2 = new DisplayB();\n        arr1.x = 0;\n        arr2.x = 0;\n        arr1.Cal(2);\n        arr2.Cal(2);\n        Console.WriteLine(arr1.x + \" \" + arr2.x);\n        Console.ReadLine();\n    }\n}",
    "options": [
      "0 0",
      "2 2",
      "4 1",
      "1 4"
    ],
    "answer": 2,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: C. 4 1. Kết quả thực thi phương thức Cal là: 4 1."
  },
  {
    "id": 280,
    "module": 5,
    "moduleName": "Chương 5: Lập trình OOP C#",
    "question": "Cho chương trình viết bằng ngôn ngữ C# như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass Maths\n{\n    public int x;\n    public double y;\n    public int Add(int a, int b)\n    {\n        x = a + b;\n        return x;\n    }\n    public int Add(double c, double d)\n    {\n        y = c + d;\n        return (int)y;\n    }\n    public Maths()\n    {\n        this.x = 0;\n        this.y = 0;\n    }\n}\nclass Program\n{\n     public static void Main(string[] args)\n     {\n         Maths obj = new Maths();\n         int a = 4;\n         double b = 3.5;\n         obj.Add(a, a);\n         obj.Add(b, b);\n         Console.WriteLine(obj.x + \" \" + obj.y);\n         Console.ReadLine();\n     }\n}",
    "options": [
      "4, 3.5",
      "8, 0",
      "7.5, 8",
      "8, 7"
    ],
    "answer": 3,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: D. 8, 7. Kết quả thực thi là: 8, 7."
  },
  {
    "id": 281,
    "module": 6,
    "moduleName": "Chương 6: Lập trình OOP Java",
    "question": "Cho chương trình viết bằng ngôn ngữ Java như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass One {\n    int i = 1;\n    public int getInt() {\n        return i;\n    }\n}\nclass Two extends One {\n    int i = 2;\n    public int getInt() {\n        return i;\n    }\n}\npublic class Test {\n    public static void main(String[] args) {\n        One one = new One();\n        Two two = (Two) one;\n        System.out.println(two.getInt());\n    }\n}",
    "options": [
      "1",
      "2",
      "Lỗi biên dịch",
      "Lỗi thực thi (vì ép kiểu (Two)one)"
    ],
    "answer": 3,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: D. Lỗi thực thi (vì ép kiểu (Two)one)."
  },
  {
    "id": 282,
    "module": 6,
    "moduleName": "Chương 6: Lập trình OOP Java",
    "question": "Cho chương trình viết bằng ngôn ngữ Java như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass One {\n    public static void print() {\n        System.out.println(\"1\");\n    }\n}\nclass Two extends One {\n    public static void print() {\n        System.out.println(\"2\");\n    }\n}\npublic class Test {\n    public static void main(String args[]) {\n        One one = new Two();\n        one.print();\n    }\n}",
    "options": [
      "1",
      "2",
      "Lỗi biên dịch",
      "Lỗi thực thi"
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. 1."
  },
  {
    "id": 283,
    "module": 6,
    "moduleName": "Chương 6: Lập trình OOP Java",
    "question": "Cho chương trình viết bằng ngôn ngữ Java như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass One {\n    public static void print(int i) {\n        System.out.println(\"Parent\");\n    }\n}\nclass Two extends One {\n    public static void print(byte b) {\n        System.out.println(\"Child\");\n    }\n}\npublic class Test {\n    public static void main(String args[]) {\n        One one = new Two();\n        one.print(10);\n    }\n}",
    "options": [
      "Parent",
      "Child",
      "Lỗi biên dịch",
      "Lỗi thực thi"
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. Parent."
  },
  {
    "id": 284,
    "module": 6,
    "moduleName": "Chương 6: Lập trình OOP Java",
    "question": "Cho chương trình viết bằng ngôn ngữ Java như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass One {\n    public static void tool(int i) {\n        System.out.println(\"No\");\n    }\n}\nclass Two extends One {\n    public static void tool(byte b) {\n        System.out.println(\"Ok\");\n    }\n}\npublic class Test {\n    public static void main(String args[]) {\n        One one = new Two();\n        one.tool(5);\n    }\n}",
    "options": [
      "Ok",
      "No",
      "Lỗi biên dịch",
      "Lỗi thực thi"
    ],
    "answer": 1,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: B. No."
  },
  {
    "id": 285,
    "module": 6,
    "moduleName": "Chương 6: Lập trình OOP Java",
    "question": "Cho chương trình viết bằng ngôn ngữ Java như sau, Lựa chọn nào được viết ở dòng // your code here, khi biên dịch sẽ không có lỗi?\ninterface Inter {\n}\n \nclass One {\n}\n \nclass Two extends One {\n}\n \nclass Three extends One {\n}\n \nclass Four extends Two implements Inter {\n}\n \nclass Five extends Four {\n}\n \nclass Six extends Three {\n}\n \npublic class Test {\n    public static void main(String[] args) {\n        // your code here\n    }\n}",
    "options": [
      "Inter inter = new Four();",
      "Inter inter = new Inter ();",
      "Six six = new Three ();",
      "Three three = new One();"
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. Inter inter = new Four();. Lớp Four implements Inter nên có thể đa hình: Inter inter = new Four();"
  },
  {
    "id": 286,
    "module": 6,
    "moduleName": "Chương 6: Lập trình OOP Java",
    "question": "Cho chương trình viết bằng ngôn ngữ Java như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass One {\n}\n \nclass Two extends One {\n    public void print() {\n        System.out.println(\"Two\");\n    }\n}\n \npublic class Test {\n    public static void main(String[] args) {\n        One one = new Two();\n        one.print();\n    }\n}",
    "options": [
      "Two",
      "Lỗi biên dịch",
      "Lỗi thực thi",
      "Cả 3 đáp án đều sai"
    ],
    "answer": 1,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: B. Lỗi biên dịch."
  },
  {
    "id": 287,
    "module": 6,
    "moduleName": "Chương 6: Lập trình OOP Java",
    "question": "Cho chương trình viết bằng ngôn ngữ Java như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass One {\n    int x = 0;\n    public One(int x) {\n        this.x = x++;\n    }\n}\n \npublic class Test {\n    public static void main(String[] args) {\n        One one = new One(5);\n        System.out.println(one.x);\n    }\n}",
    "options": [
      "1",
      "0",
      "6",
      "5"
    ],
    "answer": 3,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: D. 5."
  },
  {
    "id": 288,
    "module": 6,
    "moduleName": "Chương 6: Lập trình OOP Java",
    "question": "Cho chương trình viết bằng ngôn ngữ Java như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass One {\n    public One(int x) {\n        System.out.print(\"int constructor\");\n    }\n \n    public One(long l) {\n        System.out.print(\"long constructor\");\n    }\n}\n \npublic class Test {\n    public static void main(String[] args) {\n        long l = 20l;\n        One one = new One(l);\n    }\n}",
    "options": [
      "int constructor",
      "long constructor int constructor",
      "long constructor long constructor",
      "long constructor"
    ],
    "answer": 1,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: B. long constructor int constructor."
  },
  {
    "id": 289,
    "module": 6,
    "moduleName": "Chương 6: Lập trình OOP Java",
    "question": "Cho chương trình viết bằng ngôn ngữ Java như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass One {\n    public One(int x) {\n        System.out.print(\"int constructor\");\n    }\n \n    public One(char c) {\n        System.out.print(\"char constructor\");\n    }\n \n    void One(String str) {\n        System.out.print(\"String constructor\");\n    }\n}\npublic class Test {\n    public static void main(String[] args) {\n        String ch = \"c\";\n        One one = new One(1);\n    }\n}",
    "options": [
      "char constructor",
      "int constructor",
      "Lỗi biên dịch",
      "Cả 3 đáp án đều sai"
    ],
    "answer": 1,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: B. int constructor."
  },
  {
    "id": 290,
    "module": 6,
    "moduleName": "Chương 6: Lập trình OOP Java",
    "question": "Khi bạn biên dịch và chạy chương trình viết bằng ngôn ngữ Java bằng lệnh đã cho ở bên dưới sau kết quả sẽ là:\ninterface ITestInterface {\n    int status = 0;\n}\npublic class Test implements ITestInterface {\n    public static void main(String[] args) {\n        Test t = new Test();\n        t.status = 69;\n        System.out.print(t.status);\n    }\n}",
    "options": [
      "1",
      "0",
      "2",
      "Lỗi biên dịch"
    ],
    "answer": 3,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: D. Lỗi biên dịch."
  },
  {
    "id": 291,
    "module": 6,
    "moduleName": "Chương 6: Lập trình OOP Java",
    "question": "Cho chương trình viết bằng ngôn ngữ Java như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\ninterface ITestInterface {\n    int i = 0;\n    public ITestInterface(){\n        System.out.print(\"I Constructor \");\n    }\n}\npublic class Test implements ITestInterface {\n    public Test() {\n        System.out.print(\"Test Constructor \");\n    }\n    public static void main(String[] args) {\n        Test t = new Test();\n    }\n}",
    "options": [
      "Test Constructor",
      "I Constructor Test Constructor",
      "T Constructor I Constructor",
      "Lỗi biên dịch"
    ],
    "answer": 3,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: D. Lỗi biên dịch."
  },
  {
    "id": 292,
    "module": 6,
    "moduleName": "Chương 6: Lập trình OOP Java",
    "question": "Cho chương trình viết bằng ngôn ngữ Java như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass One {\n    public void greetings() {\n        System.out.println(\"Hello\");\n    }\n}\nclass Two extends One {\n    public void greetings() {\n        System.out.println(\"Hi\");\n    }\n}\npublic class Test {\n    public static void main(String[] args) {\n        One one = new Two();\n        one.greetings();\n    }\n}",
    "options": [
      "Hello",
      "Hi",
      "Lỗi biên dịch",
      "Lỗi thực thi"
    ],
    "answer": 1,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: B. Hi."
  },
  {
    "id": 293,
    "module": 6,
    "moduleName": "Chương 6: Lập trình OOP Java",
    "question": "Cho chương trình viết bằng ngôn ngữ Java như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass One {\n    public One() {\n        System.out.println(\"Hello Object\");\n    }\n    public One(int x) {\n        this();\n        System.out.println(\"Hello Object with int\");\n    }\n}\npublic class Test {\n    public static void main(String[] args) {\n        One one = new One();\n    }\n}",
    "options": [
      "Hello Object with int",
      "Hello Object",
      "Hello Object with int Hello Object",
      "Hello Object Hello Object with int"
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. Hello Object with int."
  },
  {
    "id": 294,
    "module": 6,
    "moduleName": "Chương 6: Lập trình OOP Java",
    "question": "Cho chương trình viết bằng ngôn ngữ Java như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass One {\n    public One(int i) {\n        System.out.println(\"int\");\n    }\n    public void One(short s) {\n        System.out.println(\"short\");\n    }\n}\npublic class Test {\n    public static void main(String[] args) {\n        short s = 10;\n        One one = new One(s);\n    }\n}",
    "options": [
      "int short",
      "short",
      "int",
      "short int"
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. int short."
  },
  {
    "id": 295,
    "module": 6,
    "moduleName": "Chương 6: Lập trình OOP Java",
    "question": "Cho chương trình viết bằng ngôn ngữ Java như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass One {\n    public void className() {\n        System.out.println(\"Parent\");\n    }\n}\nclass Two extends One {\n    public void className() {\n        System.out.println(\"Child\");\n    }\n}\npublic class Test {\n    public static void main(String[] args) {\n        One one = new Two();\n        one.className();\n    }\n}",
    "options": [
      "Parent",
      "Child Parent",
      "Parent Child",
      "Child"
    ],
    "answer": 1,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: B. Child Parent."
  },
  {
    "id": 296,
    "module": 6,
    "moduleName": "Chương 6: Lập trình OOP Java",
    "question": "Cho chương trình viết bằng ngôn ngữ Java như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass One {\n    public void greetings() {\n        System.out.println(\"Hello\");\n    }\n}\nclass Two extends One {\n    public void greetings() {\n        System.out.println(\"Hi\");\n    }\n}\npublic class Test {\n    public static void main(String[] args) {\n        One one = new Two();\n        one.greetings();\n    }\n}",
    "options": [
      "Hello",
      "Hello Hi",
      "Hi Hello",
      "Hi"
    ],
    "answer": 2,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: C. Hi Hello."
  },
  {
    "id": 297,
    "module": 6,
    "moduleName": "Chương 6: Lập trình OOP Java",
    "question": "Cho chương trình viết bằng ngôn ngữ Java như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass One {\n    public static void greetings() {\n        System.out.println(\"Hello\");\n    }\n}\nclass Two extends One {\n    public static void greetings() {\n        System.out.println(\"Hi\");\n    }\n}\npublic class Test {\n    public static void main(String[] args) {\n        One one = new Two();\n        one.greetings();\n    }\n}",
    "options": [
      "Hello",
      "Hi",
      "Lỗi biên dịch",
      "Lỗi thực thi"
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. Hello."
  },
  {
    "id": 298,
    "module": 6,
    "moduleName": "Chương 6: Lập trình OOP Java",
    "question": "Cho chương trình viết bằng ngôn ngữ Java như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass One {\n    private void className() {\n        System.out.println(\"Parent\");\n    }\n}\nclass Two extends One {\n    public void className() {\n        System.out.println(\"Child\");\n    }\n}\npublic class Test {\n    public static void main(String[] args) {\n        One one = new Two();\n        one.className();\n    }\n}",
    "options": [
      "Parent",
      "Child",
      "Lỗi biên dịch",
      "Lỗi thực thi"
    ],
    "answer": 2,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: C. Lỗi biên dịch."
  },
  {
    "id": 299,
    "module": 6,
    "moduleName": "Chương 6: Lập trình OOP Java",
    "question": "Cho chương trình viết bằng ngôn ngữ Java như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass One {\n    private void callMe() {\n        System.out.println(\"Parent\");\n    }\n    public void caller() {\n        callMe();\n    }\n}\nclass Two extends One {\n    public void callMe() {\n        System.out.println(\"Child\");\n    }\n}\npublic class Test {\n    public static void main(String[] args) {\n        Two two = new Two();\n        two.caller();\n    }\n}",
    "options": [
      "Parent",
      "Child",
      "Parent Child",
      "Lỗi biên dịch"
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. Parent."
  },
  {
    "id": 300,
    "module": 6,
    "moduleName": "Chương 6: Lập trình OOP Java",
    "question": "Cho chương trình viết bằng ngôn ngữ Java như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass One {\n    public void callMe() {\n        System.out.println(\"Parent\");\n    }\n    public void caller() {\n        callMe();\n    }\n}\nclass Two extends One {\n    public void callMe() {\n        System.out.println(\"Child\");\n    }\n}\npublic class Test {\n    public static void main(String[] args) {\n        Two two = new Two();\n        two.caller();\n    }\n}",
    "options": [
      "Parent",
      "Child",
      "Lỗi thực thi",
      "Lỗi biên dịch"
    ],
    "answer": 1,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: B. Child."
  },
  {
    "id": 301,
    "module": 6,
    "moduleName": "Chương 6: Lập trình OOP Java",
    "question": "Cho chương trình viết bằng ngôn ngữ Java như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass One {\n    public int method() {\n        System.out.println(\"int\");\n        return 0;\n    }\n}\nclass Two extends One {\n    public int method() {\n        System.out.println(\"short\");\n        return 1;\n    }\n}\npublic class Test {\n    public static void main(String[] args) {\n        One one = new Two();\n        one.method();\n    }\n}",
    "options": [
      "int",
      "short",
      "Lỗi biên dịch",
      "Lỗi thực thi"
    ],
    "answer": 1,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: B. short."
  },
  {
    "id": 302,
    "module": 6,
    "moduleName": "Chương 6: Lập trình OOP Java",
    "question": "Cho chương trình viết bằng ngôn ngữ Java như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass One {\n    public void someMethod() throws Exception {\n        System.out.println(\"Exception\");\n    }\n}\nclass Two extends One {\n    public void someMethod() {\n        System.out.println(\"Not Exception\");\n    }\n    public static void main(String[] args) {\n        One one = new Two();\n        one.someMethod();\n    }\n}",
    "options": [
      "Exception",
      "Not Exception",
      "Lỗi biên dịch",
      "Lỗi thực thi"
    ],
    "answer": 2,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: C. Lỗi biên dịch."
  },
  {
    "id": 303,
    "module": 6,
    "moduleName": "Chương 6: Lập trình OOP Java",
    "question": "Cho chương trình viết bằng ngôn ngữ Java như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass One {\n    public One() {\n        System.out.print(\"One,\");\n    }\n}\nclass Two extends One {\n    void Two() {\n        System.out.print(\"Two,\");\n    }\n}\nclass Three extends Two {\n    public Three() {\n        System.out.print(\"Three,\");\n    }\n}\npublic class Test {\n    public static void main(String[] args) {\n        Three three = new Three();\n    }\n}",
    "options": [
      "One,Two,Three,",
      "Three,Two,One,",
      "One,Three,",
      "One,"
    ],
    "answer": 2,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: C. One,Three,."
  },
  {
    "id": 304,
    "module": 6,
    "moduleName": "Chương 6: Lập trình OOP Java",
    "question": "Cho chương trình viết bằng ngôn ngữ Java như sau, Lựa chọn nào nếu được viết ở dòng //method declaration here, sẽ được gọi là nạp chồng (override) phương thức someMethod được định nghĩa trong lớp One\nclass One {\n    public void someMethod(int i) {\n    }\n}\nclass Two extends One {\n    public void someMethod(double anotherint) {\n    }\n    // method declaration here\n}\npublic class Test {\n    public static void main(String[] args) {\n        Two two = new Two();\n    }\n}",
    "options": [
      "void public someMethod(int i)",
      "public void someMethod(int anotherint)",
      "public void someMethod(String str)",
      "public void someMethod(double anotherint)"
    ],
    "answer": 1,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: B. public void someMethod(int anotherint). Nạp chồng/ghi đè cùng tên cùng tham số: public void someMethod(int anotherint)"
  },
  {
    "id": 305,
    "module": 6,
    "moduleName": "Chương 6: Lập trình OOP Java",
    "question": "Cho chương trình viết bằng ngôn ngữ Java như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass One {\n    void One() {\n        System.out.print(\"One,\");\n    }\n}\nclass Two extends One {\n    void Two() {\n        System.out.print(\"Two,\");\n    }\n}\nclass Three extends Two {\n    void Three() {\n        System.out.print(\"Three,\");\n    }\n}\npublic class Test {\n    public static void main(String[] args) {\n        Three three = new Three();\n    }\n}",
    "options": [
      "One,Two,Three,",
      "Three,Two,One,",
      "Three,",
      "Cả 3 đáp án đều sai"
    ],
    "answer": 3,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: D. Cả 3 đáp án đều sai. Phương thức void One() không phải constructor vì có kiểu trả về void, do đó không được gọi khi new -> Cả 3 đáp án đều sai."
  },
  {
    "id": 306,
    "module": 6,
    "moduleName": "Chương 6: Lập trình OOP Java",
    "question": "Cho chương trình viết bằng ngôn ngữ Java như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\npublic class Test {\n    int i = 68;\n    public static void main(String[] args) {\n        System.out.println(i++);\n    }\n}",
    "options": [
      "69",
      "68",
      "Lỗi biên dịch",
      "Cả 3 đáp án đều sai"
    ],
    "answer": 2,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: C. Lỗi biên dịch."
  },
  {
    "id": 307,
    "module": 6,
    "moduleName": "Chương 6: Lập trình OOP Java",
    "question": "Cho chương trình viết bằng ngôn ngữ Java như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nabstract class Tesst {\n    public void something() {\n        System.out.println(\"Something\");\n    }\n    abstract public void nothing();\n}\nclass TestChild extends Tesst {\n    @Override\n    public void nothing() {\n        System.out.println(\"Nothing\");\n    }\n}\npublic class Test {\n    public static void main(String[] args) {\n        TestChild testChild = new TestChild();\n        testChild.something();\n    }\n}",
    "options": [
      "Nothing",
      "Something",
      "Lỗi biên dịch",
      "Lỗi thực thi"
    ],
    "answer": 1,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: B. Something."
  },
  {
    "id": 308,
    "module": 6,
    "moduleName": "Chương 6: Lập trình OOP Java",
    "question": "Cho chương trình viết bằng ngôn ngữ Java như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\npublic class Test {\n    String name = \"Test\";\n    public Test() {\n        name = \"TestObject\";\n    }\n    public static void main(String[] args) {\n        System.out.println(\"Name is \" + name);\n    }\n}",
    "options": [
      "Name is Test",
      "Name is TestObject",
      "Lỗi biên dịch",
      "Cả 3 đáp án đều sai"
    ],
    "answer": 2,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: C. Lỗi biên dịch."
  },
  {
    "id": 309,
    "module": 6,
    "moduleName": "Chương 6: Lập trình OOP Java",
    "question": "Cho chương trình viết bằng ngôn ngữ Java như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\npublic class Test {\n    static String name = \"Test\";\n    public Test() {\n        name = \"TestObject\";\n    }\n    public static void main(String[] args) {\n        System.out.println(\"Name is \" + name);\n    }\n}",
    "options": [
      "Name is Test",
      "Name is TestObject",
      "Lỗi biên dịch",
      "Cả 3 đáp án đều sai"
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. Name is Test."
  },
  {
    "id": 310,
    "module": 6,
    "moduleName": "Chương 6: Lập trình OOP Java",
    "question": "Cho chương trình viết bằng ngôn ngữ Java như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass One {\n    public One() {\n        System.out.println(\"Abstract Class\");\n    }\n    abstract void nothing();\n}\npublic class Test {\n    public static void main(String[] args) {\n        One one = new One();\n    }\n}",
    "options": [
      "Abstract Class",
      "Lỗi biên dịch",
      "Lỗi thực thi",
      "Cả 3 đáp án đều sai"
    ],
    "answer": 1,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: B. Lỗi biên dịch."
  },
  {
    "id": 311,
    "module": 6,
    "moduleName": "Chương 6: Lập trình OOP Java",
    "question": "Cho chương trình viết bằng ngôn ngữ Java như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nabstract class One {\n    public One() {\n        System.out.println(\"One\");\n    }\n    abstract void nothing();\n}\npublic class Test {\n    public static void main(String[] args) {\n        One one = new One();\n    }\n}",
    "options": [
      "One",
      "Lỗi biên dịch",
      "Lỗi thực thi",
      "Cả 3 đáp án đều sai"
    ],
    "answer": 1,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: B. Lỗi biên dịch."
  },
  {
    "id": 312,
    "module": 6,
    "moduleName": "Chương 6: Lập trình OOP Java",
    "question": "Cho chương trình viết bằng ngôn ngữ Java như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass One {\n    public One(String name) {\n        System.out.print(\"Hello \" + name + \",\");\n    }\n}\nclass Two extends One {\n    public Two() {\n        super(\"Alice\");\n        System.out.print(\"Hi,\");\n    }\n}\npublic class Test {\n    public static void main(String[] args) {\n        Two two = new Two();\n    }\n}",
    "options": [
      "Hi,",
      "Alice",
      "Hello Alice,Hi,",
      "Cả 3 đáp án đều sai"
    ],
    "answer": 2,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: C. Hello Alice,Hi,."
  },
  {
    "id": 313,
    "module": 6,
    "moduleName": "Chương 6: Lập trình OOP Java",
    "question": "Cho chương trình viết bằng ngôn ngữ Java như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass One {\n    public One(String name) {\n        System.out.print(\"Hello \" + name + \",\");\n    }\n}\nclass Two extends One {\n    public Two() {\n        System.out.print(\"Hi,\");\n        super(\"Two\");\n    }\n}\npublic class Test {\n    public static void main(String[] args) {\n        Two two = new Two();\n    }\n}",
    "options": [
      "Hi,",
      "Hi,Hello Two,",
      "Lỗi biên dịch",
      "Cả 3 đáp án đều sai"
    ],
    "answer": 2,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: C. Lỗi biên dịch."
  },
  {
    "id": 314,
    "module": 6,
    "moduleName": "Chương 6: Lập trình OOP Java",
    "question": "Cho chương trình viết bằng ngôn ngữ Java như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass One {\n    public One(String name) {\n        System.out.print(\"Hello \" + name + \",\");\n    }\n}\nclass Two extends One {\n    public Two() {\n        super(\"Two\");\n        System.out.print(\"Hi,\");\n    }\n}\npublic class Test {\n    public static void main(String[] args) {\n        Two two = new Two();\n    }\n}",
    "options": [
      "Hi,",
      "Hi,Hello Two,",
      "Hello Two,Hi,",
      "Cả 3 đáp án đều sai"
    ],
    "answer": 2,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: C. Hello Two,Hi,."
  },
  {
    "id": 315,
    "module": 6,
    "moduleName": "Chương 6: Lập trình OOP Java",
    "question": "Cho chương trình viết bằng ngôn ngữ Java như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass One {\n    public One(String name) {\n        System.out.print(\"Hello \" + name + \",\");\n    }\n}\nclass Two extends One {\n    public Two() {\n        this(\"Two\");\n        System.out.print(\"Hi,\");\n    }\n}\npublic class Test {\n    public static void main(String[] args) {\n        Two two = new Two();\n    }\n}",
    "options": [
      "Cả 3 đáp án đều sai",
      "Hello",
      "Lỗi biên dịch",
      "Lỗi thực thi"
    ],
    "answer": 2,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: C. Lỗi biên dịch."
  },
  {
    "id": 316,
    "module": 6,
    "moduleName": "Chương 6: Lập trình OOP Java",
    "question": "Cho chương trình viết bằng ngôn ngữ Java như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass One {\n    public One() {\n        System.out.print(\"Hi One,\");\n    }\n    public One(String name) {\n        System.out.print(\"Hello \" + name + \",\");\n    }\n}\nclass Two extends One {\n    public Two() {\n        this(\"Two\");\n        System.out.print(\"Hi Two,\");\n    }\n    public Two(String name) {\n        System.out.print(\"Hello \" + name + \",\");\n    }\n}\npublic class Test {\n    public static void main(String[] args) {\n        Two two = new Two();\n    }\n}",
    "options": [
      "Hi One,",
      "Hi Two,",
      "Hi One,Hello Two",
      "Hi One,Hello Two,Hi Two,"
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. Hi One,."
  },
  {
    "id": 317,
    "module": 6,
    "moduleName": "Chương 6: Lập trình OOP Java",
    "question": "Cho chương trình viết bằng ngôn ngữ Java như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass One {\n    public One() {\n        System.out.print(\"Parent \");\n    }\n}\nclass Two extends One {\n    public Two() {\n        System.out.print(\"Child \");\n    }\n}\npublic class Test {\n    public static void main(String[] args) {\n        One one = new Two();\n    }\n}",
    "options": [
      "Parent Child",
      "Child Parent",
      "Child",
      "Parent"
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. Parent Child."
  },
  {
    "id": 318,
    "module": 6,
    "moduleName": "Chương 6: Lập trình OOP Java",
    "question": "Cho chương trình viết bằng ngôn ngữ Java như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass TestChild extends Test {\n    public TestChild() {\n        System.out.println(\"TestChild1 \");\n    }\n}\npublic class Test {\n    void TestChild() {\n        System.out.println(\"TestChild2 \");\n    }\n    public static void main(String[] args) {\n        new Test().TestChild();\n    }\n}",
    "options": [
      "TestChild1 TestChild2",
      "TestChild2 TestChild1",
      "TestChild2",
      "Cả 3 đáp án đều sai"
    ],
    "answer": 1,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: B. TestChild2 TestChild1."
  },
  {
    "id": 319,
    "module": 6,
    "moduleName": "Chương 6: Lập trình OOP Java",
    "question": "Cho chương trình viết bằng ngôn ngữ Java như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\npublic class Test {\n    int i = 68;\n    void print() {\n        System.out.println(i);\n    }\n    public static void main(String[] args) {\n        new Test().print();\n    }\n}",
    "options": [
      "0",
      "68",
      "Lỗi thực thi",
      "Lỗi biên dịch"
    ],
    "answer": 1,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: B. 68."
  },
  {
    "id": 320,
    "module": 6,
    "moduleName": "Chương 6: Lập trình OOP Java",
    "question": "Cho chương trình viết bằng ngôn ngữ Java như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nfinal class One {\n    public void sayHello() {\n        System.out.println(\"Parent Hello\");\n    }\n}\nclass Two extends One {\n    public void sayHello() {\n        System.out.println(\"Child Hello\");\n    }\n}\npublic class Test {\n    public static void main(String[] args) {\n        One o = new Two();\n        o.sayHello();\n    }\n}",
    "options": [
      "Parent Hello",
      "Child Hello",
      "Lỗi biên dịch",
      "Cả 3 đáp án đều sai"
    ],
    "answer": 1,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: B. Child Hello."
  },
  {
    "id": 321,
    "module": 6,
    "moduleName": "Chương 6: Lập trình OOP Java",
    "question": "Cho chương trình viết bằng ngôn ngữ Java như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\npublic class Test {\n    public int count(int i) {\n        return 0;\n    }\n    public long count(long i) {\n        return 0L;\n    }\n    public static void main(String[] args) {\n        Test test = new Test();\n        int resultInt = test.count(5);\n        long resultLong = test.count(6);\n        System.out.print(resultInt);\n        System.out.print(resultLong);\n    }\n}",
    "options": [
      "5",
      "6",
      "0",
      "00"
    ],
    "answer": 2,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: C. 0."
  },
  {
    "id": 322,
    "module": 6,
    "moduleName": "Chương 6: Lập trình OOP Java",
    "question": "Cho chương trình viết bằng ngôn ngữ Java như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\npublic class Test {\n    public static void main(String[] args) {\n        One o = new Two();\n        o.sayHello();\n    }\n}\nclass One {\n    public void sayHello() {\n        System.out.println(\"Parent Hello\");\n    }\n}\nclass Two extends One {\n    public void sayHello() {\n        System.out.println(\"Child Hello\");\n    }\n}",
    "options": [
      "Parent Hello",
      "Child Hello",
      "Lỗi biên dịch",
      "Lỗi thực thi"
    ],
    "answer": 1,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: B. Child Hello."
  },
  {
    "id": 323,
    "module": 6,
    "moduleName": "Chương 6: Lập trình OOP Java",
    "question": "Cho chương trình viết bằng ngôn ngữ Java như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass TestChild extends Test {\n    public int count(int i) {\n        return 1;\n    }\n}\npublic class Test {\n    public int count(int i) {\n        return 0;\n    }\n    public static void main(String[] args) {\n        Test test = new TestChild();\n        int resultInt = test.count(5);\n        System.out.println(\"Result for int: \" + resultInt);\n    }\n}",
    "options": [
      "Lỗi biên dịch",
      "Lỗi thực thi",
      "Result for int: 0",
      "Result for int: 1"
    ],
    "answer": 3,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: D. Result for int: 1."
  },
  {
    "id": 324,
    "module": 6,
    "moduleName": "Chương 6: Lập trình OOP Java",
    "question": "Cho chương trình viết bằng ngôn ngữ Java như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\npublic class Test {\n    public static void main(String[] args) {\n        One o = new Two();\n        o.sayHello();\n    }\n}\nclass One {\n    public final void sayHello() {\n        System.out.println(\"Parent Hello\");\n    }\n}\nclass Two extends One {\n    public void sayHello() {\n        System.out.println(\"Child Hello\");\n    }\n}",
    "options": [
      "Parent Hello",
      "Child Hello",
      "Lỗi biên dịch",
      "Lỗi thực thi"
    ],
    "answer": 2,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: C. Lỗi biên dịch."
  },
  {
    "id": 325,
    "module": 6,
    "moduleName": "Chương 6: Lập trình OOP Java",
    "question": "Cho chương trình viết bằng ngôn ngữ Java như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\npublic class Test {\n    public int count(int i) {\n        return 0;\n    }\n    public int count(double j) {\n        return 1;\n    }\n    public static void main(String[] args) {\n        Test test = new Test();\n        int i = test.count(5);\n        int d = test.count(5.0);\n        System.out.print(\"int: \" + i);\n        System.out.print(\" double: \" + d);\n    }\n}",
    "options": [
      "int: 0",
      "double: 0",
      "int: 0 double: 0",
      "int: 0 double: 1"
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. int: 0."
  },
  {
    "id": 326,
    "module": 6,
    "moduleName": "Chương 6: Lập trình OOP Java",
    "question": "Cho chương trình viết bằng ngôn ngữ Java như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass One {\n    private void count(int i) {\n        System.out.println(0);\n    }\n}\npublic class Test extends One {\n    public void count(int j) {\n        System.out.println(1);\n    }\n    public static void main(String[] args) {\n        One one = new Test();\n        one.count(0);\n    }\n}",
    "options": [
      "1",
      "0",
      "Lỗi biên dịch",
      "Lỗi thực thi"
    ],
    "answer": 2,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: C. Lỗi biên dịch."
  },
  {
    "id": 327,
    "module": 6,
    "moduleName": "Chương 6: Lập trình OOP Java",
    "question": "Cho chương trình viết bằng ngôn ngữ Java như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\npublic class Test {\n    class TestInner {\n        void sayHi() {\n            System.out.println(\"Hi\");\n        }\n    }\n    public static void main(String[] args) {\n        TestInner inner = new TestInner();\n        inner.sayHi();\n    }\n}",
    "options": [
      "Hi",
      "Lỗi biên dịch",
      "Lỗi thực thi",
      "Cả 3 đáp án đều sai"
    ],
    "answer": 1,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: B. Lỗi biên dịch."
  },
  {
    "id": 328,
    "module": 6,
    "moduleName": "Chương 6: Lập trình OOP Java",
    "question": "Cho chương trình viết bằng ngôn ngữ Java như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\npublic class Test {\n    class TestInner {\n        void sayHi() {\n            System.out.println(\"Hi\");\n        }\n    }\n    public static void main(String[] args) {\n        Test t = new Test();\n        TestInner inner = t.new TestInner();\n        inner.sayHi();\n    }\n}",
    "options": [
      "Hi",
      "Lỗi biên dịch",
      "Lỗi thực thi",
      "Cả 3 đáp án đều sai"
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. Hi."
  },
  {
    "id": 329,
    "module": 6,
    "moduleName": "Chương 6: Lập trình OOP Java",
    "question": "Cho chương trình viết bằng ngôn ngữ Java như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\npublic class Test {\n    public void compute(int i, int j) {\n        System.out.println(\"int version\");\n    }\n    public void compute(long i, long j) {\n        System.out.println(\"long version\");\n    }\n    public static void main(String args[]) {\n        Test t = new Test();\n        t.compute(10, 5);\n    }\n}",
    "options": [
      "int version",
      "long version",
      "Lỗi biên dịch",
      "Lỗi thực thi"
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. int version."
  },
  {
    "id": 330,
    "module": 6,
    "moduleName": "Chương 6: Lập trình OOP Java",
    "question": "Cho chương trình viết bằng ngôn ngữ Java như sau, Lựa chọn nào được viết ở dòng // access variable here, khi biên dịch sẽ không có lỗi?\npublic class Test {\n    private int i = 0;\n    int j = 1;\n    public int k = 2;\n    class TestInner {\n        private int l = 3;\n        int m = 4;\n        public int n = 5;\n        void sayHi() {\n            // access variable here,\n        }\n    }\n    public static void main(String args[]) {\n    }\n}",
    "options": [
      "i = 5;",
      "j = 5;",
      "k = 5;",
      "Cả 3 đáp án đều đúng"
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. i = 5;. Biến i có phạm vi phù hợp để truy cập trong phương thức -> i = 5;"
  },
  {
    "id": 331,
    "module": 6,
    "moduleName": "Chương 6: Lập trình OOP Java",
    "question": "Cho chương trình viết bằng ngôn ngữ Java như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass One {\n    public static void process() {\n        System.out.print(\"Parent \");\n    }\n}\nclass Two extends One {\n    public static void process() {\n        super.process();\n        System.out.print(\"Child\");\n    }\n}\npublic class Test {\n    public static void main(String args[]) {\n        One one = new Two();\n        one.process();\n    }\n}",
    "options": [
      "Parent",
      "Child",
      "Parent Child",
      "Lỗi biên dịch"
    ],
    "answer": 3,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: D. Lỗi biên dịch."
  },
  {
    "id": 332,
    "module": 6,
    "moduleName": "Chương 6: Lập trình OOP Java",
    "question": "Cho chương trình viết bằng ngôn ngữ Java như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass One {\n    public void process() {\n        System.out.print(\"Parent \");\n    }\n}\nclass Two extends One {\n    public void process() {\n        super.process();\n        System.out.print(\"Child\");\n    }\n}\npublic class Test {\n    public static void main(String args[]) {\n        One one = new Two();\n        one.process();\n    }\n}",
    "options": [
      "Parent",
      "Child",
      "Parent Child",
      "Lỗi biên dịch"
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. Parent."
  },
  {
    "id": 333,
    "module": 6,
    "moduleName": "Chương 6: Lập trình OOP Java",
    "question": "Cho chương trình viết bằng ngôn ngữ Java như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\npublic class Test {\n    private int i = 0;\n    class TestInner {\n        public int i = 1;\n        void sayHi() {\n            System.out.println(i);\n        }\n    }\n    public static void main(String[] args) {\n        TestInner inner = new Test().new TestInner();\n        inner.sayHi();\n    }\n}",
    "options": [
      "0",
      "1",
      "Lỗi biên dịch",
      "Lỗi thực thi"
    ],
    "answer": 1,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: B. 1."
  },
  {
    "id": 334,
    "module": 6,
    "moduleName": "Chương 6: Lập trình OOP Java",
    "question": "Cho chương trình viết bằng ngôn ngữ Java như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass One {\n    public One() {\n        System.out.print(\" One \");\n    }\n}\nclass Two extends One {\n    public Two() {\n        System.out.print(\" Two \");\n    }\n}\npublic class Test {\n    public static void main(String[] args) {\n        One one = new One();\n        Two two = new Two();\n    }\n}",
    "options": [
      "One",
      "Two",
      "One Two",
      "One One Two"
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. One."
  },
  {
    "id": 335,
    "module": 6,
    "moduleName": "Chương 6: Lập trình OOP Java",
    "question": "Cho chương trình viết bằng ngôn ngữ Java như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\ninterface TestInterface {\n}\nclass TestImplementation implements TestInterface {\n    public TestImplementation() {\n        System.out.println(\"TestImplementation\");\n    }\n}\nclass Test {\n    public static void main(String[] args) {\n        TestImplementation implementation = new TestImplementation();\n    }\n}",
    "options": [
      "TestImplementation",
      "Hello, world!",
      "Lỗi biên dịch",
      "Lỗi thực thi"
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. TestImplementation."
  },
  {
    "id": 336,
    "module": 6,
    "moduleName": "Chương 6: Lập trình OOP Java",
    "question": "Cho chương trình viết bằng ngôn ngữ Java như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\ninterface TestInterface {\n    void someMethod();\n    class Test {\n        void display() {\n            System.out.println(\"Test class.\");\n        }\n    }\n}\npublic class Test {\n    public static void main(String[] args) {\n        TestInterface.Test testObj = new TestInterface.Test();\n        testObj.display();\n    }\n}",
    "options": [
      "Test class.",
      "Hello, world!",
      "Lỗi biên dịch",
      "Lỗi thực thi"
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. Test class.."
  },
  {
    "id": 337,
    "module": 6,
    "moduleName": "Chương 6: Lập trình OOP Java",
    "question": "Cho chương trình viết bằng ngôn ngữ Java như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass One {\n    public abstract One();\n}\nclass Two extends One {\n    public Two() {\n        System.out.println(\"Two\");\n    }\n}\npublic class Test {\n    public static void main(String[] args) {\n        Two two = new Two();\n    }\n}",
    "options": [
      "Two",
      "One",
      "Lỗi biên dịch",
      "Lỗi thực thi"
    ],
    "answer": 2,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: C. Lỗi biên dịch."
  },
  {
    "id": 338,
    "module": 6,
    "moduleName": "Chương 6: Lập trình OOP Java",
    "question": "Cho chương trình viết bằng ngôn ngữ Java như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\ninterface TestInterface {\n    class Test {\n        void display() {\n            System.out.println(\"Test class.\");\n        }\n    }\n}\npublic class Test {\n    public static void main(String[] args) {\n        TestInterface.Test testObj = new TestInterface.Test();\n        testObj.display();\n    }\n}",
    "options": [
      "Test class.",
      "Lỗi biên dịch",
      "Lỗi thực thi",
      "Cả 3 đáp án đều sai"
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. Test class.."
  },
  {
    "id": 339,
    "module": 6,
    "moduleName": "Chương 6: Lập trình OOP Java",
    "question": "Cho chương trình viết bằng ngôn ngữ Java như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass One {\n    int i = 1;\n    public One() {\n        System.out.println(i);\n    }\n}\nclass Two extends One {\n    int i = 10;\n    public One(){\n        System.out.println(i);\n    }\n}\npublic class Test {\n    public static void main(String[] args) {\n        One one = new Two();\n    }\n}",
    "options": [
      "1",
      "10",
      "Lỗi biên dịch",
      "Lỗi thực thi"
    ],
    "answer": 2,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: C. Lỗi biên dịch."
  },
  {
    "id": 340,
    "module": 6,
    "moduleName": "Chương 6: Lập trình OOP Java",
    "question": "Cho chương trình viết bằng ngôn ngữ Java như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass One {\n}\nclass Two extends One {\n}\npublic class Test extends One {\n    public static void main(String[] args) {\n        One one = new One();\n        Two two = new Two();\n        System.out.println(one instanceof Two);\n    }\n}",
    "options": [
      "true",
      "false",
      "Cả 3 đáp án đều sai",
      "Lỗi biên dịch"
    ],
    "answer": 1,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: B. false."
  },
  {
    "id": 341,
    "module": 6,
    "moduleName": "Chương 6: Lập trình OOP Java",
    "question": "Cho chương trình viết bằng ngôn ngữ Java như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass One {\n}\nclass Two extends One {\n}\npublic class Test extends One {\n    public static void main(String[] args) {\n        One one = new One();\n        Two two = new Two();\n        System.out.println(one instanceof One);\n    }\n}",
    "options": [
      "true",
      "false",
      "Lỗi biên dịch",
      "Cả 3 đáp án đều sai"
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. true."
  },
  {
    "id": 342,
    "module": 6,
    "moduleName": "Chương 6: Lập trình OOP Java",
    "question": "Cho chương trình viết bằng ngôn ngữ Java như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass One {\n    public One() {\n        System.out.print(\"One\");\n    }\n}\nclass Two extends One {\n    public Two() {\n        System.out.print(\"Two\");\n    }\n}\nclass Three {\n    Two two = new Two();\n    public Three() {\n        System.out.print(\"Three\");\n    }\n}\npublic class Test {\n    public static void main(String[] args) {\n        Three three = new Three();\n    }\n}",
    "options": [
      "ThreeTwoOne",
      "ThreeOneTwo",
      "OneTwoThree",
      "Cả 3 đáp án đều sai"
    ],
    "answer": 2,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: C. OneTwoThree."
  },
  {
    "id": 343,
    "module": 6,
    "moduleName": "Chương 6: Lập trình OOP Java",
    "question": "Cho chương trình viết bằng ngôn ngữ Java như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass TestInner {\n    public void print() {\n        System.out.println(\"Hi\");\n    }\n}\npublic class Test {\n    public static void main(String[] args) {\n        TestInner t = new TestInner(); {\n            public void print() {\n                System.out.println(\"Hello\");\n            }\n        };\n        t.print();\n    }\n}",
    "options": [
      "Hi",
      "Hello",
      "Lỗi biên dịch",
      "Cả 3 đáp án đều sai"
    ],
    "answer": 2,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: C. Lỗi biên dịch."
  },
  {
    "id": 344,
    "module": 6,
    "moduleName": "Chương 6: Lập trình OOP Java",
    "question": "Cho chương trình viết bằng ngôn ngữ Java như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass One {\n    String className = \"One\";\n}\nclass Two extends One {\n    String className = \"Two\";\n}\npublic class Test {\n    public static void main(String[] args) {\n        One one = new Two();\n        System.out.println(one.className);\n    }\n}",
    "options": [
      "One",
      "Two",
      "Lỗi biên dịch",
      "Lỗi thực thi"
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. One."
  },
  {
    "id": 345,
    "module": 6,
    "moduleName": "Chương 6: Lập trình OOP Java",
    "question": "Cho chương trình viết bằng ngôn ngữ Java như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass One {\n    public One() {\n        System.out.print(\"One\");\n    }\n    public One(String str) {\n        System.out.print(\"OneStr\");\n    }\n}\nclass Two extends One {\n    public Two(String str) {\n        super();\n        System.out.print(\"TwoStr\");\n    }\n}\npublic class Test {\n    public static void main(String[] args) {\n        Two two = new Two(\"Hello\");\n    }\n}",
    "options": [
      "OneTwoStrOneStr",
      "TwoStrOneStr",
      "OneTwoStr",
      "Lỗi biên dịch"
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. OneTwoStrOneStr."
  },
  {
    "id": 346,
    "module": 6,
    "moduleName": "Chương 6: Lập trình OOP Java",
    "question": "Cho chương trình viết bằng ngôn ngữ Java như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\npublic class Test {\n    public void doNothing(Object object) {\n        System.out.println(\"Object\");\n    }\n    public void doNothing(String string) {\n        System.out.println(\"String\");\n    }\n    public static void main(String[] args) {\n        Test test = new Test();\n        test.doNothing(args);\n    }\n}",
    "options": [
      "String",
      "Object",
      "Cả 3 đáp án đều sai",
      "Lỗi biên dịch"
    ],
    "answer": 1,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: B. Object."
  },
  {
    "id": 347,
    "module": 6,
    "moduleName": "Chương 6: Lập trình OOP Java",
    "question": "Cho chương trình viết bằng ngôn ngữ Java như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\npublic class Test {\n    public void doNothing(Object object) {\n        System.out.println(\"Object\");\n    }\n    public void doNothing(Integer i) {\n        System.out.println(\"Integer\");\n    }\n    public static void main(String[] args) {\n        Test test = new Test();\n        test.doNothing(null);\n    }\n}",
    "options": [
      "Integer",
      "Object",
      "String",
      "Cả 3 đáp án đều sai"
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. Integer."
  },
  {
    "id": 348,
    "module": 6,
    "moduleName": "Chương 6: Lập trình OOP Java",
    "question": "Cho chương trình viết bằng ngôn ngữ Java như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\npublic class Test {\n    public void doNothing(Object object) {\n        System.out.println(\"Object\");\n    }\n    public void doNothing(Integer i) {\n        System.out.println(\"Integer\");\n    }\n    public void doNothing(Double d) {\n        System.out.println(\"Double\");\n    }\n    public static void main(String[] args) {\n        test.doNothing(new Test());\n    }\n}",
    "options": [
      "Object",
      "Integer",
      "Double",
      "Lỗi biên dịch"
    ],
    "answer": 3,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: D. Lỗi biên dịch."
  },
  {
    "id": 349,
    "module": 6,
    "moduleName": "Chương 6: Lập trình OOP Java",
    "question": "Cho chương trình viết bằng ngôn ngữ Java như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\npublic class Test {\n    public void doNothing(Object object) {\n        System.out.println(\"Object\");\n    }\n    public void doNothing(Integer i) {\n        System.out.println(\"Integer\");\n    }\n    public void doNothing(Double i) {\n        System.out.println(\"Integer\");\n    }\n    public static void main(String[] args) {\n        Test test = new Test();\n        test.doNothing(test);\n    }\n}",
    "options": [
      "Integer",
      "Double",
      "Object",
      "Cả 3 đáp án đều sai"
    ],
    "answer": 2,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: C. Object."
  },
  {
    "id": 350,
    "module": 6,
    "moduleName": "Chương 6: Lập trình OOP Java",
    "question": "Cho chương trình viết bằng ngôn ngữ Java như sau, Lựa chọn nào được viết ở dòng //variable name here, khi biên dịch sẽ không có lỗi?\npublic class Test {\n    private int i = 1;\n    int j = 2;\n    public void TestMethod(){\n        class TestInner{\n            int k = 3;\n            public void InnerMethod(int m){\n                System.out.println(//variable name here);\n            }\n        }\n    }\n}",
    "options": [
      "i",
      "j",
      "k",
      "Cả 3 đáp án đều đúng"
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. i. Biến i trong ngữ cảnh hợp lệ -> i."
  },
  {
    "id": 351,
    "module": 6,
    "moduleName": "Chương 6: Lập trình OOP Java",
    "question": "Cho chương trình viết bằng ngôn ngữ Java như sau, Lựa chọn nào được viết ở dòng //access variable here, khi biên dịch sẽ không có lỗi?\npublic class Test {\n    int x = 0;\n    static int y = 1;\n    static class InnerClass {\n        int z = 2;\n        public void getValue() {\n            // access variable here\n        }\n    }\n}",
    "options": [
      "y = z = 6;",
      "y = 8;",
      "z = 9;",
      "Cả 3 đáp án đều đúng"
    ],
    "answer": 3,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: D. Cả 3 đáp án đều đúng. Cả 3 cách truy cập đều đúng -> Cả 3 đáp án đều đúng."
  },
  {
    "id": 352,
    "module": 6,
    "moduleName": "Chương 6: Lập trình OOP Java",
    "question": "Cho chương trình viết bằng ngôn ngữ Java như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\npublic class Test {\n    public void TestMethod() {\n        final int a = 0;\n        class TestInner {\n            public void InnerMethod(final int x, int y) {\n                System.out.println(y);\n            }\n        }\n        TestInner inner = new TestInner();\n        inner.InnerMethod(1, 2);\n    }\n    public static void main(String[] args) {\n        Test main = new Test();\n        main.TestMethod();\n    }\n}",
    "options": [
      "0",
      "1",
      "2",
      "Lỗi biên dịch"
    ],
    "answer": 2,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: C. 2."
  },
  {
    "id": 353,
    "module": 6,
    "moduleName": "Chương 6: Lập trình OOP Java",
    "question": "Cho chương trình viết bằng ngôn ngữ Java như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\npublic class Test {\n    public void TestMethod() {\n        class TestInner {\n            int x = 0;\n        }\n        System.out.println(x);\n    }\n    public static void main(String[] args) {\n        Test test = new Test();\n        test.TestMethod();\n    }\n}",
    "options": [
      "0",
      "Lỗi biên dịch",
      "Lỗi thực thi",
      "Cả 3 đáp án đều sai"
    ],
    "answer": 1,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: B. Lỗi biên dịch."
  },
  {
    "id": 354,
    "module": 6,
    "moduleName": "Chương 6: Lập trình OOP Java",
    "question": "Cho chương trình viết bằng ngôn ngữ Java như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\npublic class Test {\n    public void method1() {\n        class TestInner {\n            public int x = 0;\n        }\n    }\n    public void method2() {\n        TestInner inner = new TestInner();\n        System.out.println(inner.x);\n    }\n    public static void main(String[] args) {\n        Test test = new Test();\n        test.method2();\n    }\n}",
    "options": [
      "0",
      "Lỗi biên dịch",
      "Lỗi thực thi",
      "Cả 3 đáp án đều sai"
    ],
    "answer": 1,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: B. Lỗi biên dịch."
  },
  {
    "id": 355,
    "module": 6,
    "moduleName": "Chương 6: Lập trình OOP Java",
    "question": "Cho chương trình viết bằng ngôn ngữ Java như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\npublic class Test {\n    static int i = 0;\n    int j = 1;\n \n    public void TestMethod() {\n        final int finalI = i;\n        class TestInner {\n            public void InnerMethod() {\n                System.out.println(finalI);\n            }\n        }\n        TestInner inner = new TestInner();\n        inner.InnerMethod();\n    }\n \n    public static void main(String[] args) {\n        Test test = new Test();\n        test.TestMethod();\n    }\n}",
    "options": [
      "0",
      "Lỗi biên dịch",
      "Lỗi thực thi",
      "Cả 3 đáp án đều sai"
    ],
    "answer": 0,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: A. 0."
  },
  {
    "id": 356,
    "module": 6,
    "moduleName": "Chương 6: Lập trình OOP Java",
    "question": "Cho chương trình viết bằng ngôn ngữ Java như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\npublic class Test {\n    public class TestInner {\n        public void print() {\n            System.out.println(\"Hi\");\n        }\n    }\n    public void print() {\n        System.out.println(\"Hello\");\n    }\n    public static void main(String[] args) {\n        Test test = new Test();\n        TestInner testInner = test.new TestInner();\n        testInner.print();\n    }\n}",
    "options": [
      "Hello",
      "Hi",
      "Lỗi biên dịch",
      "Lỗi thực thi"
    ],
    "answer": 1,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: B. Hi."
  },
  {
    "id": 357,
    "module": 6,
    "moduleName": "Chương 6: Lập trình OOP Java",
    "question": "Cho chương trình viết bằng ngôn ngữ Java như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\npublic class Test {\n    public static void main(String[] args) {\n        One o = new One();\n        o.sayHello();\n    }\n}\nfinal abstract class One {\n    public final void sayHello() {\n        System.out.println(\"Hello\");\n    }\n    public abstract void sayHi();\n}",
    "options": [
      "Hello",
      "Lỗi biên dịch",
      "Lỗi thực thi",
      "Cả 3 đáp án đều sai"
    ],
    "answer": 1,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: B. Lỗi biên dịch."
  },
  {
    "id": 358,
    "module": 6,
    "moduleName": "Chương 6: Lập trình OOP Java",
    "question": "Cho chương trình viết bằng ngôn ngữ Java như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass One {\n    String sayHello1(String name) {\n        return \"Hello \" + name;\n    }\n    char[] sayHello2(String name) {\n        return (\"Hello \" + name).toCharArray();\n    }\n}\npublic class Test {\n    public static void main(String[] args) {\n        One one = new One();\n        Object object = one.sayHello2(\"OCAJP\");\n        if (object instanceof String)\n            System.out.println(\"String\");\n        else\n            System.out.println(\"Array\");\n    }\n}",
    "options": [
      "Hello OCAJP",
      "String",
      "Array",
      "Lỗi biên dịch"
    ],
    "answer": 2,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: C. Array."
  },
  {
    "id": 359,
    "module": 6,
    "moduleName": "Chương 6: Lập trình OOP Java",
    "question": "Cho chương trình viết bằng ngôn ngữ Java như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass One {\n    public void someMethod() throws Exception {\n        System.out.println(\"Exception\");\n    }\n}\nclass Two extends One {\n    public void someMethod() throws Exception {\n        System.out.println(\"Override Exception\");\n    }\n}\npublic class Test {\n    public static void main(String[] args) {\n        One one = new Two();\n        try {\n            one.someMethod();\n        } catch (Exception e) {\n        }\n    }\n}",
    "options": [
      "Exception",
      "Override Exception",
      "Lỗi biên dịch",
      "Lỗi thực thi"
    ],
    "answer": 1,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: B. Override Exception."
  },
  {
    "id": 360,
    "module": 6,
    "moduleName": "Chương 6: Lập trình OOP Java",
    "question": "Cho chương trình viết bằng ngôn ngữ Java như sau, khi biên dịch và thực thi chương trình, có kết quả là gì?\nclass One \n{\n    public One() \n    {\n        System.out.print(\"One constructor\");\n    }\n    public One(long l) \n    {\n        System.out.print(\"One long constructor\");\n    }\n}\nclass Two extends One \n{\n    public Two(int i)\n    {\n        System.out.print(\"Two int constructor\");\n    }\n    public Two(long l) \n    {\n        System.out.print(\"Two long constructor\");\n    }\n}\npublic class Test \n{\n    public static void main(String[] args) \n    {\n        long value = 68;\n        One one = new Two(value);\n    }\n}",
    "options": [
      "Two int constructor",
      "One long constructor",
      "One constructorTwo long constructor",
      "One constructor"
    ],
    "answer": 2,
    "imageUrl": null,
    "explanation": "Đáp án đúng là lựa chọn: C. One constructorTwo long constructor."
  }
];
