import { Page, Locator } from "@playwright/test";
export class TransactionsReportPage {
    readonly page:Page
    readonly TransactionsReportPageheader:Locator
    readonly TransactionsReportPageBackbutton:Locator
    constructor(page:Page){
        this.page=page
        this.TransactionsReportPageheader=page.locator(`(//h1[normalize-space()='Transactions Report'])[1]`)
        this.TransactionsReportPageBackbutton=page.locator(`(//a[normalize-space()='Back'])[1]`)
    }
    async VerifyTransactionsReportPage(){
         const currentUrl= this.page.url();
        console.log('🌐 Current URL is: ' + currentUrl);  
        await this.TransactionsReportPageheader.isVisible();
        console.log('TransactionsReportPage header is visible');
        await this.TransactionsReportPageBackbutton.isVisible();
        console.log('Back button is visible')
        await this.TransactionsReportPageBackbutton.click();
        console.log(`Click on Back Button`);
        

    }
    
}