import { IPaginationParams } from '@/core/repositories/pagination-params'
import { Question } from '@/domain/forum/enterprise/entities/question'

export abstract class IQuestionsRepository {
  abstract create(question: Question): Promise<void>
  abstract findBySlug(slug: string): Promise<Question | null>
  abstract findById(id: string): Promise<Question | null>
  abstract findManyRecent(params: IPaginationParams): Promise<Question[]>
  abstract delete(question: Question): Promise<void>
  abstract save(question: Question): Promise<void>
}
