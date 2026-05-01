// ============================================================
// KRIYUS – Google Apps Script Web App
// File: Code.gs
//
// SETUP INSTRUCTIONS:
// 1. Go to https://script.google.com
// 2. Create a new project → name it "KRIYUS NGO Forms"
// 3. Paste this entire code into the editor
// 4. Replace SPREADSHEET_ID below with your Google Sheet ID
// 5. Run → setupSheets() once to create the sheet headers
// 6. Deploy → New deployment → Web App
//    - Execute as: Me
//    - Who has access: Anyone
// 7. Copy the Web App URL → paste into backend/.env
// ============================================================

// ── IMPORTANT: Replace with your Google Sheet ID ───────────
// The ID is in your Sheet URL:
// https://docs.google.com/spreadsheets/d/THIS_IS_THE_ID/edit
// deployment id = AKfycby6yScb63ek46mgd0xEF5qRo9kT2rF5GLEtGgXmSUGjGrtzHSElbxreIK4cAy41GG9t
// web app url=https://script.google.com/macros/s/AKfycby6yScb63ek46mgd0xEF5qRo9kT2rF5GLEtGgXmSUGjGrtzHSElbxreIK4cAy41GG9t/exec
var SPREADSHEET_ID = 'YOUR_GOOGLE_SHEET_ID_HERE';

// ── Sheet Names ─────────────────────────────────────────────
var SHEETS = {
  CONTACTS:   'CONTACTS',
  VOLUNTEERS: 'VOLUNTEERS',
  DONATIONS:  'DONATIONS'
};

// ── Column Headers ───────────────────────────────────────────
var HEADERS = {
  CONTACTS:   ['Timestamp', 'Name', 'Email', 'Phone', 'Subject', 'Message'],
  VOLUNTEERS: ['Timestamp', 'Name', 'Email', 'Phone', 'Skills', 'Area', 'Message'],
  DONATIONS:  ['Timestamp', 'Name', 'Email', 'Amount', 'Program', 'Message']
};


// ============================================================
// doPost – Main entry point for all form submissions
// ============================================================
function doPost(e) {
  try {
    // Parse the incoming JSON body
    var data = JSON.parse(e.postData.contents);
    var sheet = data.sheet; // 'CONTACTS' | 'VOLUNTEERS' | 'DONATIONS'

    if (!sheet || !SHEETS[sheet]) {
      return jsonResponse({ success: false, error: 'Invalid sheet name: ' + sheet });
    }

    var ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    var ws = ss.getSheetByName(SHEETS[sheet]);

    if (!ws) {
      return jsonResponse({ success: false, error: 'Sheet not found: ' + sheet });
    }

    var row = buildRow(sheet, data);
    ws.appendRow(row);

    return jsonResponse({ success: true, sheet: sheet, row: row });

  } catch (err) {
    return jsonResponse({ success: false, error: err.message });
  }
}


// ============================================================
// doGet – Health check endpoint (optional)
// ============================================================
function doGet(e) {
  return jsonResponse({
    status: 'ok',
    message: 'KRIYUS Google Apps Script is running',
    timestamp: new Date().toISOString()
  });
}


// ============================================================
// buildRow – Constructs the row array for each sheet type
// ============================================================
function buildRow(sheet, data) {
  var timestamp = data.timestamp || new Date().toISOString();

  if (sheet === 'CONTACTS') {
    return [
      timestamp,
      data.name    || '',
      data.email   || '',
      data.phone   || '',
      data.subject || 'General Inquiry',
      data.message || ''
    ];
  }

  if (sheet === 'VOLUNTEERS') {
    return [
      timestamp,
      data.name    || '',
      data.email   || '',
      data.phone   || '',
      data.skills  || '',
      data.area    || 'Any / Open to All',
      data.message || ''
    ];
  }

  if (sheet === 'DONATIONS') {
    return [
      timestamp,
      data.name    || '',
      data.email   || '',
      data.amount  || 'Not specified',
      data.program || 'General Fund',
      data.message || ''
    ];
  }

  return [timestamp, JSON.stringify(data)];
}


// ============================================================
// setupSheets – Run ONCE manually to create sheet structure
// Go to Run → Run function → setupSheets
// ============================================================
function setupSheets() {
  var ss = SpreadsheetApp.openById(SPREADSHEET_ID);

  Object.keys(SHEETS).forEach(function(key) {
    var name = SHEETS[key];
    var existing = ss.getSheetByName(name);

    if (!existing) {
      var ws = ss.insertSheet(name);
      ws.appendRow(HEADERS[key]);
      formatHeaderRow(ws);
      Logger.log('Created sheet: ' + name);
    } else {
      Logger.log('Sheet already exists: ' + name);
    }
  });

  Logger.log('Setup complete! All sheets are ready.');
}


// ============================================================
// formatHeaderRow – Makes headers bold and green
// ============================================================
function formatHeaderRow(ws) {
  var headerRange = ws.getRange(1, 1, 1, ws.getLastColumn());
  headerRange.setFontWeight('bold');
  headerRange.setBackground('#1B5E20');
  headerRange.setFontColor('#FFFFFF');
  ws.setFrozenRows(1);
}


// ============================================================
// jsonResponse – Returns a JSON ContentService response
// ============================================================
function jsonResponse(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}


// ============================================================
// testPost – Manual test function (run from Apps Script editor)
// ============================================================
function testPost() {
  var testData = {
    sheet: 'CONTACTS',
    name: 'Test User',
    email: 'test@example.com',
    phone: '+91 9999999999',
    subject: 'Test',
    message: 'This is a test submission from Apps Script editor.',
    timestamp: new Date().toISOString()
  };

  var mockEvent = {
    postData: {
      contents: JSON.stringify(testData)
    }
  };

  var result = doPost(mockEvent);
  Logger.log(result.getContent());
}
