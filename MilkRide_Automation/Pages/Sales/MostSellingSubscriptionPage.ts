import { Page,Locator } from "@playwright/test";
export class MostSellingSubscriptionPage{
    readonly page:Page
   
    readonly mostSellingSubscriptionHeader:Locator
    readonly Topcustomerspend :Locator
    constructor(page:Page){
        this.page=page;
        this.mostSellingSubscriptionHeader=page.locator(`(//h1[normalize-space()='Most Selling Subscriptions'])[1]`);
        this.Topcustomerspend=page.locator(`(//span[normalize-space()='Top Customers by Spend'])[1]`);
    }
    async verifyMostSellingSubscriptionPage(){
        await this.mostSellingSubscriptionHeader.isVisible();
        console.log('✅ Most Selling Subscription Page is visible');
        const headerText = await this.mostSellingSubscriptionHeader.textContent();
        console.log(`📝 Header text: ${headerText}`);
        const currentUrl= this.page.url();
        console.log('🌐 Current URL is: ' + currentUrl);
        await this.Topcustomerspend.isVisible() 
        console.log('✅ Top Customers by Spend Tab is visible'); 
        await this.Topcustomerspend.click();
        console.log('Clicked on Top Customers by Spend Tab');                
    }
}   