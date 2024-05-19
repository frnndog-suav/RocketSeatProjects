import { PrismaPetRepository } from '@/repositories/prisma/pets'
import { ListPetsFromSpecificLocationUseCase } from '@/use-cases/list-pets-from-specific-location'

export function makeListPetsFromSpecificLocation() {
    const prismaPetRepository = new PrismaPetRepository()
    return new ListPetsFromSpecificLocationUseCase(prismaPetRepository)
}
