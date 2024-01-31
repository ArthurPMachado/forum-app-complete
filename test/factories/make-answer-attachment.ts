import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { IAnswerAttachmentProps } from '@/domain/forum/enterprise/entities/interfaces/IAnswerAttachmentProps'
import { AnswerAttachment } from '@/domain/forum/enterprise/entities/answer-attachment'

export function makeAnswerAttachment(
  override: Partial<IAnswerAttachmentProps> = {},
  id?: UniqueEntityID,
) {
  const answer = AnswerAttachment.create(
    {
      answerId: new UniqueEntityID(),
      attachmentId: new UniqueEntityID(),
      ...override,
    },
    id,
  )

  return answer
}
