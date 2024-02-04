import { Injectable } from '@nestjs/common'
import { left, right } from '@/core/either'
import { IQuestionsRepository } from '../repositories/interfaces/questions-repository'
import {
  IDeleteQuestionUseCaseRequest,
  IDeleteQuestionUseCaseResponse,
} from './interfaces/IDeleteQuestionUseCase'
import { ResourceNotFoundError } from '@/core/errors/errors/resource-not-found-error'
import { NotAllowedError } from '@/core/errors/errors/not-allowed-error'

@Injectable()
export class DeleteQuestionUseCase {
  constructor(private questionsRepository: IQuestionsRepository) {}

  async execute({
    authorId,
    questionId,
  }: IDeleteQuestionUseCaseRequest): Promise<IDeleteQuestionUseCaseResponse> {
    const question = await this.questionsRepository.findById(questionId)

    if (!question) {
      return left(new ResourceNotFoundError())
    }

    if (authorId !== question.authorId.toString()) {
      return left(new NotAllowedError())
    }

    await this.questionsRepository.delete(question)

    return right(null)
  }
}
