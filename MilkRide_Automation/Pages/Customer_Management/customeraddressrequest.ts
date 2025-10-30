import { Page,Locator } from "@playwright/test";
export class customeraddressrequest{
    readonly page:Page
    readonly customeraddressrequestHeader:Locator
    readonly customermanagement: Locator;
    readonly subscriptionsTab:Locator

    constructor(page:Page){
        this.page=page;
        this.customeraddressrequestHeader=page.locator(`(//h1[normalize-space()='Address Change Requests'])[1]`);
        this.subscriptionsTab=page.locator(`//span[normalize-space()='Subscriptions']`);
        this.customermanagement = page.locator(`(//span[contains(text(),'Customer Management')])[1]`);

    }
    async verifyCustomerAddressRequestPage(){
        try {
        await this.customeraddressrequestHeader.isVisible();
        console.log('✅ Customer Address Request Page is visible');
        const headerText = await this.customeraddressrequestHeader.textContent();
        console.log(`📝 Header text: ${headerText}`);
        const currentUrl= this.page.url();
        console.log('🌐 Current URL is: ' + currentUrl) ;
        await this.customermanagement.click();
        console.log('clicked customer management')
        await this.subscriptionsTab.isVisible();

        console.log('✅ Subscriptions Tab is visible'); 
        await this.subscriptionsTab.click();
        console.log('Clicked on Subscriptions Tab');
        await this.page.waitForLoadState('networkidle');          
    }
    catch (error) {
        console.error('❌ Error in verifying Customer Address Request Page:', error);
    }
    }
}
