/* 中间件 */
function pv(ctx) { // ctx 全局对象 挂载信息（request, reponse）
  global.console.log(`pv: ${ctx.path}`)
}

module.exports = function() {
  return async function(ctx, next) {
    pv(ctx)
    await next() // 处理下一个异步函数 否则返回
  }
}