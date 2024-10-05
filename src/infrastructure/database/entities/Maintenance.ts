import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { IMaintenance } from "../../../domain/entities/maintenance/IMaintenance";
import { Status } from "../../../domain/enums/maintenance/Status";
import { Type } from "../../../domain/enums/maintenance/Type";
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
  type: Type;

  @Column({ default: Status.REQUESTED })
  status: Status;

  @ManyToOne(() => Department, (department) => department.maintenances)
  @JoinColumn({ name: "department_id" })
  department: Department;
}
