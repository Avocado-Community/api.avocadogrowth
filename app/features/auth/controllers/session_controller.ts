import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'
import SessionService from '../services/session_service.js'
import UserService from '../services/user_service.js'
import { createSessionValidator } from '../validators/session_validator.js'

/**
 * SessionController class to handle the session logic and interact with the services
 * @method create - Allow to create a new user and session
 */
@inject()
export default class SessionController {
  constructor(
    protected sessionService: SessionService,
    protected userService: UserService
  ) {}

  /**
   * Create a new user and session
   * @param request HttpContext - The HTTP request
   * @param response HttpContext - The HTTP response
   * @param auth HttpContext - The HTTP auth
   * @returns Promise - The response
   */
  async create({ request, response, auth }: HttpContext) {
    // validate the request
    const payload = await request.validateUsing(createSessionValidator)

    // create a new user
    const user = await this.userService.create(payload)

    // create a new session
    await this.sessionService.create(user, auth)

    // return the user
    return response.status(201).json({
      message: 'User registered successfully',
    })
  }

  async showMe({ response, auth }: HttpContext) {
    try {
      const AuthUser = await this.userService.getAuthUser(auth)
      return response.status(200).json(AuthUser)
    }
    catch (error) {
      return response.status(401).json({
        message: 'Unauthorized',
      })
    }
  }
}
