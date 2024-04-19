import User from '#models/user'
import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'
import SessionService from '../services/session_service.js'
import UserService from '../services/user_service.js'
import { createSessionValidator, showSessionValidator } from '../validators/session_validator.js'

/**
 * SessionController class to handle the session logic and interact with the services
 * @method register - Allow to create a new user and session
 * @method login - Allow to login a user and create a new session
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
   * @returns The response
   */
  async register({ request, response, auth }: HttpContext) {
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

  /**
   * Login a user and create a new session
   * @param request HttpContext - The HTTP request
   * @param response HttpContext - The HTTP response
   * @param auth HttpContext - The HTTP auth
   * @returns The response
   */
  async login({ request, response, auth }: HttpContext) {
    // validate the request
    const payload = await request.validateUsing(showSessionValidator)

    // verify the user's credentials
    const user = await User.verifyCredentials(payload.email, payload.password)

    // create a new session
    await this.sessionService.create(user, auth)

    // return the user
    return response.status(200).json({
      message: 'User logged in successfully',
    })
  }

  /**
   * Destroy a session
   * @param response HttpContext - The HTTP response
   * @param auth HttpContext - The HTTP auth
   * @returns The response
   */
  async destroy({ response, auth }: HttpContext) {
    // destroy the session
    await this.sessionService.destroy(auth)

    return response.status(200).json({
      message: 'User logged out successfully',
    })
  }
}
