export class Message {
  static readonly INITIALIZED_DATA_SOURCE = "Data Source has been initialized!";
  static readonly DATA_SOURCE_ERROR = "Error during DataSource initialization";
  static readonly SERVER_RUNNING_AT_PORT = (port: string) => `Server running at port http://localhost:${port}`;
  static readonly ACTOR_CREATED_SUCCESSFULLY = "Actor was created successfully";
  static readonly DOCUMENT_NUMBER_TOO_LONG = "Document number must not exceed 10 characters";
  static readonly ROLE_NOT_FOUND = "No registered roles found";
  static readonly INTERNAL_SERVER_ERROR = "Internal server error";
}
