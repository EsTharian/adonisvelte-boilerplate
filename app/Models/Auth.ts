import { DateTime } from 'luxon'
import Hash from '@ioc:Adonis/Core/Hash'
import Question from 'App/Models/Question'
import Answer from 'App/Models/Answer'
import { column, beforeSave, BaseModel, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'

export default class Auth extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public email: string | null

  @column()
  public name: string

  @column()
  public picture: string | null

  @column({ serializeAs: null })
  public accessToken: string

  @column({ serializeAs: null })
  public isVerified: boolean

  @column({ serializeAs: null })
  public password: string

  @hasMany(() => Question)
  public questions: HasMany<typeof Question>

  @hasMany(() => Answer)
  public answers: HasMany<typeof Answer>

  @column({ serializeAs: null })
  public rememberMeToken?: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeSave()
  public static async hashPassword(auth: Auth) {
    if (auth.$dirty.password) {
      auth.password = await Hash.make(auth.password)
    }
  }
}
