import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { IProcess } from "../../../domain/entities/process/IProcess";
import { Maintenance } from "./Maintenance";
import { Department } from "./Department";

@Entity()
export class Process implements IProcess {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column()
  description: string;

  @ManyToOne(() => Maintenance, (maintenance) => maintenance.processes)
  @JoinColumn({ name: "maintenance_id" })
  maintenance: Maintenance;
}
