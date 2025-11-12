import { Page, Locator } from "@playwright/test";
export class FutureorderReportPage {
    readonly page:Page
    readonly FutureorderReportPageheader:Locator
    readonly FutureorderReportPageBackbutton:Locator
    constructor(page:Page){
        this.page=page
        this.FutureorderReportPageheader=page.locator(`(//h1[normalize-space()='Future Orders Report'])[1]`)
        this.FutureorderReportPageBackbutton=page.locator(`(//a[normalize-space()='Back'])[1]`)
    }
    async VerifyFuturorderReportPage(){
         const currentUrl= this.page.url();
        console.log('🌐 Current URL is: ' + currentUrl);  
        await this.FutureorderReportPageheader.isVisible();
        console.log('FutureorderReportPage header is visible');
        await this.FutureorderReportPageBackbutton.isVisible();
        console.log('Back button is visible')
        await this.FutureorderReportPageBackbutton.click();
        console.log(`Click on Back Button`);
    }
    
}