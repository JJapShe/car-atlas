@echo off
cd /d "%~dp0"
node scripts\verify.mjs
if errorlevel 1 (
  pause
  exit /b 1
)
node scripts\build.mjs
if errorlevel 1 (
  pause
  exit /b 1
)
start "" "http://127.0.0.1:8042/"
node scripts\serve.mjs
pause
