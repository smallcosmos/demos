// const { spawn } = require('child_process');
// const path = require('path');

//远程分支的名字和位置
//origin git@github.com:smallcosmos/demos.git
console.log(process.env.HUSKY_GIT_PARAMS);
//一系列待更新的引用
//refs/heads/master 03d71c057153cc1f5e4e73a72576787e9bfb73c8 refs/heads/master 01d215c552774ee46c90ce75f14ea73753096fa1
console.log(process.env.HUSKY_GIT_STDIN);
debugger;
// spawn('node', ['--inspect-brk', path.join(__dirname, './email.js')]);
process.exit(1);