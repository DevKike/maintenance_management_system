import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { MaintenanceStatus } from "../../../domain/enums/maintenance/MaintenanceStatus";
import { IMaintenance } from "../../../domain/entities/maintenance/IMaintenance";
import { AssignmentDepartmentTypeMaintenance } from "./AssignmentDepartmentTypeMaintenance";

@Entity()
export class Maintenance implements IMaintenance {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;

  @Column({ type: "enum", enum: MaintenanceStatus })
  status: MaintenanceStatus;

  @ManyToOne(() => AssignmentDepartmentTypeMaintenance, (assignmentDepartmentTypeMaintenance) => assignmentDepartmentTypeMaintenance.maintenances)
  @JoinColumn({ name: "assignment_department_type_maintenance_id" })
  assignmentDepartmentTypeMaintenance: AssignmentDepartmentTypeMaintenance;
}