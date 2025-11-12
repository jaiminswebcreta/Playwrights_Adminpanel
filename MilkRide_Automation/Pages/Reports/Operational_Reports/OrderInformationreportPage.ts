import { Page, Locator } from "@playwright/test";
export class OrderInformationreportPage {
    readonly page:Page
    readonly OrderInformationreportPageheader:Locator
    readonly OrderInformationreportPageBackbutton:Locator
    constructor(page:Page){
        this.page=page
        this.OrderInformationreportPageheader=page.locator(`(//h1[normalize-space()='Order Information'])[1]`)
        this.OrderInformationreportPageBackbutton=page.locator(`(//a[normalize-space()='Back'])[1]`)
    }
    async VerifyOrderInformationreportPage(){
         const currentUrl= this.page.url();
        console.log('🌐 Current URL is: ' + currentUrl);  
        await this.OrderInformationreportPageheader.isVisible();
        console.log('OrderInformationreportPage header is visible');
        await this.OrderInformationreportPageBackbutton.isVisible();
        console.log('Back button is visible')
        await this.OrderInformationreportPageBackbutton.click();
        console.log(`Click on Back Button`);
    }
    
}