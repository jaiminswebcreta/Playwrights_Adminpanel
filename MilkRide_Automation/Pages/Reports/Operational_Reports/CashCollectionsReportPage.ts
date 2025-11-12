import { Page, Locator } from "@playwright/test";
export class CashCollectionsReportPage {
    readonly page:Page
    readonly CashCollectionsReportPageheader:Locator
    readonly CashCollectionsReportPageBackbutton:Locator
    constructor(page:Page){
        this.page=page
        this.CashCollectionsReportPageheader=page.locator(`(//h1[normalize-space()='Cash Collection List'])[1]`)
        this.CashCollectionsReportPageBackbutton=page.locator(`(//a[normalize-space()='Back'])[1]`)
    }
    async VerifyCashCollectionsReportPage(){
         const currentUrl= this.page.url();
        console.log('🌐 Current URL is: ' + currentUrl);  
        await this.CashCollectionsReportPageheader.isVisible();
        console.log('CashCollectionsReportPage header is visible');
        await this.CashCollectionsReportPageBackbutton.isVisible();
        console.log('Back button is visible')
        await this.CashCollectionsReportPageBackbutton.click();
        console.log(`Click on Back Button`);
    }
    
}