import { PetRepository } from '@/repositories/_interfaces/pet-repository-interface'
import { Pet } from '@prisma/client'
import { ResourceNotFoundError } from '../_errors/resource-not-found-error'

type TDetailsPetUseCaseRequest = {
    petId: string
}

type TDetailsPetUseCaseResponse = {
    pet: Pet
}

export class DetailsPetUseCase {
    constructor(private petRepository: PetRepository) {}

    async execute({
        petId,
    }: TDetailsPetUseCaseRequest): Promise<TDetailsPetUseCaseResponse> {
        const pet = await this.petRepository.findById(petId)

        if (!pet) {
            throw new ResourceNotFoundError()
        }

        return { pet }
    }
}
