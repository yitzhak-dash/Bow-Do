import { Connection, createConnection } from 'typeorm';


export function connect(entities: any[]): Promise<Connection> {
    return createConnection({
        type: 'postgres',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'admin',
        database: 'test',
        entities: entities,
        autoSchemaSync: true,
    });
}

