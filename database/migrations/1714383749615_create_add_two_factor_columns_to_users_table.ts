import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  async up() {
    this.schema.alterTable(this.tableName, (table) => {

      table.text('two_factor_secret').nullable()

      table.text('two_factor_recovery_codes').nullable()

      table.timestamp('two_factor_confirmed_at').nullable()

    })
  }

  async down() {
   this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('two_factor_secret')
      table.dropColumn('two_factor_recovery_codes')
      table.dropColumn('two_factor_confirmed_at')
    })
   }
}
