# Social Media Safe Zone Tester 📱🎯

[![Live Demo](https://img.shields.io/badge/Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://myvideojin.github.io/safe-zone-tester)
[![Powered by VideoJin](https://img.shields.io/badge/Full%20Suite-Videojin.com-indigo?style=for-the-badge)](https://videojin.com/safe-zone-tester)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

A free, lightweight, privacy-first web application to preview vertical (9:16) video content under actual **TikTok, Instagram Reels, and YouTube Shorts** UI safe zones before publishing.

Never let usernames, captions, engagement buttons, or sound titles cover up your video's critical text, graphics, or faces again.

---

## ⚡ Features

- **Accurate App Overlays**: Real-time masks for TikTok, Instagram Reels, and YouTube Shorts interfaces.
- **100% Client-Side Privacy**: Videos are loaded directly into HTML5 video memory in your browser. Nothing is ever uploaded to a server.
- **Customizable Preview**:
  - Toggle UI opacity (0% to 100%)
  - Toggle recommended Title/Margin safe zone boundaries
  - Fit modes: `Contain` vs `Cover`
- **Instant Playback**: Scrub, pause, mute, and loop your video in real-time under all overlays.

---

## 🚀 Live Demo

Try the tool immediately in your browser:
👉 **[https://myvideojin.github.io/safe-zone-tester](https://myvideojin.github.io/safe-zone-tester)**

For the full production suite of AI video tools (including Deepfake Detection, Auto Subtitling, Silence Removal, and Video Compression), check out **[Videojin.com](https://videojin.com)**.

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

# Start development server
npm run dev
```

### Production Build

```bash
npm run build
npm run preview
```

---

## 📦 Automated Deployment

This repository includes a pre-configured GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically builds and publishes the app to **GitHub Pages** whenever changes are pushed to `main`.

To enable GitHub Pages in your repo:
1. Go to **Settings** > **Pages**
2. Under **Build and deployment** > **Source**, select **GitHub Actions**
3. Push to `main` — your live site will deploy at `https://myvideojin.github.io/safe-zone-tester`

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

Maintained with ❤️ by the **[VideoJin Team](https://videojin.com)**.
