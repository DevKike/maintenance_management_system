import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Maintenance } from "./Maintenance";
import { Process } from "./Process";
import { IMaintenanceType } from "../../../domain/entities/maintenance/IMaintenance";

@Entity()
export class MaintenanceType implements IMaintenanceType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => Maintenance, (maintenance) => maintenance.maintenance_type)
  maintenances: Maintenance[];

  @OneToMany(() => Process, (process) => process.maintenance_type)
  processes: Process[];
}
