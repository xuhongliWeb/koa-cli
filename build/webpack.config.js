const path = require('path')
// 有问题
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
module.exports = {
 entry: {
  index:path.join(__dirname,'src/index.js')
 },
 output: {
   filename: '[name:hash].js'
 },
 resolve: {
  extensions: ['.js']
 },
 devtool: 'eval-source-map',
 module: {
  rules: [
    {
      test: /\.(js|jsx)$/,
      use: {
        loader: 'babel-loader'
      }
    }
  ]
 },
 plugins: [
 ],
 node: {
   console:true
 }
}