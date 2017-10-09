var webpack = require("webpack");
var ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    publicPath: '/dist/'
  },
  module: {
    rules: [
      { // regular css files
        test: /\.css$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          use: 'css-loader?importLoaders=1',
        }),
      },

      { // sass / scss loader for webpack
        test: /\.(sass|scss)$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'dist/[name].index.css',
      disable: false
    })
  ],
  watch: true
};

