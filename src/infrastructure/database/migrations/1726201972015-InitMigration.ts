import { MigrationInterface, QueryRunner } from "typeorm";

export class InitMigration1726201972015 implements MigrationInterface {
    name = 'InitMigration1726201972015'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`role\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`description\` text NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`actor\` (\`document_number\` int NOT NULL, \`document_type\` varchar(255) NOT NULL, \`name\` varchar(255) NOT NULL, \`last_name\` varchar(255) NOT NULL, \`phone_number\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`status\` varchar(255) NOT NULL, PRIMARY KEY (\`document_number\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`actor\``);
        await queryRunner.query(`DROP TABLE \`role\``);
    }

}
