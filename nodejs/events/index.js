const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('newListener', (event, listener) => {
    console.log('newListener: ', event);

});
//相同event默认最大监听数量为10个，非硬性限制，但是超出会报警告
console.log(myEmitter.getMaxListeners());
//会影响所有实例，谨慎使用
EventEmitter.defaultMaxListeners = 5;
//更优先选择实例扩展上限
myEmitter.setMaxListeners(10);
for(var i = 0; i< 11; ++i){
    myEmitter.on('event', () => {});
}

console.log(myEmitter.eventNames());

//{emitter, type, count}
process.on('warning', (event) => {
    console.log('warning: ', event.count)
});