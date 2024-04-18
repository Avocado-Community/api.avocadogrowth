import User from '#models/user'
import { UserServiceCreatePayload } from '../types/user.js'


/**
 * Allow to define all the methods to interact with the user repositor
 */
export default abstract class UserRepositoryInterface {
  abstract create(payload: UserServiceCreatePayload): Promise<User>
}
