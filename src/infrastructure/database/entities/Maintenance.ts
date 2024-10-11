import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { MaintenanceStatus } from "../../../domain/enums/maintenance/MaintenanceStatus";
import { Department } from "./Department";
import { MaintenanceType } from "./MaintenanceType";
import { Process } from "./Process";
import { IMaintenance } from "../../../domain/entities/maintenance/IMaintenance";

@Entity()
export class Maintenance implements IMaintenance {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 150 })
  name: string;

  @Column({ length: 255 })
  description: string;

  @CreateDateColumn({ name: "created_at" })
  created_at: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updated_at: Date;

  @Column({ default: MaintenanceStatus.REQUESTED, length: 30 })
  status?: MaintenanceStatus;

  @ManyToOne(() => MaintenanceType, (maintenanceType) => maintenanceType.maintenances)
  @JoinColumn({ name: "maintenance_type_id" })
  maintenance_type: MaintenanceType;
  
  @ManyToOne(() => Department, (department) => department.maintenances)
  @JoinColumn({ name: "department_id" })
  department: Department;

  @ManyToOne(() => Process, (process) => process.maintenances)
  @JoinColumn({ name: "process_id" })
  process: Process;
}
