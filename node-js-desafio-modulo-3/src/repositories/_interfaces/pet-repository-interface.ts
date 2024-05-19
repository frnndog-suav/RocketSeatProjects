import {
    Pet,
    PetAge,
    PetEnergy,
    PetEnvironment,
    PetSize,
    PetSupport,
} from '@prisma/client'

export type PetCreationParams = {
    name: string
    description: string
    age: PetAge
    size: PetSize
    energy: PetEnergy
    self_support: PetSupport
    environment: PetEnvironment
    imageUrl: string
    adoption_requirements: string[]
    organization_id: string
    postal_code: string
}

export interface PetRepository {
    create(data: PetCreationParams): Promise<Pet>
    findById(id: string): Promise<Pet | undefined>
    fetchList(postalCode: {
        minInterval: number
        maxInterval: number
    }): Promise<Pet[]>
}
