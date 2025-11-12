import { Page, Locator } from "@playwright/test";
export class PredictiveAnalysisReportPage {
    readonly page:Page
    readonly PredictiveAnalysisReportPageheader:Locator
    readonly PredictiveAnalysisReportPageBackbutton:Locator
    constructor(page:Page){
        this.page=page
        this.PredictiveAnalysisReportPageheader=page.locator(`(//h1[normalize-space()='Predictive Analysis'])[1]`)
        this.PredictiveAnalysisReportPageBackbutton=page.locator(`(//a[normalize-space()='Back'])[1]`)
    }
    async VerifyPredictiveAnalysisReportPage(){
         const currentUrl= this.page.url();
        console.log('🌐 Current URL is: ' + currentUrl);  
        await this.PredictiveAnalysisReportPageheader.isVisible();
        console.log('PredictiveAnalysisReportPage header is visible');
        await this.PredictiveAnalysisReportPageBackbutton.isVisible();
        console.log('Back button is visible')
        await this.PredictiveAnalysisReportPageBackbutton.click();
        console.log(`Click on Back Button`);
    }
    
}