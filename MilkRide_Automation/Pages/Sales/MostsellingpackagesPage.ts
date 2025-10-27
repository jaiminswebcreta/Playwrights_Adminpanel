import { Page,Locator } from "@playwright/test";
export class MostSellingpackagesPage{
    readonly page:Page
    readonly mostsellingpackagesHeader:Locator
    readonly mostselingsubscription:Locator
    constructor(page:Page){
        this.page=page;
        this.mostsellingpackagesHeader=page.locator(`(//h1[normalize-space()='Most Selling Packages'])[1]`);
        this.mostselingsubscription=page.locator(`(//span[normalize-space()='Most Selling Subscriptions'])[1]`);
    }
    async verifyMostSellingpackagesPage(){
        await this.mostsellingpackagesHeader.isVisible();
        console.log('✅ Most Selling Packages Page is visible');
        const headerText = await this.mostsellingpackagesHeader.textContent();
        console.log(`📝 Header text: ${headerText}`);
        const currentUrl= this.page.url();
        console.log('🌐 Current URL is: ' + currentUrl);    
        await this.mostselingsubscription.isVisible();
        console.log('✅ Dashboard link is visible'); 
        await this.mostselingsubscription.click();
        console.log('Clicked on most selling subscription link');
                
    }
}