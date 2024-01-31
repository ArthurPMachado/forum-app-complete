import { Either } from '@/core/either'
import { AnswerComment } from '@/domain/forum/enterprise/entities/answer-comment'

export interface IFetchAnswerCommentsUseCaseRequest {
  answerId: string
  page: number
}

export type IFetchAnswerCommentsUseCaseResponse = Either<
  null,
  {
    answerComments: AnswerComment[]
  }
>
