import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { IActor } from "../../../domain/entities/actor/IActor";
import { DocumentType } from "../../../domain/enums/actor/DocumentType";
import { Role } from "./Role";
import { Department } from "./Department";
import { ActorStatus } from "../../../domain/enums/actor/ActorStatus";

@Entity()
export class Actor implements IActor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ name: "last_name" }) 
  lastName: string;

  @Column({ name: "phone_number", unique: true })
  phoneNumber: string;

  @Column({ unique: true })
  email: string;

  @Column({ name: "document_number", unique: true })
  documentNumber: number;

  @Column({ name: "document_type", type: "enum", enum: DocumentType })
  documentType: DocumentType;

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;

  @Column({ type: "enum", enum: ActorStatus })
  status: ActorStatus;

  @ManyToOne(() => Department, (department) => department.actors)
  @JoinColumn({ name: "department_id" })
  department: Department;

  @ManyToOne(() => Role, (role) => role.actors)
  @JoinColumn({ name: "role_id" })
  role: Role;
}

