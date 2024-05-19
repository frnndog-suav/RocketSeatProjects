import { makeGetOrganizationUseCase } from '@/use-cases/_factories/make-get-organization'
import { FastifyReply, FastifyRequest } from 'fastify'

export async function aboutOrganizationController(
    request: FastifyRequest,
    reply: FastifyReply
) {
    const getOrganizationUseCase = makeGetOrganizationUseCase()

    const { organization } = await getOrganizationUseCase.execute({
        organizationId: request.user.sub,
    })

    return reply.status(200).send({
        organization: {
            ...organization,
            password_hash: undefined,
        },
    })
}
