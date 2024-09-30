import Joi from "joi";
import { Status } from "../../../domain/enums/actor/Status";
import { DocumentType } from "../../../domain/enums/actor/DocumentType";
import { RoleId } from "../../../domain/enums/role/Role";

const name = Joi.string().max(40);
const last_name = Joi.string().max(40);
const phone_number = Joi.string().optional().max(15).pattern(/^[0-9+()-\s]+$/);
const email = Joi.string().email().pattern(/^[a-zA-Z0-9._%+-]+@unicolombo\.edu\.co$/).message("Email must be from the domain @unicolombo.edu.co");
const document_number = Joi.number().max(9999999999).message("Document number must be less or equal to 10 length");
const document_type = Joi.string().valid(DocumentType.CC, DocumentType.CE, DocumentType.PB, DocumentType.RC).max(30);
const roleId = Joi.number().valid(RoleId.ADMINISTRATOR, RoleId.MAINTENANCE_COORDINATOR, RoleId.SYSTEM_ASSISTANT, RoleId.SYSTEM_AUXILIARY, RoleId.SYSTEM_COORDINATOR);
const status = Joi.string().valid(Status.ACTIVE, Status.INACTIVE, Status.SUSPENDED);

export const createActorSchema = Joi.object({
  name: name.required(),
  last_name: last_name.required(),
  phone_number: phone_number,
  email: email.required(),
  document_number: document_number.required(),
  document_type: document_type.required(),
  role: roleId.required(),
  status: status.optional()
});
