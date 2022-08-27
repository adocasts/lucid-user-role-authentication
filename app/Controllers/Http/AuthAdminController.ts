import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AuthAdminController {
  public async index({ view }: HttpContextContract) {
    return view.render('auth/admin')
  }
}
