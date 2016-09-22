//server.js
'use strict'

const express = require('express');
const app = express();
const http = require('http').Server(app);
const path = require('path');

//set the port to 8888 or your previously chosen port
const PORT = process.env.PORT || 8888;

//our webpack configuration for the middleware:
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('./webpack.config.js');
const compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'bundle.js',
  publicPath: webpackConfig.output.publicPath
}));
app.use(webpackHotMiddleware(compiler));

//send a test message to make sure its working
app.use(express.static(path.join(__dirname, 'dist')));

//start listening...
http.listen(PORT, () => {
  console.log('Listening on port', PORT)
});
