const path = require('path');
const webpack = require('webpack');
const AssetsPlugin = require('assets-webpack-plugin');
const config = require('./config');
var GenerateAssetPlugin = require('generate-asset-webpack-plugin');

//这就是那个你喜欢的写包含hash的json文件的部分
var createJson = function(compilation) {
    return JSON.stringify({hash: compilation.hash});
};

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
    // preLoaders: [
    //   {
    //     test: /\.(js|jsx)$/,
    //     loader: 'eslint-loader',
    //     include: config.srcPath,
    //   },
    // ],
    loaders: [
      {
        test: /\.jsx?$/,
        include: config.srcPath,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        exclude: '/node_modules/',
        loader: "style-loader!css-loader"
      },
      { test: /\.less/, loader: 'style-loader!css-loader!less-loader'},
      {
          test: /\.scss$/,
          exclude: '/node_modules/',
          loader: "style-loader!css-loader!sass-loader"
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
    new GenerateAssetPlugin({
      filename: 'test.json',//输出到根目录下的test.json文件
      fn: (compilation, cb) => {
          cb(null, createJson(compilation));
      },
      extraFiles: []
    })
  ]

}

module.exports =  baseCfg;