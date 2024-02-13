import {
  IUploadAndCreateAttachmentUseCaseRequest,
  IUploadAndCreateAttachmentUseCaseResponse,
} from './interfaces/IUploadAndCreateAttachmentUseCase'
import { left, right } from '@/core/either'
import { Injectable } from '@nestjs/common'
import { IAttachmentsRepository } from '../repositories/interfaces/attachments-repository'
import { InvalidAttachmentType } from './errors/invalid-attachment-type'
import { Attachment } from '../../enterprise/entities/attachment'

@Injectable()
export class UploadAndCreateAttachmentUseCase {
  constructor(private attachmentsRepository: IAttachmentsRepository) {}

  async execute({
    fileName,
    fileType,
    body,
  }: IUploadAndCreateAttachmentUseCaseRequest): Promise<IUploadAndCreateAttachmentUseCaseResponse> {
    const isCorrectFileType =
      /^(image\/(jpeg|jpg|png))$|^application\/pdf$/.test(fileType)

    if (!isCorrectFileType) {
      return left(new InvalidAttachmentType(fileType))
    }

    const attachment = Attachment.create({
      title: fileName,
      url: fileName,
    })

    await this.attachmentsRepository.create(attachment)

    return right({
      attachment,
    })
  }
}
