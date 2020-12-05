module.exports = {
  entry: 'src/app.js', // 入口文件
  ouput: {
    filename: "['hash.8'].js"
  },
  resolve: {
    extensions: ['js'] // 忽略后缀
  }
}