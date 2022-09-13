// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Category from "App/Models/Category"

export default class CategoriesController {
    public async createCategory({request,response}){
        const name_categ=request.input(['category_name'])

        const categ=new Category()

        categ.category_name=name_categ

        categ.save()
        return response.json({categ})
    }
    public async getCategories(){
        const categ=Category.all()
        return categ
    }
}
