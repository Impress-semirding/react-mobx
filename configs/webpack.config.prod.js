const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

const webpack = require('webpack');

const AssetsPlugin = require('../modules/assets-webpack-plugin');
const config = require('./config');

const baseCfg = {
  devtool: 'source-map',

  entry: [
    './web/index.prod.js',
  ],

  output: {
    path: config.distPath,
    filename: "[name].js",
    chunkFilename: '[name].[chunkhash].js',
    publicPath: config.publicPath
  },
  
  externals: {
    "jquery": "jQuery"
  },

  module: {
    loaders: [
      {
        test: /\.js?$/,
        include: config.srcPath,
        loader: 'babel'
      },
      {
        test:   /\.s?css$/,
        include: config.srcPath,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader!sass-loader')
      },
      { 
        test: /\.(jpe?g|png|gif|svg)$/i, 
        // include: config.srcPath,
        loader: `url?limit=10000&name=img/[name]_[hash].[ext]` 
      }
    ]
  },

  resolve: config.resolve,

  sassLoader: {
    // includePaths: [
    //   config.modulePath,
    //   `${config.projectPath}/pageShare/style`,
    //   `${config.projectPath}/node_modules/bootstrap-sass/assets/stylesheets`
    // ]
  },

  postcss: function () {
    return [autoprefixer({ browsers: ['> 0% in CN', 'IE 9'], outputStyle: 'expanded'})];
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'PLANTFORM': JSON.stringify('web'),
        'NODE_ENV': JSON.stringify('production'),
        'HOSTNAME': JSON.stringify('http://localhost:8080'),
      }
    }),
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /zh-cn/),
    // // boost build time
    // new webpack.DllReferencePlugin({
    //   context: config.projectPath,
    //   manifest: require("../vendor-manifest.json"),
    // }),
    new HtmlWebpackPlugin({
      // title: '指南针-高手直播室',
      template: `${config.projectPath}/web/template/index.prod.ejs`, // Load a custom template (ejs by default see the FAQ for details)
    }),
    new webpack.optimize.OccurenceOrderPlugin(),

    new ExtractTextPlugin('main', "style.css?[contenthash]" , { allChunks: true }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
        //drop_console: true
      }
    }),
    new AssetsPlugin({
      filename: 'assetsMap.json',
      assetsRegex: /\.(jpe?g|png|gif|svg|swf)\??/,
      prettyPrint: true,
    }),
      new webpack.optimize.CommonsChunkPlugin({
      name: 'app',

      children: true,
      // (use all children of the chunk)

      async: true,
      // (create an async commons chunk)

      // minChunks: 3,
      // // (3 children must share the module before it's separated)
    }),
  ]

}

module.exports =  baseCfg;