import { Module } from '@nestjs/common'

import { PrismaService } from './prisma/prisma.service'
import { PrismaQuestionsRepository } from './prisma/repositories/prisma-questions-repository'
import { PrismaQuestionCommentsRepository } from './prisma/repositories/prisma-question-comments-repository'
import { PrismaQuestionAttachmentsRepository } from './prisma/repositories/prisma-question-attachments-repository'
import { PrismaAnswersRepository } from './prisma/repositories/prisma-answers-repository'
import { PrismaAnswerCommentsRepository } from './prisma/repositories/prisma-answer-comments-repository'
import { PrismaAnswerAttachmentsRepository } from './prisma/repositories/prisma-answer-attachments-repository'
import { IQuestionsRepository } from '@/domain/forum/application/repositories/interfaces/questions-repository'
import { IStudentsRepository } from '@/domain/forum/application/repositories/interfaces/students-repository'
import { PrismaStudentsRepository } from './prisma/repositories/prisma-students-repository'
import { IAnswerAttachmentsRepository } from '@/domain/forum/application/repositories/interfaces/answer-attachments-repository'
import { IAnswerCommentsRepository } from '@/domain/forum/application/repositories/interfaces/answer-comments-repository'
import { IAnswersRepository } from '@/domain/forum/application/repositories/interfaces/answers-repository'
import { IQuestionAttachmentsRepository } from '@/domain/forum/application/repositories/interfaces/question-attachments-repository'
import { IQuestionCommentsRepository } from '@/domain/forum/application/repositories/interfaces/question-comments-repository'
import { IAttachmentsRepository } from '@/domain/forum/application/repositories/interfaces/attachments-repository'
import { PrismaAttachmentsRepository } from './prisma/repositories/prisma-attachments-repository'
import { PrismaNotificationsRepository } from './prisma/repositories/prisma-notifications-repository'
import { INotificationsRepository } from '@/domain/notification/application/repositories/interfaces/notifications-repository'

@Module({
  providers: [
    PrismaService,
    {
      provide: IQuestionsRepository,
      useClass: PrismaQuestionsRepository,
    },
    {
      provide: IStudentsRepository,
      useClass: PrismaStudentsRepository,
    },
    {
      provide: IQuestionCommentsRepository,
      useClass: PrismaQuestionCommentsRepository,
    },
    {
      provide: IQuestionAttachmentsRepository,
      useClass: PrismaQuestionAttachmentsRepository,
    },
    { provide: IAnswersRepository, useClass: PrismaAnswersRepository },
    {
      provide: IAnswerCommentsRepository,
      useClass: PrismaAnswerCommentsRepository,
    },
    {
      provide: IAnswerAttachmentsRepository,
      useClass: PrismaAnswerAttachmentsRepository,
    },
    {
      provide: IAttachmentsRepository,
      useClass: PrismaAttachmentsRepository,
    },
    {
      provide: INotificationsRepository,
      useClass: PrismaNotificationsRepository,
    },
  ],
  exports: [
    PrismaService,
    IQuestionsRepository,
    IStudentsRepository,
    IQuestionCommentsRepository,
    IQuestionAttachmentsRepository,
    IAnswersRepository,
    IAnswerCommentsRepository,
    IAnswerAttachmentsRepository,
    IAttachmentsRepository,
    INotificationsRepository,
  ],
})
export class DatabaseModule {}
