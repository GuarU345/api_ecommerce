import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'order_details'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('detail_id')
      table.integer('ord_id').unsigned().references('order_id').inTable('orders')
      table.integer('prod_id').unsigned().references('product_id').inTable('products')
      table.decimal('total')
      table.integer('buy_quantity')

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
