import { Either } from '@/core/either'
import { Notification } from '@/domain/notification/enterprise/entities/notification'

export interface ISendNotificationUseCaseRequest {
  recipientId: string
  title: string
  content: string
}

export type ISendNotificationUseCaseResponse = Either<
  null,
  {
    notification: Notification
  }
>
