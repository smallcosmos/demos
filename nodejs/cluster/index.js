const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  // 跟踪 http 请求
  let numReqs = 0;
  // setInterval(() => {
  //   console.log(`numReqs = ${numReqs}`);
  // }, 1000);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  for (const id in cluster.workers) {
    cluster.workers[id].on('message', messageHandler);
  }

  // 计算请求数目
  function messageHandler(msg) {
    if (msg.cmd && msg.cmd === 'notifyRequest') {
      numReqs += 1;
    }
  }

  cluster.on('fork', (worker) => {
    console.log('worker fork: ', worker.id, worker.process.pid);
  })
  cluster.on('online', (worker) => {
    console.log('worker online: ', worker.id, worker.process.pid);
  })
  cluster.on('listening', (worker) => {
    console.log('worker listening: ', worker.id, worker.process.pid);
  })
  cluster.on('disconnect', (worker) => {
    console.log('worker disconnect: ', worker.id, worker.process.pid);
  })
  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker exit: `, worker.id, worker.process.pid, code, signal);
    cluster.fork();
  });

  //cluster exit事件上绑定了fork操作，此处无法断开worker
  // cluster.disconnect(() => {
  //   console.log('master disconnect');
  // });
} else {
  // Workers can share any TCP connection
  // In this case it is an HTTP server
  http.createServer((req, res) => {
    console.log(cluster.worker.id, cluster.worker.process.pid)
    res.writeHead(200);
    res.end('hello world\n');

    // 通知 master 进程接收到了请求
    process.send({ cmd: 'notifyRequest' });
  }).listen(8000);

  console.log(`Worker ${process.pid} started`);
}