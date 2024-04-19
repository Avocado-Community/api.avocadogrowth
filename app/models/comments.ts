import {BaseModel, column, hasMany, hasOne} from "@adonisjs/lucid/orm";
import { DateTime } from 'luxon'
import Stack from "#models/stacks";
import * as relations from "@adonisjs/lucid/types/relations";
import User from "#models/user";

export default class Comments extends BaseModel {
  public static table = 'comments'

  @column({isPrimary: true})
  declare id: number

  @column()
  declare content: string

  @column()
  declare rating: number

  @column.dateTime({autoCreate: true})
  declare createdAt: DateTime

  @manyToMany(() => Stack)
  declare stacks: relations.ManyToMany<typeof Stack>

  @hasOne(() => User)
  declare from: relations.HasOne<typeof User>

  @hasOne(() => User)
  declare to : relations.HasOne<typeof User>
}
