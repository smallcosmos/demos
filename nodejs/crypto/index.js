const crypto = require('crypto');
const fs = require('fs');

const secret = 'abcdefg';
const hash = crypto.createHmac('sha256', secret).update('I love cupcakes').digest('hex');
console.log('crypto.createHmac: ', hash);
// Prints:
//   c0fa1bc00531bd78ef38c628449c5102aeabd49b5dc3a2a516ea6ea959d6658e


//crypto.createCipher | 方式一：使用Cipher对象作为流
const cipher = crypto.createCipher('aes192', 'wtf...123');

let encrypted = '';
cipher.on('readable', () => {
  const data = cipher.read();
  if (data) {
    encrypted += data.toString('hex');
  }
});
cipher.on('end', () => {
  console.log('crypto.createCipher1: ', encrypted);
  // Prints: cb6c28bfe178b97887cd7a6c5ede6c67debb0c30309ee3090376879794758867
});

cipher.write('some clear text data');
cipher.end();

//crypto.createCipher | 方式二：使用Cipher和管道流
const cipher2 = crypto.createCipher('aes192', 'wtf...123');
const input = fs.createReadStream('./crypto/test.js');
const output = fs.createWriteStream('./crypto/test.enc');
input.pipe(cipher2).pipe(output);

//crypto.createCipher | 方式三：使用Cipher.update()和方式三：使用Cipher.final()
const cipher3 = crypto.createCipher('aes192', 'wtf...123');
let encrypted3 = '';
encrypted3 = cipher3.update('some clear text data', 'utf8', 'hex');
encrypted3 += cipher3.final('hex');
console.log('crypto.createCipher3: ', encrypted3);
// Prints: cb6c28bfe178b97887cd7a6c5ede6c67debb0c30309ee3090376879794758867


//crypto.createDecipher | 方式一：使用Cipher对象作为流
const decipher = crypto.createDecipher('aes192', 'wtf...123');

let decrypted = '';
decipher.on('readable', () => {
  const data = decipher.read();
  if (data)
    decrypted += data.toString('utf8');
});
decipher.on('end', () => {
  console.log('crypto.createDecipher1: ', decrypted);
  // Prints: some clear text data
});
const testEncrypted =
    'cb6c28bfe178b97887cd7a6c5ede6c67debb0c30309ee3090376879794758867';
decipher.write(testEncrypted, 'hex');
decipher.end();