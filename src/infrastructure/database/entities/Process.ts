import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Maintenance } from "./Maintenance";
import { MaintenanceType } from "./MaintenanceType";
import { IProcess } from "../../../domain/entities/process/IProcess";

@Entity()
export class Process implements IProcess {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, length: 40 })
  name: string;

  @Column({ length: 255 })
  description: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  
  @OneToMany(() => Maintenance, (maintenance) => maintenance.process)
  @JoinColumn({ name: "maintenance_id" })
  maintenances: Maintenance[];

  @ManyToOne(() => MaintenanceType, (maintenanceType) => maintenanceType.processes)
  @JoinColumn({ name: "maintenance_type_id" })
  maintenance_type: MaintenanceType;
}
