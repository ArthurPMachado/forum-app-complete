import { Either } from '@/core/either'
import { CommentWithAuthor } from '@/domain/forum/enterprise/entities/value-objects/comment-with-author'

export interface IFetchAnswerCommentsUseCaseRequest {
  answerId: string
  page: number
}

export type IFetchAnswerCommentsUseCaseResponse = Either<
  null,
  {
    comments: CommentWithAuthor[]
  }
>
