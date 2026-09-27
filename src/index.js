'use strict'
/**
 * [EN]    eSocial use case — single sign-evento endpoint, KMS custody.
 *         Setup: npm install && cp .env.example .env  (edit .env)
 *         Run:   npm start
 *         POST http://localhost:3097/api/esocial/sign-evento
 * [PT-BR] Caso de uso eSocial — endpoint único de assinatura, custódia KMS.
 */
require('dotenv').config()
const Fastify = require('fastify')
const { sign } = require('./service')

const fastify = Fastify({ logger: true })
fastify.register(require('@fastify/multipart'))

fastify.post('/api/esocial/sign-evento', async (request, reply) => {
  const parts = request.parts()
  let document = null
  const fields = {}

  for await (const part of parts) {
    if (part.file) document = { buffer: await part.toBuffer(), filename: part.filename }
    else fields[part.fieldname] = part.value
  }

  if (!document || !fields.kmsCode) {
    return reply.status(400).send({ error: 'document and kmsCode are required' })
  }

  const signed = await sign(document, fields.kmsCode)
  if (!signed) return reply.status(500).send({ error: 'Signing failed. Check logs.' })

  reply.type('application/xml').header('Content-Disposition', 'attachment; filename="evento_esocial_signed.xml"')
  return signed
})

fastify.listen({ port: Number(process.env.PORT ?? 3097), host: '0.0.0.0' }, (err) => {
  if (err) { fastify.log.error(err); process.exit(1) }
})
