import { listFromSpecificLocationController } from '@/http/controllers/pets/list-from-specific-location'
import { registerPetController } from '@/http/controllers/pets/register'
import { verifyJWT } from '@/http/middlewares/verify-jwt'
import { FastifyInstance } from 'fastify'

export async function petsRoutes(app: FastifyInstance) {
    app.post('/', { onRequest: [verifyJWT] }, registerPetController)

    app.get(
        '/list/:cityName',
        { onRequest: [verifyJWT] },
        listFromSpecificLocationController
    )
}
