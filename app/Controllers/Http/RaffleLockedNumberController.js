'use strict'

const LockedNumber = use('App/Models/RaffleLockedNumber');

class RaffleLockedNumberController {

  async index ({ params, request, response, view }) {
    const lockedNumbers = LockedNumber.query()
      .where('raffle_id', params.raffles_id)
      .with('user')
      .fetch()

    return lockedNumbers
  }

  async store ({ auth, params, request }) {
    const data = request.only('number_locked')

    const lockNumber = await LockedNumber.create({
      ...data,
      raffle_id: params.raffles_id,
      user_id: auth.user.id
    })

    return lockNumber
  }

  async show ({ params }) {
    const lockedNumber = LockedNumber.findOrFail(params.id)

    return lockedNumber
  }

  async update ({ params, request }) {

  }

  async destroy ({ params }) {
    const lockedNumber = LockedNumber.findOrFail(params.id)

    await lockedNumber.delete()
  }
}

module.exports = RaffleLockedNumberController
