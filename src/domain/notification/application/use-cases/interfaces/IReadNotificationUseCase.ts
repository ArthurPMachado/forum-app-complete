import { Either } from '@/core/either'
import { NotAllowedError } from '@/core/errors/errors/not-allowed-error'
import { ResourceNotFoundError } from '@/core/errors/errors/resource-not-found-error'
import { Notification } from '@/domain/notification/enterprise/entities/notification'

export interface IReadNotificationUseCaseRequest {
  recipientId: string
  notificationId: string
}

export type IReadNotificationUseCaseResponse = Either<
  ResourceNotFoundError | NotAllowedError,
  {
    notification: Notification
  }
>
