import vine from '@vinejs/vine'

/**
 * Validates the post's creation action
 */
export const createSessionValidator = vine.compile(
  vine.object({
    email: vine.string().email().trim(),
    password: vine.string(),
    first_name: vine.string().trim(),
    last_name: vine.string().trim(),
  })
)
