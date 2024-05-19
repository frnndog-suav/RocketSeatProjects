import { OrganizationRepository } from '@/repositories/_interfaces/organization-repository-interface'
import { Organization } from '@prisma/client'
import { compare } from 'bcryptjs'
import { InvalidCredentialsError } from '../_errors/invalid-credentials-error'

type TAuthenticateOrganizationUseCaseRequest = {
    email: string
    password: string
}

type TAuthenticateOrganizationUseCaseResponse = {
    organization: Organization
}

export class AuthenticateOrganizationUseCase {
    constructor(private organizationRepository: OrganizationRepository) {}

    async execute({
        email,
        password,
    }: TAuthenticateOrganizationUseCaseRequest): Promise<TAuthenticateOrganizationUseCaseResponse> {
        const organization =
            await this.organizationRepository.findByEmail(email)

        if (!organization) {
            throw new InvalidCredentialsError()
        }

        const doesPasswordMatches = await compare(
            password,
            organization.password_hash
        )

        if (!doesPasswordMatches) {
            throw new InvalidCredentialsError()
        }

        return {
            organization,
        }
    }
}
