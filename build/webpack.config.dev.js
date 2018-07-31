const webpack = require('webpack')
const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')


const PATHS = {
	src: path.join(__dirname, '../src'),
	dist: path.join(__dirname, '../dist')
};

console.log(path.resolve(__dirname, '../src/views/components'))

module.exports = {
	context: __dirname,
	mode: 'development',
	entry: PATHS.src,
	output: {
		path: PATHS.dist,
		filename: 'js/[name].js',
		publicPath: '/'
	},

	module: {
		rules: [
			{
				test: /.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /.scss$/,
				use: [
					{
						loader: "css-loader",
						options: {
							sourceMap: true,
							minimize: false
						}
					},
					{
						loader: 'resolve-url-loader',
						options: {
							sourceMap: true
						}
					},
					"postcss-loader",
					{
						loader: "sass-loader",
						options: {
							sourceMap: true
						}
					}
				]
			},
			{
				test: /.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.gif/,
				loader: "url-loader?limit=10000&mimetype=image/gif"
			},
			{
				test: /\.jpg/,
				loader: "url-loader?limit=10000&mimetype=image/jpg"
			},
			{
				test: /\.png/,
				loader: "url-loader?limit=10000&mimetype=image/png"
			}
		]
	},
	resolve: {
		extensions: ['.js', '.jsx', '.scss'],
		alias: {
			// Pages: path.resolve(__dirname, './src/pages/'),
			// Pages: __dirname + '/src/pages/'
			Redux: path.resolve(__dirname, '../src/redux/'),
			Components: path.resolve(__dirname, '../src/views/components'),
			Services: path.resolve(__dirname, '../src/services'),
			Utils: path.resolve(__dirname, '../src/utils')
		}
	},
	plugins: [
		// favicon
		new HtmlWebpackPlugin({
			title: '你今天想我了吗？',
			template: `${PATHS.src}/index.html`
		}),
		new webpack.HotModuleReplacementPlugin(),  // 热更新插件
		new webpack.DefinePlugin({
			PRODUCTION: JSON.stringify(false),
			DEBUG: true
		})
	],

	devServer: {
		contentBase: PATHS.dist, //启动本地服务时访问的根目录
		compress: true,
		headers: {
			'X-Content-Type-Options': 'nosniff',
			'X-Frame-Options': 'DENY'
		},
		open: true,
		overlay: {
			warnings: true,
			errors: true
		},
		port: 8088, // 配置端口
		publicPath: 'http://localhost:8088/',
		hot: true
	},
}
