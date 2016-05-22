/*
* Webpack production config file [STARTING POINT]
* sidrit tandafili <forge405@gmail.com>
* https://github.com/sidis405/packstart
*/

//Require the stripper
var WebpackStrip = require('strip-loader');

//Load current dev config to ammend
var devConfig = require('./webpack.config.js')

var stripLoader = {
	//define the extensions to handle and what to exclude
	test: [/\.js$/, /\.es6$/],
	exclude: '/node_modules',
	//define what to strip
	loader: WebpackStrip.loader('console.log')
}

//add strippeer to the loaders for the build
devConfig.module.loaders.push(stripLoader);


module.exports = devConfig;