const os = require('os');

//操作系统相关的行末标志
//windows true
console.log('windows: ', os.EOL === '\r\n');
//POSIX
console.log('POSIX: ', os.EOL === '\n');

//Node.js 二进制编译所用的 操作系统CPU架构
console.log('os.arch(): ', os.arch(), process.arch);

//操作系统特定常量的对象
// console.log('os.constants: ', os.constants);

//逻辑 CPU 内核的信息
// console.log('os.cpus(): ', os.cpus());

//Node.js二进制编译环境的字节序
console.log('os.endianness(): ', os.endianness());

//空闲系统内存 的字节数
console.log('os.freemem(): ', os.freemem()/1024/1024 + 'MB');

//当前用户的home目录
console.log('os.homedir(): ', os.homedir());

//操作系统的主机名
console.log('os.hostname(): ', os.hostname());

//1, 5, 15分钟平均负载逻辑CPU的数目
console.log('os.loadavg(): ', os.loadavg());

//Node.js编译时的操作系统平台
console.log('os.platform(): ', os.platform(),  process.platform);

//操作系统的发行版
console.log('os.release(): ', os.release());

//操作系统的 默认临时文件目录
console.log('os.tmpdir(): ', os.tmpdir());

//系统内存的字节数
console.log('os.totalmem(): ', os.totalmem()/1024/1024/1024 + 'GB');

//操作系统的名字
console.log('os.type(): ', os.type());

//当前有效用户的信息
console.log('os.userInfo(): ', os.userInfo());
