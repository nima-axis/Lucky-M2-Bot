/**
 * Anti-Delete Data Module
 * Manages the anti-delete feature toggle state
 */

const fs = require('fs');
const path = require('path');

const ANTIDEL_FILE = path.join(__dirname, 'antidel.json');

// Initialize file if it doesn't exist
if (!fs.existsSync(ANTIDEL_FILE)) {
  fs.writeFileSync(ANTIDEL_FILE, JSON.stringify({ enabled: false }, null, 2));
}

/**
 * Get current anti-delete status
 * @returns {Promise<boolean>}
 */
const getAnti = async () => {
  try {
    const data = fs.readFileSync(ANTIDEL_FILE, 'utf-8');
    const parsed = JSON.parse(data);
    return parsed.enabled === true;
  } catch (err) {
    console.error('[AntiDel] Error reading antidel.json:', err.message);
    return false;
  }
};

/**
 * Set anti-delete status
 * @param {boolean} status
 * @returns {Promise<boolean>}
 */
const setAnti = async (status) => {
  try {
    fs.writeFileSync(ANTIDEL_FILE, JSON.stringify({ enabled: Boolean(status) }, null, 2));
    return true;
  } catch (err) {
    console.error('[AntiDel] Error writing antidel.json:', err.message);
    return false;
  }
};

module.exports = { getAnti, setAnti };
