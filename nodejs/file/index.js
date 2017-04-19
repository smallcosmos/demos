// about path
var path = require('path');
var normalize = path.normalize('/foo/bar/baz//test/..');
console.log("normalize:", normalize);

var join = path.join('/foo', 'bar', 'baz', '/test', '/..');
console.log("join:", join);

var resolve1 = path.resolve('/foo/bar', './baz');
console.log("resolve1:", resolve1);
var resolve2 = path.resolve('/foo/bar', '/baz');
console.log("resolve2:", resolve2);
var resolve3 = path.resolve('foo/bar', 'baz');
console.log("resolve3:", resolve3);

var relative = path.relative('/foo/bar/baz', '/foo');
console.log("relative:", relative);

var dirname = path.dirname('/foo/bar/baz/a.txt');
console.log("dirname:", dirname);
var basename = path.basename('/foo/bar/baz/a.txt');
console.log("basename:", basename);
var extname = path.extname('/foo/bar/baz/a.txt');
console.log("extname:", extname);


// about fileSystem
var fs = require('fs');
fs.stat('./test.txt', function(err, stats){
	if(err) {throw err;}
	console.log("stats:", stats);
	//stats.isFile()|stats.isDiretory()|stats.isBlockDevice() etc..
	console.log("isFile():", stats.isFile());
});

// r|r+|w|w+|a|a+
/*fs.open('./test.txt', 'r+', function(err, fd){
	if(err){throw err;}
	var readBuffer = new Buffer(1024);
	var bufferOffset = 0;
	var bufferLength = readBuffer.length;
	var filePosition = 0;
	fs.read(fd, readBuffer, bufferOffset, bufferLength, filePosition, function(err, readBytes){
		if(err){throw err;}
		console.log("read " + readBytes + "bytes");
		fs.close(fd, function(){
			console.log("file close");
		});
	});
});*/

/*fs.open('./test.txt', 'r+', function(err, fd){
	if(err){throw err;}
	var writeBuffer = new Buffer('writing text');
	var bufferOffset = 0;
	var bufferLength = writeBuffer.length;
	var filePosition = null;
	fs.write(fd, writeBuffer, bufferOffset, bufferLength, filePosition, function(err, writtenBytes){
		if(err){throw err;}
		console.log("write " + writtenBytes + "bytes");
		fs.close(fd, function(){
			console.log("file close");
		});
	});
});*/

/*fs.writeFile('./test.txt', "writing text", {flag: 'r+'}, function(err){
	if(err) {throw err;}
	console.log("write success");
});*/

fs.open('./test.txt', 'r', function(err, fd){
	if(err) {throw err;}
	fs.readFile(fd, 'utf8', function(err, data){
		if(err) {throw err;}
		fs.open('./output.txt', 'w', function(err, fd2){
			if(err) {throw err;}
			var content = 'writing text\n' + data;
			fs.writeFile(fd2, content, function(err){
				if(err) {throw err;}
				console.log("writing success");
				fs.close(fd2, function(){});
			});
		});
		fs.close(fd, function(){});
	})
})




