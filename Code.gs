/**
 * ==============================================================================
 * BACKEND CONTROLLER: AI UI/UX ARCHITECT GENERATOR
 * Google Apps Script (GAS) ES6
 * ==============================================================================
 * Mengatur alur kerja Multi-Step Agentic:
 * 1. Step 1 (Planner): Konversi prompt menjadi JSON UX Blueprint
 * 2. Step 2 (Component Retrieval): Pencarian komponen Tailwind di Database.gs
 * 3. Step 3 (Multimodal Vision): Bedah screenshot UI menjadi komponen Tailwind
 * 4. Step 4 (AI Code Assembler): Meracik HTML & Tailwind CSS utuh siap pakai
 */

// Model default Gemini API
const GEMINI_MODEL = "gemini-2.5-flash";
const GEMINI_BASE_URL = "https://generativelanguage.googleapis.com/v1beta/models/";

/**
 * Entry point Web App Google Apps Script
 */
function doGet(e) {
  const template = HtmlService.createTemplateFromFile("Index");
  return template.evaluate()
    .setTitle("AI UI/UX Architect Generator | Google Apps Script")
    .addMetaTag("viewport", "width=device-width, initial-scale=1.0")
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

/**
 * Mengambil API Key dari Script Properties
 */
function getStoredApiKey() {
  try {
    const props = PropertiesService.getScriptProperties();
    return props.getProperty("GEMINI_API_KEY") || "";
  } catch (err) {
    Logger.log("Gagal membaca ScriptProperties: " + err.message);
    return "";
  }
}

/**
 * Menyimpan API Key ke Script Properties
 */
function saveStoredApiKey(apiKey) {
  if (!apiKey || typeof apiKey !== "string") {
    throw new Error("API Key tidak valid.");
  }
  const props = PropertiesService.getScriptProperties();
  props.setProperty("GEMINI_API_KEY", apiKey.trim());
  return { success: true, message: "Gemini API Key berhasil disimpan di Script Properties." };
}

/**
 * Helper internal untuk melakukan HTTP POST ke REST API Gemini
 */
function callGeminiREST(endpoint, payload, apiKey) {
  const url = `${GEMINI_BASE_URL}${endpoint}?key=${encodeURIComponent(apiKey)}`;
  
  const options = {
    method: "post",
    contentType: "application/json",
    payload: JSON.stringify(payload),
    muteHttpExceptions: true
  };

  try {
    const response = UrlFetchApp.fetch(url, options);
    const responseCode = response.getResponseCode();
    const responseText = response.getContentText();

    if (responseCode !== 200) {
      let errorMsg = `Gemini API Error (HTTP ${responseCode})`;
      try {
        const errorJson = JSON.parse(responseText);
        if (errorJson.error && errorJson.error.message) {
          errorMsg += `: ${errorJson.error.message}`;
        }
      } catch (e) {
        errorMsg += `: ${responseText.substring(0, 150)}`;
      }
      throw new Error(errorMsg);
    }

    const json = JSON.parse(responseText);
    const candidate = json.candidates && json.candidates[0];
    if (!candidate || !candidate.content || !candidate.content.parts || !candidate.content.parts[0]) {
      throw new Error("Respon kosong atau diblokir oleh filter keamanan Gemini.");
    }

    return candidate.content.parts[0].text;
  } catch (error) {
    Logger.log("Error pada callGeminiREST: " + error.message);
    throw error;
  }
}

/**
 * Memastikan tersedianya API Key aktif
 */
function resolveApiKey(clientApiKey) {
  const key = (clientApiKey && clientApiKey.trim()) || getStoredApiKey();
  if (!key) {
    throw new Error("Gemini API Key belum dikonfigurasi. Masukkan API Key di pengaturan atau simpan ke Script Properties.");
  }
  return key;
}

/**
 * ==============================================================================
 * WORKFLOW UTAMA: MULTI-STEP AGENTIC GENERATOR
 * ==============================================================================
 * Menjalankan Step 1 -> Step 2 -> Step 4
 */
function processClientWorkflow(userPrompt, clientApiKey) {
  const apiKey = resolveApiKey(clientApiKey);
  
  if (!userPrompt || userPrompt.trim() === "") {
    throw new Error("Prompt klien tidak boleh kosong.");
  }

  Logger.log("=== MEMULAI WORKFLOW AGENTIC ===");
  Logger.log("Prompt Klien: " + userPrompt);

  // ----------------------------------------------------------------------------
  // STEP 1: PLANNER AGENT (Mengubah prompt kasar menjadi JSON UX Blueprint)
  // ----------------------------------------------------------------------------
  const plannerSystemInstruction = `Anda adalah Senior UX/UI Architect bertaraf dunia.
Tugas Anda adalah membedah ide kasar atau prompt klien menjadi JSON UX Blueprint yang terstruktur rapi.
Format respon Anda HARUS berupa format JSON murni tanpa markdown dengan skema:
{
  "businessNiche": "kategori bisnis/industri spesifik",
  "targetAudience": "demografi atau persona pengguna target",
  "designTone": "contoh: Modern Dark SaaS / Minimalist Luxury / Energetic Playful",
  "colorPalette": {
    "primary": "kode warna hex/tailwind (misal: #6366f1 / indigo-600)",
    "secondary": "kode warna hex/tailwind",
    "background": "misal: #090d16 / slate-950",
    "accent": "misal: #ec4899 / pink-500"
  },
  "sections": [
    {
      "id": "navbar",
      "category": "navbar",
      "title": "Sticky Glassmorphic Navigation",
      "purpose": "Navigasi utama dan call-to-action daftar",
      "requiredTags": ["navbar", "sticky", "glassmorphism"]
    },
    {
      "id": "hero",
      "category": "hero",
      "title": "High-Impact Hero Section",
      "purpose": "Headline nilai unik, social proof, dan CTA utama",
      "requiredTags": ["hero", "saas", "glow", "cta"]
    },
    {
      "id": "features",
      "category": "features",
      "title": "Bento Grid Capabilities",
      "purpose": "Menampilkan 4-6 keunggulan kompetitif produk",
      "requiredTags": ["features", "bento", "grid"]
    },
    {
      "id": "pricing",
      "category": "pricing",
      "title": "Tiered Pricing Plans",
      "purpose": "Tabel harga transparan dengan badge pilihan terbaik",
      "requiredTags": ["pricing", "tiers", "subscription"]
    },
    {
      "id": "footer",
      "category": "footer",
      "title": "Comprehensive Footer",
      "purpose": "Tautan pendukung, legalitas, dan newsletter",
      "requiredTags": ["footer", "links", "newsletter"]
    }
  ]
}`;

  const plannerPayload = {
    contents: [
      {
        role: "user",
        parts: [
          { text: `Permintaan Klien:\n"${userPrompt}"\n\nAnalisis dan susun UX Blueprint terstruktur dalam JSON.` }
        ]
      }
    ],
    systemInstruction: {
      parts: [{ text: plannerSystemInstruction }]
    },
    generationConfig: {
      temperature: 0.2,
      responseMimeType: "application/json"
    }
  };

  let blueprint;
  try {
    const rawBlueprint = callGeminiREST(`${GEMINI_MODEL}:generateContent`, plannerPayload, apiKey);
    blueprint = JSON.parse(rawBlueprint);
  } catch (err) {
    Logger.log("Planner error: " + err.message);
    blueprint = {
      businessNiche: "Modern Digital Product",
      targetAudience: "Tech Enthusiasts & Professionals",
      designTone: "Modern Dark Mode SaaS",
      colorPalette: { primary: "indigo-600", secondary: "purple-600", background: "slate-950", accent: "pink-500" },
      sections: [
        { id: "navbar", category: "navbar", requiredTags: ["navbar", "sticky"] },
        { id: "hero", category: "hero", requiredTags: ["hero", "saas", "glow"] },
        { id: "features", category: "features", requiredTags: ["features", "bento"] },
        { id: "footer", category: "footer", requiredTags: ["footer"] }
      ]
    };
  }

  // ----------------------------------------------------------------------------
  // STEP 2: COMPONENT RETRIEVAL (Mencari komponen di Database.gs)
  // ----------------------------------------------------------------------------
  let allSearchTags = [];
  if (blueprint.sections && Array.isArray(blueprint.sections)) {
    blueprint.sections.forEach(function(sec) {
      if (sec.requiredTags && Array.isArray(sec.requiredTags)) {
        allSearchTags = allSearchTags.concat(sec.requiredTags);
      }
      if (sec.category) {
        allSearchTags.push(sec.category);
      }
    });
  }

  const matchedComponents = queryComponentsFromDb(allSearchTags);
  const componentSummariesForClient = matchedComponents.map(function(c) {
    return { id: c.id, name: c.name, category: c.category, tags: c.tags };
  });

  const componentSnippetsContext = matchedComponents.map(function(c, idx) {
    return `--- REFERENSI KOMPONEN #${idx + 1} [Kategori: ${c.category}] (ID: ${c.id}) ---\n${c.html}`;
  }).join("\n\n");

  // ----------------------------------------------------------------------------
  // STEP 4: AI CODE ASSEMBLER (Meracik HTML & Tailwind CSS utuh)
  // ----------------------------------------------------------------------------
  const assemblerSystemInstruction = `Anda adalah Master Frontend Developer kelas dunia yang ahli meracik antarmuka web modern menggunakan Tailwind CSS.
Tugas Anda adalah menggabungkan UX Blueprint, referensi komponen database, dan permintaan klien menjadi satu dokumen HTML5 LENGKAP dan MANDIRI (Self-Contained).

PANDUAN DESAIN WAJIB:
1. Struktur Dokumen:
   - Awali dengan <!DOCTYPE html> hingga </html>.
   - Di dalam <head>, sertakan CDN Tailwind CSS: <script src="https://cdn.tailwindcss.com"></script>.
   - Gunakan Google Fonts (Inter atau Outfit) untuk tipografi modern dan premium.
   - Dukung font icon atau SVG inline yang bersih dan modern.
2. Gaya & Estetika:
   - Terapkan dark-mode modern yang mewah (background slate-950 atau zinc-950), gradien halus (radial glow blur), glassmorphism (backdrop-blur-md bg-slate-900/60 border border-slate-800/80).
   - Pastikan hierarki visual kuat, tombol CTA mencolok dengan hover micro-interaction dan bayangan glow yang elegan.
   - Responsif penuh untuk layar Mobile, Tablet, dan Desktop (menggunakan utility prefix sm:, md:, lg:, xl:).
3. Konten Realistis:
   - DILARANG menggunakan teks placeholder generik seperti "Lorem Ipsum". Buatkan teks copywriting bisnis yang nyata, menarik, dan selaras dengan niche klien.
4. Format Output:
   - Berikan HANYA kode HTML mentah (raw HTML code).
   - Jangan menyertakan blok markdown kutipan seperti \`\`\`html atau \`\`\`. Output harus langsung siap dimasukkan ke dalam iframe.srcdoc.`;

  const assemblerUserPrompt = `
KLIEN MEMINTA:
"${userPrompt}"

UX BLUEPRINT (HASIL STEP 1 PLANNER):
${JSON.stringify(blueprint, null, 2)}

DATABASE KOMPONEN TERPILIH (HASIL STEP 2 RETRIEVAL):
${componentSnippetsContext}

INSTRUKSI PERAKITAN:
Rakit dan selesaikan kode HTML5 lengkap dan responsif dengan Tailwind CSS yang mengimplementasikan urutan section dari blueprint di atas. Anda boleh mengadaptasi dan memodernisasi referensi komponen database yang diberikan agar menyatu harmonis dengan niche klien. Keluarkan HANYA kode HTML valid tanpa bungkus markdown.`;

  const assemblerPayload = {
    contents: [
      {
        role: "user",
        parts: [{ text: assemblerUserPrompt }]
      }
    ],
    systemInstruction: {
      parts: [{ text: assemblerSystemInstruction }]
    },
    generationConfig: {
      temperature: 0.35,
      maxOutputTokens: 8192
    }
  };

  let rawHtml = callGeminiREST(`${GEMINI_MODEL}:generateContent`, assemblerPayload, apiKey);
  let cleanHtml = rawHtml.replace(/^```html\s*/i, "").replace(/^```\s*/i, "").replace(/\s*```$/i, "").trim();

  return {
    success: true,
    htmlCode: cleanHtml,
    blueprint: blueprint,
    retrievedComponents: componentSummariesForClient
  };
}

/**
 * ==============================================================================
 * STEP 3: MULTIMODAL VISION UI DISSECTOR
 * ==============================================================================
 */
function analyzeUIFromImage(base64Data, mimeType, clientApiKey) {
  const apiKey = resolveApiKey(clientApiKey);

  if (!base64Data) {
    throw new Error("Data gambar tidak boleh kosong.");
  }

  let cleanBase64 = base64Data;
  if (base64Data.indexOf(",") !== -1) {
    cleanBase64 = base64Data.split(",")[1];
  }

  const detectedMime = mimeType || "image/png";

  const visionPrompt = `Anda adalah Lead UI/UX Reverse-Engineer.
Bedah screenshot antarmuka pengguna (UI) ini secara mendalam dan rekonstruksi komponen utamanya menjadi komponen HTML berbasis Tailwind CSS yang identik dan modern.

Keluarkan respon HANYA berupa JSON valid tanpa markdown dengan struktur:
{
  "name": "Nama komponen (misal: Modern Pricing Card atau Glassmorphic Hero)",
  "category": "pilih salah satu: navbar | hero | features | pricing | testimonials | footer | card",
  "tags": ["array", "kata", "kunci", "deskriptif"],
  "designStyle": "deskripsi gaya visual (misal: Dark Minimalist dengan Aksen Emerald)",
  "colorScheme": ["#hex1", "#hex2", "#hex3"],
  "typographyNotes": "catatan gaya teks dan hierarki",
  "html": "<div class=\\"...\\">...konten komponen HTML Tailwind CSS...</div>"
}`;

  const payload = {
    contents: [
      {
        role: "user",
        parts: [
          { text: visionPrompt },
          {
            inline_data: {
              mime_type: detectedMime,
              data: cleanBase64
            }
          }
        ]
      }
    ],
    generationConfig: {
      temperature: 0.25,
      responseMimeType: "application/json"
    }
  };

  try {
    const rawResult = callGeminiREST(`${GEMINI_MODEL}:generateContent`, payload, apiKey);
    const parsedComponent = JSON.parse(rawResult);

    return {
      success: true,
      component: parsedComponent
    };
  } catch (err) {
    Logger.log("Vision Dissector error: " + err.message);
    throw new Error("Gagal menganalisis gambar UI: " + err.message);
  }
}

/**
 * Menyimpan komponen baru hasil ekstraksi Vision ke UserProperties
 */
function saveCustomComponent(component) {
  if (!component || !component.name || !component.html) {
    throw new Error("Data komponen tidak lengkap.");
  }

  try {
    const userProps = PropertiesService.getUserProperties();
    let currentCustom = [];
    const currentJson = userProps.getProperty("CUSTOM_COMPONENTS");
    if (currentJson) {
      currentCustom = JSON.parse(currentJson);
    }

    component.id = "custom-" + Date.now();
    currentCustom.unshift(component);

    if (currentCustom.length > 20) {
      currentCustom = currentCustom.slice(0, 20);
    }

    userProps.setProperty("CUSTOM_COMPONENTS", JSON.stringify(currentCustom));
    return { success: true, componentId: component.id, message: "Komponen berhasil disimpan ke database pribadi!" };
  } catch (e) {
    Logger.log("Error saveCustomComponent: " + e.message);
    throw new Error("Gagal menyimpan komponen: " + e.message);
  }
}

function searchComponents(queryOrTags) {
  return queryComponentsFromDb(queryOrTags);
}

function getComponentDatabase() {
  return getAllComponents();
}
