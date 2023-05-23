import { FastifyReply, FastifyRequest } from 'fastify'

export async function logRequestMethodAndUrl(
  req: FastifyRequest,
  reply: FastifyReply,
) {
  console.log(`[${req.method}] ${req.url}`)
}
