import { aboutOrganizationController } from '@/http/controllers/organizations/about'
import { authenticateOrganizationController } from '@/http/controllers/organizations/authenticate'
import { registerOrganizationController } from '@/http/controllers/organizations/register'
import { verifyJWT } from '@/http/middlewares/verify-jwt'
import { FastifyInstance } from 'fastify'

export async function organizationsRoutes(app: FastifyInstance) {
    app.post('/organization', registerOrganizationController)

    app.post('/session', authenticateOrganizationController)

    app.get('/about', { onRequest: [verifyJWT] }, aboutOrganizationController)
}
