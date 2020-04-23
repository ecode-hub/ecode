const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true
            }
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "sass-loader"
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      "@utils": path.resolve(__dirname, 'src/utils/'),
      "@styles": path.resolve(__dirname, 'src/styles/'),
      "@constants": path.resolve(__dirname, 'src/constants/'),
      "@containers": path.resolve(__dirname, 'src/containers/'),
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    new ForkTsCheckerWebpackPlugin()
  ]
};