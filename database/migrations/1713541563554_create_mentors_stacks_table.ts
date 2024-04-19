import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'mentors_stacks'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.integer('mentor_id').unsigned().index()
      table.integer('stack_id').unsigned().index()
      table.foreign('mentor_id').references('mentors.id').onDelete('CASCADE')
      table.foreign('stack_id').references('stacks.id').onDelete('CASCADE')
      table.unique(['mentor_id', 'stack_id'])

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}