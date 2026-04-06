/**
 * Baileys ESM/CJS Compatibility Shim
 * Supports baileys v7 (ESM) and v6 (CJS) without crashing on require()
 */

let _cache = null;

/**
 * Preload baileys module (call this once at startup with await)
 */
async function preload() {
  if (_cache) return _cache;
  try {
    _cache = await import('@whiskeysockets/baileys');
  } catch (e) {
    // fallback for CJS builds
    _cache = require('@whiskeysockets/baileys');
  }
  return _cache;
}

/**
 * Synchronous getter — works ONLY after preload() has been awaited
 */
function sync() {
  if (!_cache) throw new Error('[baileys-shim] Not preloaded yet. Ensure startBot() ran first.');
  return _cache;
}

module.exports = { preload, sync };
