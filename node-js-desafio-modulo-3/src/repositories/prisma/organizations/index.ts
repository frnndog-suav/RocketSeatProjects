import { prisma } from '@/lib/prisma/prisma'
import { OrganizationRepository } from '@/repositories/_interfaces/organization-repository-interface'
import { Prisma } from '@prisma/client'

export class PrismaOrganizationRepository implements OrganizationRepository {
    async create(data: Prisma.OrganizationCreateInput) {
        const organization = await prisma.organization.create({
            data,
        })

        return organization
    }

    async findByEmail(email: string) {
        const organization = await prisma.organization.findUnique({
            where: {
                email,
            },
        })

        return organization
    }

    async findById(id: string) {
        const organization = await prisma.organization.findUnique({
            where: {
                id,
            },
        })

        return organization
    }
}
