import { DomainEvents } from '@/core/events/domain-events'
import { EventHandler } from '@/core/events/event-handler'
import { QuestionsRepository } from '@/domain/forum/application/repositories/questions'
import { ResourceNotFoundError } from '@/domain/forum/application/use-cases/_errors/resource-not-found'
import { AnswerCreatedEvent } from '@/domain/forum/enterprise/entities/events/answer-created-event'
import { SendNotificationUseCase } from '../../use-cases/send-notification'

export class OnAnswerCreated implements EventHandler {
  constructor(
    private questionsRepository: QuestionsRepository,
    private sendNotification: SendNotificationUseCase,
  ) {
    this.setupSubscriptions()
  }

  setupSubscriptions(): void {
    DomainEvents.register(
      this.sendNewAnswerNotification.bind(this),
      AnswerCreatedEvent.name,
    )
  }

  private async sendNewAnswerNotification({ answer }: AnswerCreatedEvent) {
    const question = await this.questionsRepository.findById(
      answer.questionId.toString(),
    )

    if (!question) {
      throw new ResourceNotFoundError()
    }

    await this.sendNotification.execute({
      recipientId: question.id.toString(),
      title: `Nova resposta em "${question.title.substring(0, 40).concat('...')}"`,
      content: answer.excerpt,
    })
  }
}
