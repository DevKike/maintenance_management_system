import { IDepartment } from "../../../domain/entities/department/IDepartment";
import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Actor } from "./Actor";
import { Maintenance } from "./Maintenance";
import { DepartmentStatus } from "../../../domain/enums/department/DepartmentStatus";

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

  @CreateDateColumn({ name: "created_at" })
  created_at: Date;
  
  @UpdateDateColumn({ name: "updated_at" })
  updated_at: Date;

  @Column({ default: DepartmentStatus.ACTIVE })
  status: DepartmentStatus;

  @OneToOne(() => Actor)
  @JoinColumn({ name: "coordinator_id" })
  coordinator: Actor;

  @OneToMany(() => Actor, (actor) => actor.department)
  actors: Actor[];

  @OneToMany(() => Maintenance, (maintenance) => maintenance.department)
  maintenances: Maintenance[];
}

