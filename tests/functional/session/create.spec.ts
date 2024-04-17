import testUtils from '@adonisjs/core/services/test_utils'
import { test } from '@japa/runner'
import session from "#config/session";
import  User  from '#models/user'

const userPayload = {
  email: 'john@doe.com',
  password: 'password',
  first_name: 'John',
  last_name: 'Doe',
}
test.group('Authentication Protection', (group) => {
  group.each.setup(() => {

    testUtils.db().truncate()
    })

  test('ensure authenticated user can access protected route', async ({ client }) => {
    // create a fake user
    const user = await User.create(userPayload)
    const response =  client.get('/me').withGuard("web").loginAs(user)
    // verify it can access the protected route
    response.assertStatus(200)
    response.assertBodyContains({
      email: user.email,
      first_name: user.first_name,
      last_name: user.last_name,
    })
  })

  test("ensure unauthenticated user cannot access protected route", async ({ client }) => {
    const response = await client.get('/me')
    response.assertStatus(401)
    console.log(response.body)
    response.assertBodyContains({
      errors: [
        {
          message: 'Unauthorized access',
        },
      ],
    })
  })


})
