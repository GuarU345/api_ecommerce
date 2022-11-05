import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import User from "App/Models/User"

export default class UsersController {
    public async register({request,response}){
        const username=request.input(['username'])
        const email=request.input(['email'])
        const password=request.input(['password'])
   
        const usuario=new User()
        usuario.username=username
        usuario.email=email
        usuario.password=password
        
   
   
        usuario.save()
        return response.json({usuario})
     }
     public async login({request,auth,response}){
        const email = request.input('email')
        const password = request.input('password')
    
        try {
          const token = await auth.use('api').attempt(email, password)
          return token
        } catch {
          return response.badRequest('usuario o contraseña incorrectos')
        }
      }
      public async traerID({auth,response}: HttpContextContract){
        const traer=await auth.use('api').authenticate()
        console.log(auth.use('api').user!)
        return response.json(traer)
      }
}
