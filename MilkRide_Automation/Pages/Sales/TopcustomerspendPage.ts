import { Page,Locator } from "@playwright/test";
export class TopcustomerspendPage{
    readonly page:Page
    
     readonly topCustomersBySpendHeader:Locator
     readonly salebyareatab:Locator
    constructor(page:Page){
        this.page=page;
        this.topCustomersBySpendHeader=page.locator(`(//h1[normalize-space()='Top Customers by Spend'])[1]`);
        this.salebyareatab=page.locator(`(//span[normalize-space()='Sales by Area'])[1]`);
    }
    async verifyTopcustomerspendPage(){
        await this.topCustomersBySpendHeader.waitFor({ state: 'visible', timeout: 5000 });
        console.log('✅ Top Customers by Spend Page is visible');
        const headerText = await this.topCustomersBySpendHeader.textContent();
        console.log(`📝 Header text: ${headerText}`);
        const currentUrl= this.page.url();
        console.log('🌐 Current URL is: ' + currentUrl);
        await this.salebyareatab.waitFor({ state: 'visible', timeout: 5000 });
        console.log('✅ Sales by Area Tab is visible'); 
        for (let i = 0; i < 3; i++) {
         if (await this.salebyareatab.isVisible()) {
            console.log('✅ Sales by Area Tab is visible');
            await this.salebyareatab.click();
            console.log('🖱️ Clicked on Sales by Area Tab');
         break;
  }     else {
        console.warn(`⚠️ Attempt ${i + 1}: Sales by Area Tab not visible yet`);
        await this.page.waitForTimeout(2000); // wait 2s before next retry
  }
}
        console.log('Clicked on Sales by Area Tab');
    }
}