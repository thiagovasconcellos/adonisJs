'use strict'

const Raffle = use('App/Models/Raffle')

class RaffleController {

  async index ({ request, response, view }) {
    const raffles = await Raffle.query()
      .with('user')
      .with('raffle_locked_numbers')
      .fetch()

    return raffles
  }

  async store ({ request, response, auth }) {
    const data = request.only(['title', 'title_reduced', 'description', 'value', 'quantity'])

    const raffle = await Raffle.create({ ...data, user_id: auth.user.id })

    return raffle
  }

  async show ({ params }) {
    const raffle = await Raffle.findOrFail(params.id)

    await raffle.load('raffle_locked_numbers')
    await raffle.load('user')

    return raffle;
  }

  async update ({ params, request }) {
    const raffle = await Raffle.findOrFail(params.id)
    const data = request.only(['title', 'title_reduced', 'description', 'value', 'quantity'])

    raffle.merge(data)

    await raffle.save()

    return raffle
  }

  async destroy ({ params }) {
    const raffle = await Raffle.findOrFail(params.id)

    await raffle.delete()
  }
}

module.exports = RaffleController
