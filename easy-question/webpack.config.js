var path = require('path');

module.exports = {
	entry: {
		"easy-question": './index.js',
		"vendor": ['nek-ui', 'regular']
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].min.js',
		library: 'easy-question',
		libraryTarget: 'umd'
	}
}