import { HttpStatusCode } from "../httpStatus/HttpStatusCode";

export class SizeException extends Error {
  public readonly statusCode: HttpStatusCode;

  constructor(message: string) {
    super(message);
    this.name = "BadRequest";
    this.statusCode = HttpStatusCode.BAD_REQUEST;
  }
}
