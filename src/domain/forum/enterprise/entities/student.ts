import { Entity } from '@/core/entities/entity'
import { IStudentProps } from './interfaces/IStudentProps'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'

export class Student extends Entity<IStudentProps> {
  static create(props: IStudentProps, id?: UniqueEntityID) {
    const student = new Student(props, id)

    return student
  }

  get name() {
    return this.props.name
  }

  get email() {
    return this.props.email
  }

  get password() {
    return this.props.password
  }
}
