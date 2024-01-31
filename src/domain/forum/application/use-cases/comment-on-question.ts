import {
  ICommentOnQuestionUseCaseRequest,
  ICommentOnQuestionUseCaseResponse,
} from './interfaces/ICommentOnQuestionUseCase'
import { IQuestionsRepository } from '../repositories/interfaces/questions-repository'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { IQuestionCommentsRepository } from '../repositories/interfaces/question-comments-repository'
import { QuestionComment } from '../../enterprise/entities/question-comment'
import { left, right } from '@/core/either'
import { ResourceNotFoundError } from '@/core/errors/errors/resource-not-found-error'

export class CommentOnQuestionUseCase {
  constructor(
    private questionsRepository: IQuestionsRepository,
    private questionCommentsRepository: IQuestionCommentsRepository,
  ) {}

  async execute({
    authorId,
    questionId,
    content,
  }: ICommentOnQuestionUseCaseRequest): Promise<ICommentOnQuestionUseCaseResponse> {
    const question = await this.questionsRepository.findById(questionId)

    if (!question) {
      return left(new ResourceNotFoundError())
    }

    const questionComment = QuestionComment.create({
      authorId: new UniqueEntityID(authorId),
      questionId: new UniqueEntityID(questionId),
      content,
    })

    await this.questionCommentsRepository.create(questionComment)

    return right({
      questionComment,
    })
  }
}
