import { Page, Locator } from "@playwright/test";
export class SubscriptionreportPage {
    readonly page:Page
    readonly Subscriptionreportheader:Locator
    readonly SubscriptionreportBackbutton:Locator
    constructor(page:Page){
        this.page=page
        this.Subscriptionreportheader=page.locator(`(//h1[normalize-space()='Subscription List'])[1]`);
        this.SubscriptionreportBackbutton=page.locator(`(//a[normalize-space()='Back'])[1]`);
    }
    async VerifySubscriptionreportReportPage(){
         const currentUrl= this.page.url();
        console.log('🌐 Current URL is: ' + currentUrl);  
        await this.Subscriptionreportheader.isVisible();
        console.log('Subscriptionreport header is visible');
        await this.SubscriptionreportBackbutton.isVisible();
        console.log('Back button is visible')
        await this.SubscriptionreportBackbutton.click();
        console.log(`Click on Back Button`);
    }
    
}