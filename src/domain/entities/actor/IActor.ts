import { DocumentType } from "../../enums/actor/DocumentType";
import { Status } from "../../enums/actor/Status";
import { IRole } from "../role/IRole";

export interface IActor {
  id: string;
  name: string;
  last_name: string;
  phone_number: string;
  email: string;
  document_number: number;
  document_type: DocumentType;
  role: IRole;
  status: Status;
}
