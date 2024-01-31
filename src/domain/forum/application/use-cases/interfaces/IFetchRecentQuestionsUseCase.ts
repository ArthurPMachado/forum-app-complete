import { Either } from '@/core/either'
import { Question } from '@/domain/forum/enterprise/entities/question'

export interface IFetchRecentQuestionsUseCaseRequest {
  page: number
}

export type IFetchRecentQuestionsUseCaseResponse = Either<
  null,
  {
    questions: Question[]
  }
>
