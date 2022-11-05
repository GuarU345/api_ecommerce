import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class OrderDetail extends BaseModel {
  @column({ isPrimary: true })
  public detail_id: number

  @column()
  public ord_id

  @column()
  public prod_id

  @column()
  public total

  @column()
  public buy_quantity
}
