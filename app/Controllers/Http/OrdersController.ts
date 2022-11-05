// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Database from "@ioc:Adonis/Lucid/Database"
import Order from "App/Models/Order"



export default class OrdersController {
    public async createOrder({request,response}){
        const usua=request.input(['user_id'])

        const ord=new Order()
        ord.date=new Date()
        ord.user_id=usua

        ord.save()
        return response.json(ord)
    }
    public async lastOrder({params,response}){
        const query=await Database.from('orders').select('order_id').where('user_id','=',params.id).orderBy('orders.order_id','desc').limit(1)
        query.forEach(element=>{
            const data=element.order_id
            return response.ok(data)
        })
    }
    public async getOrder({params,response}){
        const query=await Database.from('orders as o').innerJoin('order_details as od','o.order_id','od.ord_id').innerJoin('products as p','p.product_id','od.prod_id').where('o.order_id','=',params.id)
        for(const index in query){
            return response.ok(query[index])
        }

    }
    public async getTotalOrder({params,response}){
        const query=await Database.from('orders as o').innerJoin('order_details as od','o.order_id','od.ord_id').innerJoin('products as p','p.product_id','od.prod_id').where('o.order_id','=',params.id).sum('total')
        query.forEach(elemento=>{
           const total=elemento
           return response.ok(total)
        })
       
    }
}
