import { Injectable } from '@nestjs/common'
import {
  ICommentOnAnswerUseCaseRequest,
  ICommentOnAnswerUseCaseResponse,
} from './interfaces/ICommentOnAnswerUseCase'
import { IAnswersRepository } from '../repositories/interfaces/answers-repository'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { IAnswerCommentsRepository } from '../repositories/interfaces/answer-comments-repository'
import { AnswerComment } from '../../enterprise/entities/answer-comment'
import { left, right } from '@/core/either'
import { ResourceNotFoundError } from '@/core/errors/errors/resource-not-found-error'

@Injectable()
export class CommentOnAnswerUseCase {
  constructor(
    private answersRepository: IAnswersRepository,
    private answerCommentsRepository: IAnswerCommentsRepository,
  ) {}

  async execute({
    authorId,
    answerId,
    content,
  }: ICommentOnAnswerUseCaseRequest): Promise<ICommentOnAnswerUseCaseResponse> {
    const answer = await this.answersRepository.findById(answerId)

    if (!answer) {
      return left(new ResourceNotFoundError())
    }

    const answerComment = AnswerComment.create({
      authorId: new UniqueEntityID(authorId),
      answerId: new UniqueEntityID(answerId),
      content,
    })

    await this.answerCommentsRepository.create(answerComment)

    return right({
      answerComment,
    })
  }
}
