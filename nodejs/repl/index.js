const repl = require('repl');

const r = repl.start({prompt: '> '});
r.context.welcome = 'hello world!';

Object.defineProperty(r.context, 'author', {
  configurable: false,
  enumerable: true,
  value: 'linxingjian'
});