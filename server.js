const Express = require('express');
const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

var webpackConfig = require('./configs/webpack.config.dev');

// Initialize the Express App
const app = new Express();

const compiler = webpack(webpackConfig);


app.set('views', './static');
app.set("view engine","ejs");

app.use(webpackDevMiddleware(compiler, {
  noInfo: true, 
  //colors: true,
  publicPath: webpackConfig.output.publicPath 
}));
app.use(webpackHotMiddleware(compiler));


app.use(webpackConfig.output.publicPath, Express.static('./static'));

const request = require('superagent');
app.use((req, res) => {
  // if (process.env.NODE_ENV !== 'production') {
  //   request
  //     .get(`http://localhost:8080${webpackConfig.output.publicPath}index.html`)
  //     .end(function(err, _res){
  //       res.send(_res.text);
  //     });
  //   } else {
  res.render('index', {});
    // }
});

app.listen(8080, '0.0.0.0', (error) => {
  if (error) {
    throw error;
  }

  console.log('app is running on 0.0.0.0:8080');
});