import { Controller, HttpCode, Post, Req, UseGuards } from '@nestjs/common'
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'
import { CurrentUser } from 'src/auth/current-user-decorator'
import { UserPayloadSchema } from 'src/schemas/token-schema'

@Controller('/questions')
@UseGuards(JwtAuthGuard)
export class CreateQuestionController {
  constructor() {}

  @Post()
  @HttpCode(201)
  async handle(@CurrentUser() user: UserPayloadSchema) {
    return 'ok'
  }
}
