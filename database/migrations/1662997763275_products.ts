import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'products'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('product_id')
      table.string('product_name')
      table.integer('quantity')
      table.decimal('price')
      table.binary('image')
      table.integer('categ_id').unsigned().references('category_id').inTable('categories')
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
