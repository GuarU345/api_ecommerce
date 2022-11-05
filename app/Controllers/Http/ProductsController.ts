// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Database from "@ioc:Adonis/Lucid/Database"
import Product from "App/Models/Product"


export default class ProductsController {
    public async createProduct({request,response}){
        const prod_name=request.input(['product_name'])
        const quan=request.input(['stock'])
        const price=request.input(['price'])
        const image=request.input(['image'])
        const categ_id=request.input(['categ_id'])

        const prod=new Product()

        prod.product_name=prod_name
        prod.stock=quan
        prod.price=price
        prod.image=image
        prod.categ_id=categ_id

        prod.save()

        return response.json(prod)
    }
    public async updateProduct({request,response,params}){
        const prod=await Product.findOrFail(params.id)

        const prod_name=request.input(['product_name'])
        const quan=request.input(['quantity'])
        const price=request.input(['price'])
        
        
        prod.product_name=prod_name
        prod.stock=quan
        prod.price=price
        

        prod.save()

        return response.json(prod)
    }
    public async deleteProduct({response,params}){
        const prod=await Product.findOrFail(params.id)

        prod.delete()

        response.json(prod)
    }
    public async getProducts({response}){
        const prod=await Database.from('products').select('*')
        return response.ok(prod)
    }
    public async getProductById({params,response}){
        
        const query=await Database.from('products as p').select('*').where('p.product_id','=',+params.id)
        query.forEach(value => {
            const resp=value
            try {
                return response.ok(resp)
            } catch (error) {
                response.badRequest({message:"no se encuentra en stock"})
            }
        });
    }
    public async getProductsForCategory({params,response}){
        if(params.id==0){
            const prod=Product.all()
            return response.ok(prod)
        }
       const query=await Database.from('products as p').select('*').where('p.categ_id','=',+params.id)
       return response.ok(query)
    }
    public async getProductsByName({request,response}){
        const prod=request.input('product_name')
        if(prod==null){
            const prod=Product.all()
            return response.ok(prod)
        }
        const query=await Database.from('products as p').select('*').where('product_name','LIKE','%' + prod + '%')
        return response.ok(query)
    }
    public async getProductsByPrice({request,response}){
        const prod=request.input('price')
        if(prod==null){
            const prod=Product.all()
            return response.ok(prod)
        }
        const query=await Database.from('products as p').select('*').where('price','LIKE','%' + prod + '%')
        return response.ok(query)
    }
}
