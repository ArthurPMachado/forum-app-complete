/* eslint-disable @typescript-eslint/no-unused-vars */
import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { OnAnswerCommented } from '@/domain/notification/application/subscribers/on-answer-commented'
import {
  ISendNotificationUseCaseRequest,
  ISendNotificationUseCaseResponse,
} from '@/domain/notification/application/use-cases/interfaces/ISendNotificationUseCase'
import { SendNotificationUseCase } from '@/domain/notification/application/use-cases/send-notification'
import { makeAnswer } from 'test/factories/make-answer'
import { makeAnswerComment } from 'test/factories/make-answer-comment'
import { makeQuestion } from 'test/factories/make-question'
import { InMemoryAnswerAttachmentsRepository } from 'test/repositories/in-memory-answer-attachments-repository'
import { InMemoryAnswerCommentsRepository } from 'test/repositories/in-memory-answer-comments-repository'
import { InMemoryAnswersRepository } from 'test/repositories/in-memory-answers-repository'
import { InMemoryAttachmentsRepository } from 'test/repositories/in-memory-attachments-repository'
import { InMemoryNotificationsRepository } from 'test/repositories/in-memory-notifications-repository'
import { InMemoryQuestionAttachmentsRepository } from 'test/repositories/in-memory-question-attachments-repository'
import { InMemoryQuestionsRepository } from 'test/repositories/in-memory-questions-repository'
import { InMemoryStudentsRepository } from 'test/repositories/in-memory-students-repository'
import { waitFor } from 'test/utils/wait-for'
import { MockInstance } from 'vitest'

let inMemoryQuestionsRepository: InMemoryQuestionsRepository
let inMemoryQuestionAttachmentsRepository: InMemoryQuestionAttachmentsRepository
let inMemoryAnswersRepository: InMemoryAnswersRepository
let inMemoryAnswerAttachmentsRepository: InMemoryAnswerAttachmentsRepository
let inMemoryNotificationsRepository: InMemoryNotificationsRepository
let inMemoryAnswerCommentsRepository: InMemoryAnswerCommentsRepository
let inMemoryAttachmentsRepository: InMemoryAttachmentsRepository
let inMemoryStudentsRepository: InMemoryStudentsRepository

let sendNotificationUseCase: SendNotificationUseCase

let sendNotificationExecuteSpy: MockInstance<
  [ISendNotificationUseCaseRequest],
  Promise<ISendNotificationUseCaseResponse>
>

describe('On Answer Commented', () => {
  beforeEach(() => {
    inMemoryAttachmentsRepository = new InMemoryAttachmentsRepository()
    inMemoryStudentsRepository = new InMemoryStudentsRepository()
    inMemoryQuestionAttachmentsRepository =
      new InMemoryQuestionAttachmentsRepository()
    inMemoryQuestionsRepository = new InMemoryQuestionsRepository(
      inMemoryQuestionAttachmentsRepository,
      inMemoryAttachmentsRepository,
      inMemoryStudentsRepository,
    )
    inMemoryAnswerAttachmentsRepository =
      new InMemoryAnswerAttachmentsRepository()
    inMemoryAnswersRepository = new InMemoryAnswersRepository(
      inMemoryAnswerAttachmentsRepository,
    )
    inMemoryNotificationsRepository = new InMemoryNotificationsRepository()
    sendNotificationUseCase = new SendNotificationUseCase(
      inMemoryNotificationsRepository,
    )
    inMemoryAnswerCommentsRepository = new InMemoryAnswerCommentsRepository(
      inMemoryStudentsRepository,
    )

    sendNotificationExecuteSpy = vi.spyOn(sendNotificationUseCase, 'execute')

    new OnAnswerCommented(inMemoryAnswersRepository, sendNotificationUseCase)
  })

  it('Should send a notification when an answer has a new comment', async () => {
    const question = makeQuestion()
    const answer = makeAnswer(
      { questionId: question.id },
      new UniqueEntityID('answer-1'),
    )

    await inMemoryQuestionsRepository.create(question)
    await inMemoryAnswersRepository.create(answer)

    const answerComment = makeAnswerComment({ answerId: answer.id })

    await inMemoryAnswerCommentsRepository.create(answerComment)

    await waitFor(() => {
      expect(sendNotificationExecuteSpy).toHaveBeenCalled()
    })
  })
})
