const https = require('https');

https.get('https://goacademica.com', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    const regex = /<img[^>]+src="([^">]+)"/g;
    let match;
    const urls = new Set();
    while ((match = regex.exec(data)) !== null) {
      if (match[1].toLowerCase().includes('paper') || match[1].toLowerCase().includes('sinta') || match[1].includes('1.') || match[1].includes('2.') || match[1].includes('wp-content')) {
        urls.add(match[1]);
      }
    }
    console.log(Array.from(urls).join('\n'));
  });
}).on('error', (err) => {
  console.log("Error: " + err.message);
});
