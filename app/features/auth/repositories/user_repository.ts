import User from '#models/user'
import UserRepositoryInterface from '../interfaces/user_repository_interface.js'
import {AuthUser, UserServiceCreatePayload} from '../types/user.js'
import {Authenticator} from "@adonisjs/auth";
import {Authenticators} from "@adonisjs/auth/types";

/**
 * UserRepository class to interact with the User model (DAO)
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

  /**
   * Get the authenticated user
   * @param auth Authenticator<Authenticators> - The authenticator to use
   * @returns Promise<AuthUser> - The authenticated user
   * @throws Error
   */
  async getAuthUser(auth: Authenticator<Authenticators>): Promise<AuthUser>{
    let userId;
    try {
      userId = auth.getUserOrFail().id
      const user = await User.query().where('id', userId).firstOrFail()
      return {
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
      }

    } catch (error) {
      throw error
    }
  }
}
