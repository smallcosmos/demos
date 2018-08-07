const asyncHooks = require('async_hooks');
const fs = require('fs');

const stack = new Map();
stack.set(-1, '');
let currentUid = -1;

function init(id, type, triggerId, resource) {
    fs.writeSync(1, `init==  id: ${id}, type: ${type}, trigggerId: ${triggerId}, resource: ${resource}\n`);
    const localStack = (new Error()).stack.split('\n').slice(1).join('\n');
    const extraStack = stack.get(triggerId || currentUid);
    stack.set(id, localStack + '\n' + extraStack);
}
function before(id) {
    fs.writeSync(1, `before==  id: ${id}\n`);
    currentUid = id;
}
function after(id) {
    fs.writeSync(1, `after==  id: ${id}\n`);
    currentUid = -1;
}
function destroy(id) {
    fs.writeSync(1, `destroy==  id: ${id}\n`);
    stack.delete(id);
}

const hook = asyncHooks.createHook({init, before, after, destroy});
hook.enable();

console.log('async_hook enabled');

/*自定义异步回调*/
class MyResource extends asyncHooks.AsyncResource {
    constructor() {
        super('my-resource');
    }

    asyncMethod(callback) {
        this.emitBefore();
        callback();
        this.emitAfter();
    }

    close() {
        this.emitDestroy();
    }
}

let resource = new MyResource;
resource.asyncMethod(() => { });
resource.close();

function IWantFullCallbacks() {
  setTimeout(function() {
    const localStack = new Error();
    console.log('my error: ', localStack.stack);
  }, 1000);
}
IWantFullCallbacks();