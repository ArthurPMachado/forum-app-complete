import { z } from 'zod'

export const editAnswerBodySchema = z.object({
  content: z.string(),
})

export type EditAnswerBodySchema = z.infer<typeof editAnswerBodySchema>
