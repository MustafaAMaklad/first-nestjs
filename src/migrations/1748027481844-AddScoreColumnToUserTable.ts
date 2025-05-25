import { MigrationInterface, QueryRunner } from "typeorm";

export class AddScoreColumnToUserTable1748027481844 implements MigrationInterface {
    name = 'AddScoreColumnToUserTable1748027481844'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`score\` int NOT NULL DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`score\``);
    }

}
