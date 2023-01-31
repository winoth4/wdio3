import  LocatorHelper  from "../../shared/locatorHelper";
export class TaskBaritems{
     helper=new LocatorHelper();
     async clickOnGivenTask(task:string){
      
        return await (await this.helper.generateIOSClassChai(task)).click()
     }

     async clickOnGivenMenu(menu:string){
      
      return await (await this.helper.generateIOSClassChai(menu)).click()
   }
}