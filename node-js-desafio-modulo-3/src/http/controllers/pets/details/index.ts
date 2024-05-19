import { makeDetailsPetUseCase } from '@/use-cases/_factories/make-details-pet'
import { FastifyRequest } from 'fastify'
import { FastifyReply } from 'fastify/types/reply'
import { z } from 'zod'

export async function detailsPetController(
    request: FastifyRequest,
    reply: FastifyReply
) {
    const detailsPetParamSchema = z.object({
        petId: z.string().uuid(),
    })

    const { petId } = detailsPetParamSchema.parse(request.params)

    const detailsPetUseCase = makeDetailsPetUseCase()

    const { pet } = await detailsPetUseCase.execute({ petId })

    return reply.status(200).send({ pet })
}
