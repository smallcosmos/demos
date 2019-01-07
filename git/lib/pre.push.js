const { spawn } = require('child_process');
const path = require('path');

spawn('node', ['--inspect-brk', path.join(__dirname, './email.js')]);
process.exit(0);