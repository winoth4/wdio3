import { APIDemos } from "../pageobjects/android/APIDemo";
const apidemo=new APIDemos()
describe("Sample suite",()=>{
    it("Test 1",async()=>{

        const app=await apidemo.App
        await app.click()
        const alertDialog=await apidemo.alertDialog
        await alertDialog.click()
        const listDialogs=await apidemo.listDialog
        await listDialogs.click()
        const headerTitle=await apidemo.commamdTwo
        expect(headerTitle).toHaveText('Command two')

    })
})