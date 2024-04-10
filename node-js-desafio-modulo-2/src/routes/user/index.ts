import { FastifyInstance } from 'fastify'
import crypto from 'node:crypto'
import { z } from 'zod'
import { knex } from '../../database'

const MAX_COOKIE_AGE_7_DAYS = 60 * 60 * 24 * 7

export async function userRoutes(app: FastifyInstance) {
    app.post('/', async (request, reply) => {
        const createUserSchema = z.object({
            name: z.string().min(1),
        })

        const newUserGeneratedId = crypto.randomUUID()

        let { userId } = request.cookies

        if (!userId) {
            userId = newUserGeneratedId
            reply.cookie('userId', userId, {
                path: '/',
                maxAge: MAX_COOKIE_AGE_7_DAYS,
            })
        }

        const { name } = createUserSchema.parse(request.body)

        await knex('user').insert({
            id: newUserGeneratedId,
            name,
        })

        return reply.status(201).send()
    })
}
