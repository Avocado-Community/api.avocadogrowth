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
router.post('/register', [SessionController, 'create']).as('register')

// Auth routes
router
  .group(() => {
    router.delete('/logout', [SessionController, 'destroy']).as('logout')
  })
  .use(middleware.auth())
