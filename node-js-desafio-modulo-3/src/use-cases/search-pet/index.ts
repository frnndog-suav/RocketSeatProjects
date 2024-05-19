import { PetRepository } from '@/repositories/_interfaces/pet-repository-interface'

export class SearchPetUseCase {
    constructor(private prismaPetRepository: PetRepository) {}
}
