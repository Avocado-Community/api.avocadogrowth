import {BaseModel, column} from "@adonisjs/lucid/orm";

export default class Stack extends BaseModel {
  public static table = 'stacks'

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare tag: string

}
