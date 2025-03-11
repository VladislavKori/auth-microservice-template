import Fastify from 'fastify'
import { router } from './handlers/router.js'
import { createDatabase } from './db/database.js'

const fastify = Fastify({
    logger: true
})

fastify.decorate("db", await createDatabase())
fastify.register(router, { prefix: "/v1" })

const start = async () => {
    try {
        await fastify.listen({ port: 3000 })
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}
start()