import { Page,Locator } from "@playwright/test";
export class AtRiskCustomersPage {
    readonly page:Page
    readonly atriskcustomerheader:Locator
    constructor(page:Page){
        this.page=page
        this.atriskcustomerheader=page.locator(`(//h1[normalize-space()='At-Risk Customers'])[1]`)
    }
    async verifyAtRiskCustomersPage(){
        const headerText = await this.atriskcustomerheader.textContent();
        console.log(`📝 Header text: ${headerText}`);
         const currentUrl= this.page.url();
        console.log('🌐 Current URL is: ' + currentUrl);   
    }

}