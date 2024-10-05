import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { IMaintenance } from "../../../domain/entities/maintenance/IMaintenance";
import { MaintenanceStatus } from "../../../domain/enums/maintenance/MaintenanceStatus";
import { MaintenanceType } from "../../../domain/enums/maintenance/MaintenanceType";
import { Department } from "./Department";

@Entity()
export class Maintenance implements IMaintenance {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column()
  description: string;

  @CreateDateColumn({ name: "created_at" })
  created_at: Date;
  
  @UpdateDateColumn({ name: "updated_at" })
  updated_at: Date;

  @Column()
  type: MaintenanceType;

  @Column({ default: MaintenanceStatus.REQUESTED })
  status?: MaintenanceStatus;

  @ManyToOne(() => Department, (department) => department.maintenances)
  @JoinColumn({ name: "department_id" })
  department: Department;
}
