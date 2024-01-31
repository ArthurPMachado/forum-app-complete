import { UniqueEntityID } from '@/core/entities/unique-entity-id'

export interface ICommentProps {
  authorId: UniqueEntityID
  content: string
  createdAt: Date
  updatedAt?: Date
}

export interface IAnswerCommentProps extends ICommentProps {
  answerId: UniqueEntityID
}

export interface IQuestionCommentProps extends ICommentProps {
  questionId: UniqueEntityID
}
