import {BaseModel, column, hasMany} from "@adonisjs/lucid/orm";
import * as relations from "@adonisjs/lucid/types/relations";
import Comments from "#models/comments";
import User from "#models/user";
import Stack from "#models/stacks";

export default class Mentor extends BaseModel {
  public static table = 'mentors'

  @column({isPrimary: true})
  declare id: number

  @column()
  declare rating: number | null

  @column()
  declare isAvailable: boolean

  @column({})
  declare history: number

  @hasMany(() => Comments)
  declare comments: relations.HasMany<typeof Comments>
  
  @manyToMany(() => User)
  declare mentees: relations.ManyToMany<typeof User>

  @manyToMany(() => Stack)
  declare stacks: relations.ManyToMany<typeof Stack>;
}
