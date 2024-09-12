export class MessageConstants {
  static readonly USER_CREATED_SUCCESSFULLY = "User created successfully";
  static readonly INITIALIZED_DATA_SOURCE = "Data Source has been initialized!";
  static readonly DATA_SOURCE_ERROR = "Error during DataSource initialization";
  static readonly SERVER_RUNNING_AT = (port: string) =>
    `Server running at port http://localhost:${port}`;
  static readonly INTERNAL_SERVER_ERROR = "Internal server error";
  static readonly UNEXPECTED_ERROR_OCURRED = "An unexpected error occurred";
}
