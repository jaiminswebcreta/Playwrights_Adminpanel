import { Page, Locator } from "@playwright/test";
export class FlexOrdersReportPage {
    readonly page:Page
    readonly FlexOrdersReportPageheader:Locator
    readonly FlexOrdersReportPageBackbutton:Locator
    constructor(page:Page){
        this.page=page
        this.FlexOrdersReportPageheader=page.locator(`(//h1[normalize-space()='Flex Order Grouping'])[1]`)
        this.FlexOrdersReportPageBackbutton=page.locator(`(//a[normalize-space()='Back'])[1]`)
    }
    async VerifyFlexOrdersReportPage(){
         const currentUrl= this.page.url();
        console.log('🌐 Current URL is: ' + currentUrl);  
        await this.FlexOrdersReportPageheader.isVisible();
        console.log('FlexOrdersReportPage header is visible');
        await this.FlexOrdersReportPageBackbutton.isVisible();
        console.log('Back button is visible')
        await this.FlexOrdersReportPageBackbutton.click();
        console.log(`Click on Back Button`);
    }
    
}