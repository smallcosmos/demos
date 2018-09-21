const http = require('http');

const proxy = http.createServer((req, res) => {
    console.log('http createServer: ', req.body);
    res.end();
});

proxy.listen(8888);
console.log('listen on port 8888');