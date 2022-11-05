/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'


Route.get('/', async () => {
  return { hello: 'world' }
})
//Auth
Route.post('register','UsersController.register')
Route.post('login','UsersController.login')
Route.get('getuser','UsersController.traerID')

//Products

Route.post('crtprod','ProductsController.createProduct')
Route.put('updprod/:id','ProductsController.updateProduct')
Route.get('getprod/:id','ProductsController.getProductById')
Route.post('getprodname','ProductsController.getProductsByName')
Route.post('getprodprice','ProductsController.getProductsByPrice')
Route.delete('delprod/:id','ProductsController.deleteProduct')
Route.get('getprods','ProductsController.getProducts')
Route.get('getprodsforcateg/:id','ProductsController.getProductsForCategory')

//Categories
Route.post('crtcateg','CategoriesController.createCategory')
Route.get('getcategs','CategoriesController.getCategories')

//Orders
Route.post('crtorder','OrdersController.createOrder')
Route.get('lstorder/:id','OrdersController.lastOrder')
Route.get('getorder/:id','OrdersController.getOrder')
Route.get('getotalorder/:id','OrdersController.getTotalOrder')

//OrderDetail
Route.post('crtod','OrderDetailsController.createOrderDetail')

//MarketCar
Route.post('crtmktcar','MarketCarsController.createMarketCar')
Route.get('getmk/:id','MarketCarsController.getMarketCar')
Route.get('gettotmk/:id','MarketCarsController.getTotalInCar')
Route.delete('delprodoncar/:id','MarketCarsController.delProdToCar')
