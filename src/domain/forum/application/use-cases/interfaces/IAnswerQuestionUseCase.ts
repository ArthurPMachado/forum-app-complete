import { Either } from '@/core/either'
import { Answer } from '@/domain/forum/enterprise/entities/answer'

export interface IAnswerQuestionUseCaseRequest {
  instructorId: string
  questionId: string
  attachmentsIds: string[]
  content: string
}

export type IAnswerQuestionUseCaseResponse = Either<
  null,
  {
    answer: Answer
  }
>
