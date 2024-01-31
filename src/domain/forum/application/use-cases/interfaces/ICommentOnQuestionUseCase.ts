import { Either } from '@/core/either'
import { QuestionComment } from '@/domain/forum/enterprise/entities/question-comment'
import { ResourceNotFoundError } from '@/core/errors/errors/resource-not-found-error'

export interface ICommentOnQuestionUseCaseRequest {
  authorId: string
  questionId: string
  content: string
}

export type ICommentOnQuestionUseCaseResponse = Either<
  ResourceNotFoundError,
  {
    questionComment: QuestionComment
  }
>
