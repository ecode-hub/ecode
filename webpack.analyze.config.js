const merge = require('webpack-merge');
const config = require('./webpack.prod.config');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = merge(config, {
  plugins: [
    new BundleAnalyzerPlugin()
  ]
});

