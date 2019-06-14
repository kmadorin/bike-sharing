import { Field, ObjectType, ID } from 'type-graphql'
import {
  Entity,
  ObjectIdColumn,
  ObjectID,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm'

@ObjectType()
@Entity()
export default class Bike {
  @Field(type => ID)
  @ObjectIdColumn()
  _id: ObjectID

  @Field()
  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date

  @Field({ nullable: true })
  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt?: Date

  @Field()
  @Column()
  name: string

  @Field({ nullable: true })
  @Column({ nullable: true })
  icon?: string
}
