import { Page,Locator } from "@playwright/test";
export class RefundsRequrestPage {
    readonly page:Page
    readonly refundsrequestheader:Locator
    readonly createrequestbutton:Locator
    constructor(page:Page){
        this.page=page
        this.refundsrequestheader=page.locator(`(//h1[normalize-space()='Refund Requests'])[1]`)
        this.createrequestbutton=page.locator(`(//button[normalize-space()='Create Request'])[1]`)
    }
    async verifyRefundsRequestPage(){
        const headerText = await this.refundsrequestheader.textContent();
        console.log(`📝 Header text: ${headerText}`);
         const currentUrl= this.page.url();
        console.log('🌐 Current URL is: ' + currentUrl);   
    }
    async clickOnCreateRequestButton(){
        await this.createrequestbutton.click();
        console.log("🖱️ Clicked on Create Request button");
    }

}