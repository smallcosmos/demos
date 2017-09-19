var path = require('path');

module.exports = {
    entry: {
        "easy-codepen": './index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].min.js',
        library: 'easy-codepen',
        libraryTarget: 'umd'
    }
}