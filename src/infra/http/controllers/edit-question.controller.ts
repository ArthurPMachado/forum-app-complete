import {
  BadRequestException,
  Body,
  Controller,
  HttpCode,
  Param,
  Put,
  UsePipes,
} from '@nestjs/common'
import { ZodValidationPipe } from '@/infra/http/pipes/zod-validation-pipe'
import {
  EditQuestionBodySchema,
  editQuestionBodySchema,
} from '../schemas/edit-question-schema'
import { CurrentUser } from '@/infra/auth/current-user-decorator'
import { UserPayloadSchema } from '../schemas/token-schema'
import { EditQuestionUseCase } from '@/domain/forum/application/use-cases/edit-question'

@Controller('/questions/:id')
export class EditQuestionController {
  constructor(private editQuestion: EditQuestionUseCase) {}

  @Put()
  @HttpCode(204)
  @UsePipes(new ZodValidationPipe(editQuestionBodySchema))
  async handle(
    @Body() body: EditQuestionBodySchema,
    @CurrentUser() user: UserPayloadSchema,
    @Param('id') questionId: string,
  ) {
    const { title, content } = body
    const { sub: userId } = user

    const result = await this.editQuestion.execute({
      title,
      content,
      authorId: userId,
      attachmentsIds: [],
      questionId,
    })

    if (result.isLeft()) {
      throw new BadRequestException()
    }
  }
}
