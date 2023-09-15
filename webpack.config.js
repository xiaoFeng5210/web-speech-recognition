// webpack.config.js

const path = require('path');
const WebpackDevServer = require('webpack-dev-server');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const mode = 'development';
module.exports = {
  mode,
  entry: './src/index.js', // 入口文件
  plugins: [
    new HtmlWebpackPlugin({
      title: '语音识别',
      template: 'index.html'
    }),
    new MiniCssExtractPlugin({
      filename: "main.css",
    })
  ],
  output: {
    filename: 'bundle.js', // 输出文件名
    path: path.resolve(__dirname, 'dist'), // 输出目录
    clean: true, // 清理dist文件夹
  },

  devServer: {
    static: './dist',
    port: 9000,
    host: 'localhost',
    hot: true,
    open: true
  },
  devtool: 'source-map',
  optimization: {
    // runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
          vendor: {
              priority: 10,
              minSize: 0,
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              chunks: 'all'
          },
          common: {
              priority: 9,
              minSize: 0,
              minChunks: 2,
              chunks: 'all',
              name: 'common'
          }
      }
  },
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
    ],
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src')
    }
  },
};
