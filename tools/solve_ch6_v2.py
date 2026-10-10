# -*- coding: utf-8 -*-
import json
import subprocess
import os
import re

with open("raw_oop_extracted.json", "r", encoding="utf-8") as f:
    data = json.load(f)

q_list = data["6"]["questions"]
print(f"Total questions in Ch6: {len(q_list)}")

os.makedirs("test_java_ch6", exist_ok=True)
results = []

for idx, q in enumerate(q_list):
    text = q["question"]
    opts = q["options"]
    
    # Clean previous class files
    for fname in os.listdir("test_java_ch6"):
        if fname.endswith(".class") or fname.endswith(".java"):
            try:
                os.remove(os.path.join("test_java_ch6", fname))
            except:
                pass
                
    code_match = re.search(r'((class|interface|abstract\s+class)\s+.*)', text, re.DOTALL)
    if not code_match:
        results.append({"q_num": idx+1, "matched": None, "type": "THEORY", "text": text, "opts": opts})
        continue
        
    raw_code = code_match.group(1).strip()
    
    # Fix public class issue: replace "public class" with "class"
    # except we make one class Test or Main containing main method
    clean_code = re.sub(r'\bpublic\s+class\b', 'class', raw_code)
    # Check if there is a class containing main
    main_match = re.search(r'class\s+([A-Za-z0-9_]+)[^{]*\{[^}]*public\s+static\s+void\s+main', clean_code, re.DOTALL)
    if main_match:
        main_class = main_match.group(1)
    else:
        main_class = "Test"
        
    with open(f"test_java_ch6/{main_class}.java", "w", encoding="utf-8") as f:
        f.write(clean_code)
        
    res_c = subprocess.run(
        ['C:\\Program Files\\Java\\jdk1.8.0_281\\bin\\javac.exe', f'test_java_ch6/{main_class}.java'],
        capture_output=True, text=True, timeout=10
    )
    
    if res_c.returncode != 0:
        stdout = "COMPILE_ERROR"
    else:
        try:
            res_r = subprocess.run(
                ['C:\\Program Files\\Java\\jdk1.8.0_281\\bin\\java.exe', '-cp', 'test_java_ch6', main_class],
                capture_output=True, text=True, timeout=5
            )
            if res_r.returncode != 0:
                stdout = "RUNTIME_ERROR"
            else:
                stdout = res_r.stdout.strip()
        except subprocess.TimeoutExpired:
            stdout = "RUNTIME_TIMEOUT"
            
    matched_opt = None
    for opt_i, opt in enumerate(opts):
        clean_opt = opt.strip()
        if stdout == "COMPILE_ERROR" and ("lỗi biên dịch" in clean_opt.lower() or "compile" in clean_opt.lower()):
            matched_opt = opt_i
            break
        elif stdout == "RUNTIME_ERROR" and ("lỗi thực thi" in clean_opt.lower() or "exception" in clean_opt.lower() or "runtime" in clean_opt.lower()):
            matched_opt = opt_i
            break
        elif stdout and (stdout == clean_opt or clean_opt.startswith(stdout) or stdout.startswith(clean_opt)):
            matched_opt = opt_i
            break
            
    print(f"Ch6 Q{idx+1}: Output='{stdout[:40]}' -> Matched: {matched_opt}")
    results.append({
        "q_num": idx+1,
        "matched": matched_opt,
        "stdout": stdout,
        "opts": opts,
        "text": text
    })

with open("ch6_run_results_v2.json", "w", encoding="utf-8") as f:
    json.dump(results, f, ensure_ascii=False, indent=2)

print("Saved ch6_run_results_v2.json!")
