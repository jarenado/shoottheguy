var webpack = require("webpack");


module.exports = {
  entry: "./src/app.js",
  output: {
    filename: "bundle.js"
  },
  module: {
    rules: [
      { // babel
        test: /\.js|jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
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

