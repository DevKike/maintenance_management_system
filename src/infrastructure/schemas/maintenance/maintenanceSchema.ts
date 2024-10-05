import Joi from "joi";
import { Status } from "../../../domain/enums/maintenance/Status";
import { Type } from "../../../domain/enums/maintenance/Type";

const name = Joi.string();
const description = Joi.string();
const status = Joi.string()
  .valid(
    Status.APPROVED,
    Status.ASSIGNED,
    Status.CANCELED,
    Status.CLOSED,
    Status.COMPLETED,
    Status.COMPLETED,
    Status.IN_PROGRESS,
    Status.PAUSED,
    Status.REJECTED,
    Status.REQUESTED,
    Status.UNDER_EVALUATION
  )
  .empty("")
  .default(null);

const type = Joi.string().valid(Type.CORRECTIVE, Type.PREVENTIVE);
const department_id = Joi.number();

export const createMaintenanceSchema = Joi.object({
  name: name.required(),
  description: description.required(),
  status: status,
  type: type.required(),
  department: department_id.required(),
});
