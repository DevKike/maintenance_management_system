import Joi from "joi";
import { ActorStatus } from "../../../domain/enums/actor/ActorStatus";
import { DocumentType } from "../../../domain/enums/actor/DocumentType";
import { RoleId } from "../../../domain/enums/role/Role";

const name = Joi.string().max(40);
const lastName = Joi.string().max(40);
const phoneNumber = Joi.string().optional().max(15).pattern(/^[0-9+()-\s]+$/);
const email = Joi.string().email().pattern(/^[a-zA-Z0-9._%+-]+@unicolombo\.edu\.co$/).message("Email must be from the domain @unicolombo.edu.co");
const documentNumber = Joi.number().max(9999999999).message("Document number must be less or equal to 10 length");
const documentType = Joi.string().valid(DocumentType.CC, DocumentType.CE, DocumentType.PB, DocumentType.RC).max(30);
const departmentId = Joi.number();
const status = Joi.string().valid(ActorStatus.ACTIVE, ActorStatus.INACTIVE, ActorStatus.SUSPENDED);
const roleId = Joi.number().valid(RoleId.ADMINISTRATOR, RoleId.MAINTENANCE_COORDINATOR, RoleId.SYSTEM_ASSISTANT, RoleId.SYSTEM_AUXILIARY, RoleId.SYSTEM_COORDINATOR);

export const createActorSchema = Joi.object({
  name: name.required(),
  lastName: lastName.required(),
  phoneNumber: phoneNumber,
  email: email.required(),
  documentNumber: documentNumber.required(),
  documentType: documentType.required(),
  department: departmentId.required(),
  status: status.optional(),
  role: roleId.required(),
});

export const updateActorSchema =  Joi.object({
  name: name,
  lastName: lastName,
  phoneNumber: phoneNumber,
  email: email,
  status: status,
  role: roleId,
})
