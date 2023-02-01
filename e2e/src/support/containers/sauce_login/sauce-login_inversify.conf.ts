import {Container} from 'inversify'
import 'reflect-metadata'
import { LoginPage } from '../../module/sauce_login/LoginPage.screen'
import { LoginPageAndroid } from '../../module/sauce_login/LoginPage.screen.android'
import { LoginPageIos } from '../../module/sauce_login/LoginPage.screen.ios'
import { SAUCE_LOGIN } from './sauce-login.symbol'

export const sauceLoginContainer=new Container()

sauceLoginContainer.bind<LoginPage>(SAUCE_LOGIN.SauceLoginScreen).to(driver.isIOS?LoginPageIos:LoginPageAndroid)