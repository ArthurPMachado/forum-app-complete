import { Either } from '@/core/either'
import { NotAllowedError } from '@/core/errors/errors/not-allowed-error'
import { ResourceNotFoundError } from '@/core/errors/errors/resource-not-found-error'
import { Question } from '@/domain/forum/enterprise/entities/question'

export interface IChooseQuestionBestAnswerUseCaseRequest {
  authorId: string
  answerId: string
}

export type IChooseQuestionBestAnswerUseCaseResponse = Either<
  ResourceNotFoundError | NotAllowedError,
  {
    question: Question
  }
>
