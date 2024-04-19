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

  @hasOne(() => User)
  declare from: relations.HasOne<typeof User>
  
  @hasOne(() => User)
  declare to : relations.HasOne<typeof User>

  @manyToMany(() => Stack)
  declare stacks : relations.ManyToMany<typeof Stack>

  @column.dateTime({autoCreate: true})
  declare createdAt: DateTime
}
