const path = require('path');
const HWP = require('html-webpack-plugin');
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'build.js',
        path: path.join(__dirname, './dist/')
    },
    devServer: {
	    inline: false,
	    contentBase: "./dist",
	},
    module:{
        rules:[{
           test: /\.jsx?$/,
           exclude: /node_modules/,
           loader: 'babel-loader',
           query: {"presets":["env", "react"]}
        },
	    {
	        test: /\.(png|jpg|gif)$/,
	        use: [
	          {
	            loader: 'file-loader',
	            options: {
                name: '[path][name]-[hash:8].[ext]'
              },
	          }
	        ]
	    },
        {
          test: /\.(css|scss)$/,
           use: ['style-loader', 'css-loader',"sass-loader" ]
        } 
        ]
    },
    plugins:[
        new HWP(
           {template: path.join(__dirname,'./src/index.html')}
        ),
    ]
}