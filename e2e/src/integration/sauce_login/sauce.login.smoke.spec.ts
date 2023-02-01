
import { sauceLoginContainer } from "../../support/containers/sauce_login/sauce-login_inversify.conf"
import { LoginPage } from "../../support/module/sauce_login/LoginPage.screen"
import { SAUCE_LOGIN } from "../../support/containers/sauce_login/sauce-login.symbol"



const sauceLogin=sauceLoginContainer.get<LoginPage>(SAUCE_LOGIN.SauceLoginScreen)

describe('Sauce Lab Login functionality',()=>{
    it('Login success test', async ()=>{
        await sauceLogin.performLogin('standard_user','secret_sauce')
        // await loginPageIos.validateLoginSuccess();
    })
})