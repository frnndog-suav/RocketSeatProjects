import { Organization } from '@prisma/client'
import { ResourceNotFoundError } from '../_errors/resource-not-found-error'
import { OrganizationRepository } from './../../repositories/_interfaces/organization-repository-interface'

type TGetOrganizationUseCaseRequest = {
    organizationId: string
}

type TGetOrganizationUseCaseResponse = {
    organization: Organization
}

export class GetOrganizationUseCase {
    constructor(private organizationRepository: OrganizationRepository) {}

    async execute({
        organizationId,
    }: TGetOrganizationUseCaseRequest): Promise<TGetOrganizationUseCaseResponse> {
        const organization =
            await this.organizationRepository.findById(organizationId)

        if (!organization) {
            throw new ResourceNotFoundError()
        }

        return {
            organization,
        }
    }
}
