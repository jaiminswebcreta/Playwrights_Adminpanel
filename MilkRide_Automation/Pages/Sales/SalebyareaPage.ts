import { Page,Locator } from "@playwright/test";
export class SalebyareaPage{ 
    readonly page:Page
    readonly salesbyareatabHeader:Locator
    readonly salesbyhubtab:Locator
    constructor(page:Page){
        this.page=page;
        this.salesbyareatabHeader=page.locator(`(//h1[normalize-space()='Sales by Area'])[1]`);
        this.salesbyhubtab=page.locator(`(//span[normalize-space()='Sales by Hub'])[1]`);

    }   
    async verifysalebyareatabPage(){
        try {
        await this.salesbyareatabHeader.isVisible();
        console.log('✅ Sales by Area Page is visible');
        const headerText = await this.salesbyareatabHeader.textContent();
        console.log(`📝 Header text: ${headerText}`);
        const currentUrl= this.page.url();
        console.log('🌐 Current URL is: ' + currentUrl);
        await this.salesbyhubtab.isVisible() 
        console.log('✅ Sales by Hub Tab is visible'); 
        await this.page.waitForTimeout(2000);

        await this.salesbyhubtab.click();
        console.log('Clicked on Sales by Hub Tab');  
        await this.page.waitForLoadState('load');              
    }
    catch (error) {
        console.error('❌ Error in verifying Sales by Area Page:', error);
    }
    }
}