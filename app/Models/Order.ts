
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Order extends BaseModel {
  @column({ isPrimary: true })
  public order_id: number
  
  @column()
  public date

  @column()
  public user_id
}
