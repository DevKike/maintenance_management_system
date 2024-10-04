import { IDepartment } from "../../../domain/entities/department/IDepartment";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
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

  @ManyToOne(() => Actor)
  @JoinColumn({ name: "coordinator_id" })
  coordinator_id: Actor;

  @OneToMany(() => Actor, (actor) => actor.department)
  actors: Actor[];
}

