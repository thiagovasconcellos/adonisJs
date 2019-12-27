'use strict'

const Route = use('Route')

Route.post('users', 'UserController.Store').validator('User')
Route.post('sessions', 'SessionController.Store')

Route.post('passwords', 'ForgotPasswordController.Store')
Route.put('passwords', 'ForgotPasswordController.Update')

Route.get('files/:id', 'FileController.Show')


Route.group(() => {
  Route.post('files', 'FileController.Store')
  Route.resource('raffles', 'RaffleController').apiOnly()
  Route.resource('raffles.lockednumbers', 'RaffleLockedNumberController').apiOnly()
}).middleware(['auth'])

