import fastify from 'fastify'
import { ZodError } from 'zod'
import { env } from './env'
import { organizationsRoutes } from './http/routes/organizations'
import fastifyJwt from '@fastify/jwt'
import { petsRoutes } from './http/routes/pets'

export const app = fastify()

app.register(fastifyJwt, {
    secret: env.JWT_SECRET,
})

app.register(organizationsRoutes)
app.register(petsRoutes, {
    prefix: 'pets'
})

app.setErrorHandler((error, request, reply) => {
    if (error instanceof ZodError) {
        return reply
            .status(400)
            .send({ message: 'Validation error', issues: error.format() })
    }

    if (env.NODE_ENV !== 'prod') {
        console.error(error)
    } else {
        //TODO log external tool like DataDog/NewRelic/Sentry
    }

    return reply.status(500).send({ message: 'Internal server error' })
})
