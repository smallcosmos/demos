const Hexo = require('hexo');
const path = require('path');
const argv = require('yargs').argv;

let hexo = new Hexo(path.join(__dirname, '../'), {dev: argv.dev});
hexo.init().then(function(){
    // hexo.load().then(function(){
    //     //
    // });
    hexo.call('generate', {}, function(){
        //
    });
});