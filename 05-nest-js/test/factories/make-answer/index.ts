import { Answer, TAnswerProps } from '@/domain/forum/enterprise/entities/answer'
import { UniqueEntityID } from '@/domain/forum/enterprise/entities/value-objects/unique-entity-id'
import { PrismaAnswerMapper } from '@/infra/database/prisma/mappers/prisma-answer-mapper'
import { PrismaService } from '@/infra/database/prisma/prisma.service'

import { faker } from '@faker-js/faker'
import { Injectable } from '@nestjs/common'

export function makeAnswer(
  override: Partial<TAnswerProps> = {},
  id?: UniqueEntityID,
) {
  return Answer.create(
    {
      authorId: new UniqueEntityID(),
      content: faker.lorem.text(),
      questionId: new UniqueEntityID(),
      ...override,
    },
    id,
  )
}

@Injectable()
export class AnswerFactory {
  constructor(private prisma: PrismaService) {}

  async makePrismaAnswer(data: Partial<TAnswerProps> = {}): Promise<Answer> {
    const answer = makeAnswer(data)

    await this.prisma.answer.create({
      data: PrismaAnswerMapper.toPrisma(answer),
    })

    return answer
  }
}
