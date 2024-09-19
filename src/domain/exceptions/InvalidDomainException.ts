import { HttpStatusCode } from "../enums/httpStatusCode/HttpStatusCode";

export class InvalidDomainException extends Error {
  public readonly httpStatusCode: HttpStatusCode;

  constructor(message: string) {
    super(message);
    this.name = "InvalidDomainException";
    this.httpStatusCode = HttpStatusCode.BAD_REQUEST;
  }
}
