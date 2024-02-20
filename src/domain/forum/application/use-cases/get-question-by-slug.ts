import { Injectable } from '@nestjs/common'
import { left, right } from '@/core/either'
import { IQuestionsRepository } from '../repositories/interfaces/questions-repository'
import {
  IGetQuestionBySlugUseCaseRequest,
  IGetQuestionBySlugUseCaseResponse,
} from './interfaces/IGetQuestionBySlugUseCase'
import { ResourceNotFoundError } from '@/core/errors/errors/resource-not-found-error'

@Injectable()
export class GetQuestionBySlugUseCase {
  constructor(private questionsRepository: IQuestionsRepository) {}

  async execute({
    slug,
  }: IGetQuestionBySlugUseCaseRequest): Promise<IGetQuestionBySlugUseCaseResponse> {
    const question = await this.questionsRepository.findDetailsBySlug(slug)

    if (!question) {
      return left(new ResourceNotFoundError())
    }

    return right({
      question,
    })
  }
}
