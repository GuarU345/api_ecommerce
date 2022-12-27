// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Database from "@ioc:Adonis/Lucid/Database"
import MarketCar from "App/Models/MarketCar"


export default class MarketCarsController {
    public async createMarketCar({request,response}){
        
        const prod=request.input(['prod_id'])
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
        marketcar.prod_id=prod
        marketcar.user_id=user
        marketcar.total=total
        marketcar.quantity=cant

        marketcar.save()
        return response.json(marketcar)

    }
    public async getMarketCar({params}){
        const query=await Database.from('market_cars as mk').select('p.product_id','p.product_name','p.image','p.price','mk.total','mk.quantity','mk.market_id').innerJoin('products as p','p.product_id','mk.prod_id').innerJoin('users as u','u.id','mk.user_id').where('user_id','=',+params.id)
        return query        
    }
    public async delProdToCar({params,response}){
        const prod=await MarketCar.findOrFail(params.id)

        prod.delete()

        response.json(prod)
    }

    public async deleteNextToBuy(){
        const prod=await Database.from('market_cars as mk').select('*')
        
        prod.forEach(async element=>{
            const query=await MarketCar.findOrFail(element.market_id)
            query.delete()
        })
    }

    public async getTotalInCar({params,response}){
        const query=await Database.from('market_cars as mk').select().innerJoin('products as p','p.product_id','mk.prod_id').innerJoin('users as u','u.id','mk.user_id').where('user_id','=',+params.id).sum('total')
        return response.json(query)
    }
    
}
