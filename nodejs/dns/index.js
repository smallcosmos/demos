const dns = require('dns');

//dns.lookup受本地host影响
dns.lookup('ofc-kl.netease.com', (err, address, family) => {
  console.log('ofc-kl.netease.com 通过dns.lookup解析为 IP 地址: %j 地址族: IPv%i', address, family);
});
const customServer = true;

const callback = (err, addresses) => {
    if (err) throw err;

    console.log(`ofc-kl.netease.com 通过dns.resolve4解析为 IP 地址: ${JSON.stringify(addresses)}`);
    addresses.forEach((a) => {
        dns.reverse(a, (err, hostnames) => {
            if (err) {
                throw err;
            }
            console.log(`IP 地址 ${a} 逆向解析到域名: ${JSON.stringify(hostnames)}`);
        });
    });
}
if(customServer) {
    const Resolver = dns.Resolver;
    const resolver = new Resolver();
    console.log('resolver.getServers: ', resolver.getServers());
    resolver.setServers(['114.114.114.114']);
    //resolver.resolve4不受本地host影响
    resolver.resolve4('ofc-kl.netease.com', callback);
}else {
    //dns.resolve4不受本地host影响
    dns.resolve4('ofc-kl.netease.com', callback);
}