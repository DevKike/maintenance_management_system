import { DocumentType } from "../../enums/actor/DocumentType";
import { Status } from "../../enums/actor/Status";
import { IDepartment } from "../department/IDepartment";
import { IRole } from "../role/IRole";

export interface IActor {
  id: number;
  name: string;
  last_name: string;
  phone_number: string;
  email: string;
  document_number: number;
  document_type: DocumentType;
  created_at: Date;
  updated_at: Date;
  status: Status;
  department: IDepartment;
  role: IRole;
}
