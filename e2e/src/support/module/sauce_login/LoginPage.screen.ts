import { ChainablePromiseElement } from "webdriverio";
import BaseScreen from "../../shared/base.screen";
import { injectable } from "inversify";
import 'reflect-metadata';

@injectable()
export abstract class LoginPage extends BaseScreen{
    abstract getUserName():ChainablePromiseElement<WebdriverIO.Element>;
    abstract getPassword():ChainablePromiseElement<WebdriverIO.Element>;
    abstract getLoginBtn():ChainablePromiseElement<WebdriverIO.Element>;
    abstract getHomePageHeader():ChainablePromiseElement<WebdriverIO.Element>

    async performLogin(userid:string,password:string):Promise<void>{
      await (await this.getUserName()).setValue(userid)
      await (await this.getPassword()).setValue(password)
      await (await this.getLoginBtn()).click()
    }
    async validateLoginSuccess():Promise<void>{
await expect(this.getHomePageHeader()).toHaveText('PRODUCTS')
    }
    
}