import { Page, Locator } from "@playwright/test";
export class DemandForecastingReportPage {
    readonly page:Page
    readonly DemandForecastingReportPageheader:Locator
    // readonly DemandForecastingReportPageBackbutton:Locator
    constructor(page:Page){
        this.page=page
        this.DemandForecastingReportPageheader=page.locator(`(//h1[normalize-space()='Demand Forecasting Report'])[1]`)
        // this.DemandForecastingReportPageBackbutton=page.locator(`(//a[normalize-space()='Back'])[1]`)
    }
    async VerifyDemandForecastingReportPage(){
        const currentUrl= this.page.url();
        console.log('🌐 Current URL is: ' + currentUrl);  
        await this.DemandForecastingReportPageheader.isVisible();
        console.log('DemandForecastingReportPage header is visible');
        // await this.DemandForecastingReportPageBackbutton.isVisible();
        // console.log('Back button is visible')
        // await this.DemandForecastingReportPageBackbutton.click();
        // console.log(`Click on Back Button`);
        await this.page.goBack()
        console.log('↩️ Navigated back to the previous page');
    }
    
}