import { DateTime } from 'luxon'
import Hash from '@ioc:Adonis/Core/Hash'
import { column, beforeSave, BaseModel } from '@ioc:Adonis/Lucid/Orm'

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
