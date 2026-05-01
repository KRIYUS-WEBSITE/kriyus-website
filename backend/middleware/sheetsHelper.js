// ============================================================
// sheetsHelper.js – Sends data to Google Apps Script Web App
// The Apps Script acts as a proxy that writes to Google Sheets
// ============================================================

const axios = require('axios');

const APPS_SCRIPT_URL = process.env.GOOGLE_APPS_SCRIPT_URL;

/**
 * Posts data to the Google Apps Script Web App endpoint.
 * @param {string} sheet - Sheet name: 'CONTACTS' | 'VOLUNTEERS' | 'DONATIONS'
 * @param {object} data  - Row data to append
 * @returns {Promise<object>} Apps Script response
 */
async function writeToSheet(sheet, data) {
  if (!APPS_SCRIPT_URL || APPS_SCRIPT_URL.includes('YOUR_DEPLOYMENT_ID')) {
    console.warn('⚠️  GOOGLE_APPS_SCRIPT_URL not configured. Data not saved to sheet.');
    // In dev mode without a real URL, we simulate success
    return { result: 'simulated', sheet, data };
  }

  const payload = {
    sheet,
    timestamp: new Date().toISOString(),
    ...data
  };

  const response = await axios.post(APPS_SCRIPT_URL, payload, {
    headers: { 'Content-Type': 'application/json' },
    timeout: 10000 // 10 second timeout
  });

  return response.data;
}

module.exports = { writeToSheet };
