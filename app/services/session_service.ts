import User from '#models/user'

// interface
interface SessionServiceStorePayload {
  email: string
  password: string
  first_name: string
  last_name: string
}

/**
 * SessionService class to handle the session logic
 * @method store - Allow to store a new user and return it
 */
export default class SessionService {
  /**
   * Allow to store a new user and return it
   * @param payload SessionServiceStorePayload
   * @returns Promise<User>
   */
  async store(payload: SessionServiceStorePayload): Promise<User> {
    // create a new user
    return User.create(payload)
  }
}
