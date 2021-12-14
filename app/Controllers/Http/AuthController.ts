import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { string } from '@ioc:Adonis/Core/Helpers'
import LoginValidator from 'App/Validators/LoginValidator'
import Auth from 'App/Models/Auth'

export default class AuthController {
  public async show({ inertia, auth, response }: HttpContextContract) {
    const logged = await auth.use('web').check()
    return logged ? response.redirect().toRoute('index') : inertia.render('Login')
  }

  public async login({ auth, request, response, logger }: HttpContextContract) {
    await request.validate(LoginValidator)

    const email = request.input('email')
    const password = request.input('password')

    try {
      await auth.use('web').attempt(email, password)
      return response.json({
        result: true,
      })
    } catch (e) {
      logger.error(e)
      return response.badRequest({
        result: false,
        message: 'E-mail veya parola hatalı',
      })
    }
  }

  public async logout({ auth, response }: HttpContextContract) {
    await auth.use('web').logout()

    return response.redirect().toRoute('login')
  }

  public async google({ ally, auth, response }: HttpContextContract) {
    const google = ally.use('google')
    const googleUser = await google.user()

    const user = await Auth.firstOrCreate(
      {
        email: googleUser.email,
      },
      {
        name: googleUser.name,
        picture: googleUser.avatarUrl,
        accessToken: googleUser.token.token,
        isVerified: googleUser.emailVerificationState === 'verified',
        password: string.generateRandom(32),
      }
    )

    await auth.use('web').login(user)

    return response.redirect().toRoute('index')
  }

  public async googleRedirect({ ally }: HttpContextContract) {
    return ally.use('google').redirect()
  }
}
