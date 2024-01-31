import { Either } from '@/core/either'
import { Answer } from '@/domain/forum/enterprise/entities/answer'

export interface IFetchQuestionAnswersUseCaseRequest {
  questionId: string
  page: number
}

export type IFetchQuestionAnswersUseCaseResponse = Either<
  null,
  {
    answers: Answer[]
  }
>
