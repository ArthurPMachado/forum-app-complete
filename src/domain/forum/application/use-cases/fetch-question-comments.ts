import { right } from '@/core/either'
import { IQuestionCommentsRepository } from '../repositories/interfaces/question-comments-repository'
import {
  IFetchQuestionCommentsUseCaseRequest,
  IFetchQuestionCommentsUseCaseResponse,
} from './interfaces/IFetchQuestionCommentsUseCase'

export class FetchQuestionCommentsUseCase {
  constructor(
    private questionCommentsRepository: IQuestionCommentsRepository,
  ) {}

  async execute({
    questionId,
    page,
  }: IFetchQuestionCommentsUseCaseRequest): Promise<IFetchQuestionCommentsUseCaseResponse> {
    const questionComments =
      await this.questionCommentsRepository.findManyByQuestionId(questionId, {
        page,
      })

    return right({
      questionComments,
    })
  }
}
