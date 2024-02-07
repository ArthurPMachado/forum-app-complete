import {
  BadRequestException,
  Body,
  Controller,
  HttpCode,
  Param,
  Put,
} from '@nestjs/common'
import { ZodValidationPipe } from '@/infra/http/pipes/zod-validation-pipe'
import {
  EditAnswerBodySchema,
  editAnswerBodySchema,
} from '../schemas/edit-answer-schema'
import { CurrentUser } from '@/infra/auth/current-user-decorator'
import { UserPayloadSchema } from '../schemas/token-schema'
import { EditAnswerUseCase } from '@/domain/forum/application/use-cases/edit-answer'

const bodyValidationPipe = new ZodValidationPipe(editAnswerBodySchema)

@Controller('/answers/:id')
export class EditAnswerController {
  constructor(private editAnswer: EditAnswerUseCase) {}

  @Put()
  @HttpCode(204)
  async handle(
    @Body(bodyValidationPipe) body: EditAnswerBodySchema,
    @CurrentUser() user: UserPayloadSchema,
    @Param('id') answerId: string,
  ) {
    const { content } = body
    const { sub: userId } = user

    const result = await this.editAnswer.execute({
      content,
      answerId,
      authorId: userId,
      attachmentsIds: [],
    })

    if (result.isLeft()) {
      throw new BadRequestException()
    }
  }
}
