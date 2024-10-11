import { MigrationInterface, QueryRunner } from "typeorm";

export class InitMigration1728190132674 implements MigrationInterface {
    name = 'InitMigration1728190132674'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`process\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(40) NOT NULL, \`description\` varchar(255) NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`maintenance_type_id\` int NULL, UNIQUE INDEX \`IDX_7617cbfe70ee2c872d87470a9f\` (\`name\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`maintenance_type\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`description\` varchar(255) NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`maintenance\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(150) NOT NULL, \`description\` varchar(255) NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`status\` varchar(30) NOT NULL DEFAULT 'requested', \`maintenance_type_id\` int NULL, \`department_id\` int NULL, \`process_id\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`department\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(40) NOT NULL, \`description\` varchar(255) NOT NULL, \`phone_number\` varchar(15) NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`status\` varchar(40) NOT NULL DEFAULT 'active', \`coordinator_id\` int NULL, UNIQUE INDEX \`REL_a91a901a5fb88e8ddfee7b6fb4\` (\`coordinator_id\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`actor\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(40) NOT NULL, \`last_name\` varchar(40) NOT NULL, \`phone_number\` varchar(15) NOT NULL, \`email\` varchar(255) NOT NULL, \`document_number\` int NOT NULL, \`document_type\` varchar(30) NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`status\` varchar(20) NOT NULL DEFAULT 'active', \`department_id\` int NOT NULL, \`role_id\` int NOT NULL, UNIQUE INDEX \`IDX_d989d72a19a1761e7913e2272b\` (\`phone_number\`), UNIQUE INDEX \`IDX_3f4517a75abb25bc9861043618\` (\`email\`), UNIQUE INDEX \`IDX_17a0bf7231a52e401c842f2f33\` (\`document_number\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`role\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`description\` text NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`INSERT INTO \`role\` (\`name\`, \`description\`) VALUES ('administrator', 'administrator with full access'), ('system coordinator', 'person responsible for coordinating system-related tasks'), ('system assistant', 'assistant in system-related operations'), ('system auxiliary', 'auxiliary support for system-related activities'), ('maintenance coordinator', 'person in charge of coordinating maintenance tasks');`);
        await queryRunner.query(`ALTER TABLE \`process\` ADD CONSTRAINT \`FK_87388e1979b823ff5db2bbd9c1d\` FOREIGN KEY (\`maintenance_type_id\`) REFERENCES \`maintenance_type\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`maintenance\` ADD CONSTRAINT \`FK_17d8078c556b67ae4e11e558cc8\` FOREIGN KEY (\`maintenance_type_id\`) REFERENCES \`maintenance_type\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`maintenance\` ADD CONSTRAINT \`FK_6fcd653d3c765952eccaa8a9337\` FOREIGN KEY (\`department_id\`) REFERENCES \`department\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`maintenance\` ADD CONSTRAINT \`FK_805041e74c258f3ab60f471dfa2\` FOREIGN KEY (\`process_id\`) REFERENCES \`process\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`department\` ADD CONSTRAINT \`FK_a91a901a5fb88e8ddfee7b6fb41\` FOREIGN KEY (\`coordinator_id\`) REFERENCES \`actor\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`actor\` ADD CONSTRAINT \`FK_b4e2f9ac62a50f783f934ecc2a6\` FOREIGN KEY (\`department_id\`) REFERENCES \`department\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`actor\` ADD CONSTRAINT \`FK_c1496c9ca8f18dcda9b96c6c34d\` FOREIGN KEY (\`role_id\`) REFERENCES \`role\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`actor\` DROP FOREIGN KEY \`FK_c1496c9ca8f18dcda9b96c6c34d\``);
        await queryRunner.query(`ALTER TABLE \`actor\` DROP FOREIGN KEY \`FK_b4e2f9ac62a50f783f934ecc2a6\``);
        await queryRunner.query(`ALTER TABLE \`department\` DROP FOREIGN KEY \`FK_a91a901a5fb88e8ddfee7b6fb41\``);
        await queryRunner.query(`ALTER TABLE \`maintenance\` DROP FOREIGN KEY \`FK_805041e74c258f3ab60f471dfa2\``);
        await queryRunner.query(`ALTER TABLE \`maintenance\` DROP FOREIGN KEY \`FK_6fcd653d3c765952eccaa8a9337\``);
        await queryRunner.query(`ALTER TABLE \`maintenance\` DROP FOREIGN KEY \`FK_17d8078c556b67ae4e11e558cc8\``);
        await queryRunner.query(`ALTER TABLE \`process\` DROP FOREIGN KEY \`FK_87388e1979b823ff5db2bbd9c1d\``);
        await queryRunner.query(`DROP TABLE \`role\``);
        await queryRunner.query(`DROP INDEX \`IDX_17a0bf7231a52e401c842f2f33\` ON \`actor\``);
        await queryRunner.query(`DROP INDEX \`IDX_3f4517a75abb25bc9861043618\` ON \`actor\``);
        await queryRunner.query(`DROP INDEX \`IDX_d989d72a19a1761e7913e2272b\` ON \`actor\``);
        await queryRunner.query(`DROP TABLE \`actor\``);
        await queryRunner.query(`DROP INDEX \`REL_a91a901a5fb88e8ddfee7b6fb4\` ON \`department\``);
        await queryRunner.query(`DROP TABLE \`department\``);
        await queryRunner.query(`DROP TABLE \`maintenance\``);
        await queryRunner.query(`DROP TABLE \`maintenance_type\``);
        await queryRunner.query(`DROP INDEX \`IDX_7617cbfe70ee2c872d87470a9f\` ON \`process\``);
        await queryRunner.query(`DROP TABLE \`process\``);
    }

}
