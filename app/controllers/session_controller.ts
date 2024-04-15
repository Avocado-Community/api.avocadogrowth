// import type { HttpContext } from '@adonisjs/core/http'

import SessionService from '#services/session_service'
import { createSessionValidator } from '#validators/session'
import { inject } from '@adonisjs/core'
import { HttpContext } from '@adonisjs/core/http'

@inject()
export default class SessionController {
  constructor(protected sessionService: SessionService) {}

  async store({ request, response, auth }: HttpContext) {
    // validate the request
    const payload = await request.validateUsing(createSessionValidator)

    // create a new user
    const user = await this.sessionService.store(payload)

    // login the user with session auth
    await auth.use('web').login(user)

    // return the user
    return response.status(201).json({
      message: 'User registered successfully',
    })
  }
}
