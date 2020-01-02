'use strict'

const Mail = use('Mail')
const Helpers = use('Helpers')

class NewRaffleMail {
  static get concurrency () {
    return 1
  }

  static get key () {
    return 'NewRaffleMail-job'
  }

  async handle ({ username, title, value, quantity, file, email }) {
    console.log(`Job: ${NewRaffleMail.key}`)
    await Mail.send(
      ['emails.newRaffle'],
      { username, title, value, quantity, hasPicture: !!file },
      message => {
        message
          .to(email)
          .from('thiagovasconcellos88@gmail.com')
          .subject('Nova rifa criada em seu nome')

        if (file) {
          message.attach(Helpers.tmpPath(`uploads/${file.file}`), {
            filename: file.name
          })
        }
      }
    )
  }
}

module.exports = NewRaffleMail

