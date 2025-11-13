import { Page, Locator } from "@playwright/test";
export class WalletReportReportPage {
    readonly page:Page
    readonly WalletReportReportPageheader:Locator
    readonly WalletReportReportPageBackbutton:Locator
    constructor(page:Page){
        this.page=page
        this.WalletReportReportPageheader=page.locator(`(//h1[normalize-space()='Payment Gateway Usage'])[1]`)
        this.WalletReportReportPageBackbutton=page.locator(`(//a[normalize-space()='Back'])[1]`)
    }
    async VerifyWalletReportReportPage(){
         const currentUrl= this.page.url();
        console.log('🌐 Current URL is: ' + currentUrl);  
        await this.WalletReportReportPageheader.isVisible();
        console.log('WalletReportReportPage header is visible');
        await this.WalletReportReportPageBackbutton.isVisible();
        console.log('Back button is visible');
        
      await Promise.all([
      this.page.waitForLoadState('domcontentloaded'), // wait for next page to load
      this.WalletReportReportPageBackbutton.click(),                   // trigger navigation
    ]);
        console.log(`Click on Back Button`);
        

    }
    
}