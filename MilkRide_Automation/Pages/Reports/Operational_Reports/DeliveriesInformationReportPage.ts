import { Page, Locator } from "@playwright/test";
export class DeliveriesInformationReportPage {
    readonly page:Page
    readonly DeliveriesInformationReportPageheader:Locator
    readonly DeliveriesInformationReportPageBackbutton:Locator
    constructor(page:Page){
        this.page=page
        this.DeliveriesInformationReportPageheader=page.locator(`(//h1[normalize-space()='Deliveries Information'])[1]`)
        this.DeliveriesInformationReportPageBackbutton=page.locator(`(//a[normalize-space()='Back'])[1]`)
    }
    async VerifyDeliveriesInformationReportPage(){
         const currentUrl= this.page.url();
        console.log('🌐 Current URL is: ' + currentUrl);  
        await this.DeliveriesInformationReportPageheader.isVisible();
        console.log('DeliveriesInformationReportPage header is visible');
        await this.DeliveriesInformationReportPageBackbutton.isVisible();
        console.log('Back button is visible')
        await this.DeliveriesInformationReportPageBackbutton.click();
        console.log(`Click on Back Button`);
        

    }
    
}