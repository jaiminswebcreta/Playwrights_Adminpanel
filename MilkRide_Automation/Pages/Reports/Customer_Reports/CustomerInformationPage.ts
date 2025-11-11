import { Page, Locator } from "@playwright/test";
export class CustomerInformationPage {
    readonly page:Page
    readonly CustomerInformationheader:Locator
    readonly CustomerInformationBackbutton:Locator
    constructor(page:Page){
        this.page=page
        this.CustomerInformationheader=page.locator(`(//h1[normalize-space()='Customer Information'])[1]`)
        this.CustomerInformationBackbutton=page.locator(`(//a[normalize-space()='Back'])[1]`)
    }
    async VerifyCustomerInformationReportPage(){
         const currentUrl= this.page.url();
        console.log('🌐 Current URL is: ' + currentUrl);  
        await this.CustomerInformationheader.isVisible();
        console.log('CustomerInformation header is visible');
        await this.CustomerInformationBackbutton.isVisible();
        console.log('Back button is visible')
        await this.CustomerInformationBackbutton.click();
        console.log(`Click on Back Button`);
    }
    
}