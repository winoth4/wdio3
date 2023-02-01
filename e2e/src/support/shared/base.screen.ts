import { injectable } from "inversify"
import { ChainablePromiseElement } from "webdriverio"

@injectable()
 export default class BaseScreen{
      public generateIOSClassChai(selector:string){
        return $(`-ios class chain:${selector}`)
    }

    public getIosElement(elementype:WebdriverIO.ElementType):string{
        return `-ios predicate string:${this.predicateStringBuilder(elementype)}`
    }

    predicateStringBuilder(elementType:WebdriverIO.ElementType):string{
        return `name=="${elementType.text}"`
    }

    public getAndroidElement(elementType:WebdriverIO.ElementType):string{
      return `android= new UiSelector().text("${elementType.text}")`
    }

    public getInputTextBoxAndroid(elementType:WebdriverIO.ElementType,instance:number=0):ChainablePromiseElement<WebdriverIO.Element>{
        
      return $(`${this.getAndroidElement(elementType)}.className("android.widget.EditText").instance(${instance})`);
    }

    public getLabelFieldAndroid(elementType:WebdriverIO.ElementType):ChainablePromiseElement<WebdriverIO.Element>{
    return $(`${this.getAndroidElement(elementType)}.className("android.widget.TextView")`)
    }

    findElementByText(text:string):ChainablePromiseElement<WebdriverIO.Element>{
        return driver.isIOS?$(`${this.getIosElement({text:text})}`):$(`${this.getAndroidElement({text:text})}`);

    }

}