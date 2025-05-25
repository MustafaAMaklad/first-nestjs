import { MigrationInterface, QueryRunner } from "typeorm";

export class AddUniqueEmailIndexToUserTable1748198369314 implements MigrationInterface {
    name = 'AddUniqueEmailIndexToUserTable1748198369314'

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.query(`CREATE UNIQUE INDEX \`UQ_USER_EMAIL\` ON \`user\` (\`email\`)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`UQ_USER_EMAIL\` ON \`user\``);
    }

}
