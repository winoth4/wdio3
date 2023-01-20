  export class Notepad{
        get Skip(){
        return  $('//*[@text="SKIP"]')
        }
        
         get AddNote(){
            return  $('//*[@text="Add note"]')
        }
        
        get TextView(){
            return  $('//*[@text="Text"]')
        }
        
         get TextTitle(){
            return  $('//*[contains(@resource-id,"edit_title")]')
        }
        
         get TextBody(){
            return  $('//*[contains(@resource-id,"edit_note")]')
        }
        
}

