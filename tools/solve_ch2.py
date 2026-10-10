# -*- coding: utf-8 -*-
import json
import subprocess
import os
import re

with open("raw_oop_extracted.json", "r", encoding="utf-8") as f:
    data = json.load(f)

q_list = data["2"]["questions"]
print(f"Total questions in Ch2: {len(q_list)}")

os.makedirs("test_cpp_ch2", exist_ok=True)
bat_path = os.path.abspath("run_cpp_ch2.bat")
with open(bat_path, "w") as f:
    f.write(r'@echo off' + '\n')
    f.write(r'call "C:\Program Files\Microsoft Visual Studio\2022\Enterprise\VC\Auxiliary\Build\vcvars64.bat" >nul' + '\n')
    f.write(r'cd /d "%~dp0test_cpp_ch2"' + '\n')
    f.write(r'if exist test.exe del test.exe' + '\n')
    f.write(r'cl /EHsc /nologo test.cpp > compile.log 2>&1' + '\n')
    f.write(r'if %ERRORLEVEL% equ 0 (' + '\n')
    f.write(r'  test.exe' + '\n')
    f.write(r') else (' + '\n')
    f.write(r'  echo COMPILE_ERROR' + '\n')
    f.write(r')' + '\n')

results = []

for idx, q in enumerate(q_list):
    text = q["question"]
    opts = q["options"]
    
    # Try to extract code
    code_match = re.search(r'(class\s+.*|#include.*|void\s+main.*|int\s+main.*)', text, re.DOTALL)
    if not code_match:
        # Check if theory
        print(f"Q{idx+1}: Theory question")
        results.append({"q_num": idx+1, "matched": None, "type": "THEORY", "text": text, "opts": opts})
        continue
    
    raw_code = code_match.group(0).strip()
    # Clean comments like =>
    raw_code = re.sub(r'=>.*', '', raw_code)
    
    headers = "#include <iostream>\n#include <string>\n#include <cmath>\nusing namespace std;\n"
    # Replace void main() with int main()
    full_code = headers + raw_code.replace("void main()", "int main()")
    
    with open("test_cpp_ch2/test.cpp", "w", encoding="utf-8") as f:
        f.write(full_code)
        
    try:
        res = subprocess.run([bat_path], capture_output=True, text=True, timeout=5)
        stdout = res.stdout.strip()
    except subprocess.TimeoutExpired:
        stdout = "RUNTIME_TIMEOUT"
        
    matched_opt = None
    for opt_i, opt in enumerate(opts):
        clean_opt = opt.strip()
        if stdout == "COMPILE_ERROR":
            if "lỗi biên dịch" in clean_opt.lower() or "compile error" in clean_opt.lower():
                matched_opt = opt_i
                break
        elif stdout and (stdout == clean_opt or clean_opt.startswith(stdout) or stdout.startswith(clean_opt)):
            matched_opt = opt_i
            break
            
    print(f"Ch2 Q{idx+1}: Output='{stdout[:40]}' -> Matched: {matched_opt}")
    results.append({
        "q_num": idx+1,
        "matched": matched_opt,
        "stdout": stdout,
        "opts": opts,
        "text": text
    })

with open("ch2_run_results.json", "w", encoding="utf-8") as f:
    json.dump(results, f, ensure_ascii=False, indent=2)

print("Saved ch2_run_results.json!")
