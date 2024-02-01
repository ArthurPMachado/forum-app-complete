import { right } from '@/core/either'
import { IQuestionsRepository } from '../repositories/interfaces/questions-repository'
import {
  IFetchRecentQuestionsUseCaseRequest,
  IFetchRecentQuestionsUseCaseResponse,
} from './interfaces/IFetchRecentQuestionsUseCase'
import { Injectable } from '@nestjs/common'

@Injectable()
export class FetchRecentQuestionsUseCase {
  constructor(private questionsRepository: IQuestionsRepository) {}

  async execute({
    page,
  }: IFetchRecentQuestionsUseCaseRequest): Promise<IFetchRecentQuestionsUseCaseResponse> {
    const questions = await this.questionsRepository.findManyRecent({ page })

    return right({
      questions,
    })
  }
}
