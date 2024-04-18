import testUtils from '@adonisjs/core/services/test_utils'
import { test } from '@japa/runner'

test.group('Session create', (group) => {
  group.each.setup(() => testUtils.db().truncate())

  test('ensure user can register', async ({ client }) => {
    const response = await client.post('/register').json({
      email: 'text@example.com',
      password: 'password',
      first_name: 'John',
      last_name: 'Doe',
    })

    response.assertStatus(201)
    response.assertBodyContains({
      message: 'User registered successfully',
    })
  })

  test('ensure user cannot register with password length < 8', async ({ client }) => {
    const response = await client.post('/register').json({
      email: 'text@example.com',
      password: '123',
      first_name: 'John',
      last_name: 'Doe',
    })

    response.assertStatus(422)
    response.assertBodyContains({
      errors: [
        {
          message: 'The password field must have at least 8 characters',
          rule: 'minLength',
          field: 'password',
          meta: {
            min: 8,
          },
        },
      ],
    })
  })

  test('ensure user cannot register with invalid email', async ({ client }) => {
    const response = await client.post('/register').json({
      email: 'text',
      password: 'password',
      first_name: 'John',
      last_name: 'Doe',
    })

    response.assertStatus(422)
    response.assertBodyContains({
      errors: [
        {
          message: 'The email field must be a valid email address',
          rule: 'email',
          field: 'email',
        },
      ],
    })
  })

  test('ensure user cannot register with missing first_name', async ({ client }) => {
    const response = await client.post('/register').json({
      email: 'text@example.fr',
      password: 'password',
      last_name: 'Doe',
    })

    response.assertStatus(422)
    response.assertBodyContains({
      errors: [
        {
          message: 'The first_name field must be defined',
          rule: 'required',
          field: 'first_name',
        },
      ],
    })
  })

  test('ensure user cannot register with missing last_name', async ({ client }) => {
    const response = await client.post('/register').json({
      email: 'text@example.fr',
      password: 'password',
      first_name: 'John',
    })

    response.assertStatus(422)
    response.assertBodyContains({
      errors: [
        {
          message: 'The last_name field must be defined',
          rule: 'required',
          field: 'last_name',
        },
      ],
    })
  })

  test('ensure user cannot register with missing email', async ({ client }) => {
    const response = await client.post('/register').json({
      password: 'password',
      first_name: 'John',
      last_name: 'Doe',
    })

    response.assertStatus(422)
    response.assertBodyContains({
      errors: [
        {
          message: 'The email field must be defined',
          rule: 'required',
          field: 'email',
        },
      ],
    })
  })

  test('ensure user cannot register with missing password', async ({ client }) => {
    const response = await client.post('/register').json({
      email: 'text@example.fr',
      first_name: 'John',
      last_name: 'Doe',
    })

    response.assertStatus(422)
    response.assertBodyContains({
      errors: [
        {
          message: 'The password field must be defined',
          rule: 'required',
          field: 'password',
        },
      ],
    })
  })
})
