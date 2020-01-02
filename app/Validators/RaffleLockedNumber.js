'use strict'

const Antl = use('Antl')

class RaffleLockedNumber {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      number_locked: 'required|number'
    }
  }

  get messages () {
    return Antl.list('validation')
  }
}

module.exports = RaffleLockedNumber
