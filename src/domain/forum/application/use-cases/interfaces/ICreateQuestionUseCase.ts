import { Either } from '@/core/either'
import { Question } from '@/domain/forum/enterprise/entities/question'

export interface ICreateQuestionUseCaseRequest {
  authorId: string
  title: string
  content: string
  attachmentsIds: string[]
}

export type ICreateQuestionUseCaseResponse = Either<
  null,
  {
    question: Question
  }
>
