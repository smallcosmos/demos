var cheerio = require('cheerio');

var $ = cheerio.load(document.body.innerHTML);
window.template = $('.demo-start').html();