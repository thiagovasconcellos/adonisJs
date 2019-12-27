'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class RaffleLockedNumber extends Model {
  user () {
    return this.belongsTo('App/Models/User')
  }

  raffle () {
    return this.belongsTo('App/Models/Raffle')
  }
}

module.exports = RaffleLockedNumber
