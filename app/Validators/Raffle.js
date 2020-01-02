'use strict'

const Antl = use('Antl')

class Raffle {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      title: 'required',
      title_reduced: 'required',
      value: 'required|number',
      quantity: "required|number"
    }
  }

  get messages () {
    return Antl.list('validation')
  }
}

module.exports = Raffle
