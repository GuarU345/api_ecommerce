// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Database from "@ioc:Adonis/Lucid/Database"
import Product from "App/Models/Product"

export default class ProductsController {
    public async createProduct({request,response}){
        const prod_name=request.input(['product_name'])
        const quan=request.input(['quantity'])
        const price=request.input(['price'])
        const image=request.input(['image'])
        const categ_id=request.input(['category_id'])

        const prod=new Product()

        prod.product_name=prod_name
        prod.quantity=quan
        prod.price=price
        prod.image=image
        prod.category_id=categ_id

        prod.save()

        return response.json({prod})
    }
    public async updateProduct({request,response,params}){
        const prod=await Product.findOrFail(params.id)

        const prod_name=request.input(['product_name'])
        const quan=request.input(['quantity'])
        const price=request.input(['price'])
        const image=request.input(['image'])
        
        prod.product_name=prod_name
        prod.quantity=quan
        prod.price=price
        prod.image=image

        prod.save()

        return response.json({prod})
    }
    public async deleteProduct({response,params}){
        const prod=await Product.findOrFail(params.id)

        prod.delete()

        response.json({prod})
    }
    public async getProducts(){
        const prod=Product.all()
        return prod
    }
    public async getProductsForCategory({params}){
       Product.findOrFail(params.id)
       const query=await Database.from('products').select('*').where('category_id','=',+params.id)
       return query
    }
}
