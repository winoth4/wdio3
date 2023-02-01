import { injectable } from "inversify";
import 'reflect-metadata';
import { ChainablePromiseElement } from "webdriverio";
import  LocatorHelper  from "../../shared/locatorHelper";
import { LoginPage } from "./LoginPage.screen";

@injectable()
export class LoginPageIos extends LoginPage{
     getUserName():ChainablePromiseElement<WebdriverIO.Element>{
        return this.findElementByText("test-Username");
     }
     getPassword():ChainablePromiseElement<WebdriverIO.Element>{
        return this.findElementByText("test-Password");
     }
     getLoginBtn():ChainablePromiseElement<WebdriverIO.Element>{
        return this.findElementByText("test-LOGIN");
     }
     getHomePageHeader():ChainablePromiseElement<WebdriverIO.Element>{
        return $('')
     }
}