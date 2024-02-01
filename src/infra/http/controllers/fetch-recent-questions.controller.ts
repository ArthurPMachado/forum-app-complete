import { Controller, Get, Query, UseGuards } from '@nestjs/common'
import { ZodValidationPipe } from '@/infra/http/pipes/zod-validation-pipe'
import {
  PageQueryParamSchema,
  pageQueryParamSchema,
} from '../schemas/page-query-param-schema'
import { JwtAuthGuard } from '@/infra/auth/jwt-auth.guard'
import { FetchRecentQuestionsUseCase } from '@/domain/forum/application/use-cases/fetch-recent-questions'

const queryValidationPipe = new ZodValidationPipe(pageQueryParamSchema)

@Controller('/questions')
@UseGuards(JwtAuthGuard)
export class FetchRecentQuestionsController {
  constructor(private fetchRecentQuestions: FetchRecentQuestionsUseCase) {}

  @Get()
  async handle(@Query('page', queryValidationPipe) page: PageQueryParamSchema) {
    const questions = await this.fetchRecentQuestions.execute({
      page,
    })

    return {
      questions,
    }
  }
}
