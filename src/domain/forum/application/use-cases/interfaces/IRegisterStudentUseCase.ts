import { Either } from '@/core/either'
import { Student } from '@/domain/forum/enterprise/entities/student'
import { StudentAlreadyExistsError } from '../errors/student-already-exists-error'

export interface IRegisterStudentUseCaseRequest {
  name: string
  email: string
  password: string
}

export type IRegisterStudentUseCaseResponse = Either<
  StudentAlreadyExistsError,
  {
    student: Student
  }
>
