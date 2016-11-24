const Express = require('express');
const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const webpackConfig = require('./configs');

// Initialize the Express App
const app = new Express();

const compiler = webpack(webpackConfig);


app.set('views', './static');
app.set("view engine","ejs");

if (process.env.NODE_ENV === 'production') {
  compiler.run(function(err, stats) {
    if(err) throw new Error("webpack", err);
    console.log("[webpack]", stats.toString({
      colors: true
    }));
  });
  //app.use(varConfig.publicPath, Express.static(varConfig.assetsPath));
} else {
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true, 
    //colors: true,
    publicPath: webpackConfig.output.publicPath 
  }));
  app.use(webpackHotMiddleware(compiler));
}


app.use(webpackConfig.output.publicPath, Express.static('./static'));

const request = require('superagent');
app.use((req, res) => {
  if (process.env.NODE_ENV !== 'production') {
    console.log('不是production')
    res.render('index', {});
  } else {
    console.log('production')
    request
    .get(`http://localhost:8080${webpackConfig.output.publicPath}index.html`)
    .end(function(err, _res){
      res.send(_res.text);
    });
  }
});

app.listen(8080, '0.0.0.0', (error) => {
  if (error) {
    throw error;
  }

  console.log('app is running on 0.0.0.0:8080');
});