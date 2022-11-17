const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './client/index.jsx',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'public'),
  },
  devServer: {
    port: 8000,
    // historyApiFallback: true,
    proxy: {
      '/api': 'http://localhost:8001'
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      // Cache is set to false to support CSS module reloading on change.
      cache: false,
      template: './client/index.html',
    }) 
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
      {
        // test: new RegExp('\\.css$'),
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
        ],
      }
    ],
  },
};