import { IDepartment } from "../../../domain/entities/department/IDepartment";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Actor } from "./Actor";

@Entity()
export class Department implements IDepartment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  phone_number: string;

  @OneToMany(() => Actor, (actor) => actor.id)
  coordinator: Actor["id"];

  @OneToMany(() => Actor, (actor) => actor.department)
  actors: Actor[];
}

