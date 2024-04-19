import {BaseModel, column, hasMany, hasOne} from "@adonisjs/lucid/orm";
import {DateTime} from "luxon";
import User from "#models/user";
import * as relations from "@adonisjs/lucid/types/relations";
import Stack from "#models/stacks";

export default class Request extends BaseModel {
  public static table = 'requests'

  @column({isPrimary: true})
  declare id: number

  @column()
  declare content: string

  @column.dateTime({autoCreate: true})
  declare createdAt: DateTime

  @hasOne(() => User)
  declare from: relations.HasOne<typeof User>

  @hasOne(() => User)
  declare to : relations.HasOne<typeof User>

  @hasMany(() => Stack)
  declare stacks : relations.HasMany<typeof Stack>
}
