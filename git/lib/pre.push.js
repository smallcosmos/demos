const { spawn } = require('child_process');

spawn('node', ['--inspect-brk', './email.js']);