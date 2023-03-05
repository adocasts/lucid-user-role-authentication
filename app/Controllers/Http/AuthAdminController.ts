import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Roles from 'App/Enums/Roles'
import User from 'App/Models/User'
import AuthValidator from 'App/Validators/AuthValidator'

export default class AuthAdminController {
  public async index({ view }: HttpContextContract) {
    return view.render('auth/admin')
  }

  public async login({ request, response, auth, session }: HttpContextContract) {
    const { email, password } = await request.validate(AuthValidator)
    const user = await User.findByOrFail('email', email)

    if (user.roleId !== Roles.ADMIN) {
      session.flash('error', 'You must be an admin')
      return response.redirect().back()
    }

    await auth.attempt(email, password)

    return response.redirect('/')
  }
}
