import { Connection, ConnectionOptions, createConnection } from 'typeorm';
import * as config from 'config';
//
import { getDbModels } from './db-models.provider';
import { injectable } from 'inversify';

@injectable()
export class DbConnector {
    private connection: Connection;
    readonly connectionConfig = config.get<any>('dbConnection');

    constructor() {
        console.log('DbConnector created');
    }

    createConnectionOptions = (): ConnectionOptions => {
        return {
            type: this.connectionConfig.type,
            host: this.connectionConfig.host,
            port: this.connectionConfig.port,
            username: this.connectionConfig.username,
            password: this.connectionConfig.password,
            database: this.connectionConfig.database,
            entities: getDbModels(),
            autoSchemaSync: true,
            logging: 'all'
        };
    };

    init = async (): Promise<boolean> => {
        if (this.connection) {
            throw new Error('Can not recreate connection');
        }
        this.connection = await createConnection(this.createConnectionOptions());
        console.log('DbConnector: connection created');
        return this.connection.isConnected;
    };

    getConnection = (): Connection => this.connection;
}

export interface IDbConnector {
    init();

    getConnection(): Connection;
}