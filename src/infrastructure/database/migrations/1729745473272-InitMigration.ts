import { MigrationInterface, QueryRunner } from "typeorm";

export class InitMigration1729745473272 implements MigrationInterface {
    name = 'InitMigration1729745473272'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`maintenance_type\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`description\` varchar(255) NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`maintenance\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`description\` varchar(255) NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`status\` enum ('requested', 'under_evaluation', 'approved', 'assigned', 'in_progress', 'paused', 'completed', 'rejected', 'closed', 'canceled') NOT NULL, \`assignment_department_type_maintenance_id\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`department_maintenance_type_assignment\` (\`id\` int NOT NULL AUTO_INCREMENT, \`assignment_date\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`status\` enum ('Active', 'Inactive', 'Expired', 'PendingApproval', 'Rejected') NOT NULL, \`priority\` int NOT NULL, \`comments\` text NOT NULL, \`department_id\` int NULL, \`maintenance_type_id\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`department\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`description\` varchar(255) NOT NULL, \`phone_number\` varchar(255) NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`status\` enum ('active', 'inactive', 'suspended', 'closed', 'pending_approval', 'disbanded') NOT NULL, \`coordinator_id\` int NULL, UNIQUE INDEX \`IDX_f12a590a0745be2eb854e30f8e\` (\`phone_number\`), UNIQUE INDEX \`REL_a91a901a5fb88e8ddfee7b6fb4\` (\`coordinator_id\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`actor\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`last_name\` varchar(255) NOT NULL, \`phone_number\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`document_number\` int NOT NULL, \`document_type\` enum ('cédula de ciudadanía', 'cédula de extranjería', 'pasaporte', 'registro civil') NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`status\` enum ('active', 'inactive', 'suspended') NOT NULL, \`department_id\` int NULL, \`role_id\` int NULL, UNIQUE INDEX \`IDX_d989d72a19a1761e7913e2272b\` (\`phone_number\`), UNIQUE INDEX \`IDX_3f4517a75abb25bc9861043618\` (\`email\`), UNIQUE INDEX \`IDX_17a0bf7231a52e401c842f2f33\` (\`document_number\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`role\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`description\` text NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`INSERT INTO \`role\` (\`name\`, \`description\`) VALUES ('administrator', 'administrator with full access'), ('system coordinator', 'person responsible for coordinating system-related tasks'), ('system assistant', 'assistant in system-related operations'), ('system auxiliary', 'auxiliary support for system-related activities'), ('maintenance coordinator', 'person in charge of coordinating maintenance tasks');`);
        await queryRunner.query(`ALTER TABLE \`maintenance\` ADD CONSTRAINT \`FK_4e78fb5383944b20b8198d79ea6\` FOREIGN KEY (\`assignment_department_type_maintenance_id\`) REFERENCES \`department_maintenance_type_assignment\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`department_maintenance_type_assignment\` ADD CONSTRAINT \`FK_4a9e10c475e8db8ce59a62f112b\` FOREIGN KEY (\`department_id\`) REFERENCES \`department\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`department_maintenance_type_assignment\` ADD CONSTRAINT \`FK_69e28541cbeab3692f7d293bf5c\` FOREIGN KEY (\`maintenance_type_id\`) REFERENCES \`maintenance_type\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`department\` ADD CONSTRAINT \`FK_a91a901a5fb88e8ddfee7b6fb41\` FOREIGN KEY (\`coordinator_id\`) REFERENCES \`actor\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`actor\` ADD CONSTRAINT \`FK_b4e2f9ac62a50f783f934ecc2a6\` FOREIGN KEY (\`department_id\`) REFERENCES \`department\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`actor\` ADD CONSTRAINT \`FK_c1496c9ca8f18dcda9b96c6c34d\` FOREIGN KEY (\`role_id\`) REFERENCES \`role\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`actor\` DROP FOREIGN KEY \`FK_c1496c9ca8f18dcda9b96c6c34d\``);
        await queryRunner.query(`ALTER TABLE \`actor\` DROP FOREIGN KEY \`FK_b4e2f9ac62a50f783f934ecc2a6\``);
        await queryRunner.query(`ALTER TABLE \`department\` DROP FOREIGN KEY \`FK_a91a901a5fb88e8ddfee7b6fb41\``);
        await queryRunner.query(`ALTER TABLE \`department_maintenance_type_assignment\` DROP FOREIGN KEY \`FK_69e28541cbeab3692f7d293bf5c\``);
        await queryRunner.query(`ALTER TABLE \`department_maintenance_type_assignment\` DROP FOREIGN KEY \`FK_4a9e10c475e8db8ce59a62f112b\``);
        await queryRunner.query(`ALTER TABLE \`maintenance\` DROP FOREIGN KEY \`FK_4e78fb5383944b20b8198d79ea6\``);
        await queryRunner.query(`DROP TABLE \`role\``);
        await queryRunner.query(`DROP INDEX \`IDX_17a0bf7231a52e401c842f2f33\` ON \`actor\``);
        await queryRunner.query(`DROP INDEX \`IDX_3f4517a75abb25bc9861043618\` ON \`actor\``);
        await queryRunner.query(`DROP INDEX \`IDX_d989d72a19a1761e7913e2272b\` ON \`actor\``);
        await queryRunner.query(`DROP TABLE \`actor\``);
        await queryRunner.query(`DROP INDEX \`REL_a91a901a5fb88e8ddfee7b6fb4\` ON \`department\``);
        await queryRunner.query(`DROP INDEX \`IDX_f12a590a0745be2eb854e30f8e\` ON \`department\``);
        await queryRunner.query(`DROP TABLE \`department\``);
        await queryRunner.query(`DROP TABLE \`department_maintenance_type_assignment\``);
        await queryRunner.query(`DROP TABLE \`maintenance\``);
        await queryRunner.query(`DROP TABLE \`maintenance_type\``);
    }

}
