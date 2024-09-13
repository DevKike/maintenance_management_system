import { DataSource } from "typeorm";
import { Environment } from "../../environment/Environment";
import { join } from "path";

export const AppDataSource = new DataSource({
  type: Environment.DB_TYPE as any,
  host: Environment.DB_HOST,
  port: Environment.DB_PORT as any,
  username: Environment.DB_USERNAME,
  password: Environment.DB_PASSWORD,
  database: Environment.DB_NAME,
  entities: [join(__dirname, "../entities/**/*.ts")],
  migrations: [join(__dirname, "../migrations/**/*.ts")],
  migrationsTableName: "migration_table",
  synchronize: false,
});
