import { Page, Locator } from "@playwright/test";
export class CumulativeSalesReportPage {
    readonly page:Page
    readonly CumulativeSalesReportPageheader:Locator
    readonly CumulativeSalesReportPageBackbutton:Locator
    constructor(page:Page){
        this.page=page
        this.CumulativeSalesReportPageheader=page.locator(`(//h1[normalize-space()='Cumulative Sales Report'])[1]`)
        this.CumulativeSalesReportPageBackbutton=page.locator(`(//a[normalize-space()='Back'])[1]`)
    }
    async VerifyCumulativeSalesReportPage(){
         const currentUrl= this.page.url();
        console.log('🌐 Current URL is: ' + currentUrl);  
        await this.CumulativeSalesReportPageheader.isVisible();
        console.log('CumulativeSalesReportPage header is visible');
        await this.CumulativeSalesReportPageBackbutton.isVisible();
        console.log('Back button is visible')
        await this.CumulativeSalesReportPageBackbutton.click();
        console.log(`Click on Back Button`);
        

    }
    
}