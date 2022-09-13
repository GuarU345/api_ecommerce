import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class OrderDetail extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public order_id

  @column()
  public product_id

  @column()
  public total

  @column()
  public buy_quantity
}
