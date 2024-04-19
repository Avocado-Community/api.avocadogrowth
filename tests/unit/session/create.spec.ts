import User from '#models/user'
import testUtils from '@adonisjs/core/services/test_utils'
import { test } from '@japa/runner'

const user = {
  email: 'test@example.com',
  password: 'password',
  first_name: 'John',
  last_name: 'Doe',
}

test.group('Register create', (group) => {
  // Setup and teardown functions are called before and after each test in the group
  group.each.setup(() => testUtils.db().truncate())

  test('ensure user can register', async ({ client }) => {
    const response = await client.post('/register').json(user)

    response.assertStatus(201)
    response.assertBodyContains({
      message: 'User registered successfully',
    })
  })

  test('ensure user cannot register with password length < 8', async ({ client }) => {
    const response = await client.post('/register').json({
      email: user.email,
      password: '123',
      first_name: user.first_name,
      last_name: user.last_name,
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
      password: user.password,
      first_name: user.first_name,
      last_name: user.last_name,
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
      email: user.email,
      password: user.password,
      last_name: user.last_name,
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
      email: user.email,
      password: user.password,
      first_name: user.first_name,
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
      password: user.password,
      first_name: user.first_name,
      last_name: user.last_name,
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
      email: user.email,
      first_name: user.first_name,
      last_name: user.last_name,
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

test.group('Login create', (group) => {
  // Setup and teardown functions are called one time before and after
  group.setup(async () => {
    testUtils.db().truncate()
    await User.create(user)
  })
  // clear user created after all tests
  group.teardown(async () => testUtils.db().truncate())

  test('ensure user can login', async ({ client }) => {
    const response = await client.post('/login').json({
      email: user.email,
      password: user.password,
    })

    response.assertStatus(200)
    response.assertBodyContains({
      message: 'User logged in successfully',
    })
  })

  test('ensure user cannot login with invalid email', async ({ client }) => {
    const response = await client.post('/login').json({
      email: 'test',
      password: user.password,
    })

    response.assertStatus(422)
    response.assertBodyContains({
      errors: [
        {
          message: 'The value is not a valid email address',
          rule: 'email',
          field: 'email',
        },
      ],
    })
  })

  test('ensure user cannot login with invalid password', async ({ client }) => {
    const response = await client.post('/login').json({
      email: user.email,
      password: 'pass',
    })

    response.assertStatus(422)
    response.assertBodyContains({
      errors: [
        {
          message: 'The password must be at least 8 characters long',
          rule: 'minLength',
          field: 'password',
          meta: {
            min: 8,
          },
        },
      ],
    })
  })

  test('ensure user cannot login with missing email', async ({ client }) => {
    const response = await client.post('/login').json({
      password: user.password,
    })

    response.assertStatus(422)
    response.assertBodyContains({
      errors: [
        {
          message: 'The email field is required',
          rule: 'required',
          field: 'email',
        },
      ],
    })
  })

  test('ensure user cannot login with missing password', async ({ client }) => {
    const response = await client.post('/login').json({
      email: user.email,
    })

    response.assertStatus(422)
    response.assertBodyContains({
      errors: [
        {
          message: 'The password field is required',
          rule: 'required',
          field: 'password',
        },
      ],
    })
  })

  test('ensure user cannot login with invalid password credentials', async ({ client }) => {
    const response = await client.post('/login').json({
      email: user.email,
      password: 'wrong_password',
    })

    response.assertStatus(400)
    response.assertBodyContains({
      errors: [
        {
          message: 'Invalid user credentials',
        },
      ],
    })
  })

  test('ensure user cannot login with invalid email credentials', async ({ client }) => {
    const response = await client.post('/login').json({
      email: 'toto@example.fr',
      password: user.password,
    })

    response.assertStatus(400)
    response.assertBodyContains({
      errors: [
        {
          message: 'Invalid user credentials',
        },
      ],
    })
  })
})
