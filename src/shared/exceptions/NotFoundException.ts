import { HttpStatusCode } from "../httpStatus/HttpStatusCode";

export class NotFoundException extends Error {
  public readonly statusCode: HttpStatusCode;

  constructor(message: string) {
    super(message);
    this.name = "NotFoundException";
    this.statusCode = HttpStatusCode.NOT_FOUND;
  }
}
