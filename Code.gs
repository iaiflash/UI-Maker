/**
 * ==============================================================================
 * GOOGLE APPS SCRIPT BACKEND & GOOGLE SHEETS CONNECTOR
 * UI/UX Maker — Gemini Flash 3.6 & Live Spreadsheet Database
 * ==============================================================================
 * Petunjuk Penggunaan:
 * 1. Buka Google Sheet Anda: https://docs.google.com/spreadsheets/d/1uu1SffQ4xkOKaNVQjKX_mfSG3NwqVR0PFX8Xgk-1kIo/edit
 * 2. Klik Ekstensi > Apps Script.
 * 3. Tempelkan seluruh kode ini (replace semua kode lama).
 * 4. Klik Deploy > New deployment (Penerapan baru) > Jenis: Web App.
 *    - Execute as: Me (Email Anda)
 *    - Who has access: Anyone (Siapa saja)
 * 5. Klik Deploy dan salin URL Web App yang berakhiran /exec.
 * 6. Buka UI/UX Maker > Klik tombol Kunci (Pengaturan) > Tempelkan URL tersebut.
 */

// Fallback ID Spreadsheet pengguna (Database UI Maker)
const DEFAULT_SPREADSHEET_ID = "1uu1SffQ4xkOKaNVQjKX_mfSG3NwqVR0PFX8Xgk-1kIo";

/**
 * Mendapatkan referensi Sheet secara cerdas (baik container-bound maupun standalone)
 */
function getTargetSheet(e) {
  let ss = null;
  try {
    ss = SpreadsheetApp.getActiveSpreadsheet();
  } catch (err) {
    ss = null;
  }

  if (!ss) {
    const sheetId = (e && e.parameter && e.parameter.sheetId) ? e.parameter.sheetId : DEFAULT_SPREADSHEET_ID;
    try {
      ss = SpreadsheetApp.openById(sheetId);
    } catch (err) {
      throw new Error("Gagal membuka spreadsheet (" + sheetId + "). Pastikan script memiliki izin akses spreadsheet.");
    }
  }

  return ss.getActiveSheet();
}

/**
 * 1. ENTRY POINT WEB APP & GET REST ENDPOINT
 */
function doGet(e) {
  const action = e && e.parameter ? e.parameter.action : "";

  // A. Endpoint API: UI/UX Maker memanggil untuk membaca seluruh komponen dari Google Sheet
  if (action === "getComponents" || (e && e.parameter && e.parameter.callback)) {
    return getAllComponentsJson(e);
  }

  // B. Default: Jika dibuka langsung di browser, tampilkan status API atau Index
  try {
    const template = HtmlService.createTemplateFromFile("Index");
    return template.evaluate()
      .setTitle("UI/UX Maker — Google Apps Script Engine")
      .addMetaTag("viewport", "width=device-width, initial-scale=1.0")
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
  } catch (err) {
    return getAllComponentsJson(e);
  }
}

/**
 * 2. MEMBACA SELURUH KOMPONEN DARI GOOGLE SHEET (JSON OUTPUT)
 */
function getAllComponentsJson(e) {
  try {
    const sheet = getTargetSheet(e);
    const data = sheet.getDataRange().getValues();

    // Jika spreadsheet masih kosong atau hanya baris judul (header)
    if (!data || data.length <= 1) {
      return ContentService.createTextOutput(JSON.stringify({
        status: "success",
        total: 0,
        data: []
      })).setMimeType(ContentService.MimeType.JSON);
    }

    // Deteksi letak kolom berdasarkan nama header baris pertama
    const headers = data[0].map(function(h) { return String(h).toLowerCase().trim(); });
    const colCount = headers.length;

    let idIdx = headers.findIndex(function(h) { return h.indexOf("id") !== -1; });
    let nameIdx = headers.findIndex(function(h) { return h.indexOf("nama") !== -1; });
    let catIdx = headers.findIndex(function(h) { return h.indexOf("kategori") !== -1; });
    let codeIdx = headers.findIndex(function(h) { return h.indexOf("kode") !== -1 || h.indexOf("tailwind") !== -1 || h.indexOf("html") !== -1; });
    let iconIdx = headers.findIndex(function(h) { return h.indexOf("icon") !== -1; });
    let tagIdx = headers.findIndex(function(h) { return h.indexOf("tag") !== -1; });

    // Fallback jika header tidak standar:
    // Model 5 Kolom (seperti di Gambar 1 pengguna): [0: Timestamp, 1: ID, 2: Nama, 3: Kategori, 4: Kode Tailwind]
    if (idIdx === -1) idIdx = 1;
    if (nameIdx === -1) nameIdx = 2;
    if (catIdx === -1) catIdx = 3;
    if (codeIdx === -1) codeIdx = (colCount <= 6) ? 4 : 6;
    if (iconIdx === -1) iconIdx = (colCount > 6) ? 4 : -1;
    if (tagIdx === -1) tagIdx = (colCount > 6) ? 5 : -1;

    const components = [];
    for (let i = 1; i < data.length; i++) {
      const row = data[i];
      // Lewati baris kosong
      if (!row[0] && !row[1] && !row[2]) continue;

      const compId = row[idIdx] ? String(row[idIdx]) : `CMP-${i}`;
      const compName = row[nameIdx] ? String(row[nameIdx]) : "Komponen Kustom";
      const compCat = row[catIdx] ? String(row[catIdx]).toLowerCase().trim() : "kustom";
      const compCode = (codeIdx !== -1 && row[codeIdx]) ? String(row[codeIdx]) : "";
      const compIcon = (iconIdx !== -1 && row[iconIdx]) ? String(row[iconIdx]) : (compCat === 'navbar' ? 'menu' : (compCat === 'hero' ? 'view_sidebar' : 'extension'));
      const compTag = (tagIdx !== -1 && row[tagIdx]) ? String(row[tagIdx]) : "Google Sheets";

      components.push({
        timestamp: row[0] ? String(row[0]) : "",
        id: compId,
        name: compName,
        category: compCat,
        icon: compIcon,
        tag: compTag,
        code: compCode,
        miniHtml: ""
      });
    }

    return ContentService.createTextOutput(JSON.stringify({
      status: "success",
      total: components.length,
      data: components
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      message: err.message,
      data: []
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * 3. MENYIMPAN KOMPONEN BARU KE GOOGLE SHEET (POST ENDPOINT)
 */
function doPost(e) {
  try {
    const raw = e && e.postData ? e.postData.contents : "{}";
    const item = JSON.parse(raw);
    const sheet = getTargetSheet(e);

    // Inisialisasi Header otomatis jika sheet masih kosong sama sekali
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Timestamp",
        "ID Komponen",
        "Nama Komponen",
        "Kategori",
        "Kode Tailwind"
      ]);
      sheet.getRange(1, 1, 1, 5).setFontWeight("bold").setBackground("#f1f5f9");
    }

    const lastCol = sheet.getLastColumn();
    const newId = item.id || `CMP-${Math.floor(100 + Math.random() * 900)}`;
    const newName = item.name || "Komponen Kustom";
    const newCategory = (item.category || "kustom").toLowerCase().trim();
    const newCode = item.code || "";
    const newIcon = item.icon || "extension";
    const newTag = item.tag || "Kustom Anda";
    const newMiniHtml = item.miniHtml || "";

    // Sesuaikan format append baris dengan jumlah kolom sheet yang ada
    if (lastCol <= 5) {
      sheet.appendRow([
        new Date(),
        newId,
        newName,
        newCategory,
        newCode
      ]);
    } else {
      sheet.appendRow([
        new Date(),
        newId,
        newName,
        newCategory,
        newIcon,
        newTag,
        newCode,
        newMiniHtml
      ]);
    }

    return ContentService.createTextOutput(JSON.stringify({
      status: "success",
      message: "Komponen berhasil ditambahkan ke Google Sheets.",
      id: newId
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      message: err.message
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
