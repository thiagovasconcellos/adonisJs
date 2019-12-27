'use strict'

class User {
  get validateAll () {
    return true
  }
  get rules () {
    return {
      username: 'required|unique:user',
      email: 'required|email|unique:user',
      password: 'required|confirmed'
    }
  }
}

module.exports = User
