import { MigrationInterface, QueryRunner } from "typeorm";

export class  InitMigration1727130013613 implements MigrationInterface {
    name = 'InitMigration1727130013613'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`role\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`description\` text NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`INSERT INTO \`role\` (\`name\`, \`description\`) VALUES ('administrator', 'administrator with full access'), ('system coordinator', 'person responsible for coordinating system-related tasks'), ('system assistant', 'assistant in system-related operations'), ('system auxiliary', 'auxiliary support for system-related activities'), ('maintenance coordinator', 'person in charge of coordinating maintenance tasks');`);
        await queryRunner.query(`CREATE TABLE \`actor\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`last_name\` varchar(255) NOT NULL, \`phone_number\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`document_number\` int NOT NULL, \`document_type\` varchar(255) NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`status\` varchar(255) NOT NULL DEFAULT 'active', \`roleId\` int NULL, UNIQUE INDEX \`IDX_d989d72a19a1761e7913e2272b\` (\`phone_number\`), UNIQUE INDEX \`IDX_3f4517a75abb25bc9861043618\` (\`email\`), UNIQUE INDEX \`IDX_17a0bf7231a52e401c842f2f33\` (\`document_number\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`actor\` ADD CONSTRAINT \`FK_e372d30c0a3057d8f69ae5c7713\` FOREIGN KEY (\`roleId\`) REFERENCES \`role\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`actor\` DROP FOREIGN KEY \`FK_e372d30c0a3057d8f69ae5c7713\``);
        await queryRunner.query(`DROP INDEX \`IDX_17a0bf7231a52e401c842f2f33\` ON \`actor\``);
        await queryRunner.query(`DROP INDEX \`IDX_3f4517a75abb25bc9861043618\` ON \`actor\``);
        await queryRunner.query(`DROP INDEX \`IDX_d989d72a19a1761e7913e2272b\` ON \`actor\``);
        await queryRunner.query(`DROP TABLE \`actor\``);
        await queryRunner.query(`DROP TABLE \`role\``);
    }

}
