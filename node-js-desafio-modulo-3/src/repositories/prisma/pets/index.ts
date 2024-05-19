import { prisma } from '@/lib/prisma/prisma'
import {
    PetCreationParams,
    PetRepository,
} from '@/repositories/_interfaces/pet-repository-interface'
import { Pet } from '@prisma/client'

export class PrismaPetRepository implements PetRepository {
    async create(data: PetCreationParams) {
        const pet = await prisma.pet.create({
            data,
        })

        return pet
    }

    async fetchList(postalCode: { minInterval: number; maxInterval: number }) {
        const pets = await prisma.$queryRaw<Pet[]>`
        SELECT 
            *
        FROM pets WHERE CAST(REGEXP_REPLACE(postal_code, '[^0-9]', '') AS UNSIGNED) >= ${postalCode.minInterval} and CAST(REGEXP_REPLACE(postal_code, '[^0-9]', '') AS UNSIGNED) <= ${postalCode.maxInterval}
        `

        return pets
    }

    async findById(id: string) {
        const pet = await prisma.pet.findUnique({
            where: {
                id,
            },
        })

        if (!pet) {
            return undefined
        }

        return pet
    }
}
