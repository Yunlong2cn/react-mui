var webpack = require('webpack');

module.exports = {
	entry: {
		main: './examples/src/app.js'
	},
	devServer: {
		hot: true,
		inline: true
	},
	output: {
		path: './dist',
		filename: 'js/[name].bundle.js'
	},
	resolve: {
		extensions: ['', '.js', 'index.js', '.css']
	},
	module: {
		loaders: [
			{
				test: /\.js/,
				loader: 'babel',
				query: {
					presets: ['es2015', 'react', 'stage-0']
				},
				exclude: /node_modules/
			}, {
				test: /\.css/,
				loader: 'style!css'
			}, {
				test: /\.ttf/,
				loader: 'url'
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	]
};