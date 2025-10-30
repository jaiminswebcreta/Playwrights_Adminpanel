import { Page,Locator } from "@playwright/test";
export class SalebyHubPage{ 
    readonly page:Page
    readonly salesbyhubtabHeader:Locator 
    readonly salesbydeliveryexcutivetab:Locator
    
    constructor(page:Page){
        this.page=page;
        this.salesbyhubtabHeader=page.locator(`(//h1[normalize-space()='Sales by Hub'])[1]`);
        this.salesbydeliveryexcutivetab=page.locator(`(//span[normalize-space()='Sales by Delivery Executive'])[1]`);


    }   
    async verifysalebyhubtabPage(){
        try {
        await this.salesbyhubtabHeader.isVisible();
        console.log('✅ Sales by Hub Page is visible');
        const headerText = await this.salesbyhubtabHeader.textContent();
        console.log(`📝 Header text: ${headerText}`);   
        const currentUrl= this.page.url();
        console.log('🌐 Current URL is: ' + currentUrl);
        await this.salesbydeliveryexcutivetab.isVisible()
        console.log('✅ Sales by Delivery Executive Tab is visible');
        await this.page.waitForTimeout(2000);
        await this.salesbydeliveryexcutivetab.click();
        console.log('Clicked on Sales by Delivery Executive Tab');  
        await this.page.waitForLoadState('load');              
    }
    catch (error) {
        console.error('❌ Error in verifying Sales by Hub Page:', error);
    }
    }
}