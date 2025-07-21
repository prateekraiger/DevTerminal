@echo off
:: DevTerminal FX - Terminal Simulation Startup Script

where node >nul 2>nul
if %errorlevel%==0 (
    echo [DevTerminal FX] Starting terminal simulation...
    node cli.js
    goto :eof
)

echo [DevTerminal FX] Node.js is not installed or not in PATH.
echo Please install Node.js from https://nodejs.org/ and try again.
exit /b 1
