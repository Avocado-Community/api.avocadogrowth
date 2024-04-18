import { test } from '@japa/runner'
import User from '#models/user'

const user = {
  email: 'test@example.com',
  password: 'password',
  first_name: 'John',
  last_name: 'Doe',
}

test.group('Session destroy', () => {
  test('ensure user can logout', async ({ client }) => {
    const connectedUser = await User.create(user)
    const response = await client.delete('/logout').loginAs(connectedUser)

    response.assertStatus(200)
    response.assertBodyContains({
      message: 'User logged out successfully',
    })
  })

  test('ensure user cannot logout if not authenticated', async ({ client }) => {
    const response = await client.delete('/logout')

    response.assertStatus(401)
    response.assertBodyContains({
      errors: [
        {
          message: 'Unauthorized access',
        },
      ],
    })
  })
})
