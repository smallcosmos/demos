const koa = require('koa');
const app = new koa();

app.use(async (ctx, next) => {
    console.log('koa middleware: ', ctx.request.path, ctx.request.method);
    await next();
});
app.listen(7777);
console.log('listen on port 7777');