const dgram = require('dgram');
const client = dgram.createSocket('udp4');

const singleBroadcast = true;

client.on('close',()=>{
    console.log('socket已关闭');
});

client.on('error',(err)=>{
    console.log(err);
});
client.on('message',(msg, rinfo)=>{
    if(msg=='exit') client.close();
    console.log(`receive message from ${rinfo.address}:${rinfo.port}`);
});

//client ip
if(!singleBroadcast) {
    client.bind(9998, '10.242.41.187');
}else{
    client.send(`hello`, 9999, '10.242.39.203');
}