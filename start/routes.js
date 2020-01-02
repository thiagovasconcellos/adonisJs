'use strict'

const Route = use('Route')

Route.post('users', 'UserController.Store').validator('User')
Route.post('sessions', 'SessionController.Store').validator('Session')

Route.post('passwords', 'ForgotPasswordController.Store').validator('ForgotPassword')
Route.put('passwords', 'ForgotPasswordController.Update').validator('ResetPassword')

Route.get('files/:id', 'FileController.Show')


Route.group(() => {

  Route.post('files', 'FileController.Store')

  Route.resource('raffles', 'RaffleController')
    .apiOnly()
    .validator(new Map([[['raffles.store'], ['Raffle']]]))

  Route.resource('raffles.lockednumbers', 'RaffleLockedNumberController')
    .apiOnly()
    .validator(new Map([[['raffles.lockednumbers.store'], 'RaffleLockedNumber']]))

}).middleware(['auth'])

