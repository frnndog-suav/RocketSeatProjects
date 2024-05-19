import { InvalidCredentialsError } from '@/use-cases/_errors/invalid-credentials-error'
import { makeAuthenticateOrganizationUseCase } from '@/use-cases/_factories/make-authenticate-organization'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function authenticateOrganizationController(
    request: FastifyRequest,
    reply: FastifyReply
) {
    const authenticateBodySchema = z.object({
        email: z.string().email(),
        password: z.string(),
    })

    const { email, password } = authenticateBodySchema.parse(request.body)

    try {
        const authenticateOrganizationUseCase =
            makeAuthenticateOrganizationUseCase()

        const { organization } = await authenticateOrganizationUseCase.execute({
            email,
            password,
        })

        const token = await reply.jwtSign(
            {},
            {
                sign: {
                    sub: organization.id,
                },
            }
        )

        return reply.status(200).send({ token })
    } catch (error) {
        if (error instanceof InvalidCredentialsError) {
            return reply.status(400).send({
                message: error.message,
            })
        }

        throw error
    }
}
