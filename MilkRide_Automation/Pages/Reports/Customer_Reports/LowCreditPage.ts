import { Page, Locator } from "@playwright/test";
export class LowCreditPage {
    readonly page:Page
    readonly LowCreditPageheader:Locator;
    readonly LowCreditPageBackbutton:Locator;
    constructor(page:Page){
        this.page=page;
        this.LowCreditPageheader=page.locator(`(//h1[normalize-space()='Low Credit List'])[1]`);
        this.LowCreditPageBackbutton=page.locator(`(//a[normalize-space()='Back'])[1]`);
    }
    async VerifyLowCreditPage(){
         const currentUrl= this.page.url();
        console.log('🌐 Current URL is: ' + currentUrl);  
        await this.LowCreditPageheader.isVisible();
        console.log('LowCreditPage header is visible');
        await this.LowCreditPageBackbutton.isVisible();
        console.log('Back button is visible');
        await this.LowCreditPageBackbutton.click();
        console.log(`Click on Back Button`);
    }
    
}