import { MigrationInterface, QueryRunner } from "typeorm";

export class DropScoreColumFromUserTable1748198988419 implements MigrationInterface {
    name = 'DropScoreColumFromUserTable1748198988419'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`score\``);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`score\` int NOT NULL DEFAULT '0'`);
    }

}
