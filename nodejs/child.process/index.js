const { spawn, spawnSync } = require('child_process');
// const ls = spawn('ls', ['-lh', '/usr']);
// const ls = spawn('ls', ['-lh'], {
//     argv0: 'pwd',
//     cwd: '/usr'
// });

// 方式一： 配置stdio获取同步输出
// const lsSync = spawnSync('ls', ['-lh'], {stdio: [null, process.stdout, process.stderr]});
//方式二： 通过返回值获取输出
const lsSync = spawnSync('ls', ['-lh']);
console.log(lsSync.stdout.toString('utf8'));

// ls.stdout.on('data', (data) => {
//   console.log(`输出：${data}`);
// });

// ls.stderr.on('data', (data) => {
//   console.log(`错误：${data}`);
// });

// ls.on('close', (code) => {
//   console.log(`子进程退出码：${code}`);
// });

console.log('check for sync and async');