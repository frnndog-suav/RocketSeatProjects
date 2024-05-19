import { PrismaOrganizationRepository } from '@/repositories/prisma/organizations'
import { GetOrganizationUseCase } from '@/use-cases/get-organization'

export function makeGetOrganizationUseCase() {
    const prismaOrganizationRepository = new PrismaOrganizationRepository()
    return new GetOrganizationUseCase(prismaOrganizationRepository)
}
