// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Database from "@ioc:Adonis/Lucid/Database"
import Order from "App/Models/Order"
import User from "App/Models/User"

export default class OrdersController {
    public async createOrder({request,response}){
        const usua=request.input(['user_id'])

        const ord=new Order()
        ord.date=new Date()
        ord.user_id=usua

        ord.save()
        return response.json({ord})
    }
    public async lastOrder({params}){
        User.findOrFail(params.id)
        const query=await Database.from('orders').select('id').where('user_id','=',params.id).orderBy('id','desc').limit(1)
        return query
    }
    public async getOrder({params,response}){
        Order.findOrFail(params.id)
        const query=await Database.from('orders as o').innerJoin('order_details as od','o.id','od.order_id').innerJoin('products as p','p.id','od.product_id')
        return response.json({query})

    }
    public async getTotalOrder({params,response}){
        Order.findOrFail(params.id)
        const query=await Database.from('orders as o').innerJoin('order_details as od','o.id','od.order_id').innerJoin('products as p','p.id','od.product_id').sum('total')
        return response.json({query})
    }
}
