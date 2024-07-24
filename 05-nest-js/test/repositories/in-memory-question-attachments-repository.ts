import { QuestionAttachmentRepository } from '@/domain/forum/application/repositories/question-attachments'
import { QuestionAttachment } from '@/domain/forum/enterprise/entities/attachment/question-attachment'

export class InMemoryQuestionsAttachmentRepository
  implements QuestionAttachmentRepository
{
  public items: QuestionAttachment[] = []

  async findManyByQuestionId(
    questionId: string,
  ): Promise<QuestionAttachment[]> {
    const questionAttachments = this.items.filter(
      (item) => item.questionId.toString() === questionId,
    )

    return questionAttachments
  }

  async deleteManyByQuestionId(questionId: string): Promise<void> {
    const questionAttachments = this.items.filter(
      (item) => item.questionId.toString() !== questionId,
    )

    this.items = questionAttachments
  }

  async createMany(attachments: QuestionAttachment[]): Promise<void> {
    this.items.push(...attachments)
  }

  async deleteMany(attachments: QuestionAttachment[]): Promise<void> {
    this.items = this.items.filter((item) => {
      return !attachments.some((attachment) => attachment.equals(item))
    })
  }
}
