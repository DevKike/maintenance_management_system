import { MigrationInterface, QueryRunner } from "typeorm";

export class InitMigration1725316071340 implements MigrationInterface {
  name = "InitMigration1725316071340";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`role\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`description\` text NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
    );
    await queryRunner.query(
      `CREATE TABLE \`actor\` (\`document_number\` int NOT NULL, \`document_type\` varchar(30) NOT NULL, \`name\` varchar(40) NOT NULL, \`last_name\` varchar(40) NOT NULL, \`phone_number\` varchar(15) DEFAULT NULL, \`email\` varchar(255) NOT NULL, PRIMARY KEY (\`document_number\`)) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE \`role\``);
    await queryRunner.query(`DROP TABLE \`actor\``);
  }
}
