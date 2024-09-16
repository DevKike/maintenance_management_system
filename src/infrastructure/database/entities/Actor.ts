import { Column, Entity, PrimaryColumn } from "typeorm";
import { IActor } from "../../../domain/entities/actor/IActor";
import { Status } from "../../../domain/enums/actorStatus/Status";

@Entity()
export class Actor implements IActor {
  @PrimaryColumn()
  document_number: number;

  @Column()
  document_type: string;

  @Column()
  name: string;

  @Column()
  last_name: string;

  @Column()
  phone_number: string;

  @Column()
  email: string;

  @Column()
  status: Status;
}
