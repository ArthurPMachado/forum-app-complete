import { Either } from '@/core/either'
import { CommentWithAuthor } from '@/domain/forum/enterprise/entities/value-objects/comment-with-author'

export interface IFetchQuestionCommentsUseCaseRequest {
  questionId: string
  page: number
}

export type IFetchQuestionCommentsUseCaseResponse = Either<
  null,
  {
    comments: CommentWithAuthor[]
  }
>
