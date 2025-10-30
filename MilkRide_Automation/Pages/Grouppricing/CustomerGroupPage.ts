import {Page,Locator } from "@playwright/test";
export class CustomerGroupPage{
    readonly page:Page
    readonly customerGroupHeader:Locator
    readonly Groupstab:Locator


    constructor(page:Page){
        this.page=page;
        this.customerGroupHeader=page.locator(`(//h1[normalize-space()='Customer Group List'])[1]`);
        this.Groupstab=page.locator(`(//span[normalize-space()='Groups'])[1]`);
    }
    async verifyCustomerGroupPage(){
        try {
        await this.customerGroupHeader.isVisible();
        console.log('✅ Customer Group Page is visible');
        const headerText = await this.customerGroupHeader.textContent();
        console.log(`📝 Header text: ${headerText}`);
        const currentUrl= this.page.url();
        console.log('🌐 Current URL is: ' + currentUrl);  
        await this.Groupstab.isVisible();
        console.log('✅ Groups Tab is visible'); 
        await this.Groupstab.click();
        console.log('Clicked on Groups Tab');                
    }
    catch (error) {
        console.error('❌ Error in verifying Customer Group Page:', error);
    }
    }
}