import { Page,Locator } from "@playwright/test";
export class CustomerInvoicePage{
    readonly page:Page
    readonly customerInvoiceHeader:Locator
    readonly dashboard :Locator
    constructor(page:Page){
        this.page=page;
        this.customerInvoiceHeader=page.locator(`(//h1[normalize-space()='Invoice List'])[1]`);
        this.dashboard=page.locator(`(//span[normalize-space()='Dashboard'])[1]`);
    }
    async verifyCustomerInvoicePage(){
        await this.customerInvoiceHeader.isVisible();
        console.log('✅ Customer Invoice Page is visible');
        const headerText = await this.customerInvoiceHeader.textContent();
        console.log(`📝 Header text: ${headerText}`);
        const currentUrl= this.page.url();
        console.log('🌐 Current URL is: ' + currentUrl);    
        await this.dashboard.isVisible();
        console.log('✅ Dashboard link is visible'); 
        await this.page.waitForTimeout(2000);
        await this.dashboard.click();
        console.log('Clicked on Dashboard link');
                
    }
}
