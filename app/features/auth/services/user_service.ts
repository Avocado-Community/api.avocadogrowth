import User from '#models/user'
import { inject } from '@adonisjs/core'
import UserRepository from '../repositories/user_repository.js'
import {AuthUser, UserServiceCreatePayload} from '../types/user.js'


/**
 * UserService class to handle the user logic
 * @method create - Allow to create a new user
 */
@inject()
export default class UserService {
  constructor(protected userRepository: UserRepository) {
  }

  /**
   * Call the repository to create a new user
   * @param payload UserServiceCreatePayload - The payload to create a new user
   * @returns Promise<User> - The created user
   */
  async create(payload: UserServiceCreatePayload): Promise<User> {
    // create a new use
    return this.userRepository.create(payload)
  }

  async getAuthUser(auth: any): Promise<AuthUser> {
    try {
      return this.userRepository.getAuthUser(auth)
    } catch (error) {
      throw error
    }
  }
}
