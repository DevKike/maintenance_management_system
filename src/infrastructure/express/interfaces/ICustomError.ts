export interface ICustomError extends Error {
  statusCode?: number;
  error?: string;
}
