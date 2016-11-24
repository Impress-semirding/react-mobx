const path = require('path');

const projectPath = path.resolve(__dirname, '..');

config = {
  projectPath,
  modulePath: `${projectPath}/modules`,
  distPath: `${projectPath}/static`,
  libPath: `${projectPath}/static/libs`,
  publicPath: '/static/user/',
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
  }
};

module.exports = config;