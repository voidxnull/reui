const path = require('path');
const webpack = require('webpack');

module.exports = {
  cache: true,

  entry: [
    'webpack-dev-server/client?http://0.0.0.0:3001/',
    'webpack/hot/only-dev-server',
    './client'
  ],

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: 'http://localhost:3001/',
    filename: 'bundle.js',
    pathinfo: true
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel?cacheDirectory&optional=runtime&stage=0'],
        // query: {
        //   cacheDirectory: true,
        //   optional: ['runtime'],
        //   stage: 0
        // }
      },
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  debug: true,
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    inline: true,
    historyApiFallback: true,
    stats: {colors: true},
    quiet: false,
    noInfo: false,
    publicPath: '/',
    contentBase: './dist/',
    port: 3001
  }
};
