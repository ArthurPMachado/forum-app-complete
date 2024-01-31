import { Entity } from '@/core/entities/entity'
import { IAnswerAttachmentProps } from './interfaces/IAnswerAttachmentProps'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'

export class AnswerAttachment extends Entity<IAnswerAttachmentProps> {
  static create(props: IAnswerAttachmentProps, id?: UniqueEntityID) {
    const attachment = new AnswerAttachment(props, id)

    return attachment
  }

  get answerId() {
    return this.props.answerId
  }

  get attachmentId() {
    return this.props.attachmentId
  }
}
