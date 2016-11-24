const path = require('path');
const webpack = require('webpack');
const AssetsPlugin = require('assets-webpack-plugin');
const config = require('./config');

const baseCfg = {
  devtool: 'source-map',

  entry: {
    app: [
      'react-hot-loader/patch',
      'webpack-hot-middleware/client?reload=true',
      './src/index'
    ]
  },

  output: {
    path:  config.distPath,
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
    publicPath: config.publicPath
  },
  
  externals: {
    jquery: 'jQuery'
  },

  module: {
    noParse: /libs\/.+\.min\..+/,
    loaders: [
      {
        test: /\.jsx?$/,
        include: config.srcPath,
        loader: 'babel'
      },
      {
        test:   /\.s?css$/,
        include: config.srcPath,
        loader: 'style-loader!css-loader!sass-loader'
      },
      { 
        test: /\.(jpe?g|png|gif|svg)$/i, 
        // include: config.srcPath,
        loader: `url?limit=10000&name=[path][name].[ext]` 
      }
    ]
  },

  resolve: config.resolve,

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'PLANTFORM': JSON.stringify('web'),
        'NODE_ENV': JSON.stringify('development'),
        'HOSTNAME': JSON.stringify('http://localhost:3000'),
      }
    }),
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /zh-cn/),
    // boost build time
    new webpack.DllReferencePlugin({
      context: config.projectPath,
      manifest: require("../vendor-manifest.json"),
    }),
    // enable hot module replacement
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new AssetsPlugin({
      filename: 'assetsMap.json',
      assetsRegex: /\.(jpe?g|png|gif|svg|swf)$/,
      prettyPrint: true
    }),
  ]

}

module.exports =  baseCfg;