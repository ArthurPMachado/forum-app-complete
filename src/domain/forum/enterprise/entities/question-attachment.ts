import { Entity } from '@/core/entities/entity'
import { IQuestionAttachmentProps } from './interfaces/IQuestionAttachmentProps'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'

export class QuestionAttachment extends Entity<IQuestionAttachmentProps> {
  static create(props: IQuestionAttachmentProps, id?: UniqueEntityID) {
    const attachment = new QuestionAttachment(props, id)

    return attachment
  }

  get questionId() {
    return this.props.questionId
  }

  get attachmentId() {
    return this.props.attachmentId
  }
}
