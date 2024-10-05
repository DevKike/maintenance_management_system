import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { IActor } from "../../../domain/entities/actor/IActor";
import { Status } from "../../../domain/enums/actor/Status";
import { DocumentType } from "../../../domain/enums/actor/DocumentType";
import { Role } from "./Role";
import { Department } from "./Department";

@Entity()
export class Actor implements IActor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  last_name: string;

  @Column({ unique: true })
  phone_number: string;

  @Column({ unique: true })
  email: string;

  @Column({ unique: true })
  document_number: number;

  @Column()
  document_type: DocumentType;

  @CreateDateColumn({ name: "created_at" })
  created_at: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updated_at: Date;

  @Column({ default: Status.ACTIVE })
  status: Status;

  @ManyToOne(() => Role, (role) => role.actors)
  @JoinColumn({ name: "role_id" })
  role: Role;

  @ManyToOne(() => Department, (department) => department.actors)
  @JoinColumn({ name: "department_id" })
  department: Department;
}

