import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { Slug } from '../value-objects/slug'
import { QuestionAttachmentList } from '../question-attachment-list'

export interface IQuestionProps {
  authorId: UniqueEntityID
  bestAnswerId?: UniqueEntityID
  title: string
  slug: Slug
  content: string
  attachments: QuestionAttachmentList
  createdAt: Date
  updatedAt?: Date
}
