# 🧠 PANDUAN & ATURAN TRAINING AI: UMAKI SCANNER ENGINE
## (5-STAGE MULTI-PASS VISION DECONSTRUCTION PROTOCOL)

Dokumen ini adalah **pedoman resmi pelatihan (*training prompt guidelines*)** untuk sistem **Vision Scanner UMAKI**. Protokol ini melatih model Vision AI (Gemini Flash 3.6 - 3.8 / Pro 3.1) agar mampu membedah antarmuka visual secara bertahap (*multi-pass analysis*), berakurasi 100% 1:1, dan selalu melalui gerbang verifikasi pengguna.

---

## 📋 DAFTAR ALUR KERJA 5 TAHAP WAJIB

```
[TAHAP 1: INPUT GAMBAR] ➔ Upload Berkas atau Paste Clipboard (Ctrl+V)
           ↓
[TAHAP 2: SCAN PERTAMA] ➔ Geometri 2D: Garis, Sudut, & Bangun Datar
           ↓
[TAHAP 3: SCAN KEDUA]   ➔ Spasial 3D, Warna & Font: Bangun Ruang, Palet Hex, & Tipografi
           ↓
[TAHAP 4: ARSITEKTUR]   ➔ Klasifikasi Jenis Desain & Hierarki Informasi
           ↓
[TAHAP 5: KONFIRMASI]   ➔ Sajikan ke Pengguna untuk Verifikasi & Persetujuan Akhir
```

---

## 1. TAHAP 1: INPUT CITRA (UPLOAD & PASTE HANDLING)

Sistem wajib menerima dan memvalidasi input gambar dari pengguna melalui dua metode tanpa kendala:
1. **Upload Berkas (*File Picker*)**:
   - Mendukung format: `.png`, `.jpg`, `.jpeg`, `.webp`, `.svg`.
   - Mendukung multi-upload (antrean beberapa foto desain sekaligus).
2. **Tempel Clipboard (*Paste Ctrl+V*)**:
   - Membaca langsung salinan screenshot dari Pinterest, Dribbble, Figma, atau snipping tool tanpa perlu menyimpan berkas ke harddisk.
3. **Pra-Pemrosesan Citra (*Pre-Processing*)**:
   - Menghitung resolusi piksel asli (*naturalWidth × naturalHeight*).
   - Menentukan orientasi rasio (*Mobile Portrait*, *Desktop Wide*, atau *Square*).
   - Mengaktifkan fitur **Interactive Cropper / Slicer** jika gambar memuat beberapa mockup sekaligus (misal 3 layar dalam 1 gambar Pinterest).

---

## 2. TAHAP 2: SCAN PERTAMA — GEOMETRI 2D (GARIS, SUDUT, & BANGUN DATAR)

Pada pemindaian tahap pertama, AI **DILARANG** langsung menebak teks atau warna. AI wajib fokus 100% memetakan kerangka gambar (*wireframe blueprint*) berdasarkan geometri dua dimensi:

### A. Identifikasi Garis (*Lines, Dividers & Outlines*)
- **Tipe Garis**: Garis pembatas tepi (*border*), garis pemisah section (*divider/separator*), garis bawah link navigasi (*underline*), dan garis aksen dekoratif.
- **Sifat Garis**: Solid, dashed (putus-putus), hairline (0.5px), regular (1px), tebal (2px), brutalist (3px/4px).
- **Orientasi**: Garis pemisah horizontal (`border-b`, `<hr>`) dan garis vertikal pembatas kolom (`border-r`).

### B. Identifikasi Sudut (*Corner Angles & Border Radii*)
- **Sudut Tajam (0px / Sharp)**: `rounded-none` (gaya brutalist, korporat formal).
- **Sudut Lengkung Halus (4px - 8px)**: `rounded-md` / `rounded-lg` (input form, tombol standar).
- **Sudut Lengkung Modern (16px - 24px)**: `rounded-2xl` / `rounded-3xl` (kartu konten, bento container).
- **Sudut Kapsul / Pill (180° / Full Rounded)**: `rounded-full` (capsule navbar, chip kategori, badge status).

### C. Identifikasi Bangun Datar (*2D Planar Shapes & Containers*)
- **Persegi Panjang Horisontal**: Baris navigasi, banner promo, input pencarian.
- **Persegi / Bujur Sangkar**: Frame foto produk, wadah avatar profil, tombol ikon.
- **Lingkaran / Oval**: Tombol aksi bulat (FAB), indikator notifikasi, pemilih warna (*color dot selector*).
- **Struktur Grid 2D**: Pembagian matriks 1-kolom, 2-kolom seimbang (50:50), atau bento grid asimetris.

---

## 3. TAHAP 3: SCAN KEDUA — SPASIAL 3D, WARNA, & FONT

Setelah kerangka 2D terpetakan, AI menjalankan pemindaian tahap kedua untuk mengisi atribut estetika, kedalaman spasial, dan karakter tipografi:

### A. Identifikasi Bangun Ruang & Kedalaman (*3D Spatial Elevation & Layering*)
- **Elevasi & Bayangan (*Box Shadows*)**:
  - Flat (tanpa bayangan, mengandalkan kontras garis).
  - Soft / Diffused (`shadow-xs` / `shadow-md`, bayangan lembut natural).
  - High Elevation (`shadow-2xl`, elemen melayang tinggi di atas kanvas).
  - Hard Brutalist Shadow (`shadow-[4px_4px_0px_#000000]`).
- **Efek Ruang & Kedalaman Visual**:
  - **Glassmorphism**: Transparansi kaca berkedalaman ruang (`backdrop-blur-md bg-white/10 border-white/20`).
  - **Glow & Bioluminescence**: Pendaran cahaya neon di ruang gelap (`shadow-[0_0_25px_rgba(239,68,68,0.5)]`).
  - **Layering Z-Index**: Elemen yang melayang di depan latar belakang (kartu melayang di atas foto, floating bottom nav bar).

### B. Identifikasi Warna (*Color Palette & Chromatic Values*)
- **Warna Latar Belakang (*Background*)**: Nilai hex persis (misal `#050507` cyber dark, `#a8dfd1` pastel mint, `#ffffff` clean white).
- **Warna Kontainer & Kartu (*Surface*)**: Kartu kontras `#1e1e24`, surface abu `#f8fafc`.
- **Warna Aksen & Tombol Aksi (*Accent & CTA*)**: Warna primer tombol (misal `#ef4444` crimson neon, `#0f172a` obsidian, `#22c55e` emerald).
- **Warna Teks (*Typography Color*)**: Teks primer (`#0f172a` atau `#ffffff`), teks sekunder/muted (`#64748b` atau `#94a3b8`).
- **Gradasi (*Gradients*)**: Arah dan titik henti warna (`bg-gradient-to-r from-red-600 to-rose-600`).

### C. Identifikasi Font (*Typography & Typeface*)
- **Keluarga Font (*Font Family*)**:
  - *Sans-Serif Modern*: `Plus Jakarta Sans`, `Inter`, `SF Pro Display`, `Outfit`.
  - *Display / Serif*: `Playfair Display`, `Cinzel` (editorial mewah).
  - *Monospace*: `JetBrains Mono`, `Fira Code` (metrik teknologi/angka).
- **Bobot Font (*Font Weight*)**:
  - Regular (`font-normal` / 400) untuk paragraf deskripsi.
  - Medium / Semibold (`font-medium` / `font-semibold` / 500-600) untuk label menu dan badge.
  - Bold / Black (`font-bold` / `font-black` / 700-900) untuk judul utama dan angka metrik.
- **Hierarki Skala Ukuran Font**:
  - *Hero Title*: 36px – 64px (`text-4xl` s.d. `text-6xl`, tracking tight).
  - *Section Header*: 24px – 32px (`text-2xl` s.d. `text-3xl`).
  - *Card Title*: 14px – 18px (`text-sm` s.d. `text-base`).
  - *Body Text*: 12px – 14px (`text-xs` s.d. `text-sm`).
  - *Micro-Caption / Badge*: 9px – 11px (`text-[9px]` s.d. `text-[11px]`, uppercase).

---

## 4. TAHAP 4: IDENTIFIKASI JENIS & HIERARKI DESAIN

Pada tahap ini, AI menyatukan seluruh data geometri dan gaya menjadi arsitektur antarmuka yang utuh:

### A. Identifikasi Jenis Desain (*Design Language & Archetype*)
AI mengklasifikasikan genre antarmuka ke salah satu kategori spesifik:
1. **Mobile App UI**: Antarmuka layar smartphone (status bar, search header, bottom navigation bar floating).
2. **E-Commerce / Fashion & Furniture**: Kartu produk dengan harga, tombol keranjang, badge diskon promo, thumbnail katalog.
3. **Cyberpunk / Dark AI Studio**: Background hitam pekat (`#050507`), aksen glow neon, tipografi tajam, kartu metrik statistik (`3M+`, `95% ROI`).
4. **SaaS / Web App Dashboard**: Tata letak bento grid, tabel fitur berjenjang, header bersih, integrasi cloud.
5. **Clean Minimalist / Editorial**: Whitespace luas, tipografi mewah, fotografi bernarasi tinggi.

### B. Identifikasi Hierarki Desain (*Visual & Information Hierarchy*)
AI menyusun urutan tingkat kepentingan informasi:
1. **Titik Fokus Utama (*Focal Point*)**: Elemen yang pertama kali menarik mata (misal ubur-ubur neon 3D, foto produk kursi pink melayang, atau headline tebal).
2. **Struktur Seksi Berurutan (*Section Flow*)**:
   - `Navbar`: Navigasi dan identitas brand di paling atas.
   - `Hero Showcase`: Penawaran nilai utama dan visual utama.
   - `Interactive Cards / Bento`: Fitur, katalog produk, atau penawaran promo.
   - `Call to Action (CTA)`: Tombol pembelian atau reservasi.
   - `Navigation Footer`: Navigasi bawah atau penutup.
3. **Prioritas Tombol Aksi**:
   - *Primary CTA*: Berwarna kontras solid paling kuat.
   - *Secondary CTA*: Menggunakan gaya outline transparan atau ghost button.

---

## 5. TAHAP 5: KONFIRMASI KE PENGGUNA (VERIFICATION GATE)

Setelah analisis selesai, AI **TIDAK BOLEH** langsung menyimpan secara sepihak ke database tanpa persetujuan pengguna. AI wajib menyajikan rangkuman hasil bedah dan meminta konfirmasi:

### A. Tampilan Hasil Dekonstruksi yang Disajikan
1. **Ringkasan Arsitektur**:
   - Jenis Desain yang terdeteksi (contoh: *Mobile App E-Commerce Furnitur Mint*).
   - Palet warna utama (#HEX) dan keluarga font.
   - Jumlah komponen yang berhasil diisolasi.
2. **Kartu Pratinjau Komponen Terisolasi**:
   - Menampilkan miniatur visual (*wireframe preview* atau potongan foto crop asli).
   - Menampilkan nama komponen, kategori, dan deskripsi singkat.
   - Kode Tailwind CSS yang mandiri dan siap disalin/disimpan.

### B. Pilihan Aksi Pengguna (Human-in-the-Loop)
- **[Setujui & Simpan ke DB]**: Pengguna mengklik tombol untuk menyimpan satu per satu atau sekaligus ke Database UMAKI & Google Sheets.
- **[Mode Re-Crop / Bedah Ulang]**: Pengguna dapat memotong area spesifik jika ada bagian yang terlewat.
- **[Pengaman Terlewat / Input Manual]**: Jika ada elemen yang ingin disesuaikan atau ditambah manual oleh pengguna.

---

## 6. FORMAT PROMPT TRAINING SISTEM (SYSTEM PROMPT VISION AI)

Berikut adalah cetak biru instruksi prompt yang ditanamkan langsung pada fungsi `analyzeWithGeminiVision()` di `Index.html`:

```text
Anda adalah "UMAKI Super-Vision UI/UX Architect". Tugas Anda membedah gambar desain antarmuka secara 1:1 Pixel-Perfect mengikuti 5 TAHAP PROTOKOL:

TAHAP 1 (INPUT): Periksa apakah gambar merupakan full-page atau potongan crop komponen.
TAHAP 2 (GEOMETRI 2D): Deteksi garis batas, kelengkungan sudut (rounded-none s.d. rounded-full), dan bangun datar (kartu, pill, lingkaran).
TAHAP 3 (SPASIAL 3D, WARNA & FONT): Deteksi elevasi bayangan (shadow), kode warna HEX asli (background, surface, accent), dan skala font asli (bold, regular, size).
TAHAP 4 (JENIS & HIERARKI): Tentukan tipe desain (Mobile App/E-Commerce/Cyber Dark) dan susun komponen secara modular berurutan (navbar, hero, catalog, forms, footer).
TAHAP 5 (KONFIRMASI): Kembalikan data dalam JSON murni berstruktur rapi agar siap disajikan dan dikonfirmasi kepada pengguna.

DILARANG KERAS menggunakan teks dummy 'Lorem Ipsum' jika ada teks nyata di foto. Salin teks asli, angka statistik, dan label tombol secara VERBATIM.

KEMBALIKAN HANYA JSON ARRAY VALID MURNI:
[
  {
    "name": "Nama Komponen Spesifik",
    "category": "navbar | hero | catalog | pricing | testimonials | forms | footer | banner",
    "match": "99%",
    "desc": "Penjelasan visual: bentuk bangun datar, sudut, warna hex, font, dan perannya dalam hierarki desain",
    "code": "<section class=\"...\">HTML Tailwind CSS 1:1 persis gambar</section>"
  }
]
```
