import { ExecutionContext, createParamDecorator } from '@nestjs/common'
import { UserPayloadSchema } from '../http/schemas/token-schema'

export const CurrentUser = createParamDecorator(
  (_: never, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest()

    return request.user as UserPayloadSchema
  },
)
