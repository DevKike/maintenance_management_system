export interface IHttpServer {
  listen(port: string): Promise<void>;
  use(middleware: any): void;
  route(path: string, router: any): void;
  setMiddleware(middleware: any): void;
}
