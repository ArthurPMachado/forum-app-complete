import { IPaginationParams } from '@/core/repositories/pagination-params'
import { IQuestionCommentsRepository } from '@/domain/forum/application/repositories/interfaces/question-comments-repository'
import { QuestionComment } from '@/domain/forum/enterprise/entities/question-comment'
import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma.service'

@Injectable()
export class PrismaQuestionCommentsRepository
  implements IQuestionCommentsRepository
{
  constructor(private prisma: PrismaService) {}

  async create(questionComment: QuestionComment): Promise<void> {
    throw new Error('Method not implemented.')
  }

  async findById(id: string): Promise<QuestionComment | null> {
    throw new Error('Method not implemented.')
  }

  async findManyByQuestionId(
    questionId: string,
    params: IPaginationParams,
  ): Promise<QuestionComment[]> {
    throw new Error('Method not implemented.')
  }

  async delete(questionComment: QuestionComment): Promise<void> {
    throw new Error('Method not implemented.')
  }
}
