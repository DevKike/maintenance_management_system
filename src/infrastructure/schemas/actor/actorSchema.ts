import Joi from "joi";

const document_number = Joi.number().max(10);
const document_type = Joi.string().max(30);
const name = Joi.string().max(40);
const last_name = Joi.string().max(40);
const phone_number = Joi.string().optional().max(15).pattern(/^[0-9+()-\s]+$/);
const email = Joi.string()
const status = Joi.string()

export const createActorSchema = Joi.object({
  document_number: document_number.required(),
  document_type: document_type.required(),
  name: name.required(),
  last_name: last_name.required(),
  phone_number: phone_number,
  email: email.required(),
  status: status.optional()
});
