# DevTerminal FX

A professional-grade Node.js CLI application that simulates continuous, realistic terminal output to mirror an active, full-stack development environment—all within your terminal window.

This project creates a "hacker movie" effect of a busy terminal, perfect for presentations, background visuals, or just for fun. No browser or web server required—everything runs in your terminal.

## ✨ Features

- **Runs in Your Terminal**: No browser needed, pure Node.js CLI.
- **Realistic DevOps Theme**: Simulates modern workflows (Git, Docker, K8s, API, etc.).
- **Colorful, Animated Output**: Uses ANSI colors and effects for a visually appealing experience.
- **Cross-Platform**: Works on Windows, Linux, and macOS.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/prateekraiger/DevTerminal.git
   cd DevTerminal
   ```
2. **Install dependencies:**
   - This project uses [pnpm](https://pnpm.io/) for managing dependencies. If you don't have pnpm installed, run:
     ```sh
     npm install -g pnpm
     ```
   - Then install dependencies:
     ```sh
     pnpm install
     ```

## 💻 Usage

### Windows

- **Option 1:** Double-click `start.bat` in the project folder
- **Option 2:** Open a terminal and run:
  ```cmd
  .\start.bat
  ```
- **Option 3:** Start the development server (for web UI):
  ```cmd
  pnpm dev
  ```

### Linux/macOS

- **Option 1:** Run the CLI directly:
  ```sh
  node cli.js
  ```
- **Option 2:** Make it executable and run:
  ```sh
  chmod +x cli.js
  ./cli.js
  ```
- **Option 3:** Start the development server (for web UI):
  ```sh
  pnpm dev
  ```
  ```sh
  node cli.js
  ```
- Or make it executable and run:
  ```sh
  chmod +x cli.js
  ./cli.js
  ```

### Controls

- **Exit:** Press `Ctrl+C` to stop the simulation at any time.

## 📂 Project Structure

```
.
├── cli.js                # Node.js CLI simulation script
├── start.bat             # Windows startup script
├── README.md             # This file
├── package.json          # Project metadata and scripts
```

## 🤝 Contributing

Contributions are welcome! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## 🛡️ License

This project is licensed under the MIT License.
