const VConsolePlugin = require('vconsole-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';

// injection version number
process.env.VUE_APP_VERSION = require('./package.json').version;

module.exports = {
  publicPath: isProd ? '/' : '/',
  configureWebpack: {
    plugins: [
      new VConsolePlugin({
        filter: [], // 需要过滤的入口文件
        enable: process.env.NODE_ENV === 'development', // 发布代码前记得改回 false
      }),
    ],
  },
  // lintOnSave: process.env.NODE_ENV === 'development' ? 'warning' : 'error',
  lintOnSave: false,
  devServer: {
    overlay: {
      warning: false,
      errors: false,
    },
  },
  chainWebpack: (config) => {
    const oneOfsMap = config.module.rule('scss').oneOfs.store;
    oneOfsMap.forEach((item) => {
      item
        .use('sass-resources-loader')
        .loader('sass-resources-loader')
        .options({
          // 要公用的scss的路径
          resources: './src/assets/common/style/mixins.scss',
        })
        .end();
    });
  },
};
