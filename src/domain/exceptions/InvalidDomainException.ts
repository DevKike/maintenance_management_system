import { HttpStatusCode } from "../../infrastructure/express/http/HttpStatusCode";

export class InvalidDomainException extends Error {
  public readonly httpStatusCode: HttpStatusCode;

  constructor(message: string) {
    super(message);
    this.name = "InvalidDomainException";
    this.httpStatusCode = HttpStatusCode.BAD_REQUEST;
  }
}
