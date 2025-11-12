import { Page, Locator } from "@playwright/test";
export class OrdersSheetReportPage {
    readonly page:Page
    readonly OrdersSheetReportPageheader:Locator
    readonly OrdersSheetReportPageBackbutton:Locator
    constructor(page:Page){
        this.page=page
        this.OrdersSheetReportPageheader=page.locator(`(//h1[normalize-space()='Orders Sheet'])[1]`)
        this.OrdersSheetReportPageBackbutton=page.locator(`(//a[normalize-space()='Back'])[1]`)
    }
    async VerifyOrdersSheetReportPage(){
         const currentUrl= this.page.url();
        console.log('🌐 Current URL is: ' + currentUrl);  
        await this.OrdersSheetReportPageheader.isVisible();
        console.log('OrdersSheetReportPage header is visible');
        await this.OrdersSheetReportPageBackbutton.isVisible();
        console.log('Back button is visible')
        await this.OrdersSheetReportPageBackbutton.click();
        console.log(`Click on Back Button`);
        

    }
    
}