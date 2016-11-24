const Express = require('express');
const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const webpackConfig = require('./configs');

// Initialize the Express App
const app = new Express();
const jsonServer = require('json-server')
const router = jsonServer.router('./data/db.json');
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
  app.use(webpackConfig.output.publicPath, Express.static('./dist'));
  //app.use(varConfig.publicPath, Express.static(varConfig.assetsPath));
} else {
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true, 
    //colors: true,
    publicPath: webpackConfig.output.publicPath
  }));
  app.use(webpackHotMiddleware(compiler));
  app.use(webpackConfig.output.publicPath, Express.static('./static'));
  app.use('/api', router);
}

const request = require('superagent');
app.use((req, res) => {
  if (process.env.NODE_ENV !== 'production') {
    res.render('index', {});
  } else {
    res.sendFile(path.resolve('./dist', './index.html'));
  }
});

app.listen(8080, '0.0.0.0', (error) => {
  if (error) {
    throw error;
  }

  console.log('app is running on 0.0.0.0:8080');
});
