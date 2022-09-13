// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import OrderDetail from "App/Models/OrderDetail"

export default class OrderDetailsController {
    public async createOrderDetail({request,response}){
        const ord_id=request.input(['order_id'])
        const prod_id=request.input(['product_id'])
        const total=request.input(['total'])
        const cant=request.input(['buy_quantity'])

        const od=new OrderDetail()
        od.order_id=ord_id
        od.product_id=prod_id
        od.total=total
        od.buy_quantity=cant

        od.save()
        return response.json({od})
    }
}
