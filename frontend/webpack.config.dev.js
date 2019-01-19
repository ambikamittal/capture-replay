var path = require('path')
var webpack = require('webpack')

module.exports = {
  devtool: 'eval',
 
  entry: [
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        loaders: ['babel-loader', 'eslint-loader'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
	   {test: /\.js$/, loader: 'babel-loader'},
      {
        test: /\.md/,
        loaders: ['html-loader', 'markdown-loader']
      }
    ]
  }
}
