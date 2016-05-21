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
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('shared.js');

module.exports = {
	//Resolve path context for js files
	context: path.resolve('js'),
	//Define entty points. File extensions are resolve in the
	// 'resolve' section
	entry: {
		about: './about_page.js',
		contact: './contact_page.js',
		home: './home_page.js'
	},
	output: {
		//where to output the bundle
		path: path.resolve('build/js'),
		//where to serve it from to the http server
		publicPath: '/public/assets/js/',
		//filename varying on entry point
		filename: '[name].js'
	},

	//plugins here
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
			},
			{
				// CSS support
				test: /\.css$/,
				exclude: 'node_modules',
				//Pipe css first through css and then style
				//chain as many as needed
				loader: "style-loader!css-loader"
			},
			{
				// SASS support
				test: /\.scss$/,
				exclude: 'node_modules',
				loader: "style-loader!css-loader!sass-loader"
			}
		]
	}, 

	resolve: {
		//extenstions to outomatically resolve
		extensions: ['', '.js', '.es6']
	}
}