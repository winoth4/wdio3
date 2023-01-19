// import  Notepad  from "../pageobjects/Notepad"

import Notepad from "../pageobjects/Notepad"

describe('suite 1',()=>{
it('test 1',async ()=>{
            //skip
            await Notepad.Skip.click()
            await Notepad.AddNote.click()
            await Notepad.TextView.click()
            await Notepad.TextTitle.setValue('Tennis grandslams')
            await Notepad.TextBody.addValue('Aus Open\nWimbledon\nus open\nfrench open')
            
            await driver.back()
            await driver.back()
            
            const saveHeader=await $('//*[@text="Tennis grandslams"]')
             expect(saveHeader).toBeDisplayed()
            await saveHeader.click()
            await $('//*[contains(@resource-id,"main_btn3")]').click()
    
})
})