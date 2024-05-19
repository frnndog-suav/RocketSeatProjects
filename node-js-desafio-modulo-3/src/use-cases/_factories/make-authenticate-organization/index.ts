import { PrismaOrganizationRepository } from '@/repositories/prisma/organizations'
import { AuthenticateOrganizationUseCase } from '@/use-cases/authenticate-organization'

export function makeAuthenticateOrganizationUseCase() {
    const prismaUserRepository = new PrismaOrganizationRepository()
    return new AuthenticateOrganizationUseCase(prismaUserRepository)
}
