import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class AddGoogleColumnsToAuths extends BaseSchema {
  protected tableName = 'auths'

  public async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.string('name')
      table.string('picture').nullable()
      table.string('access_token')
      table.string('is_verified')
    })
  }

  public async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumns('name', 'picture', 'access_token', 'is_verified')
    })
  }
}
