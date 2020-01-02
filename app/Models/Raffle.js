'use strict'

const Model = use('Model')

class Raffle extends Model {
  static boot () {
    super.boot()

    this.addHook('afterSave', 'RaffleHook.sendNewRaffleMail')
  }

  user () {
    return this.belongsTo('App/Models/User')
  }

  raffle_locked_numbers () {
    return this.hasMany('App/Models/RaffleLockedNumber')
  }

  file () {
    return this.belongsTo('App/Models/File')
  }
}

module.exports = Raffle
