/**
 * ==============================================================================
 * DATABASE KOMPONEN UI TAILWIND CSS
 * AI UI/UX Architect Generator
 * ==============================================================================
 */

var COMPONENT_DATABASE = [
  {
    id: "navbar-glassmorphic",
    name: "Modern Glassmorphic Sticky Navbar",
    category: "navbar",
    tags: ["navbar", "navigation", "header", "sticky", "glassmorphism", "saas", "modern"],
    description: "Navbar mengambang dengan efek blur kaca (backdrop-blur), navigasi responsif, logo badge, dan tombol CTA gradient.",
    html: `<header class="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4 transition-all duration-300">
  <div class="max-w-7xl mx-auto backdrop-blur-xl bg-slate-900/80 border border-slate-800/80 rounded-2xl px-5 py-3.5 shadow-2xl shadow-indigo-950/30 flex items-center justify-between">
    <div class="flex items-center gap-3">
      <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-white font-black text-lg shadow-lg shadow-indigo-500/25">
        ✦
      </div>
      <span class="text-xl font-bold tracking-tight text-white">Nova<span class="text-indigo-400">UI</span></span>
    </div>
    
    <nav class="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
      <a href="#features" class="hover:text-white transition-colors duration-200">Fitur</a>
      <a href="#solutions" class="hover:text-white transition-colors duration-200">Solusi</a>
      <a href="#pricing" class="hover:text-white transition-colors duration-200">Harga</a>
      <a href="#testimonials" class="hover:text-white transition-colors duration-200">Ulasan</a>
    </nav>
    
    <div class="flex items-center gap-3">
      <a href="#login" class="hidden sm:inline-block text-sm font-medium text-slate-300 hover:text-white px-4 py-2 transition-colors">Masuk</a>
      <a href="#cta" class="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl hover:from-indigo-600 hover:to-purple-700 shadow-md shadow-indigo-500/25 transition-all duration-200 hover:scale-[1.02]">
        Mulai Gratis
      </a>
    </div>
  </div>
</header>`
  },

  {
    id: "hero-saas-glow",
    name: "AI SaaS High-Impact Glow Hero",
    category: "hero",
    tags: ["hero", "saas", "glow", "gradient", "ai", "cta", "conversion", "tech"],
    description: "Hero section modern dengan ambient radial glow, badge pengumuman, tipografi kontras tinggi, social proof, dan preview card mockup.",
    html: `<section class="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-slate-950 text-slate-100">
  <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-indigo-600/30 via-purple-600/20 to-pink-500/20 blur-[130px] pointer-events-none rounded-full"></div>
  <div class="absolute top-12 left-1/4 w-72 h-72 bg-blue-600/10 blur-[100px] pointer-events-none rounded-full"></div>
  
  <div class="relative max-w-5xl mx-auto text-center">
    <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-950/40 text-indigo-300 text-xs sm:text-sm font-medium mb-8 backdrop-blur-md hover:border-indigo-400/50 transition-all cursor-pointer shadow-inner">
      <span class="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
      <span>Generasi Baru UI/UX Engine 3.0</span>
      <span class="text-slate-400">→</span>
    </div>
    
    <h1 class="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
      Rancang Website Impian <br class="hidden sm:inline" />
      <span class="bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400 bg-clip-text text-transparent">
        10x Lebih Cepat dengan AI
      </span>
    </h1>
    
    <p class="max-w-2xl mx-auto text-base sm:text-lg lg:text-xl text-slate-400 mb-10 leading-relaxed">
      Ubah ide kasar dan screenshot desain menjadi kode HTML + Tailwind CSS yang bersih, responsif, dan siap produksi dalam hitungan detik.
    </p>
    
    <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
      <a href="#get-started" class="w-full sm:w-auto px-8 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-500 via-indigo-600 to-purple-600 hover:from-indigo-600 hover:to-purple-700 shadow-xl shadow-indigo-600/30 hover:scale-105 transition-all duration-200">
        Mulai Desain Sekarang 🚀
      </a>
      <a href="#demo" class="w-full sm:w-auto px-8 py-3.5 rounded-xl font-semibold text-slate-300 bg-slate-900 border border-slate-800 hover:bg-slate-800/80 hover:text-white transition-all duration-200 flex items-center justify-center gap-2">
        <svg class="w-5 h-5 text-indigo-400" fill="currentColor" viewBox="0 0 20 20"><path d="M6.3 2.84A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.27l9.34-5.89a1.5 1.5 0 000-2.54L6.3 2.84z"></path></svg>
        Lihat Live Demo
      </a>
    </div>

    <div class="relative mx-auto rounded-2xl p-2 bg-gradient-to-b from-slate-700/40 via-slate-800/20 to-transparent border border-slate-700/50 shadow-2xl backdrop-blur-sm max-w-4xl">
      <div class="rounded-xl overflow-hidden bg-slate-900 border border-slate-800 aspect-video flex flex-col">
        <div class="h-9 bg-slate-950/80 border-b border-slate-800 px-4 flex items-center gap-2">
          <div class="w-3 h-3 rounded-full bg-rose-500/80"></div>
          <div class="w-3 h-3 rounded-full bg-amber-500/80"></div>
          <div class="w-3 h-3 rounded-full bg-emerald-500/80"></div>
          <div class="ml-4 text-xs text-slate-500 font-mono">https://ai-architect.app/preview</div>
        </div>
        <div class="flex-1 p-6 flex flex-col items-center justify-center bg-gradient-to-b from-slate-900 to-slate-950">
          <div class="grid grid-cols-3 gap-4 w-full max-w-xl">
            <div class="h-24 rounded-lg bg-slate-800/50 border border-slate-700/50 animate-pulse"></div>
            <div class="h-24 rounded-lg bg-indigo-950/30 border border-indigo-800/30 animate-pulse"></div>
            <div class="h-24 rounded-lg bg-purple-950/30 border border-purple-800/30 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`
  },

  {
    id: "hero-agency-minimal",
    name: "Minimalist Creative Studio Hero",
    category: "hero",
    tags: ["hero", "agency", "creative", "minimalist", "portfolio", "bold"],
    description: "Hero bertema studio kreatif dengan tipografi tegas, tata letak asimetris, dan penekanan portofolio.",
    html: `<section class="min-h-[85vh] flex items-center bg-zinc-950 text-zinc-100 px-6 lg:px-12 py-24">
  <div class="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
    <div class="lg:col-span-8">
      <span class="text-xs uppercase tracking-widest text-emerald-400 font-bold mb-4 block">Creative Digital Experience</span>
      <h1 class="text-5xl sm:text-7xl font-black tracking-tighter text-white leading-tight mb-8">
        KAMI MERANCANG <br/>
        <span class="underline decoration-emerald-500 underline-offset-8">PRODUK DIGITAL</span> <br/>
        YANG BERDAMPAK.
      </h1>
      <p class="text-xl text-zinc-400 max-w-xl leading-relaxed mb-10">
        Membantu startup dan enterprise mendefinisikan standar visual baru yang memenangkan hati pengguna sejak detik pertama.
      </p>
      <div class="flex gap-4">
        <a href="#contact" class="px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold rounded-none transition-all">Konsultasi Gratis</a>
        <a href="#work" class="px-8 py-4 border border-zinc-700 hover:border-zinc-300 text-white font-bold rounded-none transition-all">Karya Kami</a>
      </div>
    </div>
    <div class="lg:col-span-4 flex flex-col gap-6 border-l border-zinc-800 pl-8">
      <div>
        <div class="text-4xl font-extrabold text-white">99.4%</div>
        <div class="text-sm text-zinc-400">Kepuasan Klien Global</div>
      </div>
      <div>
        <div class="text-4xl font-extrabold text-white">120+</div>
        <div class="text-sm text-zinc-400">Proyek Web & Aplikasi Selesai</div>
      </div>
      <div>
        <div class="text-4xl font-extrabold text-white">14 Hari</div>
        <div class="text-sm text-zinc-400">Rata-rata Waktu Siklus MVP</div>
      </div>
    </div>
  </div>
</section>`
  },

  {
    id: "features-bento-grid",
    name: "Modern Bento Grid Feature Cards",
    category: "features",
    tags: ["features", "bento", "grid", "cards", "benefits", "saas", "tech"],
    description: "Tata letak Bento Grid modern dengan aksen gradien, hover card interaktif, dan visualisasi fitur terorganisir.",
    html: `<section id="features" class="py-28 px-4 sm:px-6 lg:px-8 bg-slate-950 text-slate-100 relative">
  <div class="max-w-7xl mx-auto">
    <div class="text-center max-w-3xl mx-auto mb-20">
      <h2 class="text-xs uppercase tracking-widest text-indigo-400 font-bold mb-3">Keunggulan Ekosistem</h2>
      <h3 class="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">Semua yang Anda butuhkan untuk meluncurkan produk</h3>
      <p class="mt-4 text-lg text-slate-400">Kombinasi AI canggih dan tata kelola desain berbasis komponen terstandarisasi.</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="md:col-span-2 group relative overflow-hidden rounded-3xl bg-slate-900/60 border border-slate-800/80 p-8 sm:p-10 hover:border-indigo-500/50 transition-all duration-300">
        <div class="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center text-2xl mb-6">
          ⚡
        </div>
        <h4 class="text-2xl font-bold text-white mb-3">Multi-Step Agentic Generation</h4>
        <p class="text-slate-400 text-base leading-relaxed max-w-md">
          Alur kerja AI cerdas mulai dari bedah UX Blueprint, seleksi komponen database terindeks, hingga perakitan kode akhir yang solid tanpa bug.
        </p>
        <div class="mt-8 p-4 rounded-xl bg-slate-950/70 border border-slate-800 text-xs font-mono text-indigo-300">
          ✓ Planner Engine -> Retrieval Matcher -> Multimodal Vision -> Code Assembler
        </div>
      </div>

      <div class="group relative overflow-hidden rounded-3xl bg-slate-900/60 border border-slate-800/80 p-8 sm:p-10 hover:border-purple-500/50 transition-all duration-300">
        <div class="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center text-2xl mb-6">
          👁️
        </div>
        <h4 class="text-2xl font-bold text-white mb-3">Vision UI Dissector</h4>
        <p class="text-slate-400 text-base leading-relaxed">
          Cukup unggah screenshot UI referensi, Gemini 2.5 Flash akan membedah skema warna dan komponennya seketika.
        </p>
      </div>

      <div class="group relative overflow-hidden rounded-3xl bg-slate-900/60 border border-slate-800/80 p-8 sm:p-10 hover:border-pink-500/50 transition-all duration-300">
        <div class="w-12 h-12 rounded-2xl bg-pink-500/10 border border-pink-500/20 text-pink-400 flex items-center justify-center text-2xl mb-6">
          📱
        </div>
        <h4 class="text-2xl font-bold text-white mb-3">100% Responsif</h4>
        <p class="text-slate-400 text-base leading-relaxed">
          Struktur utility Tailwind CSS teroptimasi untuk Desktop, Tablet, hingga layar ponsel terkecil.
        </p>
      </div>

      <div class="md:col-span-2 group relative overflow-hidden rounded-3xl bg-slate-900/60 border border-slate-800/80 p-8 sm:p-10 hover:border-indigo-500/50 transition-all duration-300">
        <div class="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center text-2xl mb-6">
          🛡️
        </div>
        <h4 class="text-2xl font-bold text-white mb-3">Clean Code & Siap Produksi</h4>
        <p class="text-slate-400 text-base leading-relaxed max-w-md">
          HTML semantik, tanpa dependensi berat, langsung dapat disalin atau diintegrasikan ke framework modern apa pun.
        </p>
      </div>
    </div>
  </div>
</section>`
  },

  {
    id: "pricing-3-tiers",
    name: "Modern 3-Tier SaaS Pricing Table",
    category: "pricing",
    tags: ["pricing", "tiers", "subscription", "plans", "cards", "highlight", "saas"],
    description: "Tabel harga 3 kolom dengan highlight rekomendasi paket, daftar fitur lengkap, dan tombol aksi.",
    html: `<section id="pricing" class="py-24 px-4 sm:px-6 lg:px-8 bg-slate-950 text-slate-100">
  <div class="max-w-7xl mx-auto">
    <div class="text-center max-w-3xl mx-auto mb-16">
      <h2 class="text-xs uppercase tracking-widest text-indigo-400 font-bold mb-3">Pilihan Paket</h2>
      <h3 class="text-3xl sm:text-4xl font-extrabold text-white">Investasi yang Fleksibel Sesuai Kebutuhan</h3>
      <p class="mt-4 text-slate-400">Pilih paket yang paling tepat untuk mempercepat alur kerja desain Anda.</p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
      <div class="rounded-3xl bg-slate-900/40 border border-slate-800 p-8 flex flex-col justify-between">
        <div>
          <h4 class="text-xl font-bold text-white mb-2">Starter</h4>
          <p class="text-sm text-slate-400 mb-6">Cocok untuk freelancer dan eksplorasi awal.</p>
          <div class="text-4xl font-extrabold text-white mb-6">Rp 0 <span class="text-sm text-slate-500 font-normal">/bulan</span></div>
          <ul class="space-y-3.5 text-sm text-slate-300 mb-8">
            <li class="flex items-center gap-3"><span class="text-indigo-400">✓</span> 5 Generasi Website / bulan</li>
            <li class="flex items-center gap-3"><span class="text-indigo-400">✓</span> Akses Database Komponen Dasar</li>
            <li class="flex items-center gap-3"><span class="text-indigo-400">✓</span> Ekspor HTML + Tailwind CSS</li>
          </ul>
        </div>
        <a href="#starter" class="w-full py-3 text-center rounded-xl font-semibold border border-slate-700 text-slate-200 hover:bg-slate-800 transition-colors">Daftar Sekarang</a>
      </div>

      <div class="relative rounded-3xl bg-gradient-to-b from-indigo-950/40 to-slate-900/80 border-2 border-indigo-500 p-8 flex flex-col justify-between shadow-2xl shadow-indigo-900/30 lg:-translate-y-2">
        <div class="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-xs font-bold uppercase tracking-wider shadow-md">
          Paling Populer
        </div>
        <div>
          <h4 class="text-xl font-bold text-white mb-2">Pro Architect</h4>
          <p class="text-sm text-slate-400 mb-6">Untuk profesional & tim pengembang aktif.</p>
          <div class="text-4xl font-extrabold text-white mb-6">Rp 199K <span class="text-sm text-slate-500 font-normal">/bulan</span></div>
          <ul class="space-y-3.5 text-sm text-slate-200 mb-8">
            <li class="flex items-center gap-3"><span class="text-indigo-400 font-bold">✓</span> Generasi Tanpa Batas</li>
            <li class="flex items-center gap-3"><span class="text-indigo-400 font-bold">✓</span> Fitur Vision UI Dissector (Unlimited)</li>
            <li class="flex items-center gap-3"><span class="text-indigo-400 font-bold">✓</span> Akses Semua Komponen Pro</li>
            <li class="flex items-center gap-3"><span class="text-indigo-400 font-bold">✓</span> Dukungan Prioritas 24/7</li>
          </ul>
        </div>
        <a href="#pro" class="w-full py-3.5 text-center rounded-xl font-semibold bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700 shadow-lg shadow-indigo-500/25 transition-all">Pilih Pro Sekarang</a>
      </div>

      <div class="rounded-3xl bg-slate-900/40 border border-slate-800 p-8 flex flex-col justify-between">
        <div>
          <h4 class="text-xl font-bold text-white mb-2">Agency / Custom</h4>
          <p class="text-sm text-slate-400 mb-6">Solusi dedicated untuk agensi berskala besar.</p>
          <div class="text-4xl font-extrabold text-white mb-6">Custom</div>
          <ul class="space-y-3.5 text-sm text-slate-300 mb-8">
            <li class="flex items-center gap-3"><span class="text-indigo-400">✓</span> Database Komponen Custom Agensi</li>
            <li class="flex items-center gap-3"><span class="text-indigo-400">✓</span> Integrasi Custom API</li>
            <li class="flex items-center gap-3"><span class="text-indigo-400">✓</span> Dedicated Account Manager</li>
          </ul>
        </div>
        <a href="#enterprise" class="w-full py-3 text-center rounded-xl font-semibold border border-slate-700 text-slate-200 hover:bg-slate-800 transition-colors">Hubungi Tim</a>
      </div>
    </div>
  </div>
</section>`
  },

  {
    id: "testimonials-grid",
    name: "Customer Review Cards Grid",
    category: "testimonials",
    tags: ["testimonials", "reviews", "social proof", "cards", "ratings", "avatars"],
    description: "Grid testimoni pelanggan dengan rating bintang, kutipan ulasan, dan identitas pengguna.",
    html: `<section id="testimonials" class="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/50 text-slate-100">
  <div class="max-w-7xl mx-auto">
    <div class="text-center max-w-2xl mx-auto mb-16">
      <h2 class="text-xs uppercase tracking-widest text-indigo-400 font-bold mb-3">Kepercayaan Klien</h2>
      <h3 class="text-3xl sm:text-4xl font-extrabold text-white">Dipercaya oleh Ratusan Pengembang & Desainer</h3>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="rounded-2xl bg-slate-900 border border-slate-800 p-6 flex flex-col justify-between">
        <p class="text-slate-300 leading-relaxed mb-6">"Fitur Vision Dissector-nya sangat menghemat waktu. Cukup ambil screenshot dari Dribbble, komponen Tailwind langsung jadi."</p>
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-full bg-indigo-500/30 flex items-center justify-center font-bold text-indigo-300">BA</div>
          <div>
            <div class="text-sm font-semibold text-white">Budi Santoso</div>
            <div class="text-xs text-slate-500">Lead Frontend Engineer</div>
          </div>
        </div>
      </div>

      <div class="rounded-2xl bg-slate-900 border border-slate-800 p-6 flex flex-col justify-between">
        <p class="text-slate-300 leading-relaxed mb-6">"Alur agentic multi-step-nya benar-benar terasa bedanya dibandingkan ChatGPT biasa. Struktur UX-nya jauh lebih terarah dan profesional."</p>
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-full bg-purple-500/30 flex items-center justify-center font-bold text-purple-300">SA</div>
          <div>
            <div class="text-sm font-semibold text-white">Siti Aisyah</div>
            <div class="text-xs text-slate-500">UI/UX Consultant</div>
          </div>
        </div>
      </div>

      <div class="rounded-2xl bg-slate-900 border border-slate-800 p-6 flex flex-col justify-between">
        <p class="text-slate-300 leading-relaxed mb-6">"Dalam 20 menit kami bisa mempresentasikan 3 mockup landing page interaktif kepada klien potensial kami."</p>
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-full bg-emerald-500/30 flex items-center justify-center font-bold text-emerald-300">RK</div>
          <div>
            <div class="text-sm font-semibold text-white">Rian Kusuma</div>
            <div class="text-xs text-slate-500">Founder Digital Agency</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`
  },

  {
    id: "footer-multi-column",
    name: "Modern Multi-Column Footer with Newsletter",
    category: "footer",
    tags: ["footer", "links", "newsletter", "copyright", "social"],
    description: "Footer lengkap dengan form pendaftaran newsletter, navigasi kategori, dan tautan sosial media.",
    html: `<footer class="bg-slate-950 border-t border-slate-900 text-slate-400 py-16 px-4 sm:px-6 lg:px-8">
  <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
    <div class="md:col-span-2">
      <div class="flex items-center gap-3 mb-4">
        <div class="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-sm">✦</div>
        <span class="text-xl font-bold tracking-tight text-white">Nova<span class="text-indigo-400">UI</span></span>
      </div>
      <p class="text-sm text-slate-400 max-w-sm mb-6 leading-relaxed">
        Platform generasi antarmuka pengguna berbasis kecerdasan buatan, dirancang untuk tim gesit dan kreator masa kini.
      </p>
      <div class="flex items-center gap-3 max-w-md">
        <input type="email" placeholder="Masukkan email Anda" class="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500" />
        <button class="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold rounded-xl transition-colors whitespace-nowrap">Langganan</button>
      </div>
    </div>

    <div>
      <h5 class="text-sm font-semibold text-white uppercase tracking-wider mb-4">Produk</h5>
      <ul class="space-y-2.5 text-sm">
        <li><a href="#features" class="hover:text-white transition-colors">Fitur Utama</a></li>
        <li><a href="#vision" class="hover:text-white transition-colors">Vision Dissector</a></li>
        <li><a href="#pricing" class="hover:text-white transition-colors">Harga</a></li>
        <li><a href="#changelog" class="hover:text-white transition-colors">Changelog</a></li>
      </ul>
    </div>

    <div>
      <h5 class="text-sm font-semibold text-white uppercase tracking-wider mb-4">Legalitas</h5>
      <ul class="space-y-2.5 text-sm">
        <li><a href="#privacy" class="hover:text-white transition-colors">Kebijakan Privasi</a></li>
        <li><a href="#terms" class="hover:text-white transition-colors">Syarat & Ketentuan</a></li>
        <li><a href="#security" class="hover:text-white transition-colors">Keamanan Data</a></li>
      </ul>
    </div>
  </div>

  <div class="max-w-7xl mx-auto pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
    <div>© 2026 AI UI/UX Architect Generator. Hak cipta dilindungi undang-undang.</div>
    <div class="flex items-center gap-6">
      <a href="#" class="hover:text-slate-300">Twitter / X</a>
      <a href="#" class="hover:text-slate-300">GitHub</a>
      <a href="#" class="hover:text-slate-300">Discord Community</a>
    </div>
  </div>
</footer>`
  }
];

function getAllComponents() {
  var components = COMPONENT_DATABASE.slice();
  try {
    var userProps = PropertiesService.getUserProperties();
    var customCompsJson = userProps.getProperty('CUSTOM_COMPONENTS');
    if (customCompsJson) {
      var customComps = JSON.parse(customCompsJson);
      if (Array.isArray(customComps)) {
        components = components.concat(customComps);
      }
    }
  } catch (e) {
    Logger.log('Error reading custom components: ' + e.message);
  }
  return components;
}

function queryComponentsFromDb(tagsOrQuery) {
  var allComps = getAllComponents();
  if (!tagsOrQuery) return allComps.slice(0, 4);

  var searchTokens = [];
  if (Array.isArray(tagsOrQuery)) {
    searchTokens = tagsOrQuery.map(function(t) { return String(t).toLowerCase().trim(); });
  } else if (typeof tagsOrQuery === 'string') {
    searchTokens = tagsOrQuery.toLowerCase().split(/[ ,+_-]+/).filter(Boolean);
  }

  var scored = allComps.map(function(comp) {
    var score = 0;
    var compTags = (comp.tags || []).map(function(t) { return t.toLowerCase(); });
    var compCategory = (comp.category || '').toLowerCase();
    var compName = (comp.name || '').toLowerCase();

    searchTokens.forEach(function(token) {
      if (compCategory === token) score += 5;
      if (compTags.indexOf(token) !== -1) score += 3;
      if (compName.indexOf(token) !== -1) score += 2;
    });

    return { comp: comp, score: score };
  });

  scored.sort(function(a, b) { return b.score - a.score; });
  var results = scored.filter(function(item) { return item.score > 0; }).map(function(item) { return item.comp; });
  return results.length > 0 ? results : allComps.slice(0, 3);
}
