import User from '#models/user'
import { inject } from '@adonisjs/core'
import UserRepository from '../repositories/user_repository.js'
import { UserServiceCreatePayload } from '../types/user.js'

/**
 * UserService class to handle the user logic
 * @method create - Allow to create a new user
 */
@inject()
export default class UserService {
  constructor(protected userRepository: UserRepository) {}

  /**
   * Allow to create a new user and return it
   * @param payload UserServiceCreatePayload - The payload to create a new user
   * @returns User
   */
  async create(payload: UserServiceCreatePayload): Promise<User> {
    // create a new use
    return this.userRepository.create(payload)
  }
}
