import { Page, Locator } from "@playwright/test";
export class RecentSpendReportPage {
    readonly page:Page
    readonly RecentSpendReportPageheader:Locator
    // readonly DemandForecastingReportPageBackbutton:Locator
    constructor(page:Page){
        this.page=page
        this.RecentSpendReportPageheader=page.locator(`(//h1[normalize-space()='Recent Spend Report'])[1]`)
        // this.DemandForecastingReportPageBackbutton=page.locator(`(//a[normalize-space()='Back'])[1]`)
    }
    async VerifyRecentSpendReportPage(){
        const currentUrl= this.page.url();
        console.log('🌐 Current URL is: ' + currentUrl);  
        await this.RecentSpendReportPageheader.isVisible();
        console.log('RecentSpendReportPage header is visible');
        // await this.DemandForecastingReportPageBackbutton.isVisible();
        // console.log('Back button is visible')
        // await this.DemandForecastingReportPageBackbutton.click();
        // console.log(`Click on Back Button`);
        await this.page.goBack()
        console.log('↩️ Navigated back to the previous page');
    }
    
}