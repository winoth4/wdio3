
class NotePad {
async getSkip(){
return await $('//*[@text="SKIP"]')
}

async getAddNote(){
    return await $('//*[@text="Add note"]')
}

async getTextView(){
    return await $('//*[@text="Text"]')
}

async getTextTitle(){
    return await $('//*[contains(@resource-id,"edit_title")]')
}

async getTextBody(){
    return await $('//*[contains(@resource-id,"edit_body")]')
}

}

module.exports= new NotePad()