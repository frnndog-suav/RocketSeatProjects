import { makeListPetsFromSpecificLocation } from '@/use-cases/_factories/make-list-pets-from-specific-location'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import {
    StateCode,
    getPostalCodeInterval,
} from '../_functions/get-postal-code-interval'

export async function listFromSpecificLocationController(
    request: FastifyRequest,
    reply: FastifyReply
) {
    const listFromSpecificLocationParamsSchema = z.object({
        stateName: z.enum([
            'SP',
            'RJ',
            'ES',
            'MG',
            'BA',
            'SE',
            'PE',
            'AL',
            'PB',
            'RN',
            'CE',
            'PI',
            'MA',
            'PA',
            'AP',
            'AM',
            'RR',
            'AC',
            'DF',
            'GO',
            'TO',
            'MT',
            'RO',
            'MS',
            'PR',
            'SC',
            'RS',
        ]),
    })

    const { stateName } = listFromSpecificLocationParamsSchema.parse(
        request.params
    )

    const listPetsFromSpecificLocation = makeListPetsFromSpecificLocation()

    const postalCode = getPostalCodeInterval(stateName as StateCode)

    await listPetsFromSpecificLocation.execute({
        postalCodeInterval: {
            min: postalCode.minInterval,
            max: postalCode.maxInterval,
        },
    })

    return reply.status(200).send({ pets: listPetsFromSpecificLocation })
}
