import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AuthUserController {
  public async index({ view }: HttpContextContract) {
    return view.render('auth/user')
  }
}
