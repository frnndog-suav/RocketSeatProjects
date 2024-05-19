import { PrismaPetRepository } from '@/repositories/prisma/pets'
import { DetailsPetUseCase } from '@/use-cases/details-pet'

export function makeDetailsPetUseCase() {
    const petRepository = new PrismaPetRepository()
    return new DetailsPetUseCase(petRepository)
}
