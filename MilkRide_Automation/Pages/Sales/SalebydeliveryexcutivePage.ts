import { Page,Locator } from "@playwright/test";
export class SalesbydeliveryexcutivePage{ 
    readonly page:Page
    readonly salesbydeliveryexcutivetabHeader:Locator 
    readonly salebycustomergrouptab:Locator
    constructor(page:Page){
        this.page=page;
        this.salesbydeliveryexcutivetabHeader=page.locator(`(//h1[normalize-space()='Sales by Delivery Executive'])[1]`);
        this.salebycustomergrouptab=page.locator(`(//span[normalize-space()='Sales by Customer Group'])[1]`);
    }
    async verifysalebydeliveryexcutivetabPage(){
        try {
        await this.salesbydeliveryexcutivetabHeader.isVisible();
        console.log('✅ Sales by Delivery Executive Page is visible');
        const headerText = await this.salesbydeliveryexcutivetabHeader.textContent();
        console.log(`📝 Header text: ${headerText}`)
        const currentUrl= this.page.url()
        console.log('🌐 Current URL is: ' + currentUrl);
        await this.salebycustomergrouptab.isVisible();
        console.log('✅ Sales by Customer Group Tab is visible');
        await this.page.waitForTimeout(2000);

        await this.salebycustomergrouptab.click();
        console.log('Clicked on Sales by Customer Group Tab');  
        await this.page.waitForLoadState(`networkidle`);
                 
    }
    catch (error) {
        console.error('❌ Error in verifying Sales by Delivery Executive Page:', error);
    }
    }
}
