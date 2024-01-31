import { Entity } from '@/core/entities/entity'
import { IAttachmentProps } from './interfaces/IAttachmentProps'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'

export class Attachment extends Entity<IAttachmentProps> {
  static create(props: IAttachmentProps, id?: UniqueEntityID) {
    const attachment = new Attachment(props, id)

    return attachment
  }

  get title() {
    return this.props.title
  }

  get link() {
    return this.props.link
  }
}
