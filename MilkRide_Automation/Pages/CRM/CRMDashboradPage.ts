import { Page,Locator } from "@playwright/test";
export class CRMDashboradPage { 
    readonly page:Page
    readonly headerdashabord:Locator
    constructor(page:Page){
        this.page=page
        this.headerdashabord=page.locator(`(//h1[normalize-space()='CRM Dashboard'])[1]`)
    }
    async verifyCRMDashboardPage(){
        const headerText = await this.headerdashabord.textContent();
        console.log(`📝 Header text: ${headerText}`);
         const currentUrl= this.page.url();
        console.log('🌐 Current URL is: ' + currentUrl);   
    }

}
