import { Page, Locator } from "@playwright/test";
export class MerchantPage {
    readonly page:Page
    readonly MerchantPageheader:Locator
    readonly MerchantPageBackbutton:Locator
    constructor(page:Page){
        this.page=page
        this.MerchantPageheader=page.locator(`(//h1[normalize-space()='Add New Merchant'])[1]`)
        this.MerchantPageBackbutton=page.locator(`(//a[normalize-space()='Back'])[1]`)
    }
    async VerifyMerchantPage(){
         const currentUrl= this.page.url();
        console.log('🌐 Current URL is: ' + currentUrl);  
        await this.MerchantPageheader.isVisible();
        console.log('MerchantPage header is visible');
        await this.MerchantPageBackbutton.isVisible();
        console.log('Back button is visible')
        await this.MerchantPageBackbutton.click();
        console.log(`Click on Back Button`);        

    }
    
}