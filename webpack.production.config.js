const webpack = require('webpack');
const path = require('path');

module.exports = {

  // We change to normal source mapping
  devtool: 'source-map',
  entry: path.resolve(__dirname, 'src', 'App.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      exclude: [path.resolve(__dirname, 'node_modules')],
    }, {
      test: /\.css$/,
      loader: 'style!css',
    }],
  },
};
