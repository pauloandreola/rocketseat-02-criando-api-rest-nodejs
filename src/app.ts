import fastify from 'fastify'
import cookie from '@fastify/cookie'

import { transactionsRoutes } from './routes/transactions'
import { logRequestMethodAndUrl } from './middlewares/log-method'

export const app = fastify()

app.register(cookie)

// Método para gerar um log de cada rota que for chamada globalmente. Utilizando o middleware logRequestMethodAndUrl
app.addHook('preHandler', logRequestMethodAndUrl)

app.register(transactionsRoutes, {
  prefix: 'transactions',
})
