const path = require('path')
const OpenBrowserPlugin = require('open-browser-webpack-plugin')
const Config = require('./config/config')
// webpack2不支持自定义eslint属性,module不支持preLoaders属性 
module.exports = {
	entry: path.resolve(__dirname, 'app/index.jsx'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
    },
    devServer: {
        port: 3000,//访问端口
    },
	// eslint: {
	// 	configFile:'.eslintrc.js'
	// },
	module: {
		// preLoaders: [
		// 	{
		// 		test: /\.js$/,
		// 		loader: 'eslint-loader',
		// 		exclude: /node_modules/
		// 	}
		// ],
		loaders: [
			{
				enforce: 'pre',
				test: /\.js$/,
				loader: 'eslint-loader',
				exclude: /node_modules/
			},
			{
				test: /\.jsx?$/, // 用正则表达式匹配文件路径
				loader: 'babel-loader', // 加载模块babel,它是babel-loader的缩写
				// query: {
				// 	presets: ['es2015', 'react']
				// }
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader'
			},
			{
				test: /\.scss$/,
				loader: 'style-loader!css-loader!sass-loader'
			},
			{
				test: /\.(png|jpg|jpeg|gif)$/,
				loader: 'url-loader'
			},
			{
				test: /\.(eot|woff|ttf|woff2|svg)$/,
				loader: 'url-loader'
			}
		]
	},
	plugins: [
		new OpenBrowserPlugin({url: `http://localhost:${Config.app_port}/`})
	]
}