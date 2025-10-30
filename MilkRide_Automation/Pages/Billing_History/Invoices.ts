import { Page,Locator } from "@playwright/test";
export class invoicesPage{    
    readonly page:Page
    readonly invoiceHeader:Locator
    readonly dashboard: Locator;

    constructor(page:Page){
        this.page=page;
        this.dashboard=page.locator(`(//span[normalize-space()='Dashboard'])[1]`);
        this.invoiceHeader=page.locator(`(//h2[normalize-space()='Invoices'])[1]`);
    }

    async verifyInvoicesPage(){
        try {
        await this.invoiceHeader.isVisible();
         console.log('✅ Invoices Page is visible');
        const currentUrl= this.page.url();
        console.log('🌐 Current URL is: ' + currentUrl);
        await this.dashboard.isVisible();
        console.log('✅ Dashboard is visible');
        await this.dashboard.click();
        console.log('Clicked on Dashboard');       
        await this.page.waitForLoadState('networkidle');
    }
    catch (error) {
        console.error('❌ Error in verifying Invoices Page:', error);
    }
    }
}