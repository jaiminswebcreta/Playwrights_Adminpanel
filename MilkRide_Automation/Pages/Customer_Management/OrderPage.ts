import { Page,Locator } from "@playwright/test";
export class orderPage {
    readonly page:Page
    readonly orderHeader:Locator
    readonly addorderbutton: Locator
    // readonly customerMangement:Locator
    readonly CustomerinvoiceTab:Locator
    constructor(page:Page){
        this.page=page;
        this.orderHeader=page.locator(`(//h1[normalize-space()='All Customers Orders'])[1]`);
        this.addorderbutton=page.locator(`(//button[normalize-space()='Add New Order'])[1]`);
        // this.customerMangement=page.locator(`(//span[contains(text(),'Customer Management')])[1]`);
        this.CustomerinvoiceTab=page.locator(`(//span[normalize-space()='Customer Invoices'])[1]`);
    }
    async verifyOrderPage(){
        try {
        await this.orderHeader.isVisible();
        console.log('✅ Order Page is visible');
        const headerText = await this.orderHeader.textContent();
        console.log(`📝 Header text: ${headerText}`);
        const currentUrl= this.page.url();
        console.log('🌐 Current URL is: ' + currentUrl);
        await this.addorderbutton.isVisible();
        console.log('✅ Add Order button is visible'); 
        // await this.customerMangement.click();
        // console.log('clicked customer management')
        await this.CustomerinvoiceTab.isVisible();
        
        console.log('✅ Customer Invoice Tab is visible');
        await this.CustomerinvoiceTab.click();
        console.log('Clicked on Customer Invoice Tab');
                  
    }
    catch (error) {
        console.error('❌ Error in verifying Order Page:', error);
    }
    }
}
