import { Page,Locator } from "@playwright/test";
export class SubscriptionsPage{
    readonly page:Page
    readonly subscriptionsHeader:Locator
    readonly addsubscription: Locator
    readonly Flexsubscription:Locator
    constructor(page:Page){
        this.page=page;
        this.subscriptionsHeader=page.locator(`(//h1[normalize-space()='All Customer Subscriptions'])[1]`);
        this.addsubscription=page.locator(`(//button[normalize-space()='Add Subscription'])[1]`);
        this.Flexsubscription=page.locator(`//span[normalize-space()='FlexSubscriptions']`);
    }
    async verifySubscriptionsPage(){
        await this.subscriptionsHeader.isVisible();
        console.log('✅ Subscriptions Page is visible');
        const headerText = await this.subscriptionsHeader.textContent();
        console.log(`📝 Header text: ${headerText}`);
        const currentUrl= this.page.url();
        console.log('🌐 Current URL is: ' + currentUrl);
        await this.addsubscription.isVisible();
        console.log('✅ Add Subscription button is visible'); 
        await this.Flexsubscription.isVisible();
        console.log('✅ Flex Subscription option is visible'); 
        await this.Flexsubscription.click();
        console.log('Clicked on Flex Subscription option');
        await this.page.waitForLoadState('networkidle');
    }
}
        