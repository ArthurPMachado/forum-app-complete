import { IPaginationParams } from '@/core/repositories/pagination-params'
import { Question } from '@/domain/forum/enterprise/entities/question'
import { QuestionDetails } from '@/domain/forum/enterprise/entities/value-objects/question-details'

export abstract class IQuestionsRepository {
  abstract create(question: Question): Promise<void>
  abstract findBySlug(slug: string): Promise<Question | null>
  abstract findDetailsBySlug(slug: string): Promise<QuestionDetails | null>
  abstract findById(id: string): Promise<Question | null>
  abstract findManyRecent(params: IPaginationParams): Promise<Question[]>
  abstract delete(question: Question): Promise<void>
  abstract save(question: Question): Promise<void>
}
