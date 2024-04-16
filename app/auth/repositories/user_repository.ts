import User from '#models/user'
import UserRepositoryInterface from '../interfaces/user_repository_interface.js'
import { UserServiceCreatePayload } from '../types/user.js'

/**
 * UserRepository class to handle the user logic and interact with the database
 * @method create - Allow to create a new user
 * @extends UserRepositoryInterface
 */
export default class UserRepository implements UserRepositoryInterface {
  /**
   * Create a new user
   * @param payload UserServiceCreatePayload - The payload to create a new user
   * @returns Promise<User> - The created user
   */
  async create(payload: UserServiceCreatePayload): Promise<User> {
    return User.create(payload)
  }
}
