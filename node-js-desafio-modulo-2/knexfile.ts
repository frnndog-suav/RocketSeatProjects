import type { Knex } from 'knex'
import { env } from './src/env'

export const config: { [key: string]: Knex.Config } = {
    development: {
        client: env.DATABASE_CLIENT,
        connection:
            env.DATABASE_CLIENT === 'sqlite3'
                ? {
                      filename: env.DATABASE_URL,
                  }
                : env.DATABASE_URL,
        useNullAsDefault: true,
        migrations: {
            directory: './db/migrations',
            extension: 'ts',
        },
    },
    test: {
        client: env.DATABASE_CLIENT,
        connection:
            env.DATABASE_CLIENT === 'sqlite3'
                ? {
                      filename: env.DATABASE_URL,
                  }
                : env.DATABASE_URL,
        useNullAsDefault: true,
        migrations: {
            directory: './db/migrations',
            extension: 'ts',
        },
    },
}

//To run (npm run dev) the module exports must be commented
module.exports = config
