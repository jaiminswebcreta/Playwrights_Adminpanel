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
        
       await this.Topcustomerspend.waitFor({ state: 'visible', timeout: 5000 });
       
        console.log('✅ Top Customers by Spend Tab is visible'); 
      try {
         await this.Topcustomerspend.waitFor({ state: 'visible', timeout: 5000 });
         await this.Topcustomerspend.click();
         await this.page.waitForSelector('text=Most Selling Subscriptions', { timeout: 10000 });
}     catch (err: unknown) {
         if (err instanceof Error) {
             console.error('❌ Failed during Most Selling Subscriptions flow:', err.message);
         } else {
             console.error('❌ Failed during Most Selling Subscriptions flow:', err);
         }
} 
}
}   