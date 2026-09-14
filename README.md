#  UI Maker — Apple Studio Edition
### AI UI/UX Architect Generator (GitHub Pages Ready & Google Apps Script Output)

Web App modern dengan standar **Apple Design System (macOS Tahoe & visionOS aesthetic)** untuk meracik antarmuka web responsif berbasis **Tailwind CSS**, didukung mesin multi-step agentic dan integrasi **Gemini 2.5 Flash API** (Text & Multimodal Vision).

---

## ✨ Keunggulan Apple Studio Edition:
- **Frosted Glass & Obsidian Dark**: Material kaca tembus pandang (*backdrop-blur-3xl*), hairline borders, dan ambient lighting.
- **Cupertino Segmented Controls**: Switcher perangkat realistis (**MacBook Pro dengan Notch** & **iPhone 16 Pro dengan Dynamic Island**).
- **Apple Intelligence Aura**: Indikator status alur kerja AI dengan aura gradien dinamis yang berpendar.
- **Zero-Server (100% Client-Side)**: Sangat kencang, aman untuk GitHub Pages, tanpa dependensi server Node.js.
- **Output Khusus Google Apps Script**: Sekali klik, langsung dapatkan kode terpisah **`Index.html`** dan **`Code.gs`** untuk di-paste ke `script.google.com`.

---

## 🚀 Panduan 2 Menit Deploy ke GitHub Pages (Gratis & Langsung Live):

Aplikasi ini sudah dirancang **Zero-Config**. Anda tidak butuh build tool (`npm run build`) apa pun!

### Langkah 1: Buat Repository di GitHub
1. Buka [github.com](https://github.com/) dan buat repository baru (misalnya bernama `ui-maker`).
2. Atur sebagai **Public**.

### Langkah 2: Upload / Push Berkas Ini
Upload atau push seluruh file dalam folder ini (`Index.html`, `Code.gs`, `Database.gs`, `README.md`) ke branch `main`.

Jika menggunakan Git Terminal:
```bash
git init
git add .
git commit -m "Deploy Apple Studio Edition UI Maker"
git branch -M main
git remote add origin https://github.com/USERNAME-ANDA/ui-maker.git
git push -u origin main
```

### Langkah 3: Aktifkan GitHub Pages
1. Di repository GitHub Anda, klik tab **Settings** (⚙️).
2. Di sidebar sebelah kiri, klik **Pages**.
3. Pada bagian **Build and deployment > Source**:
   - Pilih: **Deploy from a branch**
   - Branch: **`main`** / Folder: **`/ (root)`**
4. Klik **Save**.
5. Tunggu 30–60 detik, website Anda akan langsung tayang di:  
   👉 `https://USERNAME-ANDA.github.io/ui-maker/`

---

## 🔑 Pengaturan API Key yang Aman
Karena di-deploy ke GitHub publik:
- API Key **TIDAK PERNAH** disimpan di dalam kode sumber.
- Saat membuka web app, klik tombol **"API Key Setup"** di pojok kanan atas.
- Masukkan Gemini API Key gratis Anda (dari [Google AI Studio](https://aistudio.google.com/app/apikey)).
- Kunci akan tersimpan secara terenkripsi di **`localStorage` browser laptop Anda masing-masing**, sehingga aman 100% dari kebocoran publik!

---

## 📦 Cara Memakai Output untuk Google Apps Script (GAS):
1. Masukkan prompt website yang diinginkan di panel kiri, lalu klik **"Racik Website"**.
2. Desain akan langsung dirender secara interaktif di canvas MacBook / iPhone.
3. Klik tombol putih **"Export Paket GAS"** di pojok kanan bawah dock.
4. Anda akan mendapatkan:
   - Tab 📄 **`Index.html`**: Siap ditempel ke file HTML di Apps Script.
   - Tab ⚙️ **`Code.gs`**: Kode backend controller (`doGet()`).
5. Buka [script.google.com](https://script.google.com), tempelkan kedua file tersebut, dan deploy sebagai Web App!
