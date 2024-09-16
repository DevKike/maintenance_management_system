import { Application } from "./infrastructure/Application";

(async () => {
  const app = new Application();
  await app.listen();
})();
