import { Entity } from '@/core/entities/entity'
import { IInstructorProps } from './interfaces/IInstructorProps'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'

export class Instructor extends Entity<IInstructorProps> {
  static create(props: IInstructorProps, id?: UniqueEntityID) {
    const student = new Instructor(props, id)

    return student
  }
}
