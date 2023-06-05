import { app } from './app'
import { env } from './env'

app.get('/hello', () => {
  return 'Hello World'
})

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP Server Running!')
  })
