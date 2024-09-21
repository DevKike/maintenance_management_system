import { MigrationInterface, QueryRunner } from "typeorm";

export class  InitMigration1726946881644 implements MigrationInterface {
    name = 'InitMigration1726946881644'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`actor\` (\`id\` varchar(36) NOT NULL, \`name\` varchar(255) NOT NULL, \`last_name\` varchar(255) NOT NULL, \`phone_number\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`document_number\` int NOT NULL, \`document_type\` varchar(255) NOT NULL, \`status\` varchar(255) NOT NULL, \`roleId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`role\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`description\` text NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`actor\` ADD CONSTRAINT \`FK_e372d30c0a3057d8f69ae5c7713\` FOREIGN KEY (\`roleId\`) REFERENCES \`role\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`actor\` DROP FOREIGN KEY \`FK_e372d30c0a3057d8f69ae5c7713\``);
        await queryRunner.query(`DROP TABLE \`role\``);
        await queryRunner.query(`DROP TABLE \`actor\``);
    }

}
