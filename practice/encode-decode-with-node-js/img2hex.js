// Require file system access
fs = require('fs');

// Read file buffer 
imgReadBuffer = fs.readFileSync('test-pattern.jpg');

// Encode image buffer to hex
imgHexEncode = new Buffer.from(imgReadBuffer).toString('hex');

// Output encoded data to console
console.log(imgHexEncode);

// Decode hex
imgHexDecode = new Buffer.from(imgHexEncode, 'hex');

// Save decoded file file system
fs.writeFileSync('decodeHexImage.jpg', imgHexDecode);
