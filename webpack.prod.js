const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common');
const path = require('path');

const config = merge(common, {

	output: {
		filename: '[name].[chunkhash: 8].js',
		path: path.join(__dirname, 'dist')
	},

	plugins: [
		new UglifyJSPlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				'MODE_ENV': JSON.stringify('production')
			}
		})
	]
});

module.exports = config;