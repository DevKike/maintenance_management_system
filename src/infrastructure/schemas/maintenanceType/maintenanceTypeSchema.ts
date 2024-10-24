import Joi from "joi";

const name = Joi.string();
const description = Joi.string();

export const createMaintenanceTypeSchema = Joi.object({
  name: name.required(),
  description: description,
});
