# -*- coding: utf-8 -*-
import json
import subprocess
import os
import re

with open("raw_oop_extracted.json", "r", encoding="utf-8") as f:
    data = json.load(f)

q1 = data["4"]["questions"][0]
print("Question text:\n", q1["question"])
print("Options:", q1["options"])

# Extract code
code_match = re.search(r'(class\s+.*|#include.*)', q1["question"], re.DOTALL)
if code_match:
    raw_code = code_match.group(0).strip()
    # Add necessary includes if missing
    headers = "#include <iostream>\n#include <string>\nusing namespace std;\n"
    # If void main() -> int main()
    full_code = headers + raw_code.replace("void main()", "int main()")
    os.makedirs("test_cpp", exist_ok=True)
    with open("test_cpp/test.cpp", "w", encoding="utf-8") as f:
        f.write(full_code)
    
    cmd = r'call "C:\Program Files\Microsoft Visual Studio\2022\Enterprise\VC\Auxiliary\Build\vcvars64.bat" >nul && cd test_cpp && cl /EHsc /nologo test.cpp > compile.log 2>&1 && test.exe'
    with open("run_cpp.bat", "w") as f:
        f.write(cmd)
    
    res = subprocess.run(["cmd.exe", "/c", "run_cpp.bat"], capture_output=True, text=True)
    print("Returncode:", res.returncode)
    print("Stdout:", res.stdout)
    if os.path.exists("test_cpp/compile.log"):
        with open("test_cpp/compile.log") as f:
            print("Compile log:\n", f.read())
