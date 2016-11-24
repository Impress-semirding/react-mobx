if (process.env.NODE_ENV === 'development') {
  module.exports = require('./index.dev.js');
} else {
  module.exports = require('./index.prod.js');
}
