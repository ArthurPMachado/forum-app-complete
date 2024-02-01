import { Either } from '@/core/either'
import { WrongCredentialsError } from '../errors/wrong-credentials-error'

export interface IAuthenticateStudentUseCaseRequest {
  email: string
  password: string
}

export type IAuthenticateStudentUseCaseResponse = Either<
  WrongCredentialsError,
  {
    accessToken: string
  }
>
