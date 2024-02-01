import {
  IRegisterStudentUseCaseRequest,
  IRegisterStudentUseCaseResponse,
} from './interfaces/IRegisterStudentUseCase'
import { left, right } from '@/core/either'
import { Injectable } from '@nestjs/common'
import { IStudentsRepository } from '../repositories/interfaces/students-repository'
import { HashGenerator } from '../cryptography/hash-generator'
import { StudentAlreadyExistsError } from './errors/student-already-exists-error'
import { Student } from '../../enterprise/entities/student'

@Injectable()
export class RegisterStudentUseCase {
  constructor(
    private studentsRepository: IStudentsRepository,
    private hashGenerator: HashGenerator,
  ) {}

  async execute({
    name,
    email,
    password,
  }: IRegisterStudentUseCaseRequest): Promise<IRegisterStudentUseCaseResponse> {
    const studentWithSameEmail =
      await this.studentsRepository.findByEmail(email)

    if (studentWithSameEmail) {
      return left(new StudentAlreadyExistsError(email))
    }

    const hashedPassword = await this.hashGenerator.hash(password)

    const student = Student.create({
      name,
      email,
      password: hashedPassword,
    })

    await this.studentsRepository.create(student)

    return right({
      student,
    })
  }
}
