import User from '#models/user'
import { Authenticator } from '@adonisjs/auth'
import { Authenticators } from '@adonisjs/auth/types'

/**
 * SessionService class to handle the session logic
 * @method create - Allow to create a new session
 * @method destroy - Allow to destroy a session
 */
export default class SessionService {
  /**
   * Allow to create a new user and return it
   * @param user User - The user to create a session for
   * @param auth Authenticator<Authenticators> - The authenticator to use
   * @return void
   */
  async create(user: User, auth: Authenticator<Authenticators>): Promise<void> {
    // create a new user
    await auth.use('web').login(user)
  }

  /**
   * Allow to destroy a session
   * @param auth Authenticator<Authenticators> - The authenticator to use
   * @return void
   */
  async destroy(auth: Authenticator<Authenticators>): Promise<void> {
    // destroy the session
    await auth.use('web').logout()
  }
}
