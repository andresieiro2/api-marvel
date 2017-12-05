var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var appConfig = require('./../application.config');

var sassLoaders = [
  'style-loader',
  'css-loader?sourceMap',
  'sass-loader?sourceMap',
];

module.exports = {
  devtool: '#source-map',
  debug: true,
  sassLoader: sassLoaders,
  output: {
    path: path.join(process.cwd(), 'src'),
    filename: 'assets/bundle.js',
    publicPath: (appConfig.baseUrl + appConfig.path)
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      hash: true,
      filename: 'index.html',
      template: 'views/index.html'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ]
};
