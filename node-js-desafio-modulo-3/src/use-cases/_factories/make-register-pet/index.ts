import { PrismaPetRepository } from '@/repositories/prisma/pets'
import { RegisterPetUseCase } from '@/use-cases/register-pet'

export function makeRegisterPetUseCase() {
    const prismaUserRepository = new PrismaPetRepository()
    return new RegisterPetUseCase(prismaUserRepository)
}
