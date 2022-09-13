// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Database from "@ioc:Adonis/Lucid/Database"
import MarketCar from "App/Models/MarketCar"

export default class MarketCarsController {
    public async createMarketCar({request,response}){
        
        const prod=request.input(['product_id'])
        const user=request.input(['user_id'])
        const total=request.input(['total'])
        const cant=request.input(['quantity'])

        // const query=await Database.from('products').select('price').where('id','=',+prod)
        // const precio=query
        
        // for(const index in precio){
        //     console.log(precio[index])
        //     for(const fin in precio){
        //         console.log(precio[fin])
        //     }
        // }

        const marketcar=new MarketCar()
        marketcar.product_id=prod
        marketcar.user_id=user
        marketcar.total=total
        marketcar.quantity=cant

        marketcar.save()
        return response.json({marketcar})

    }
}
