import { UniqueEntityID } from '@/core/entities/unique-entity-id'

export interface INotificationProps {
  recipientId: UniqueEntityID
  title: string
  content: string
  createdAt: Date
  readAt?: Date | null
}
