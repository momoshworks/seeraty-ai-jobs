@echo off
title Seeraty & JobFinder AI - سيرتي وجوب
echo ==========================================================
echo   منصة سيرتي & جوب AI - إعداد الـ CV ومحرك وظائف الذكاء الاصطناعي
echo   Port: 5200 ^| URL: http://localhost:5200
echo ==========================================================
cd /d "%~dp0"
call npm run dev -- --port 5200
pause
