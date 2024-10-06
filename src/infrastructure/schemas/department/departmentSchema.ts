import Joi from "joi";
import { DepartmentStatus } from "../../../domain/enums/department/DepartmentStatus";

const name = Joi.string().max(40);
const description = Joi.string().max(40);
const phone_number = Joi.string().optional().max(15).pattern(/^[0-9+()-\s]+$/);
const coordinator_id = Joi.number();
const status = Joi.string().valid(
  DepartmentStatus.ACTIVE,
  DepartmentStatus.CLOSED,
  DepartmentStatus.DISBANDED,
  DepartmentStatus.INACTIVE,
  DepartmentStatus.PENDING_APPROVAL,
  DepartmentStatus.SUSPENDED
)
.empty("")
.default(null);

export const createDepartmentSchema = Joi.object({
  name: name.required(),
  description: description.required(),
  phone_number: phone_number.required(),
  status: status,
  coordinator: coordinator_id,
});

export const updateDepartmentSchema = Joi.object({
  name: name,
  description: description,
  phone_number: phone_number,
  coordinator: coordinator_id,
});
