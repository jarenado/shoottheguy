var webpack = require("webpack");
var ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js"
  },
  module: {
    rules: [
      { // regular css files
        test: /\.css$/,
        exclude: /node_modules/,
        use: 'css-loader'
      },

      { // sass / scss loader for webpack
        test: /\.(sass|scss)$/,
        exclude: /node_modules/,
        use: ['style-loader','css-loader',  'sass-loader']
      }
    ]
  },
  watch: true
};

