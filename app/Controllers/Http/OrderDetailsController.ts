// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Database from "@ioc:Adonis/Lucid/Database"
import OrderDetail from "App/Models/OrderDetail"

export default class OrderDetailsController {
    public async createOrderDetail({request,response}){
        const ord_id=request.input(['ord_id'])
        const prod_id=request.input(['prod_id'])
        const total=request.input(['total'])
        const cant=request.input(['buy_quantity'])

        const od=new OrderDetail()
        od.ord_id=ord_id
        od.prod_id=prod_id
        od.total=total
        od.buy_quantity=cant

        od.save()
        return response.json(od)
    }

    public async getLastOrderDetail({response}){
        const query=await Database.from('order_details as od').select('p.product_name','od.buy_quantity','od.total').innerJoin('products as p','p.product_id','od.prod_id').innerJoin('orders as o','o.order_id','od.ord_id').orderBy('od.detail_id','desc')
        return query

    }
}
