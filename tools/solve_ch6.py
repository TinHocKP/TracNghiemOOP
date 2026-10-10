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
                
    # Extract code
    code_match = re.search(r'((class|interface|abstract\s+class)\s+.*)', text, re.DOTALL)
    if not code_match:
        results.append((idx+1, None, "NO_CODE"))
        continue
        
    raw_code = code_match.group(1).strip()
    # Check if there is "// your code here"
    # Some questions might ask which line to insert
    with open("test_java_ch6/Main.java", "w", encoding="utf-8") as f:
        f.write(raw_code)
        
    # Compile
    res_c = subprocess.run(
        ['C:\\Program Files\\Java\\jdk1.8.0_281\\bin\\javac.exe', 'test_java_ch6/Main.java'],
        capture_output=True, text=True, timeout=10
    )
    
    if res_c.returncode != 0:
        stdout = "COMPILE_ERROR"
        err_msg = res_c.stderr
    else:
        # Find class with main
        main_class = "Main"
        # check class names in code
        classes = re.findall(r'class\s+([A-Za-z0-9_]+)', raw_code)
        for c in classes:
            if "public static void main" in raw_code:
                # check which class contains main
                c_block = re.search(r'class\s+' + c + r'\s*\{([^}]*public\s+static\s+void\s+main[^}]*)\}', raw_code, re.DOTALL)
                if c_block or c == "Test" or c == "Main":
                    main_class = c
                    break
        try:
            res_r = subprocess.run(
                ['C:\\Program Files\\Java\\jdk1.8.0_281\\bin\\java.exe', '-cp', 'test_java_ch6', main_class],
                capture_output=True, text=True, timeout=5
            )
            if res_r.returncode != 0:
                stdout = "RUNTIME_ERROR"
            else:
                stdout = res_r.stdout.strip()
        except:
            stdout = "RUNTIME_TIMEOUT"
            
    # Match with options
    matched = None
    for o_i, opt in enumerate(opts):
        clean_o = opt.strip()
        if stdout == "COMPILE_ERROR" and ("lỗi biên dịch" in clean_o.lower() or "compile" in clean_o.lower()):
            matched = o_i
            break
        elif stdout == "RUNTIME_ERROR" and ("lỗi thực thi" in clean_o.lower() or "exception" in clean_o.lower() or "runtime" in clean_o.lower()):
            matched = o_i
            break
        elif stdout and (stdout == clean_o or clean_o.startswith(stdout) or stdout.startswith(clean_o)):
            matched = o_i
            break
            
    print(f"Ch6 Q{idx+1}: Stdout='{stdout[:40]}' -> Matched: {matched}")
    results.append((idx+1, matched, stdout, opts))

with open("ch6_run_results.json", "w", encoding="utf-8") as f:
    json.dump(results, f, ensure_ascii=False, indent=2)
