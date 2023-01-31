import { ChainablePromiseElement } from "webdriverio"

 export default class BaseScreen{
      public generateIOSClassChai(selector:string){
        return $(`-ios class chain:${selector}`)
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
        return $(`${this.getAndroidElement({text:text})}`);

    }

}