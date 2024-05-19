import { OrganizationRepository } from '@/repositories/_interfaces/organization-repository-interface'
import { Organization, Prisma } from '@prisma/client'

export class InMemoryOrganizationRepository implements OrganizationRepository {
    public items: Organization[] = []

    async create(data: Prisma.OrganizationCreateInput) {
        const newOrganization: Organization = {
            id: crypto.randomUUID(),
            email: data.email,
            owner_name: data.owner_name,
            contact_number: data.contact_number,
            password_hash: data.password_hash,
            postal_code: data.postal_code,
            street_name: data.street_name,
            organization_name: data.organization_name ?? '',
        }

        this.items.push(newOrganization)

        return newOrganization
    }

    async findByEmail(email: string) {
        const organization = this.items.find((item) => item.email === email)

        if (!organization) {
            return null
        }

        return organization
    }

    async findById(id: string) {
        const organization = this.items.find((item) => item.id === id)

        if (!organization) {
            return null
        }

        return organization
    }
}
