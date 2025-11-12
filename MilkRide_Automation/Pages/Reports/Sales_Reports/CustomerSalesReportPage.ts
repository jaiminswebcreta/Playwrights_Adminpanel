import { Page, Locator } from "@playwright/test";
export class CustomerSalesReportPage {
    readonly page:Page
    readonly CustomerSalesReportPageheader:Locator
    readonly CustomerSalesReportPageBackbutton:Locator
    constructor(page:Page){
        this.page=page
        this.CustomerSalesReportPageheader=page.locator(`(//h1[normalize-space()='Customer Sales (Sales Report)'])[1]`)
        this.CustomerSalesReportPageBackbutton=page.locator(`(//a[normalize-space()='Back'])[1]`)
    }
    async VerifyCustomerSalesReportPage(){
         const currentUrl= this.page.url();
        console.log('🌐 Current URL is: ' + currentUrl);  
        await this.CustomerSalesReportPageheader.isVisible();
        console.log('CustomerSalesReportPage header is visible');
        await this.CustomerSalesReportPageBackbutton.isVisible();
        console.log('Back button is visible')
        await this.CustomerSalesReportPageBackbutton.click();
        console.log(`Click on Back Button`);
        

    }
    
}