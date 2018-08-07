const dgram = require('dgram');
const server = dgram.createSocket('udp4');

server.on('close', () => {
    console.log('socket close');
});

server.on('error', (err) => {
    console.log(err);
});

server.on('listening',() => {
    console.log('socket listening...');
    server.setBroadcast(!0);//开启广播
    server.setTTL(128);
    server.send('大家好啊，我是服务端.',8061,'1.1.1.255');
});

server.on('message', (msg, rinfo) => {
    console.log(`receive message from ${rinfo.address}:${rinfo.port}`);
});

server.bind('8060', '1.1.1.69');