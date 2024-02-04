import { Injectable } from '@nestjs/common'
import { left, right } from '@/core/either'
import { IAnswersRepository } from '../repositories/interfaces/answers-repository'
import {
  IDeleteAnswerUseCaseRequest,
  IDeleteAnswerUseCaseResponse,
} from './interfaces/IDeleteAnswerUseCase'
import { ResourceNotFoundError } from '@/core/errors/errors/resource-not-found-error'
import { NotAllowedError } from '@/core/errors/errors/not-allowed-error'

@Injectable()
export class DeleteAnswerUseCase {
  constructor(private answersRepository: IAnswersRepository) {}

  async execute({
    authorId,
    answerId,
  }: IDeleteAnswerUseCaseRequest): Promise<IDeleteAnswerUseCaseResponse> {
    const answer = await this.answersRepository.findById(answerId)

    if (!answer) {
      return left(new ResourceNotFoundError())
    }

    if (authorId !== answer.authorId.toString()) {
      return left(new NotAllowedError())
    }

    await this.answersRepository.delete(answer)

    return right(null)
  }
}
