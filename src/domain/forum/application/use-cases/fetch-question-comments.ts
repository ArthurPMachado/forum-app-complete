import { Injectable } from '@nestjs/common'
import { right } from '@/core/either'
import { IQuestionCommentsRepository } from '../repositories/interfaces/question-comments-repository'
import {
  IFetchQuestionCommentsUseCaseRequest,
  IFetchQuestionCommentsUseCaseResponse,
} from './interfaces/IFetchQuestionCommentsUseCase'

@Injectable()
export class FetchQuestionCommentsUseCase {
  constructor(
    private questionCommentsRepository: IQuestionCommentsRepository,
  ) {}

  async execute({
    questionId,
    page,
  }: IFetchQuestionCommentsUseCaseRequest): Promise<IFetchQuestionCommentsUseCaseResponse> {
    const comments =
      await this.questionCommentsRepository.findManyByQuestionIdWithAuthor(
        questionId,
        {
          page,
        },
      )

    return right({
      comments,
    })
  }
}
