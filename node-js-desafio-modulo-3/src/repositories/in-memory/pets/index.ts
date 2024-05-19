import {
    PetCreationParams,
    PetRepository,
} from '@/repositories/_interfaces/pet-repository-interface'
import { Pet } from '@prisma/client'

export class InMemoryPetRepository implements PetRepository {
    public items: Pet[] = []

    async create(data: PetCreationParams) {
        const newPet: Pet = {
            id: crypto.randomUUID(),
            name: data.name,
            description: data.description,
            age: data.age,
            energy: data.energy,
            environment: data.environment,
            self_support: data.self_support,
            size: data.size,
            imageUrl: data.imageUrl,
            adoption_requirements: data.adoption_requirements,
            organization_id: data.organization_id,
            postal_code: data.postal_code,
        }

        this.items.push(newPet)

        return newPet
    }

    async fetchList(postalCode: { minInterval: number; maxInterval: number }) {
        const list = this.items.filter((item) => {
            const formattedPostalCode = Number(
                item.postal_code.replace(/[^0-9]/g, '')
            )
            return (
                postalCode.minInterval > formattedPostalCode &&
                postalCode.maxInterval < formattedPostalCode
            )
        })

        return list
    }

    async findById(id: string) {
        const pet = this.items.find((item) => item.id === id)

        return pet
    }
}
