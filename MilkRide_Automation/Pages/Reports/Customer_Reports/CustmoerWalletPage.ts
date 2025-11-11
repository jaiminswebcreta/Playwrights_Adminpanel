import { Page, Locator } from "@playwright/test";
export class CustmoerWalletPage {
    readonly page:Page
    readonly CustomerWalletReportheader:Locator
    readonly CustomerwalletBackbutton:Locator
    constructor(page:Page){
        this.page=page
        this.CustomerWalletReportheader=page.locator(`(//h1[normalize-space()='Customer Wallet List'])[1]`)
        this.CustomerwalletBackbutton=page.locator(`(//a[normalize-space()='Back'])[1]`)
    }
    async verifyCustomerWalletReportPage(){
         const currentUrl= this.page.url();
        console.log('🌐 Current URL is: ' + currentUrl);  
        await this.CustomerWalletReportheader.isVisible();
        console.log('CustomerWalletReport header is visible');
        await this.CustomerwalletBackbutton.isVisible();
        console.log('customerWalletReport button is visible')
        await this.CustomerwalletBackbutton.click();
        console.log(`Click on Back Button`);
    }
    
}