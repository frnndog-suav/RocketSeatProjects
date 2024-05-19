import { PetRepository } from '@/repositories/_interfaces/pet-repository-interface'

type TListPetsFromSpecificLocationUseCaseRequest = {
    postalCodeInterval: {
        min: number
        max: number
    }
}

type TListPetsFromSpecificLocationUseCaseResponse = {}

export class ListPetsFromSpecificLocationUseCase {
    constructor(private petRepository: PetRepository) {}

    async execute({
        postalCodeInterval,
    }: TListPetsFromSpecificLocationUseCaseRequest): Promise<TListPetsFromSpecificLocationUseCaseResponse> {
        const list = await this.petRepository.fetchList({
            minInterval: postalCodeInterval.min,
            maxInterval: postalCodeInterval.max,
        })

        return list
    }
}
