var cheerio = require('cheerio');

var $ = cheerio.load(document.body.innerHTML);
$('body').prepend('<div class="demo-start"></div>');
window.template = $('.demo-start').nextUntil('script').html();