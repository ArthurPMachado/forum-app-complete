import { Either } from '@/core/either'
import { ResourceNotFoundError } from '@/core/errors/errors/resource-not-found-error'
import { QuestionDetails } from '@/domain/forum/enterprise/entities/value-objects/question-details'

export interface IGetQuestionBySlugUseCaseRequest {
  slug: string
}

export type IGetQuestionBySlugUseCaseResponse = Either<
  ResourceNotFoundError,
  {
    question: QuestionDetails
  }
>
