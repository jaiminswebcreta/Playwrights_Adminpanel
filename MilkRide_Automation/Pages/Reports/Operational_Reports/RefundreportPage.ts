import { Page, Locator } from "@playwright/test";
export class RefundreportPage {
    readonly page:Page
    readonly RefundreportPageheader:Locator
    readonly RefundreportPageBackbutton:Locator
    constructor(page:Page){
        this.page=page
        this.RefundreportPageheader=page.locator(`(//div[@id="kt_app_main"])//h1[1]`)
        this.RefundreportPageBackbutton=page.locator(`(//a[normalize-space()='Back'])[1]`)
    }
    async VerifyRefundreportPage(){
         const currentUrl= this.page.url();
        console.log('🌐 Current URL is: ' + currentUrl);  
        await this.RefundreportPageheader.isVisible();
        console.log('RefundreportPage header is visible');
        await this.RefundreportPageBackbutton.isVisible();
        console.log('Back button is visible')
        await this.RefundreportPageBackbutton.click();
        console.log(`Click on Back Button`);
        

    }
    
}