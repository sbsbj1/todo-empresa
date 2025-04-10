import { Sequelize } from '@sequelize/core';
import { PostgresDialect } from '@sequelize/postgres';
import 'dotenv/config.js';

const sequelize = new Sequelize({
  dialect: PostgresDialect,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: 'localhost',
  port: 5432,
  ssl: false,
  clientMinMessages: 'notice',
  logging: console.log,
});

export default sequelize;