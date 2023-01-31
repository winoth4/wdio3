import  LocatorHelper  from "../../shared/locatorHelper";
const locHelper=new LocatorHelper()
export class LoginPageIos{
    get loginPageHeader(){
        return locHelper.generateIOSClassChai('**/XCUIElementTypeStaticText[`label == "Login"`]')
    }
    get userName(){
        return $('~Username input field')
    }

    get password(){
        return $('~Password input field')
    }

    
    get loginButton(){
        return $('~Login button')
    }

    async login(username:string,password:string){
       await this.userName.setValue(username)
        await this.password.setValue(password)
        await this.loginButton.click()
    }

}