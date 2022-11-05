import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class MarketCar extends BaseModel {
  @column({ isPrimary: true })
  public market_id: number

  @column()
  public prod_id

  @column()
  public user_id

  @column()
  public total

  @column()
  public quantity
}
