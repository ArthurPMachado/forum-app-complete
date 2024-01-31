import { IPaginationParams } from '@/core/repositories/pagination-params'
import { IQuestionsRepository } from '@/domain/forum/application/repositories/interfaces/questions-repository'
import { Question } from '@/domain/forum/enterprise/entities/question'
import { Injectable } from '@nestjs/common'

@Injectable()
export class PrismaQuestionsRepository implements IQuestionsRepository {
  create(question: Question): Promise<void> {
    throw new Error('Method not implemented.')
  }

  findBySlug(slug: string): Promise<Question | null> {
    throw new Error('Method not implemented.')
  }

  findById(id: string): Promise<Question | null> {
    throw new Error('Method not implemented.')
  }

  findManyRecent(params: IPaginationParams): Promise<Question[]> {
    throw new Error('Method not implemented.')
  }

  delete(question: Question): Promise<void> {
    throw new Error('Method not implemented.')
  }

  save(question: Question): Promise<void> {
    throw new Error('Method not implemented.')
  }
}
