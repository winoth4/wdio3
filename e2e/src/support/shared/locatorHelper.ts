import { ChainablePromiseElement } from "webdriverio"

 export default class locatorHelper{
      public generateIOSClassChai(selector:string){
        return $(`-ios class chain:${selector}`)
    }

    public getAndroidElement(elementType:WebdriverIO.ElementType):string{
      return 'android= new UiSelector().text(${elementType.text})'
    }

    public getInputTextBoxAndroid(elementType:WebdriverIO.ElementType):ChainablePromiseElement<WebdriverIO.Element>{
      return $(`${this.getAndroidElement(elementType)}.className("android.widget.EditText")`);
    }

    public getLabelFieldAndroid(elementType:WebdriverIO.ElementType):ChainablePromiseElement<WebdriverIO.Element>{
    return $(`${this.getAndroidElement(elementType)}.className()`)
    }

}