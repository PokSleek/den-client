const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: './src/main.tsx',
	context: path.resolve(__dirname),
	devtool: 'eval-source-map',

	resolve: {
		extensions: [".ts", ".tsx", ".js"],
		modules: [path.resolve(__dirname, 'src'), 'node_modules'],
	},

	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].bundle.js',
		// publicPath: '/',
	},

	module: {
		rules: [
			{
				test: /\.js(x?)$/,
				use: ['babel-loader'],
				exclude: /node_modules/,
			},
			{
				test: /\.ts(x?)$/,
				use: ["ts-loader"],
				exclude: /node_modules/
			},
			{
				enforce: 'pre',
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'eslint-loader',
				options: {
					fix: true,
				},
			},
			{
				test: /\.(css|scss)$/,
				use: ['style-loader', 'css-loader', 'sass-loader', MiniCssExtractPlugin.loader,],
			},
			{
				test: /\.(png|jp(e*)g|gif|ico)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'images/[hash]-[name].[ext]',
						},
					},
				],
			}
		],
	},

	plugins: [
		new HtmlWebpackPlugin({
			favicon: './src/public/images/favicon.ico',
			template: './src/public/index.html',
		}),
	],

	devServer: {
		contentBase: '/',
		port: 8000,
		historyApiFallback: true,
		inline: true,
		hot: true,
		open: true,
	},
};
