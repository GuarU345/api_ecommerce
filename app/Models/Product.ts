
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Product extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public product_name

  @column()
  public quantity

  @column()
  public price

  @column()
  public image

  @column()
  public category_id
}
