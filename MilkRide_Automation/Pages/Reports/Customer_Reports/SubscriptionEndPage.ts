import { Page, Locator } from "@playwright/test";
export class SubscriptionEndreportPage {
    readonly page:Page
    readonly SubscriptionEndreportheader:Locator
    readonly SubscriptionEndreportBackbutton:Locator
    constructor(page:Page){
        this.page=page
        this.SubscriptionEndreportheader=page.locator(`(//h1[normalize-space()='Subscription End List'])[1]`);
        this.SubscriptionEndreportBackbutton=page.locator(`(//a[normalize-space()='Back'])[1]`);
    }
    async VerifySubscriptionreportReportPage(){
         const currentUrl= this.page.url();
        console.log('🌐 Current URL is: ' + currentUrl);  
        await this.SubscriptionEndreportheader.isVisible();
        console.log('SubscriptionEndreport header is visible');
        await this.SubscriptionEndreportBackbutton.isVisible();
        console.log('Back button is visible')
        await this.SubscriptionEndreportBackbutton.click();
        console.log(`Click on Back Button`);
    }
    
}