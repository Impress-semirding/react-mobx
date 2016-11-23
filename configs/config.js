const path = require('path');

const projectPath = path.resolve(__dirname, '..');

config = {
  projectPath,
  modulePath: `${projectPath}/modules`,
  distPath: `${projectPath}/assets`,
  libPath: `${projectPath}/assets/libs`,
  publicPath: '/static/user/',
};

// 需要 webpakc 编译的目录
config.srcPath = [ 
  `${projectPath}/modules`,
  `${projectPath}/shared`,
  `${projectPath}/web`,
]

config.resolve = {
  root: [
    // 模块路径 待定
    config.modulePath
  ],
  alias: {
    shared: `${config.projectPath}/shared/`,
    libs: config.libPath
  }
};

module.exports = config;