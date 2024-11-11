import { Options } from '@mikro-orm/core';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';

const config: Options<PostgreSqlDriver> = {
  dbName: process.env.DB_NAME || 'your_database',
  entities: ['./dist/entities'],
  entitiesTs: ['./src/entities'],
  driver: PostgreSqlDriver,
};

export default config;
