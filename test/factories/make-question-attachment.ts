import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { IQuestionAttachmentProps } from '@/domain/forum/enterprise/entities/interfaces/IQuestionAttachmentProps'
import { QuestionAttachment } from '@/domain/forum/enterprise/entities/question-attachment'

export function makeQuestionAttachment(
  override: Partial<IQuestionAttachmentProps> = {},
  id?: UniqueEntityID,
) {
  const question = QuestionAttachment.create(
    {
      questionId: new UniqueEntityID(),
      attachmentId: new UniqueEntityID(),
      ...override,
    },
    id,
  )

  return question
}
