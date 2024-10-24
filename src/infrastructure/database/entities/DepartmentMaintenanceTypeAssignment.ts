import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Department } from "./Department";
import { MaintenanceType } from "./MaintenanceType";
import { Maintenance } from "./Maintenance";
import { IDepartmentMaintenanceTypeAssignment } from "../../../domain/entities/departmentMaintenanceTypeAssignment/IDepartmentMaintenanceTypeAssignment";
import { DepartmentMaintenanceTypeAssignmentStatus } from "../../../domain/enums/DepartmentMaintenanceTypeAssignmentStatus/DepartmentMaintenanceTypeAssignmentStatus";

@Entity()
export class DepartmentMaintenanceTypeAssignment implements IDepartmentMaintenanceTypeAssignment
{
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({ name: "assignment_date" })
  assignmentDate: Date;

  @Column({ type: "enum", enum: DepartmentMaintenanceTypeAssignmentStatus })
  status: DepartmentMaintenanceTypeAssignmentStatus;

  @Column()
  priority: number;

  @Column("text")
  comments: string;

  @ManyToOne(() => Department, (department) => department.departmentMaintenanceTypeAssignments)
  @JoinColumn({ name: "department_id" })
  department: Department;

  @ManyToOne(() => MaintenanceType, (maintenanceType) => maintenanceType.departmentMaintenanceTypeAssignments)
  @JoinColumn({ name: "maintenance_type_id" })
  maintenanceType: MaintenanceType;

  @OneToMany(() => Maintenance, (maintenance) => maintenance.departmentMaintenanceTypeAssignment)
  maintenances: Maintenance[];
}
