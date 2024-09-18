import { DocumentType } from "../../enums/actor/DocumentType";
import { Status } from "../../enums/actor/Status";

export interface IActor {
  document_number: number;
  document_type: DocumentType;
  name: string;
  last_name: string;
  phone_number: string;
  email: string;
  status: Status;
}
