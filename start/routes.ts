/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import { middleware } from "#start/kernel";
import router from '@adonisjs/core/services/router'

// controller imports -> lazy loaded
const SessionController = () => import('../app/features/auth/controllers/session_controller.js')

// Routes
router.post('/register', [SessionController, 'create']).as('register')
router.get('/me', [SessionController, 'showMe']).as('me').use(middleware.auth())
