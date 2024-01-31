import { z } from 'zod'

export const userPayloadSchema = z.object({
  sub: z.string().uuid(),
})

export type UserPayloadSchema = z.infer<typeof userPayloadSchema>
