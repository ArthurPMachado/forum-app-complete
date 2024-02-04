import { Injectable } from '@nestjs/common'
import { right } from '@/core/either'
import { IAnswersRepository } from '../repositories/interfaces/answers-repository'
import {
  IFetchQuestionAnswersUseCaseRequest,
  IFetchQuestionAnswersUseCaseResponse,
} from './interfaces/IFetchQuestionAnswersUseCase'

@Injectable()
export class FetchQuestionAnswersUseCase {
  constructor(private answersRepository: IAnswersRepository) {}

  async execute({
    questionId,
    page,
  }: IFetchQuestionAnswersUseCaseRequest): Promise<IFetchQuestionAnswersUseCaseResponse> {
    const answers = await this.answersRepository.findManyByQuestionId(
      questionId,
      { page },
    )

    return right({
      answers,
    })
  }
}
