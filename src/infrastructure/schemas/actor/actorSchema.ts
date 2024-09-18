import Joi from "joi";

const document_number = Joi.number().max(9999999999).message("Document number must be less or equal to 10 length");
const document_type = Joi.string().valid("cédula de ciudadanía", "cédula de extranjería", "pasaporte", "registro civil").max(30);
const name = Joi.string().max(40);
const last_name = Joi.string().max(40);
const phone_number = Joi.string().optional().max(15).pattern(/^[0-9+()-\s]+$/);
const email = Joi.string().email().pattern(/^[a-zA-Z0-9._%+-]+@unicolombo\.edu\.co$/).message("Email must be from the domain @unicolombo.edu.co");
const status = Joi.string().valid("active", "inactive", "suspended");

export const createActorSchema = Joi.object({
  document_number: document_number.required(),
  document_type: document_type.required(),
  name: name.required(),
  last_name: last_name.required(),
  phone_number: phone_number,
  email: email.required(),
  status: status.optional()
});
