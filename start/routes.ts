/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

// controller imports
const SessionController = () => import('../app/auth/controllers/session_controller.js')

router.post('/register', [SessionController, 'create']).as('register')
