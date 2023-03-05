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
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'
import Env from '@ioc:Adonis/Core/Env'

Route.get('/', async ({ view }) => {
  return view.render('welcome')
})

Route.get('/auth/user', 'AuthUserController.index').as('auth.user.index')
Route.post('/auth/user/register', 'AuthUserController.register').as('auth.user.register')
Route.post('/auth/user/login', 'AuthUserController.login').as('auth.user.login')
Route.get('/auth/user/logout', 'AuthUserController.logout').as('auth.user.logout')

Route.get('/auth/admin', 'AuthAdminController.index').as('auth.admin.index')
Route.post('/auth/admin/login', 'AuthAdminController.login').as('auth.admin.login')

Route.get('/', function (ctx) {
  return ctx.auth.user?.email ?? 'No Authenticated User'
}).domain(`app.${Env.get('DOMAIN')}`)