import User from '#models/user'
import testUtils from '@adonisjs/core/services/test_utils'
import { test } from '@japa/runner'
import UserRepository from '../../../app/features/auth/repositories/user_repository.js'
import UserService from '../../../app/features/auth/services/user_service.js'

test.group('User create', (group) => {
  group.each.setup(() => testUtils.db().truncate())

  test('User can be created with user_service', async ({ assert }) => {
    // variables
    const userRepository = new UserRepository()
    const userService = new UserService(userRepository)
    // payload cannot be empty (required fields)
    const payload = {
      email: 'test@example.com',
      password: 'password',
      first_name: 'John',
      last_name: 'Doe',
    }

    // Create a new user
    const user = await userService.create(payload)

    assert.exists(user.id)
    assert.equal(user.email, payload.email)
    assert.instanceOf(user, User)
  })
})
