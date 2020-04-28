const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');
const config = require('./webpack.config');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(config, {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ],
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        // 分离 node_modules 中基本不变的模块
        base: {
          test: /[\\/]node_modules[\\/](highlight.js|react|react-dom)[\\/]/,
          name: 'base',
          chunks: 'all',
          priority: 2,
        },
        // 分离 node_modules 中的其他模块
        common: {
          test: /[\\/]node_modules[\\/]/,
          name: 'common',
          chunks: 'all',
          priority: 1,
        }
      }
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css'
    }),
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin()
  ],
});