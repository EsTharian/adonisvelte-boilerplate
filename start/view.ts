import View from '@ioc:Adonis/Core/View'
import Env from '@ioc:Adonis/Core/Env'

View.global('googleClientID', Env.get('GOOGLE_CLIENT_ID'))
