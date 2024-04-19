import { withAuthFinder } from '@adonisjs/auth/mixins/lucid'
import { compose } from '@adonisjs/core/helpers'
import hash from '@adonisjs/core/services/hash'
import {BaseModel, column, hasMany, hasOne} from '@adonisjs/lucid/orm'
import { DateTime } from 'luxon'
import Stack from "#models/stacks";
import * as relations from "@adonisjs/lucid/types/relations";
import Mentor from "#models/mentors";

const AuthFinder = withAuthFinder(() => hash.use('scrypt'), {
  uids: ['email'],
  passwordColumnName: 'password',
})

export default class User extends compose(BaseModel, AuthFinder) {
  static table = "users"
  @column({isPrimary: true})
  declare id: number

  @column()
  declare first_name: string

  @column()
  declare last_name: string

  @column()
  declare user_name: string | null

  @column()
  declare email: string

  @column({serializeAs: null})
  declare password: string

  @column()
  declare gender: string | null

  @column()
  declare age: number | null

  @column()
  declare onlineStatus: boolean

  @column()
  declare isBanned: boolean

  @column()
  declare bio: string | null

  @column()
  declare urls: JSON | null

  @column()
  declare profilePicture: string | null

  @hasOne(() => Mentor)
  declare isMentor: relations.HasOne<typeof Mentor>

  @manyToMany(() => Mentor)
  declare mentors: relations.ManyToMany<typeof Mentor>

  @manyToMany(() => Stack)
  declare learningStacks: relations.ManyToMany<typeof Stack>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime | null
}
