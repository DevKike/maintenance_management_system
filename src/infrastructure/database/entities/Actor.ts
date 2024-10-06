import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { IActor } from "../../../domain/entities/actor/IActor";
import { Status } from "../../../domain/enums/actor/Status";
import { DocumentType } from "../../../domain/enums/actor/DocumentType";
import { Role } from "./Role";
import { Department } from "./Department";

@Entity()
export class Actor implements IActor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 40 })
  name: string;

  @Column({ length: 40 })
  last_name: string;

  @Column({ unique: true, length: 15 })
  phone_number: string;

  @Column({ unique: true })
  email: string;

  @Column({ unique: true })
  document_number: number;

  @Column({ length: 30 })
  document_type: DocumentType;

  @CreateDateColumn({ name: "created_at" })
  created_at: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updated_at: Date;

  @Column({ default: Status.ACTIVE, length: 20 })
  status: Status;

  @ManyToOne(() => Department, (department) => department.actors, { nullable: false })
  @JoinColumn({ name: "department_id" })
  department: Department;

  @ManyToOne(() => Role, (role) => role.actors, { nullable: false })
  @JoinColumn({ name: "role_id" })
  role: Role;
}

