/*
* Webpack dev config file [STARTING POINT]
* sidrit tandafili <forge405@gmail.com>
* https://github.com/sidis405/packstart
*/

//Supportin context, to serve bundle.js and index.html 
//from different paths
var path = require('path');

//yes. webpack.
var webpack = require('webpack');

//create plugin with common code
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('shared.js'):

module.exports = {
	//Resolve path context for js files
	context: path.resolve('js'),
	//Define entty points. File extensions are resolve in the
	// 'resolve' section
	entry: ['./utils', './app'],
	output: {
		//where to output the bundle
		path: path.resolve('build/js'),
		//where to serve it from to the http server
		publicPath: '/public/assets/js/',
		//filename
		filename: 'bundle.js'
	},

	plugins: [commonsPlugin],
	devServer: {
		//rewrite the base of urls for public content
		contentBase: 'public'
	},

	module: {
		preloaders: 
		[
			{
				//JSHINT settings in .jshint.rs
				test: /\.js$/,
				exclude: 'node_modules', 
				loader: 'jshint-loader'
			}
		],
		loaders: 
		[
			{
				// Es6 Transfpiling
				// presets in .babelrc
				test: /\.es6$/,
				exclude: 'node_modules',
				loader: "babel-loader"
			}
		]
	},

	resolve: {
		//extenstions to outomatically resolve
		extensions: ['', '.js', '.es6']
	}
}