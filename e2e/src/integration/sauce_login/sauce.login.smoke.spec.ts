
import { LoginPageAndroid } from "../../support/module/sauce_login/LoginPage.screen.android"

const loginPage=new LoginPageAndroid()

describe('Sauce Lab Login functionality',()=>{
    it('Login success test', async ()=>{
        await loginPage.performLogin('standard_user','secret_sauce')
        await loginPage.validateLoginSuccess();
    })
})