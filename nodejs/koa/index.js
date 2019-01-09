const koa = require('koa');
const app = new koa();

app.use(async(ctx, next) => {
    console.log('koa middleware: ', ctx.request.path, ctx.request.method);
    console.log(ctx.path);
    if(ctx.path === '/a') {
        console.log(ctx.a.b);
    }
    ctx.body = {
        code: 200,
        message: 'success'
    };
    await next();
});
app.listen(80);
console.log('listen on port 80');