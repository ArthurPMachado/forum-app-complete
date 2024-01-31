import { IPaginationParams } from '@/core/repositories/pagination-params'
import { IAnswerCommentsRepository } from '@/domain/forum/application/repositories/interfaces/answer-comments-repository'
import { AnswerComment } from '@/domain/forum/enterprise/entities/answer-comment'
import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma.service'

@Injectable()
export class PrismaAnswerCommentsRepository
  implements IAnswerCommentsRepository
{
  constructor(private prisma: PrismaService) {}

  async create(answerComment: AnswerComment): Promise<void> {
    throw new Error('Method not implemented.')
  }

  async findById(id: string): Promise<AnswerComment | null> {
    throw new Error('Method not implemented.')
  }

  async findManyByAnswerId(
    answerId: string,
    params: IPaginationParams,
  ): Promise<AnswerComment[]> {
    throw new Error('Method not implemented.')
  }

  async delete(answerComment: AnswerComment): Promise<void> {
    throw new Error('Method not implemented.')
  }
}
