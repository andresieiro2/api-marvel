var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

var env = process.env.NODE_ENV || 'development';
var config = require('./config/webpack/' + env + '.config');

var entries = [
  __dirname + "/src/index.js"
];

var plugins = [
  new webpack.LoaderOptionsPlugin({
    options: {
      debug: config.debug,
      context: __dirname,
    }
  })
];

if (config.plugins) {
  for (var i = 0, l = config.plugins.length; i < l; i ++) {
    var plugin = config.plugins[i];

    plugins.push(plugin);
  }
}

module.exports = {
  devtool: config.devtool,
  entry: entries,
  output: config.output,
  context: path.resolve(__dirname, 'src'),
  devServer: {
    inline: true,
    hot: true,
    host: 'https://mvl-comics.herokuapp.com',
    contentBase: './public',
    port:  process.env.PORT || 4000,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [{
          loader: 'babel-loader',
          query: {compact: false}
        }],
        exclude: [
          path.resolve(__dirname, "/node_modules/")
        ],
      },
      {
        test: /\.(jpg|jpeg|png|gif|svg)/,
        use: [{
          loader: 'url-loader?limit=10000&name=assets/[name]-[hash].[ext]'
        }]
      },
      {
        test: /\.(pdf)/,
        use: [{
          loader: 'file-loader?name=assets/[name]-[hash].[ext]'
        }]
      },
      {
        test: /public\//,
        use: [{
          loader: 'file?name=[path][name].[ext]&context=./public'
        }]
      },
      {
        test: /\.s?css$/,
        use: [
          ...config.sassLoader,
          {
            loader: 'sass-resources-loader',
            options: {
              resources: [
                './src/config/stylesheets/includes/**/*.scss'
              ],
            }
          }
        ]
      },
      {
        test: /(\.woff|\.woff2|\.svg|.eot|\.ttf)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'file-loader?limit=1&name=fonts/[name]-[hash].[ext]',
        }]
      },
    ]
  },
  plugins: plugins,
  target: 'web',
}
