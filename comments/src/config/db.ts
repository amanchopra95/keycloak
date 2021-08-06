import "reflect-metadata"
import { createConnection } from "typeorm"
import path from 'path'

enum dialect {
    postgres,
    mysql
}

export const db = async () => {
    return await createConnection({
        type: process.env.DB_DIALECT as "postgres",
        host: <string>process.env.DB_HOST,
        port: parseInt(<string>process.env.DB_PORT, 10),
        username: <string>process.env.DB_USERNAME,
        password: <string>process.env.DB_PASSWORD,
        database: <string>process.env.DB_DATABASE_NAME,
        entities: [
            path.resolve(__dirname, '..', "entities/*.ts")
        ]
    })
}

// Inversify