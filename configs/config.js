const path = require('path');

const projectPath = path.resolve(__dirname, '..');

config = {
  projectPath,
  modulePath: `${projectPath}/modules`,
  distPath: `${projectPath}/dist`,
  libPath: `${projectPath}/dist/libs`,
  publicPath: '/static/',
};

// 需要 webpakc 编译的目录
config.srcPath = [ 
  `${projectPath}/src`,
]

config.resolve = {

  root: [
    // 模块路径 待定
    config.modulePath
  ],
  alias: {
    shared: `${config.projectPath}/shared/`,
    libs: config.libPath
  },

  extensions: ['', '.js', '.jsx']
};

module.exports = config;