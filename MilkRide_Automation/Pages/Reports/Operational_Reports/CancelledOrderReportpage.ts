import { Page, Locator } from "@playwright/test";
export class CancelledOrderReportpage {
    readonly page:Page
    readonly CancelledOrderReportpageheader:Locator
    readonly CancelledOrderReportpageBackbutton:Locator
    constructor(page:Page){
        this.page=page
        this.CancelledOrderReportpageheader=page.locator(`(//h1[normalize-space()='Reservation Report'])[1]`)
        this.CancelledOrderReportpageBackbutton=page.locator(`(//a[normalize-space()='Back'])[1]`)
    }
    async VerifyCancelledOrderReportpage(){
         const currentUrl= this.page.url();
        console.log('🌐 Current URL is: ' + currentUrl);  
        await this.CancelledOrderReportpageheader.isVisible();
        console.log('CancelledOrderReportpage header is visible');
        await this.CancelledOrderReportpageBackbutton.isVisible();
        console.log('Back button is visible')
        await this.CancelledOrderReportpageBackbutton.click();
        console.log(`Click on Back Button`);
        

    }
    
}