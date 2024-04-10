import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('diet', (table) => {
        table.uuid('id').primary()
        table.uuid('user_id').notNullable()
        table.text('name').notNullable()
        table.text('description').notNullable()
        table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable()
        table.boolean('is_diet_on_going').defaultTo(false)
    })
}

export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('diet')
}
