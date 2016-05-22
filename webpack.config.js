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

//Require this to pluck out the css out of the js bundle file
//-UNCOMMENT TO USE THIS
//var ExtractTextPlugin = require('extract-text-webpack-plugin');
//var extractCss = new ExtractTextPlugin("styles.css");

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
		path: path.resolve('build/'),
		//where to serve it from to the http server
		publicPath: '/public/assets/',
		//filename varying on entry point
		filename: '[name].js'
	},

	//plugins here
	//plugins: [commonsPlugin, extractCss],
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
				//Pipe css first through style to place in the header and then css
				//chain as many as needed on the second param
				//UNCOMENT TO USE TEXT EXTACTION
				//loader: ExtractTextPlugin.extract("style-loader" , "css-loader!autoprefixer-loader")
				loader: "style-loader!css-loader!autoprefixer-loader"
			},
			{
				// SASS support
				test: /\.scss$/,
				exclude: 'node_modules',
				loader: "style-loader!css-loader!autoprefixer-loader!sass-loader"
			},
			{
				// LEss support
				test: /\.less$/,
				exclude: 'node_modules',
				loader: "style-loader!css-loader!autoprefixer-loader!less-loader"
			},
			{
				test: /\.(png|jpg)$/, 
				exclude: /node_modules/,
				loader: 'url-loader?limit=100000'
			}
		]
	}, 

	resolve: {
		//extenstions to outomatically resolve
		extensions: ['', '.js', '.es6']
	}
}