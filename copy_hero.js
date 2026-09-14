const fs = require('fs');
const path = require('path');

const src = "C:\\Users\\Lenovo\\.gemini\\antigravity-ide\\brain\\18f9dfa3-2898-4c57-8336-41a2bc30d156\\hero_male_batik_1789400419174.png";
const dest = path.join(__dirname, 'public', 'images', 'hero.png');

try {
  fs.copyFileSync(src, dest);
  console.log("SUCCESS: Gambar Hero berhasil diganti menjadi Laki-laki Batik Emas!");
} catch (err) {
  console.error("Error menyalin gambar:", err);
}
