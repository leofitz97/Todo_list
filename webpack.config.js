const path = require('path');
const json5 = require('json5');

module.exports = {
	mode: 'development',
	entry: './src/index.js',

	devtool: 'inline-source-map',
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
		 {
			 test: /\.(png|svg|jpg|jpeg|gif)$/i,
			 type: 'asset/resource',
		 },
		 {
			test: /\.(woff|woff2|eot|ttf|otf)$/i,
			type: 'asset/resource',
			},
			{	
				test: /\.json5$/i,
				type: 'json',
				parser: {
					parse:json5.parse,
				},
			},	
		],
	},
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
    },
}