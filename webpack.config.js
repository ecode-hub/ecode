const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    app: './src/index.tsx'
  },
  output: {
    filename: '[name].js',
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
        test: /\.(gif|png|jpe?g|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      },
      {
        test: /\.module\.(css|scss)$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]__[hash:base64:10]'
              },														
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        // 正则太难学不会，试了很久才写了一下正则；下面的正则表示：
        // 可以通过 .scss 为结尾的样式文件， 但是不能通过以 .module.scss 为结尾的样式文件
        // 这样做参考自 create-react-app， .scss 可以全局，.module.scss 做模块化
        test: /(?<!\.module)\.(css|scss)$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@utils': path.resolve(__dirname, 'src/utils/'),
      '@hooks': path.resolve(__dirname, 'src/hooks/'),
      '@assets': path.resolve(__dirname, 'src/assets/'),
      '@config': path.resolve(__dirname, 'src/config/'),
      '@styles': path.resolve(__dirname, 'src/styles/'),
      '@models': path.resolve(__dirname, 'src/models/'),
      '@services': path.resolve(__dirname, 'src/services/'),
      '@constants': path.resolve(__dirname, 'src/constants/'),
      '@containers': path.resolve(__dirname, 'src/containers/'),
      '@components': path.resolve(__dirname, 'src/components/'),
      '@environments': path.resolve(__dirname, 'src/environments/')
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      favicon: './src/assets/icons/logo.ico'
    }),
    new ForkTsCheckerWebpackPlugin()
  ]
};