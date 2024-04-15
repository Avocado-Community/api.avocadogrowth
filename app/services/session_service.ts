import User from '#models/user'

// interface
interface SessionServiceStorePayload {
  email: string
  password: string
  first_name: string
  last_name: string
}

export default class SessionService {
  async store(payload: SessionServiceStorePayload): Promise<User> {
    // create a new user
    return User.create(payload)
  }
}
