
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Product extends BaseModel {
  @column({ isPrimary: true })
  public product_id:number

  @column()
  public product_name

  @column()
  public stock

  @column()
  public price

  @column()
  public image

  @column()
  public categ_id
}
