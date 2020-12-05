const router = require('koa-router')() // 引入路由


// router.get('/', async (ctx,next) =>{
//   await ctx.render('首页',{})
// })
router.get('/', async (ctx, next) => {
  // await ctx.render('首页',{})
   ctx.body = '首页'
})

router.get('/async', async (ctx,next) => {
  const reslut = await new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve('async')
    },2000)
  })
  ctx.body = reslut
})
// 获取 post 参数
router.post('/post', async (ctx,next) => {
  const {body} = ctx.request
  ctx.body = {
    ...body
  }
})

// 获取 get 参数

router.get('/get', async (ctx,next) => {
  const params = ctx.request.query
  ctx.body = {
    params
  }
})

module.exports = router