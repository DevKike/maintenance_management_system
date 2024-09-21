import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { IActor } from "../../../domain/entities/actor/IActor";
import { Status } from "../../../domain/enums/actor/Status";
import { DocumentType } from "../../../domain/enums/actor/DocumentType";
import { Role } from "./Role";

@Entity()
export class Actor implements IActor {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  last_name: string;

  @Column()
  phone_number: string;

  @Column()
  email: string;

  @Column()
  document_number: number;

  @Column()
  document_type: DocumentType;

  @ManyToOne(() => Role, (role) => role.actors)
  role: Role;

  @Column()
  status: Status;
}
