import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'market_cars'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('market_id')
      table.integer('prod_id').unsigned().references('product_id').inTable('products')
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.integer('total')
      table.integer('quantity')



      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
     
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
