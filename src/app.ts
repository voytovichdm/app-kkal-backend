import express, { Express } from 'express';

import { KkalServer } from './setupServer';
import { DatabaseConnection } from './setupDatabase';
import { config } from './config';

class Application {
    public initialize(): void {
        this.loadConfig();
        new DatabaseConnection(config).databaseConnection();
        const app: Express = express();
        const server: KkalServer = new KkalServer(app);
        server.start();
    }

    private loadConfig(): void {
        config.validateConfig();
    }
}

const application: Application = new Application();
application.initialize();
