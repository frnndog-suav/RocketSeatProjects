import { makeRegisterPetUseCase } from '@/use-cases/_factories/make-register-pet'
import {
    PetAge,
    PetEnergy,
    PetEnvironment,
    PetSize,
    PetSupport,
} from '@prisma/client'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function registerPetController(
    request: FastifyRequest,
    reply: FastifyReply
) {
    const registerBodySchema = z.object({
        name: z.string(),
        description: z.string(),
        age: z.enum([
            PetAge.NEWBORN,
            PetAge.BABY,
            PetAge.MIDDLE_AGE,
            PetAge.ADULT,
            PetAge.ELDER,
        ]),
        size: z.enum([
            PetSize.TINY,
            PetSize.SMALL,
            PetSize.MEDIUM,
            PetSize.BIG,
            PetSize.GIGANTIC,
        ]),
        energy: z.enum([
            PetEnergy.LOW,
            PetEnergy.MODERATE,
            PetEnergy.MEDIUM,
            PetEnergy.HIGH,
            PetEnergy.EXTREME,
        ]),
        self_support: z.enum([
            PetSupport.NONE,
            PetSupport.LOW_SUPPORT,
            PetSupport.MODERATE_SUPPORT,
            PetSupport.HIGH_SUPPORT,
            PetSupport.DEPENDENT,
        ]),
        environment: z.enum([
            PetEnvironment.INDOOR,
            PetEnvironment.ALL_SPACES,
            PetEnvironment.OUTDOOR,
        ]),
        imageUrl: z.string(),
        adoption_requirements: z.array(z.string()),
        postal_code: z.string(),
    })

    const {
        adoption_requirements,
        age,
        description,
        energy,
        environment,
        imageUrl,
        name,
        self_support,
        size,
        postal_code,
    } = registerBodySchema.parse(request.body)

    const registerPetUseCase = makeRegisterPetUseCase()

    await registerPetUseCase.execute({
        adoption_requirements,
        age,
        description,
        energy,
        environment,
        imageUrl,
        name,
        organization_id: request.user.sub,
        self_support,
        size,
        postal_code,
    })

    return reply.status(201).send()
}
