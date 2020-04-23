const merge = require('webpack-merge');
const config = require('./webpack.config');

/**
  开发环境使用路由使用 History 模式时，设置 devServer.historyApiFallback 为 true,防止404。
  生产环境如果使用 nignx 部署前端项目,添加如下配置:
  try_files $uri $uri/ /index.html;

  例如：
    location / {
      try_files $uri $uri/ /index.html;
      root /Users/erwang/Desktop/ecode/dist;
      index index.html index.htm;
    }
*/

module.exports = merge(config, {
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
    port: 3000,
    hot: true
  }
});

