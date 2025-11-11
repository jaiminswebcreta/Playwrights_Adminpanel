import { Page, Locator } from "@playwright/test";
export class CustomerVacationPage {
    readonly page:Page
    readonly CustomerVacationheader:Locator
    readonly CustomerVacationBackbutton:Locator
    constructor(page:Page){
        this.page=page
        this.CustomerVacationheader=page.locator(`(//h1[normalize-space()='Customer Vacation List'])[1]`)
        this.CustomerVacationBackbutton=page.locator(`(//a[normalize-space()='Back'])[1]`)
    }
    async VerifyCustomerVacationReportPage(){
         const currentUrl= this.page.url();
        console.log('🌐 Current URL is: ' + currentUrl);  
        await this.CustomerVacationheader.isVisible();
        console.log('CustomerVacation header is visible');
        await this.CustomerVacationBackbutton.isVisible();
        console.log('Back button is visible')
        await this.CustomerVacationBackbutton.click();
        console.log(`Click on Back Button`);
    }
    
}