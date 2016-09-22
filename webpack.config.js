//webpack.config.js
'use strict'

const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    app: [
      path.resolve(__dirname, 'app', 'index.js')
    ]
  },
  module: {
    loaders: [
      //applying the babel-loader to any .js file in our app directory
      { test: /\.js$/, include: path.join(__dirname, 'app'), loader: 'babel-loader' }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'bundle.js'
  }
}
