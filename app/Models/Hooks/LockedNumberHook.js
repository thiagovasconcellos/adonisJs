'use strict'

const Kue = use('Kue')
const Job = use('App/Jobs/NewLockedNumberMail')

const LockedNumberHook = exports = module.exports = {}

LockedNumberHook.sendNumberLockedMail = async (numberLockedInstance) => {
  const { email, username } = await numberLockedInstance.user().fetch()
  const { title, value } = await numberLockedInstance.raffle().fetch()

  Kue.dispatch(Job.key, { email, username, title, value }, { attempts: 3 })
}
