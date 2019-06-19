const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  global.console.log('hello koa2')
  ctx.cookies.set('pvid', Math.random())
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json1',
    cookie: ctx.cookies.get('pvid')
  }
})

router.get('/test', async (ctx, next) => {
  const a = await new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('a', new Date().getTime())
      resolve(1)
    }, 1000)
  })
  const b = await new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('b', new Date().getTime())
      resolve(2)
    }, 1000)
  })
  const c = await new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('c', new Date().getTime())
      resolve(3)
    }, 1000)
  })

  ctx.body = {
    title: 'test',
    a,
    b,
    c
  }
})

module.exports = router
