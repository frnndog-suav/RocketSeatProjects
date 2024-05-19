import { PetRepository } from '@/repositories/_interfaces/pet-repository-interface'
import {
    Pet,
    PetAge,
    PetEnergy,
    PetEnvironment,
    PetSize,
    PetSupport,
} from '@prisma/client'

type RegisterPetUseCaseRequest = {
    adoption_requirements: string[]
    age: PetAge
    description: string
    energy: PetEnergy
    environment: PetEnvironment
    imageUrl: string
    name: string
    organization_id: string
    self_support: PetSupport
    size: PetSize
    postal_code: string
}

type RegisterPetUseCaseResponse = {
    pet: Pet
}

export class RegisterPetUseCase {
    constructor(private petRepository: PetRepository) {}

    async execute({
        adoption_requirements,
        age,
        description,
        energy,
        environment,
        imageUrl,
        name,
        organization_id,
        self_support,
        size,
        postal_code,
    }: RegisterPetUseCaseRequest): Promise<RegisterPetUseCaseResponse> {
        const pet = await this.petRepository.create({
            adoption_requirements,
            age,
            description,
            energy,
            environment,
            imageUrl,
            name,
            organization_id,
            self_support,
            size,
            postal_code,
        })

        return {
            pet,
        }
    }
}
