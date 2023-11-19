import dotenv from 'dotenv';
dotenv.config({ path: __dirname + `/../../env/.env.${process.env.NODE_ENV}` });

import { config } from '../../../config';

module.exports = {
    dev: {
        username: config.DATABASE_USER,
        password: config.DATABASE_PASSWORD,
        database: config.DATABASE_NAME,
        host: config.HOST,
        dialect: config.DIALECT
    },
    test: {
        username: config.DATABASE_USER,
        password: config.DATABASE_PASSWORD,
        database: config.DATABASE_NAME,
        host: config.HOST,
        dialect: config.DIALECT
    },
    prod: {
        username: config.DATABASE_USER,
        password: config.DATABASE_PASSWORD,
        database: config.DATABASE_NAME,
        host: config.HOST,
        dialect: config.DIALECT
    }
};
