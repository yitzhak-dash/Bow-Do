import { Connection, ConnectionOptions, createConnection } from 'typeorm';
import * as config from 'config';
//
import { getDbModels } from './db-models.provider';
import { injectable } from 'inversify';
import { setTimeout } from 'timers';
import { LoggerOptions } from 'typeorm/logger/LoggerOptions';

@injectable()
export class DbConnector {
    private connection: Connection;
    readonly connectionConfig = config.get<any>('dbConnection');

    constructor() {
    }

    createConnectionOptions = (logging: LoggerOptions = 'all'): ConnectionOptions => {
        return {
            type: this.connectionConfig.type,
            host: this.connectionConfig.host,
            port: this.connectionConfig.port,
            username: this.connectionConfig.username,
            password: this.connectionConfig.password,
            database: this.connectionConfig.database,
            entities: getDbModels(),
            autoSchemaSync: true,
            logging
        };
    };

    init = async (logging: LoggerOptions = 'all'): Promise<boolean> => {
        if (this.connection) {
            throw new Error('Can not recreate connection');
        }
        try {
            this.connection = await createConnection(this.createConnectionOptions(logging));
            return this.connection.isConnected;
        } catch (err) {
            console.log(err);
        }
        try {
            console.log('waiting ...');
            return new Promise(resolve => {
                setTimeout(() => resolve(), 1000);
            }).then(async () => {
                console.log('trying to reconnect...');
                this.connection = await createConnection(this.createConnectionOptions());
                console.log(`connection's successful`);
                return this.connection.isConnected;
            });
        } catch (err) {
            console.log('connection failed');
            console.log(err);
            throw err;
        }
    };

    getConnection = (): Connection => this.connection;
}

export interface IDbConnector {
    init(logging: LoggerOptions);

    getConnection(): Connection;
}
