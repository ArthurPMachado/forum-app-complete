import { Optional } from '@/core/types/optional'
import { IAnswerCommentProps } from './interfaces/ICommentProps'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { Comment } from '@/domain/forum/enterprise/entities/comment'
import { AnswerCommentedEvent } from '../events/answer-commented-event'

export class AnswerComment extends Comment<IAnswerCommentProps> {
  static create(
    props: Optional<IAnswerCommentProps, 'createdAt'>,
    id?: UniqueEntityID,
  ) {
    const answerComment = new AnswerComment(
      {
        ...props,
        createdAt: props.createdAt ?? new Date(),
      },
      id,
    )

    const isNewComment = !id

    if (isNewComment) {
      answerComment.addDomainEvent(new AnswerCommentedEvent(answerComment))
    }

    return answerComment
  }

  get answerId() {
    return this.props.answerId
  }
}
