import { DataSource } from 'typeorm';

import * as path from 'path';
import { fileURLToPath } from 'url';
import { Voucher } from '../entities/voucher.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const isProduction = process.env.NODE_ENV === 'production';

const migrationPath = isProduction
  ? path.join(__dirname, '/../database/migrations/*.js')
  : path.join(__dirname, '/../database/migrations/*.ts');

const entityPath = isProduction
  ? path.join(__dirname, '/../entities/*.js')
  : path.join(__dirname, '/../entities/*.ts');

const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.MYSQL_HOST,
  port: parseInt(process.env.MYSQL_PORT!, 10),
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
  synchronize: true,
  logging: true,
  entities: [entityPath],
  migrations: [migrationPath],
});

export default AppDataSource;
