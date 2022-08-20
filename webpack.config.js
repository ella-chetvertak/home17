const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // mode: develop ? 'development' : 'production',
  mode: "development",
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true,
  },
  resolve: {
    fallback: {
      "fs": false,
      "tls": false,
      "net": false,
      "path": false,
      "zlib": false,
      "http": false,
      "https": false,
      "stream": false,
      "crypto": false,
      "crypto-browserify": require.resolve('crypto-browserify'),
      "buffer": false,
      "util": false,
      "url": false,
      "querystring": false,
    },
  },
  plugins: [
      new HtmlWebpackPlugin({
          template: './src/index.html'
      }),
  ],
  module: {
      rules: [
          {
              test: /\.(?:ico|png|jpg|jpeg|svg)$/i,
              type: 'asset/inline'
          },
          {
              test: /\.html$/i,
              loader: 'html-loader'
          },
      ]
  },
};