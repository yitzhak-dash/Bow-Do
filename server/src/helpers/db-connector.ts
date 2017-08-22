import { Connection, createConnection } from 'typeorm';

// TODO: use config to get these constants
export function connect(entities: any[]): Promise<Connection> {
    return createConnection({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'bowdo',
        password: 'Aa123',
        database: 'bowdo_db',
        entities: entities,
        autoSchemaSync: true,
    });
}

