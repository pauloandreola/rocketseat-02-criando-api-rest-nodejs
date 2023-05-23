import fastify from 'fastify'
import cookie from '@fastify/cookie'

import { env } from './env'
import { transactionsRoutes } from './routes/transactions'
import { logRequestMethodAndUrl } from './middlewares/log-method'

const app = fastify()

app.register(cookie)

// Método para gerar um log de cada rota que for chamada globalmente. Utilizando o middleware logRequestMethodAndUrl
app.addHook('preHandler', logRequestMethodAndUrl)

app.register(transactionsRoutes, {
  prefix: 'transactions',
})

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
