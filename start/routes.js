'use strict'

const Route = use('Route')

Route.post('users', 'UserController.Store')
Route.post('sessions', 'SessionController.Store')

Route.post('passwords', 'ForgotPasswordController.Store')
Route.put('passwords', 'ForgotPasswordController.Update')

Route.get('files/:id', 'FileController.Show')
Route.post('files', 'FileController.Store')