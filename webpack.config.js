const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './lib/index.js',
  target: 'node',
  module: {
    loaders: [
      { test: /\.json$/, loader: "json-loader" }
    ]
  },
  plugins: [
    new webpack.NormalModuleReplacementPlugin(/\/iconv-loader$/, 'node-wit')
  ],
  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, 'dist'),
    filename: 'index.js'
  },
};
