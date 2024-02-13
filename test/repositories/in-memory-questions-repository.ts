import { DomainEvents } from '@/core/events/domain-events'
import { IPaginationParams } from '@/core/repositories/pagination-params'
import { IQuestionAttachmentsRepository } from '@/domain/forum/application/repositories/interfaces/question-attachments-repository'
import { IQuestionsRepository } from '@/domain/forum/application/repositories/interfaces/questions-repository'
import { Question } from '@/domain/forum/enterprise/entities/question'

export class InMemoryQuestionsRepository implements IQuestionsRepository {
  public items: Question[] = []

  constructor(
    private questionAttachmentsRepository: IQuestionAttachmentsRepository,
  ) {}

  async create(question: Question) {
    this.items.push(question)

    await this.questionAttachmentsRepository.createMany(
      question.attachments.getItems(),
    )

    DomainEvents.dispatchEventsForAggregate(question.id)
  }

  async findBySlug(slug: string) {
    const question = this.items.find((item) => item.slug.value === slug)

    if (!question) {
      return null
    }

    return question
  }

  async findById(id: string) {
    const question = this.items.find((item) => item.id.toString() === id)

    if (!question) {
      return null
    }

    return question
  }

  async findManyRecent({ page }: IPaginationParams) {
    const questions = this.items
      .sort(
        (itemA, itemB) => itemB.createdAt.getTime() - itemA.createdAt.getTime(),
      )
      .slice((page - 1) * 20, page * 20)

    return questions
  }

  async delete(question: Question) {
    const itemIndex = this.items.findIndex((item) => item.id === question.id)

    this.items.splice(itemIndex, 1)

    this.questionAttachmentsRepository.deleteManyByQuestionId(
      question.id.toString(),
    )
  }

  async save(question: Question) {
    const itemIndex = this.items.findIndex((item) => item.id === question.id)

    this.items[itemIndex] = question

    await this.questionAttachmentsRepository.createMany(
      question.attachments.getNewItems(),
    )
    await this.questionAttachmentsRepository.deleteMany(
      question.attachments.getRemovedItems(),
    )

    DomainEvents.dispatchEventsForAggregate(question.id)
  }
}
