const Koa = require('koa')

const app = new Koa()
const cors = require('@koa/cors')

app.use(cors())

app.use((ctx) => {
  console.log('LISTEN!!')
  ctx.response.status = 404
  ctx.body = { result: 'SUCCESS!!' }
})
app.listen(7001, () => {
  console.log('Server Running ON PORT : 7001!!')
})
