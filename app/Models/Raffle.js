'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Raffle extends Model {
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
