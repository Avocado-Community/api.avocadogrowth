/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'

// controller imports -> lazy loaded
const SessionController = () => import('../app/features/auth/controllers/session_controller.js')

// Routes
router.post('/register', [SessionController, 'register']).as('register')
router.post('/login', [SessionController, 'login']).as('login')

// Auth routes
router
  .group(() => {
    router.delete('/logout', [SessionController, 'destroy']).as('logout')
  })
  .use(middleware.auth())
