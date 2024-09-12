import { Request, Response, NextFunction } from "express";
import { HttpStatusCode } from "../express/http/HttpStatusCode";
import Joi from "joi";

export const schemaValidator =
  (schema: Joi.ObjectSchema) =>
  (req: Request, res: Response, next: NextFunction): any => {
    const { error } = schema.validate(req.body, { abortEarly: false });

    if (error) {
      const errors = error.details.map((detail) => detail.message);
      return res.status(HttpStatusCode.BAD_REQUEST).json({ errors });
    } else {
      next();
    }
  };
