export class APIDemos{

    get App(){
        return $('~App')
    }

    get alertDialog(){
        return $('//android.widget.TextView[@content-desc="Alert Dialogs"]')
    }

    get listDialog(){
        return $('//android.widget.Button[@text="List dialog"]')
    }

    get commamdTwo(){
        return $('//*[@text="Command two"]')
    }
}