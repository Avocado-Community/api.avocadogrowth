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

const TwoFactorsController = () => import('../app/features/auth/controllers/two_factors_controller.js')

// Routes
router.post('/register', [SessionController, 'register']).as('register')
router.post('/login', [SessionController, 'login']).as('login')

// Auth routes
router
  .group(() => {
    router.delete('/logout', [SessionController, 'destroy']).as('logout')
  })
  .use(middleware.auth())

// Two factors auth routes
router
  .group(() => {
    router.post('generate', [TwoFactorsController, 'generate']).as('generate')
    router.post('verify', [TwoFactorsController, 'verify']).as('verify')
    router
      .post('generate-recovery-codes', [TwoFactorsController, 'generateRecoveryCodes'])
      .as('generateRecoveryCodes')
    router.post('disable', [TwoFactorsController, 'disable']).as('disable')
  })
  .as('2fa')
  .prefix('2fa')
  .middleware(middleware.auth())

