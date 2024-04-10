import fastifyCookie from '@fastify/cookie'
import fastify from 'fastify'
import { dietRoutes } from './routes/diet'
import { userRoutes } from './routes/user'

export const app = fastify()

app.register(fastifyCookie)

app.register(userRoutes, {
    prefix: 'user',
})

app.register(dietRoutes, {
    prefix: 'diet',
})
