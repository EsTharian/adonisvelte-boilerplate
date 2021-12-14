import { BaseCommand, args } from '@adonisjs/core/build/standalone'

export default class UserCreate extends BaseCommand {
  /**
   * Command name is used to run the command
   */
  public static commandName = 'user:create'

  @args.string({ description: 'email' }) // TODO: Edit here for a good desc
  public email: string

  @args.string({ description: 'password' }) // TODO: Edit here for a good desc
  public password: string

  /**
   * Command description is displayed in the "help" output
   */
  public static description = ''

  public static settings = {
    /**
     * Set the following value to true, if you want to load the application
     * before running the command
     */
    loadApp: true,

    /**
     * Set the following value to true, if you want this command to keep running until
     * you manually decide to exit the process
     */
    stayAlive: false,
  }

  public async run() {
    const { default: Auth } = await import('App/Models/Auth')
    await Auth.create({
      email: this.email,
      password: this.password,
    })
    this.logger.success(`User ${this.email} created`)
  }
}
