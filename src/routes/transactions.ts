import crypto from 'node:crypto'

import { knex } from '../database'
import { FastifyInstance } from 'fastify'

export async function transactionsRoutes(app: FastifyInstance) {
  app.get('/hello01', async () => {
    const transaction = await knex('transactions').insert({
      id: crypto.randomUUID(),
      title: 'Test transaction',
      amount: 1000,
    })

    return transaction
  })

  app.get('/hello02', async () => {
    const transaction = await knex('transactions')
      .where('amount', 500)
      .select('*')

    return transaction
  })
}
