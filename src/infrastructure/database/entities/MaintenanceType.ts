import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { IMaintenanceType } from "../../../domain/entities/maintenanceType/IMaintenanceType";
import { AssignmentDepartmentTypeMaintenance } from "./AssignmentDepartmentTypeMaintenance";

@Entity()
export class MaintenanceType implements IMaintenanceType {
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

  @OneToMany(() => AssignmentDepartmentTypeMaintenance, (assignmentDepartmentTypeMaintenance) => assignmentDepartmentTypeMaintenance.maintenanceType)
  assignmentDepartmentTypeMaintenances: AssignmentDepartmentTypeMaintenance[];
}
