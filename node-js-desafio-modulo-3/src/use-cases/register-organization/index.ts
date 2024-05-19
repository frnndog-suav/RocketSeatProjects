import { OrganizationRepository } from '@/repositories/_interfaces/organization-repository-interface'
import { Organization } from '@prisma/client'
import { hash } from 'bcryptjs'
import { OrganizationAlreadyExistsError } from '../_errors/organization-already-exists-error'

type TRegisterOrganizationUseCaseRequest = {
    email: string
    contact_number: string
    owner_name: string
    password: string
    postal_code: string
    street_name: string
    organization_name: string
}

type TRegisterOrganizationUseCaseResponse = {
    organization: Organization
}

export class RegisterOrganizationUseCase {
    constructor(private organizationRepository: OrganizationRepository) {}

    async execute({
        contact_number,
        email,
        owner_name,
        password,
        postal_code,
        street_name,
        organization_name
    }: TRegisterOrganizationUseCaseRequest): Promise<TRegisterOrganizationUseCaseResponse> {
        const passwordHash = await hash(password, 6)

        const organizationWithSameEmail =
            await this.organizationRepository.findByEmail(email)

        if (organizationWithSameEmail) {
            throw new OrganizationAlreadyExistsError()
        }

        const organization = await this.organizationRepository.create({
            contact_number,
            email,
            owner_name,
            password_hash: passwordHash,
            postal_code,
            street_name,
            organization_name
        })

        return {
            organization,
        }
    }
}
