const dgram = require('dgram');
const server = dgram.createSocket('udp4');

const singleBroadcast = false;
/*单播*/
server.on('close', () => {
    console.log('socket close');
});

server.on('error', (err) => {
    console.log(err);
});

server.on('listening', () => {
    console.log('socket listening...');
    if(!singleBroadcast) {
        //广播
        server.setBroadcast(!0);//开启广播
        server.setTTL(128);
        //ip: 10.242.39.203,
        //submask: 255.255.0.0,
        //网络地址: ip && submask = 10.240.0.0
        //网络号: 10.242.0.0
        //广播地址: 10.242.255.255
        server.send('hello, i am server.', 9998 , '10.242.255.255');
    }
});

server.on('message', (msg,rinfo) => {
    //Buffer to str, or use msg.toString()
    console.log('' + msg)
    console.log(`receive message from ${rinfo.address}:${rinfo.port}`);
    server.send('exit', rinfo.port, rinfo.address)
});

server.bind(9999, '10.242.39.203');