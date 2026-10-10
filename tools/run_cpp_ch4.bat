@echo off
call "C:\Program Files\Microsoft Visual Studio\2022\Enterprise\VC\Auxiliary\Build\vcvars64.bat" >nul
cd /d "%~dp0test_cpp_ch4"
if exist test.exe del test.exe
cl /EHsc /nologo test.cpp > compile.log 2>&1
if %ERRORLEVEL% equ 0 (
  test.exe
) else (
  echo COMPILE_ERROR
)
