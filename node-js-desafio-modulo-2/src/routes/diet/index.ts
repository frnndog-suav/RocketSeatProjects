import { FastifyInstance } from 'fastify'

import crypto from 'node:crypto'
import { z } from 'zod'
import { knex } from '../../database'
import { checkSessionIdExists } from '../../middlewares/checkSessionIdExists'

export async function dietRoutes(app: FastifyInstance) {
    app.post(
        '/',
        {
            preHandler: [checkSessionIdExists],
        },
        async (request, reply) => {
            const createDietSchema = z.object({
                name: z.string().min(1),
                description: z.string().min(1),
                is_diet_on_going: z.boolean(),
            })

            const { userId } = request.cookies

            const { description, is_diet_on_going, name } =
                createDietSchema.parse(request.body)

            await knex('diet').insert({
                id: crypto.randomUUID(),
                user_id: userId,
                name,
                description,
                is_diet_on_going,
            })

            return reply.status(201).send()
        }
    )

    app.get(
        '/list',
        {
            preHandler: [checkSessionIdExists],
        },
        async (request) => {
            const { userId } = request.cookies

            const diets = await knex('diet').where('user_id', userId).select()

            return {
                diets,
            }
        }
    )

    app.get(
        '/:id',
        {
            preHandler: [checkSessionIdExists],
        },
        async (request, reply) => {
            const dietSchema = z.object({
                id: z.string().uuid(),
            })

            const { userId } = request.cookies

            const { id } = dietSchema.parse(request.params)

            const diet = await knex('diet')
                .where({
                    id,
                    user_id: userId,
                })
                .first()

            if (!diet) {
                return reply.status(404).send({
                    error: 'Dieta não encontrada',
                })
            }

            return {
                diet,
            }
        }
    )

    app.get(
        '/totalMeals',
        {
            preHandler: [checkSessionIdExists],
        },
        async (request) => {
            const { userId } = request.cookies

            const totalMeals = await knex('diet')
                .where('user_id', userId)
                .count('user_id as count')
                .first()

            return {
                totalMeals,
            }
        }
    )

    app.get(
        '/mealsOnGoing',
        {
            preHandler: [checkSessionIdExists],
        },
        async (request) => {
            const { userId } = request.cookies

            const totalMealsOnGoing = await knex('diet')
                .where({
                    user_id: userId,
                    is_diet_on_going: true,
                })
                .count('user_id as count')
                .first()

            return {
                totalMealsOnGoing,
            }
        }
    )

    app.get(
        '/outOfDiet',
        {
            preHandler: [checkSessionIdExists],
        },
        async (request) => {
            const { userId } = request.cookies

            const mealsOutOfDiet = await knex('diet')
                .where({
                    user_id: userId,
                    is_diet_on_going: false,
                })
                .count('user_id as count')
                .first()

            return {
                mealsOutOfDiet,
            }
        }
    )

    app.get(
        '/bestSequence',
        {
            preHandler: [checkSessionIdExists],
        },
        async (request) => {
            const { userId } = request.cookies

            const list = await knex('diet')
                .where('user_id', userId)
                .orderBy('created_at', 'asc')

            const { bestSequence } = list.reduce(
                (acc, cur) => {
                    if (cur.is_diet_on_going) {
                        acc.currentSequence += 1
                    } else {
                        acc.currentSequence = 0
                    }

                    if (acc.currentSequence > acc.bestSequence) {
                        acc.bestSequence = acc.currentSequence
                    }

                    return acc
                },
                {
                    bestSequence: 0,
                    currentSequence: 0,
                }
            )

            return {
                bestSequence: {
                    count: bestSequence,
                },
            }
        }
    )

    app.put(
        '/:id',
        {
            preHandler: [checkSessionIdExists],
        },
        async (request, reply) => {
            const createDietSchema = z.object({
                name: z.string().min(1),
                description: z.string().min(1),
                is_diet_on_going: z.boolean(),
            })

            const dietSchema = z.object({
                id: z.string().uuid(),
            })

            const { userId } = request.cookies

            const { description, is_diet_on_going, name } =
                createDietSchema.parse(request.body)

            const { id } = dietSchema.parse(request.params)

            const diet = await knex('diet').where('id', id).first()

            if (!diet) {
                return reply.status(404).send({
                    error: 'Dieta não encontrada',
                })
            }

            await knex('diet').where('id', diet.id).update({
                user_id: userId,
                name,
                is_diet_on_going,
                description,
            })

            return reply.status(204).send()
        }
    )

    app.delete(
        '/:id',
        {
            preHandler: [checkSessionIdExists],
        },
        async (request, reply) => {
            const dietSchema = z.object({
                id: z.string().uuid(),
            })

            const { id } = dietSchema.parse(request.params)

            const diet = await knex('diet').where('id', id).first()

            if (!diet) {
                return reply.status(404).send({
                    error: 'Dieta não encontrada',
                })
            }

            await knex('diet').where('id', diet.id).del()

            return reply.status(204).send()
        }
    )
}
