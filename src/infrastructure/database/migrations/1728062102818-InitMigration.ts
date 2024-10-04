import { MigrationInterface, QueryRunner } from "typeorm";

export class  InitMigration1728062102818 implements MigrationInterface {
    name = 'InitMigration1728062102818'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`department\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`description\` varchar(255) NOT NULL, \`phone_number\` varchar(255) NOT NULL, \`coordinator_id\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`actor\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`last_name\` varchar(255) NOT NULL, \`phone_number\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`document_number\` int NOT NULL, \`document_type\` varchar(255) NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`status\` varchar(255) NOT NULL DEFAULT 'active', \`role_id\` int NULL, \`department_id\` int NULL, UNIQUE INDEX \`IDX_d989d72a19a1761e7913e2272b\` (\`phone_number\`), UNIQUE INDEX \`IDX_3f4517a75abb25bc9861043618\` (\`email\`), UNIQUE INDEX \`IDX_17a0bf7231a52e401c842f2f33\` (\`document_number\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`role\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`description\` text NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`INSERT INTO \`role\` (\`name\`, \`description\`) VALUES ('administrator', 'administrator with full access'), ('system coordinator', 'person responsible for coordinating system-related tasks'), ('system assistant', 'assistant in system-related operations'), ('system auxiliary', 'auxiliary support for system-related activities'), ('maintenance coordinator', 'person in charge of coordinating maintenance tasks');`);
        await queryRunner.query(`ALTER TABLE \`department\` ADD CONSTRAINT \`FK_a91a901a5fb88e8ddfee7b6fb41\` FOREIGN KEY (\`coordinator_id\`) REFERENCES \`actor\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`actor\` ADD CONSTRAINT \`FK_c1496c9ca8f18dcda9b96c6c34d\` FOREIGN KEY (\`role_id\`) REFERENCES \`role\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`actor\` ADD CONSTRAINT \`FK_b4e2f9ac62a50f783f934ecc2a6\` FOREIGN KEY (\`department_id\`) REFERENCES \`department\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`actor\` DROP FOREIGN KEY \`FK_b4e2f9ac62a50f783f934ecc2a6\``);
        await queryRunner.query(`ALTER TABLE \`actor\` DROP FOREIGN KEY \`FK_c1496c9ca8f18dcda9b96c6c34d\``);
        await queryRunner.query(`ALTER TABLE \`department\` DROP FOREIGN KEY \`FK_a91a901a5fb88e8ddfee7b6fb41\``);
        await queryRunner.query(`DROP TABLE \`role\``);
        await queryRunner.query(`DROP INDEX \`IDX_17a0bf7231a52e401c842f2f33\` ON \`actor\``);
        await queryRunner.query(`DROP INDEX \`IDX_3f4517a75abb25bc9861043618\` ON \`actor\``);
        await queryRunner.query(`DROP INDEX \`IDX_d989d72a19a1761e7913e2272b\` ON \`actor\``);
        await queryRunner.query(`DROP TABLE \`actor\``);
        await queryRunner.query(`DROP TABLE \`department\``);
    }

}