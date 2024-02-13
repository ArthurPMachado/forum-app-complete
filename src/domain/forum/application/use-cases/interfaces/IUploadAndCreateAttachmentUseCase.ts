import { Either } from '@/core/either'
import { InvalidAttachmentType } from '../errors/invalid-attachment-type'
import { Attachment } from '@/domain/forum/enterprise/entities/attachment'

export interface IUploadAndCreateAttachmentUseCaseRequest {
  fileName: string
  fileType: string
  body: Buffer
}

export type IUploadAndCreateAttachmentUseCaseResponse = Either<
  InvalidAttachmentType,
  {
    attachment: Attachment
  }
>
