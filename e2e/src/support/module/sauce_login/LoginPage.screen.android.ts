import { injectable } from "inversify";
import 'reflect-metadata';
import { ChainablePromiseElement } from "webdriverio";
import { LoginPage } from "./LoginPage.screen";

@injectable()
export class LoginPageAndroid extends LoginPage{
    getHomePageHeader(): ChainablePromiseElement<WebdriverIO.Element> {
        return super.getLabelFieldAndroid({text:'PRODUCTS'})
    }
    getUserName(): ChainablePromiseElement<WebdriverIO.Element> {
        return super.getInputTextBoxAndroid({text:'Username'})
    }
    getPassword(): ChainablePromiseElement<WebdriverIO.Element> {
        return super.getInputTextBoxAndroid({text:'Password'})
    }
    getLoginBtn(): ChainablePromiseElement<WebdriverIO.Element> {
        return $('android=new UiSelector().description("test-LOGIN")')
    }


    
    getWaitElement():ChainablePromiseElement<WebdriverIO.Element>{
        return super.findElementByText('Username')
    }


}