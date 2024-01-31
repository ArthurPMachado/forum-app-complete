import { Either } from '@/core/either'
import { QuestionComment } from '@/domain/forum/enterprise/entities/question-comment'

export interface IFetchQuestionCommentsUseCaseRequest {
  questionId: string
  page: number
}

export type IFetchQuestionCommentsUseCaseResponse = Either<
  null,
  {
    questionComments: QuestionComment[]
  }
>
