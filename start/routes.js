'use strict'

const Route = use('Route')

Route.post('users', 'UserController.Store')
Route.post('sessions', 'SessionController.Store')

Route.post('passwords', 'ForgotPasswordController.Store')
