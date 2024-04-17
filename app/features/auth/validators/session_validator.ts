import vine, { SimpleMessagesProvider } from '@vinejs/vine'

/**
 * Validates the user's creation action
 */
export const createSessionValidator = vine.compile(
  vine.object({
    email: vine.string().email().trim(),
    password: vine.string().minLength(8),
    first_name: vine.string().trim(),
    last_name: vine.string().trim(),
  })
)

vine.messagesProvider = new SimpleMessagesProvider({
  // Applicable for all fields
  'required': 'The {{ field }} field is required',
  'string': 'The value of {{ field }} field must be a string',
  'email': 'The value is not a valid email address',

  'password.minLength': 'The password must be at least 8 characters long',
})

/**
 * Validates the user's login action
 */
export const showSessionValidator = vine.compile(
  vine.object({
    email: vine.string().email().trim(),
    password: vine.string().minLength(8),
  })
)

vine.messagesProvider = new SimpleMessagesProvider({
  // Applicable for all fields
  'required': 'The {{ field }} field is required',
  'string': 'The value of {{ field }} field must be a string',
  'email': 'The value is not a valid email address',

  'password.minLength': 'The password must be at least 8 characters long',
})
