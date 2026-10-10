# -*- coding: utf-8 -*-
import json
import subprocess
import os
import re

with open("raw_oop_extracted.json", "r", encoding="utf-8") as f:
    data = json.load(f)

q1 = data["6"]["questions"][0]
print("Question text:\n", q1["question"])
print("Options:", q1["options"])

# The code in question 1:
# class One {
#     int i = 1;
#     public int getInt() {
#         return i;
#     }
# }
# class Two extends One {
#     int i = 2;
#     public int getInt() {
#         return i;
#     }
# }
# public class Test {
#     public static void main(String[] args) {
#         One one = new One();
#         Two two = (Two) one;
#         System.out.println(two.getInt());
#     }
# }

# Let's extract code part from question
code_match = re.search(r'(class\s+.*)', q1["question"], re.DOTALL)
if code_match:
    code = code_match.group(1).strip()
    os.makedirs("test_java", exist_ok=True)
    with open("test_java/Test.java", "w", encoding="utf-8") as f:
        f.write(code)
    
    # Compile
    res_compile = subprocess.run(
        ['C:\\Program Files\\Java\\jdk1.8.0_281\\bin\\javac.exe', 'test_java/Test.java'],
        capture_output=True, text=True
    )
    print("Compile returncode:", res_compile.returncode)
    print("Compile stderr:", res_compile.stderr)
    if res_compile.returncode == 0:
        # Run
        res_run = subprocess.run(
            ['C:\\Program Files\\Java\\jdk1.8.0_281\\bin\\java.exe', '-cp', 'test_java', 'Test'],
            capture_output=True, text=True
        )
        print("Run returncode:", res_run.returncode)
        print("Run stdout:", res_run.stdout)
        print("Run stderr:", res_run.stderr)
