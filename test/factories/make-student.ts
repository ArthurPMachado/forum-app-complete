import { faker } from '@faker-js/faker'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { IStudentProps } from '@/domain/forum/enterprise/entities/interfaces/IStudentProps'
import { Student } from '@/domain/forum/enterprise/entities/student'

export function makeStudent(
  override: Partial<IStudentProps> = {},
  id?: UniqueEntityID,
) {
  const student = Student.create(
    {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      ...override,
    },
    id,
  )

  return student
}
