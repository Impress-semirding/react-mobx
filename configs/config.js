const path = require('path');

const projectPath = path.resolve(__dirname, '..');


config = {
  projectPath,
  distPath: `${projectPath}/dist`,
  libPath: `${projectPath}/libs`,
  publicPath: '/static/',
};

// 需要 webpakc 编译的目录
config.srcPath = [ 
  `${projectPath}/src`,
  `${projectPath}/libs`
]

config.resolve = {
  alias: {
    libs: config.libPath
  },

  extensions: ['', '.js', '.jsx']
};

module.exports = config;