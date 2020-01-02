'use strict'

const Kue = use('Kue')
const Job = use('App/Jobs/NewRaffleMail')

const RaffleHook = exports = module.exports = {}

RaffleHook.sendNewRaffleMail = async (raffleInstance) => {
  const { email, username } = await raffleInstance.user().fetch()
  const file = await raffleInstance.file().fetch()
  const { title, value, quantity } = await raffleInstance

  Kue.dispatch(Job.key, { email, username, file, title, value, quantity }, { attempts: 3 })

}
