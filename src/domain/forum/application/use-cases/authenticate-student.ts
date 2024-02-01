import {
  IAuthenticateStudentUseCaseRequest,
  IAuthenticateStudentUseCaseResponse,
} from './interfaces/IAuthenticateStudentUseCase'
import { left, right } from '@/core/either'
import { Injectable } from '@nestjs/common'
import { IStudentsRepository } from '../repositories/interfaces/students-repository'
import { HashComparer } from '../cryptography/hash-comparer'
import { Encrypter } from '../cryptography/encrypter'
import { WrongCredentialsError } from './errors/wrong-credentials-error'

@Injectable()
export class AuthenticateStudentUseCase {
  constructor(
    private studentsRepository: IStudentsRepository,
    private hashComparer: HashComparer,
    private encrypter: Encrypter,
  ) {}

  async execute({
    email,
    password,
  }: IAuthenticateStudentUseCaseRequest): Promise<IAuthenticateStudentUseCaseResponse> {
    const student = await this.studentsRepository.findByEmail(email)

    if (!student) {
      return left(new WrongCredentialsError())
    }

    const isPasswordValid = await this.hashComparer.compare(
      password,
      student.password,
    )

    if (!isPasswordValid) {
      return left(new WrongCredentialsError())
    }

    const accessToken = await this.encrypter.encrypt({
      sub: student.id.toString(),
    })

    return right({
      accessToken,
    })
  }
}
