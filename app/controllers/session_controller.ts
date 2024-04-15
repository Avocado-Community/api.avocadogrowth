// import type { HttpContext } from '@adonisjs/core/http'

import User from '#models/user'
import { createSessionValidator } from '#validators/session'
import { HttpContext } from '@adonisjs/core/http'

export default class SessionController {
  async store({ request, response, auth }: HttpContext) {
    const payload = await createSessionValidator.validate(request.all())

    // create a new user
    const user = await User.create(payload)

    // login the user with session auth
    await auth.use('web').login(user)

    return response.status(201).json(user)
  }
}
