const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common');

const config = merge(common, {
	devtool: 'inline-source-map',
	devServer: {
		contentBase: './dist',
		historyApiFallback: true,
		hot: true,
		inline: true,
		progress: true,
		port: 9090
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
});

module.exports = config;