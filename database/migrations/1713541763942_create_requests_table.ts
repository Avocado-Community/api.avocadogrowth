import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'requests'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.text('content').notNullable()
      table.integer('from_id').unsigned().notNullable()
      table.integer('to_id').unsigned().notNullable()
      table.foreign('from_id').references('users.id').onDelete('CASCADE')
      table.foreign('to_id').references('users.id').onDelete('CASCADE')

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}