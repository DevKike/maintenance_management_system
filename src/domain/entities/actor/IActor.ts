import { DocumentType } from "../../enums/actor/DocumentType";
import { ActorStatus } from "../../enums/actor/ActorStatus";
import { IDepartment } from "../department/IDepartment";
import { IRole } from "../role/IRole";

export interface IActor {
  id: number;
  name: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  documentNumber: number;
  documentType: DocumentType;
  createdAt: Date;
  updatedAt: Date;
  status: ActorStatus;
  department: IDepartment;
  role: IRole;
}
