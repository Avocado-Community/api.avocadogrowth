import { BaseSchema } from '@adonisjs/lucid/schema'

export default class UserSchema extends BaseSchema {
  protected tableName = 'users'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable().primary()
      table.string('first_name').notNullable()
      table.string('last_name').notNullable()
      table.string('username').nullable()
      table.string('email', 254).notNullable().unique()
      table.string('password').notNullable()
      table.string('gender').nullable()
      table.integer('age').nullable()
      table.boolean('online_status').defaultTo(false)
      table.boolean('is_banned').defaultTo(false)
      table.string('bio').nullable()
      table.json('urls').nullable()
      table.string('profile_picture').nullable()
      table.integer('is_mentor').nullable().references('mentors.id').onDelete('RESTRICT')
      table.integer('mentors').nullable().references('users.id').onDelete('RESTRICT')
      table.integer('learning_stacks').nullable().references('stacks.id').onDelete('RESTRICT')

      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
