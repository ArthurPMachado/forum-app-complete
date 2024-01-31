import { Either } from '@/core/either'
import { AnswerComment } from '@/domain/forum/enterprise/entities/answer-comment'
import { ResourceNotFoundError } from '@/core/errors/errors/resource-not-found-error'

export interface ICommentOnAnswerUseCaseRequest {
  authorId: string
  answerId: string
  content: string
}

export type ICommentOnAnswerUseCaseResponse = Either<
  ResourceNotFoundError,
  {
    answerComment: AnswerComment
  }
>
