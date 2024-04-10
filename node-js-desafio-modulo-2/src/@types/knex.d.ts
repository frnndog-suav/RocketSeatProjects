import { knex } from 'knex'

declare module 'knex/types/tables' {
    export interface Tables {
        user: {
            id: string
            name: string
        }
        diet: {
            id: string
            user_id: string
            name: string
            description: string
            is_diet_on_going: boolean
            created_at?: string
        }
    }
}

// table.uuid('id').primary()
//         table.uuid('user_id').notNullable()
//         table.text('name').notNullable()
//         table.text('description').notNullable()
//         table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable()
//         table.boolean('is_diet_on_going').defaultTo(false)
