// const path = require('path')
const Koa = require('koa')
const koaBody = require('koa-body')
const cors = require('@koa/cors')
const koaStatic = require('koa-static')
const koaCompose = require('koa-compose') // 整合 中间件
// const app = require('./routes/orion') // 洋葱模型

const app = new Koa()

// app.use(koaStatic(path.join(__dirname,'./'))) // 静态资源引入
// allowedMethods 
// 所以allowedMethods，顾名思义：就是当前接口运行的method。 比如，一个提供数据的接口，就可以设置为GET， 当客户端发送POST请求时，就会直接返回失败
// app.use(koaBody()) // 解析 json、 post等 传入的数据格式
// app.use(cors()) // 跨域

const middleware = koaCompose([ // 整合 中间件
  // koaStatic(path.join(__dirname,'./')),
  koaBody(),
  cors()
])
app.use(middleware)
const Home = require('./routes/home')
app.use(Home.routes()).use( Home.allowedMethods())
// 洋葱模型
app.on('error', (err,ctx) => {
  console.error(err+'出错了koa')
})
// app.listen(3000)

module.exports = app