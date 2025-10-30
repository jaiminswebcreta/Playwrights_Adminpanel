import { Page,Locator } from "@playwright/test";
export class SubscriptionChangePage {
    readonly page:Page
    readonly subscriptionchangeheader:Locator
    constructor(page:Page){
        this.page=page
        this.subscriptionchangeheader=page.locator(`(//h1[normalize-space()='Subscription Activity'])[1]`)
    }
    async verifySubscriptionChangePage(){
        const headerText = await this.subscriptionchangeheader.textContent();
        console.log(`📝 Header text: ${headerText}`);
         const currentUrl= this.page.url();
        console.log('🌐 Current URL is: ' + currentUrl);
    }

}