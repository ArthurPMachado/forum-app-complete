import { Injectable } from '@nestjs/common'
import { right } from '@/core/either'
import { IAnswerCommentsRepository } from '../repositories/interfaces/answer-comments-repository'
import {
  IFetchAnswerCommentsUseCaseRequest,
  IFetchAnswerCommentsUseCaseResponse,
} from './interfaces/IFetchAnswerCommentsUseCase'

@Injectable()
export class FetchAnswerCommentsUseCase {
  constructor(private answerCommentsRepository: IAnswerCommentsRepository) {}

  async execute({
    answerId,
    page,
  }: IFetchAnswerCommentsUseCaseRequest): Promise<IFetchAnswerCommentsUseCaseResponse> {
    const answerComments =
      await this.answerCommentsRepository.findManyByAnswerId(answerId, {
        page,
      })

    return right({
      answerComments,
    })
  }
}
