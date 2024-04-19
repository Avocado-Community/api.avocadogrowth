import { BaseSchema } from '@adonisjs/lucid/schema'

export default class StackSchema extends BaseSchema {
  protected tableName = 'stacks'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('tag').notNullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
