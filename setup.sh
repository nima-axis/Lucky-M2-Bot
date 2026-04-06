#!/bin/bash
# Lucky-M2-Bot Setup Script
# Run this after every git pull: bash setup.sh

echo "🔧 Patching Lucky-M2-Bot for Node.js v20 compatibility..."

# ─── 1. Fix package.json (downgrade baileys to CJS-compatible v6) ───
node -e "
const fs = require('fs');
const pkg = JSON.parse(fs.readFileSync('package.json','utf8'));
pkg.dependencies['@whiskeysockets/baileys'] = '^6.7.9';
fs.writeFileSync('package.json', JSON.stringify(pkg, null, 4));
console.log('✅ package.json → baileys ^6.7.9');
"

# ─── 2. Create data/ folder and missing files ───
mkdir -p data

if [ ! -f data/antidel.js ]; then
cat > data/antidel.js << 'ANTIDEL'
const fs = require('fs');
const path = require('path');
const ANTIDEL_FILE = path.join(__dirname, 'antidel.json');
if (!fs.existsSync(ANTIDEL_FILE)) {
  fs.writeFileSync(ANTIDEL_FILE, JSON.stringify({ enabled: false }, null, 2));
}
const getAnti = async () => {
  try { return JSON.parse(fs.readFileSync(ANTIDEL_FILE,'utf8')).enabled === true; }
  catch(e) { return false; }
};
const setAnti = async (status) => {
  try { fs.writeFileSync(ANTIDEL_FILE, JSON.stringify({ enabled: Boolean(status) }, null, 2)); return true; }
  catch(e) { return false; }
};
module.exports = { getAnti, setAnti };
ANTIDEL
echo "✅ data/antidel.js created"
fi

if [ ! -f data/autoStatus.json ]; then
  echo '{"enabled":false}' > data/autoStatus.json
  echo "✅ data/autoStatus.json created"
fi

# ─── 3. Create utils/baileys.js shim ───
cat > utils/baileys.js << 'BAILEYS'
let _cache = null;
async function preload() {
  if (_cache) return _cache;
  try { _cache = await import('@whiskeysockets/baileys'); }
  catch(e) { _cache = require('@whiskeysockets/baileys'); }
  return _cache;
}
function sync() {
  if (!_cache) throw new Error('[baileys-shim] Not preloaded. Ensure startBot() ran first.');
  return _cache;
}
module.exports = { preload, sync };
BAILEYS
echo "✅ utils/baileys.js shim created"

# ─── 4. Patch all files that use require('@whiskeysockets/baileys') ───
patch_file() {
  FILE=$1
  SHIM=$2
  if [ -f "$FILE" ]; then
    # Replace: const { ... } = require('@whiskeysockets/baileys');
    # With lazy wrapper pattern using node script
    node -e "
const fs = require('fs');
let c = fs.readFileSync('$FILE','utf8');
const orig = c;

// Match single-line require
c = c.replace(/const \{([^}]+)\} = require\(['\"]@whiskeysockets\/baileys['\"]\);/g, (m, names) => {
  const ns = names.split(',').map(n=>n.trim()).filter(Boolean);
  return \"const _bs = require('$SHIM');\n\" + ns.map(n=>\`function \${n}(...a){return _bs.sync().\${n}(...a);}\`).join('\n');
});

// Match multi-line require
c = c.replace(/const \{([^}]+)\}\s*=\s*require\(['\"]@whiskeysockets\/baileys['\"]\);/gs, (m, names) => {
  const ns = names.split(',').map(n=>n.trim()).filter(Boolean);
  return \"const _bs = require('$SHIM');\n\" + ns.map(n=>\`function \${n}(...a){return _bs.sync().\${n}(...a);}\`).join('\n');
});

if (c !== orig) { fs.writeFileSync('$FILE', c); console.log('✅ Patched: $FILE'); }
else { console.log('⚠️  No change: $FILE'); }
"
  fi
}

patch_file "handler.js"                           "./utils/baileys"
patch_file "utils/helpers.js"                     "./baileys"
patch_file "utils/jidHelper.js"                   "./baileys"
patch_file "commands/owner/setbotpp.js"           "../../utils/baileys"
patch_file "commands/owner/setmenuimage.js"       "../../utils/baileys"
patch_file "commands/general/take.js"             "../../utils/baileys"
patch_file "commands/general/simage.js"           "../../utils/baileys"
patch_file "commands/general/sticker.js"          "../../utils/baileys"
patch_file "commands/general/viewonce.js"         "../../utils/baileys"
patch_file "commands/general/viewonce2.js"        "../../utils/baileys"
patch_file "commands/general/crop.js"             "../../utils/baileys"
patch_file "commands/ai/gptimage.js"              "../../utils/baileys"
patch_file "commands/admin/groupstatus.js"        "../../utils/baileys"
patch_file "commands/admin/hidetag.js"            "../../utils/baileys"

# ─── 5. Patch index.js (use shim preload + lazy loadBaileys) ───
node -e "
const fs = require('fs');
let c = fs.readFileSync('index.js','utf8');
const orig = c;

// Replace old baileys require block
c = c.replace(
  /\/\/ Now safe to load libraries[\s\S]*?async function loadBaileys\(\) \{[\s\S]*?\}/m,
  \`// Now safe to load libraries
const pino = require('pino');

const _baileysShim = require('./utils/baileys');
let makeWASocket, useMultiFileAuthState, DisconnectReason, Browsers, fetchLatestBaileysVersion;
async function loadBaileys() {
  if (makeWASocket) return;
  const b = await _baileysShim.preload();
  makeWASocket = b.default;
  useMultiFileAuthState = b.useMultiFileAuthState;
  DisconnectReason = b.DisconnectReason;
  Browsers = b.Browsers;
  fetchLatestBaileysVersion = b.fetchLatestBaileysVersion;
}\`
);

if (c !== orig) { fs.writeFileSync('index.js', c); console.log('✅ Patched: index.js'); }
else { console.log('⚠️  index.js unchanged (may already be patched)'); }
"

# ─── 6. Install dependencies ───
echo ""
echo "📦 Installing packages (baileys v6)..."
npm install --ignore-scripts 2>&1 | tail -5

echo ""
echo "✅ Setup complete! Run: node index.js"
