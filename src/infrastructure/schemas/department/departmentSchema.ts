import Joi from "joi";

const name = Joi.string().max(40);
const description = Joi.string().max(40);
const phone_number = Joi.string().optional().max(15).pattern(/^[0-9+()-\s]+$/);
const coordinator_id = Joi.number();

export const createDepartmentSchema = Joi.object({
  name: name.required(),
  description: description.required(),
  phone_number: phone_number.required(),
  coordinator_id: coordinator_id.required(),
});

export const updateDepartmentSchema = Joi.object({
  name: name,
  description: description,
  phone_number: phone_number,
  coordinator_id: coordinator_id
});