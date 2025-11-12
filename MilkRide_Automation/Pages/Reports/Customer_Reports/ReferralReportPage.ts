import { Page, Locator } from "@playwright/test";
export class ReferralReportPage {
    readonly page:Page
    readonly ReferralReportPageheader:Locator
    readonly ReferralReportPageBackbutton:Locator
    constructor(page:Page){
        this.page=page
        this.ReferralReportPageheader=page.locator(`(//h1[normalize-space()='Referral Report'])[1]`)
        this.ReferralReportPageBackbutton=page.locator(`(//a[normalize-space()='Back'])[1]`)
    }
    async VerifyReferralReportPage(){
         const currentUrl= this.page.url();
        console.log('🌐 Current URL is: ' + currentUrl);  
        await this.ReferralReportPageheader.isVisible();
        console.log('ReferralReportPage header is visible');
        await this.ReferralReportPageBackbutton.isVisible();
        console.log('Back button is visible')
        await this.ReferralReportPageBackbutton.click();
        console.log(`Click on Back Button`);
    }
    
}