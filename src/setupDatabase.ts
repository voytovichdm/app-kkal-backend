import { Sequelize } from 'sequelize-typescript';
import Logger from 'bunyan';

import { config } from './config';

const log: Logger = config.createLogger('DataBase');

export class DatabaseConnection {
    private config;
    public sequelize: Sequelize;

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    constructor(config) {
        this.config = config;

        this.sequelize = new Sequelize(this.config.DATABASE_NAME, this.config.DATABASE_USER, this.config.DATABASE_PASSWORD, {
            // models: [__dirname + '/shared/services/db/models'],
            host: this.config.HOST,
            dialect: this.config.DIALECT
        });
    }

    public databaseConnection = async () => {
        this.sequelize
            .authenticate()
            .then(() => {
                log.info('Database connection successfully established.');
            })
            .catch((error: any) => {
                console.log();
                log.error('Unable to connect to the database:', error);
            });
    };
}
