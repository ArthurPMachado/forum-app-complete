import { Optional } from '@/core/types/optional'
import { IQuestionCommentProps } from './interfaces/ICommentProps'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { Comment } from '@/domain/forum/enterprise/entities/comment'

export class QuestionComment extends Comment<IQuestionCommentProps> {
  static create(
    props: Optional<IQuestionCommentProps, 'createdAt'>,
    id?: UniqueEntityID,
  ) {
    const questionComment = new QuestionComment(
      {
        ...props,
        createdAt: props.createdAt ?? new Date(),
      },
      id,
    )

    return questionComment
  }

  get questionId() {
    return this.props.questionId
  }
}
