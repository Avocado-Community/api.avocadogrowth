import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'mentors'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.float('rating').nullable()
      table.boolean('isAvailable').notNullable().defaultTo(false)
      table.integer('history').defaultTo(0)
      table.
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
