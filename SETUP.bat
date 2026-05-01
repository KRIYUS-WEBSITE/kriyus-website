@echo off
echo.
echo  ============================================================
echo   KRIYUS NGO Website - Windows Setup
echo  ============================================================
echo.

:: Check Node.js is installed
node --version >nul 2>&1
IF %ERRORLEVEL% NEQ 0 (
    echo  [ERROR] Node.js is NOT installed!
    echo  Please download and install it from: https://nodejs.org
    echo  Choose the LTS version. Then run this script again.
    pause
    exit /b 1
)

echo  [OK] Node.js found: 
node --version
echo.

:: ── BACKEND SETUP ──────────────────────────────────────────
echo  [1/4] Installing backend dependencies...
cd /d "%~dp0backend"
call npm install
IF %ERRORLEVEL% NEQ 0 (
    echo  [ERROR] Backend npm install failed.
    pause
    exit /b 1
)
echo  [OK] Backend dependencies installed.
echo.

:: Copy .env if not already present
IF NOT EXIST ".env" (
    copy ".env.example" ".env" >nul
    echo  [OK] Created backend\.env from template.
    echo  >>> IMPORTANT: Open backend\.env and paste your Google Apps Script URL!
) ELSE (
    echo  [OK] backend\.env already exists.
)
echo.

:: ── FRONTEND SETUP ─────────────────────────────────────────
echo  [2/4] Installing frontend dependencies...
cd /d "%~dp0frontend"
call npm install
IF %ERRORLEVEL% NEQ 0 (
    echo  [ERROR] Frontend npm install failed.
    pause
    exit /b 1
)
echo  [OK] Frontend dependencies installed.
echo.

:: ── DONE ───────────────────────────────────────────────────
echo  ============================================================
echo   Setup Complete!
echo  ============================================================
echo.
echo  NEXT STEPS:
echo.
echo  1. Edit backend\.env and add your Google Apps Script URL
echo     (See README.md Step 1 for Google Sheets setup)
echo.
echo  2. Start the BACKEND:
echo     Open a new terminal, then run:
echo       cd backend
echo       npm run dev
echo.
echo  3. Start the FRONTEND:
echo     Open another new terminal, then run:
echo       cd frontend
echo       npm run dev
echo.
echo  4. Open your browser: http://localhost:5173
echo.
pause
