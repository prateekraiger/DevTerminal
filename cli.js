#!/usr/bin/env node

// DevTerminal FX - Terminal Simulation CLI
// Simulates a busy developer terminal with colored, animated output

const readline = require("readline");

// Some example lines to simulate terminal activity
const lines = [
  "[INFO] Starting development server on port 3000...\n",
  "[GIT] Fetching latest changes from origin/main...\n",
  "[DOCKER] Building image devterminal-fx:latest...\n",
  "[K8S] Deploying to cluster dev-env...\n",
  "[WEBPACK] Compiling modules...\n",
  "[SUCCESS] Build completed in 2.34s\n",
  "[API] GET /api/users 200 OK\n",
  "[DB] Connected to PostgreSQL at localhost:5432\n",
  "[METRICS] CPU: 23% | MEM: 1.2GB | NET: 120kbps\n",
  "[WARN] Uncommitted changes detected!\n",
  "[SECURITY] Running vulnerability scan...\n",
  "[SUCCESS] No vulnerabilities found.\n",
  "[GIT] Pushing to origin/main...\n",
  "[INFO] All systems operational.\n",
];

// ANSI color codes
const colors = [
  "\x1b[32m", // green
  "\x1b[36m", // cyan
  "\x1b[33m", // yellow
  "\x1b[35m", // magenta
  "\x1b[34m", // blue
  "\x1b[31m", // red
  "\x1b[37m", // white
];
const reset = "\x1b[0m";

function randomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function randomLine() {
  return lines[Math.floor(Math.random() * lines.length)];
}

function printLine() {
  const color = randomColor();
  const line = randomLine();
  process.stdout.write(color + line + reset);
}

function animateTerminal() {
  setInterval(
    () => {
      printLine();
    },
    Math.floor(Math.random() * 300) + 100
  ); // 100-400ms
}

// Clear the terminal and print a banner
function printBanner() {
  process.stdout.write("\x1b[2J\x1b[0f"); // clear screen
  console.log("\x1b[1m\x1b[35m");
  console.log(
    "██████╗ ███████╗██╗   ██╗████████╗████████╗███████╗███╗   ███╗██╗██╗     "
  );
  console.log(
    "██╔══██╗██╔════╝██║   ██║╚══██╔══╝╚══██╔══╝██╔════╝████╗ ████║██║██║     "
  );
  console.log(
    "██████╔╝█████╗  ██║   ██║   ██║      ██║   █████╗  ██╔████╔██║██║██║     "
  );
  console.log(
    "██╔═══╝ ██╔══╝  ██║   ██║   ██║      ██║   ██╔══╝  ██║╚██╔╝██║██║██║     "
  );
  console.log(
    "██║     ███████╗╚██████╔╝   ██║      ██║   ███████╗██║ ╚═╝ ██║██║███████╗"
  );
  console.log(
    "╚═╝     ╚══════╝ ╚═════╝    ╚═╝      ╚═╝   ╚══════╝╚═╝     ╚═╝╚═╝╚══════╝"
  );
  console.log("");
  console.log("         \x1b[36mDevTerminal FX - Terminal Simulation\x1b[0m\n");
  console.log(reset);
}

printBanner();
animateTerminal();

// Graceful exit on Ctrl+C
readline.emitKeypressEvents(process.stdin);
if (process.stdin.isTTY) process.stdin.setRawMode(true);
process.stdin.on("keypress", (str, key) => {
  if (key.ctrl && key.name === "c") {
    process.stdout.write(
      "\n\x1b[33m[DevTerminal FX] Exiting simulation.\x1b[0m\n"
    );
    process.exit();
  }
});
