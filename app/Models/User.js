'use strict'

const Model = use('Model')

const Hash = use('Hash')

class User extends Model {
  static boot () {
    super.boot()

    this.addHook('beforeSave', async (userInstance) => {
      if (userInstance.dirty.password) {
        userInstance.password = await Hash.make(userInstance.password)
      }
    })
  }

  tokens () {
    return this.hasMany('App/Models/Token')
  }

  raffles () {
    return this.hasMany('App/Models/Raffle')
  }

  raffles_locked_numbers () {
    return this.hasMany('App/Models/RaffleLockedNumber')
  }
}

module.exports = User
