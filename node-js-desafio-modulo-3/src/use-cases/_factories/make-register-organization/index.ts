import { PrismaOrganizationRepository } from '@/repositories/prisma/organizations'
import { RegisterOrganizationUseCase } from '@/use-cases/register-organization'

export function makeRegisterOrganizationUseCase() {
    const prismaUserRepository = new PrismaOrganizationRepository()
    return new RegisterOrganizationUseCase(prismaUserRepository)
}
