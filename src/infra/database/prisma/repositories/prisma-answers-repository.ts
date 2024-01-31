import { IPaginationParams } from '@/core/repositories/pagination-params'
import { IAnswersRepository } from '@/domain/forum/application/repositories/interfaces/answers-repository'
import { Answer } from '@/domain/forum/enterprise/entities/answer'
import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma.service'

@Injectable()
export class PrismaAnswersRepository implements IAnswersRepository {
  constructor(private prisma: PrismaService) {}

  async create(answer: Answer): Promise<void> {
    throw new Error('Method not implemented.')
  }

  async findById(id: string): Promise<Answer | null> {
    throw new Error('Method not implemented.')
  }

  async findManyByQuestionId(
    questionId: string,
    params: IPaginationParams,
  ): Promise<Answer[]> {
    throw new Error('Method not implemented.')
  }

  async delete(answer: Answer): Promise<void> {
    throw new Error('Method not implemented.')
  }

  async save(answer: Answer): Promise<void> {
    throw new Error('Method not implemented.')
  }
}
