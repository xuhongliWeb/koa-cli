const Koa = require("koa")

const app = new Koa()

app.use(async (ctx, next) => {
  console.log("第一")
  await next()
  console.log("第一end")
})

app.use(async (ctx, next) => {
  await setTimeout(() => {
    console.log("第二")
  }, 2000)
  next()
  console.log("第二end")
})

app.use(async (ctx, next) => {
  console.log("第三")
  await next()
  console.log("第三end")
})

// 控制台 输出

// 第一
// 第二
// 第三
// 第三end
// 第二end
// 第一end

module.exports = app
