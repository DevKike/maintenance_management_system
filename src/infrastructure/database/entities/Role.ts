import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { IRole } from "../../../domain/entities/role/IRole";

@Entity()
export class Role implements IRole {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column("text")
  description: string;
}
