import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Roles from 'App/Enums/Roles'
import Role from 'App/Models/Role'

export default class extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method
    await Role.createMany([{
      id: Roles.USER,
      name: 'User'
    }, {
      id: Roles.ADMIN,
      name: 'Admin'
    }])
  }
}
