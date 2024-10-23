import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { IAssignmentDepartmentTypeMaintenance } from "../../../domain/entities/assignmentDepartmentTypeMaintenance/IAssignmentDepartmentTypeMaintenance";
import { Department } from "./Department";
import { MaintenanceType } from "./MaintenanceType";
import { Maintenance } from "./Maintenance";
import { AssignmentDepartmentTypeMaintenanceStatus } from "../../../domain/enums/assignmentDepartmentTypeMaintenanceStatus/AssignmentDepartmentTypeMaintenanceStatus";

@Entity()
export class AssignmentDepartmentTypeMaintenance implements IAssignmentDepartmentTypeMaintenance {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn({ name: "assignment_date" })
    assignmentDate: Date;

    @Column({ type: "enum", enum: AssignmentDepartmentTypeMaintenanceStatus })
    status: AssignmentDepartmentTypeMaintenanceStatus;

    @Column()
    priority: number;

    @Column("text")
    comments: string;

    @ManyToOne(() => Department, (department) => department.assignmentDepartmentTypeMaintenances)
    @JoinColumn({ name: "department_id" })
    department: Department;

    @ManyToOne(() => MaintenanceType, (maintenanceType) => maintenanceType.assignmentDepartmentTypeMaintenances)   
    @JoinColumn({ name: "maintenance_type_id" })
    maintenanceType: MaintenanceType;

    @OneToMany(() => Maintenance, (maintenance) => maintenance.assignmentDepartmentTypeMaintenance)
    maintenances: Maintenance[];
}