# Safe Zone Tester 🎬⚡

[![Live Demo](https://img.shields.io/badge/Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://myvideojin.github.io/safe-zone-tester)
[![Powered by VideoJin](https://img.shields.io/badge/Full%20Suite-Videojin.com-indigo?style=for-the-badge)](https://videojin.com/safe-zone-tester)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

Free in-browser social media safe zone preview tool for TikTok, Instagram Reels, and YouTube Shorts.

Part of the **[VideoJin.com](https://videojin.com)** creative & forensics media suite.

---

## ⚡ Highlights

- **100% Client-Side Processing**: Media never leaves your browser. Zero server uploads, zero privacy risk.
- **Fast & Modern**: Built with Vite, React, and Tailwind CSS.
- **Automated CI/CD**: Pre-configured GitHub Actions workflow automatically builds and deploys to **GitHub Pages**.
- **No Heavy Setup**: Uses WebAssembly/HTML5 APIs for local processing directly on your machine.

---

## 🚀 Live Demo

Try the live application directly in your browser:
👉 **[https://myvideojin.github.io/safe-zone-tester](https://myvideojin.github.io/safe-zone-tester)**

For commercial workflows, enterprise APIs, deepfake authentication, and cloud video pipelines, explore the full platform at **[Videojin.com](https://videojin.com)**.

---

## 🛠️ Local Development

### Prerequisites
- Node.js 18+
- npm or pnpm

### Getting Started

```bash
# Clone the repository
git clone https://github.com/myvideojin/safe-zone-tester.git
cd safe-zone-tester

# Install dependencies
npm install

# Start local dev server
npm run dev
```

### Production Build

```bash
npm run build
npm run preview
```

---

## 📦 Deploying to GitHub Pages

This repository includes a turnkey GitHub Actions workflow (`.github/workflows/deploy.yml`):
1. In your GitHub repository, navigate to **Settings** > **Pages**.
2. Under **Build and deployment** > **Source**, choose **GitHub Actions**.
3. Push to `main` — your live demo will be published at `https://myvideojin.github.io/safe-zone-tester`.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

Maintained with ❤️ by the **[VideoJin Team](https://videojin.com)** | [Contact](https://videojin.com/contact)
