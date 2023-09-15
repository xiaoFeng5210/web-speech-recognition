// webpack.config.js

const path = require('path');
const WebpackDevServer = require('webpack-dev-server');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'development',
  entry: './src/index.js', // 入口文件
  plugins: [
    new HtmlWebpackPlugin({
     title: 'Development',
     template: 'index.html'
    }),
    new MiniCssExtractPlugin()
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
  // optimization: {
  //   runtimeChunk: 'single',
  // },
};
