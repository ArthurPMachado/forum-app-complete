import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { right } from '@/core/either'
import {
  ISendNotificationUseCaseRequest,
  ISendNotificationUseCaseResponse,
} from './interfaces/ISendNotificationUseCase'
import { Notification } from '../../enterprise/entities/notification'
import { INotificationsRepository } from '../repositories/interfaces/notifications-repository'

export class SendNotificationUseCase {
  constructor(private notificationsRepository: INotificationsRepository) {}

  async execute({
    recipientId,
    title,
    content,
  }: ISendNotificationUseCaseRequest): Promise<ISendNotificationUseCaseResponse> {
    const notification = Notification.create({
      recipientId: new UniqueEntityID(recipientId),
      title,
      content,
    })

    await this.notificationsRepository.create(notification)

    return right({
      notification,
    })
  }
}
