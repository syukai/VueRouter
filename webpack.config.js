// const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
	entry: 
		// "foo/entry":"./entry.js",
		// "bar/hello":"./hello.js",
		// "componentsample/componentsample":"./componentsample.js"
		'./02/index.js'
	,
  //vue-loader 15で必須
	// plugins:[
	// 	new VueLoaderPlugin()
	// ],
	output: {
		path: __dirname,
		// filename: "[name].js"
		filename: "./02/bundle.js"
	},
//  entry: './src/main.js',
//  output: {
//      path: __dirname,
//    path: "./build",
//    filename: 'build.js'
//  },
	module: {
		rules: [
			{ test: /\.css$/, loader: 'style-loader!css-loader' },
			{ test: /\.vue$/, loader: 'vue-loader' }
		]
	},
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm.js'
    }
  },
}