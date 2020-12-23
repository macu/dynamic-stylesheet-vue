const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
	mode: 'production',
	stats: 'errors-warnings',
	entry: [
		'./index.js',
	],
	output: {
		filename: 'index.js',
		path: __dirname + '/build',
		library: 'DynamicStylesheet',
		libraryTarget: 'umd',
	},
	optimization: {
		minimize: true,
	},
	externals: {
		'vue': 'Vue',
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader',
			},
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
					},
				},
			},
		],
	},
	plugins: [
		new VueLoaderPlugin(),
	],
};
