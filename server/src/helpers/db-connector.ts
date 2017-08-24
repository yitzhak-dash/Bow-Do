import { Connection, createConnection } from 'typeorm';
import * as config from 'config';

export function connect(entities: any[]): Promise<Connection> {
    const connectionConfig = config.get<any>('db_connection');
    return createConnection({
        type: connectionConfig.type,
        host: connectionConfig.host,
        port: connectionConfig.port,
        username: connectionConfig.username,
        password: connectionConfig.password,
        database: connectionConfig.database,
        entities: entities,
        autoSchemaSync: true,
    });
}

