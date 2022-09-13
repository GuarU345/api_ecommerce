import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class MarketCar extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public product_id

  @column()
  public user_id

  @column()
  public total

  @column()
  public quantity
}
