/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'

// controller imports
const SessionController = () => import('#controllers/session_controller')

router.post('/register', [SessionController, 'store'])

router
  .get('/', async () => {
    return { hello: 'world' }
  })
  .use(middleware.auth())
