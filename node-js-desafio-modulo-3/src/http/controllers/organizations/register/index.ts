import { OrganizationAlreadyExistsError } from '@/use-cases/_errors/organization-already-exists-error'
import { makeRegisterOrganizationUseCase } from '@/use-cases/_factories/make-register-organization'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function registerOrganizationController(
    request: FastifyRequest,
    reply: FastifyReply
) {
    const registerBodySchema = z.object({
        email: z.string().email(),
        password: z.string().min(6),
        owner_name: z.string(),
        organization_name: z.string(),
        postal_code: z.string(),
        street_name: z.string(),
        contact_number: z.string(),
    })

    const {
        contact_number,
        email,
        owner_name,
        password,
        postal_code,
        street_name,
        organization_name,
    } = registerBodySchema.parse(request.body)

    try {
        const registerOrganizationUseCase = makeRegisterOrganizationUseCase()

        await registerOrganizationUseCase.execute({
            contact_number,
            email,
            owner_name,
            password,
            postal_code,
            street_name,
            organization_name,
        })
    } catch (error) {
        if (error instanceof OrganizationAlreadyExistsError) {
            return reply.status(409).send({
                message: error.message,
            })
        }

        throw error
    }

    return reply.status(201).send()
}
