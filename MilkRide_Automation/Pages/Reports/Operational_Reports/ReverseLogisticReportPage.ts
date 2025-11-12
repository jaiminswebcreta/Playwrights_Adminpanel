import { Page, Locator } from "@playwright/test";
export class ReverseLogisticReportPage {
    readonly page:Page
    readonly ReverseLogisticReportPageheader:Locator
    readonly ReverseLogisticReportPageBackbutton:Locator
    constructor(page:Page){
        this.page=page
        this.ReverseLogisticReportPageheader=page.locator(`(//h1[normalize-space()='Reverse Logistic'])[1]`)
        this.ReverseLogisticReportPageBackbutton=page.locator(`(//a[normalize-space()='Back'])[1]`)
    }
    async VerifyReverseLogisticReportPage(){
         const currentUrl= this.page.url();
        console.log('🌐 Current URL is: ' + currentUrl);  
        await this.ReverseLogisticReportPageheader.isVisible();
        console.log('ReverseLogisticReportPage header is visible');
        await this.ReverseLogisticReportPageBackbutton.isVisible();
        console.log('Back button is visible')
        await this.ReverseLogisticReportPageBackbutton.click();
        console.log(`Click on Back Button`);
    }
    
}