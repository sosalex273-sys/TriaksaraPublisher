const fs = require('fs');

const images = [
  {
    src: 'C:\\Users\\Lenovo\\.gemini\\antigravity-ide\\brain\\3f51bbf7-cbce-42cd-84b9-234e214c70c5\\chindo_greenbg_edit_1784728680300.png',
    dest: 'public/images/hero.png'
  },
  {
    src: 'C:\\Users\\Lenovo\\.gemini\\antigravity-ide\\brain\\3f51bbf7-cbce-42cd-84b9-234e214c70c5\\indonesian_professionals_team_1784729566543.png',
    dest: 'public/images/about.png'
  },
  {
    src: 'C:\\Users\\Lenovo\\.gemini\\antigravity-ide\\brain\\3f51bbf7-cbce-42cd-84b9-234e214c70c5\\portfolio_jurnal_teknologi_1784729679103.png',
    dest: 'public/images/portfolio1.png'
  },
  {
    src: 'C:\\Users\\Lenovo\\.gemini\\antigravity-ide\\brain\\3f51bbf7-cbce-42cd-84b9-234e214c70c5\\portfolio_buku_bisnis_1784729697666.png',
    dest: 'public/images/portfolio2.png'
  },
  {
    src: 'C:\\Users\\Lenovo\\.gemini\\antigravity-ide\\brain\\3f51bbf7-cbce-42cd-84b9-234e214c70c5\\portfolio_jurnal_kesehatan_1784729713955.png',
    dest: 'public/images/portfolio3.png'
  },
  {
    src: 'C:\\Users\\Lenovo\\.gemini\\antigravity-ide\\brain\\3f51bbf7-cbce-42cd-84b9-234e214c70c5\\portfolio_paten_datamining_1784729733396.png',
    dest: 'public/images/portfolio4.png'
  }
];

fs.mkdirSync('public/images', { recursive: true });

images.forEach(img => {
  if (fs.existsSync(img.src)) {
    fs.copyFileSync(img.src, img.dest);
    console.log(`Copied ${img.dest}`);
  } else {
    console.log(`Missing: ${img.src}`);
  }
});
