import { Page,Locator } from "@playwright/test";
export class FlwexsubscriptionPage {
    readonly page:Page
    readonly flexsubscriptionHeader:Locator
    readonly addNewFlexsubscriptionButton:Locator
    readonly customerMangement:Locator
    readonly ordersTab:Locator

    constructor(page:Page){
        this.page=page;
        this.flexsubscriptionHeader=page.locator(`(//h1[contains(text(),'All')])[1]`);
        this.addNewFlexsubscriptionButton=page.locator(`(//button[normalize-space()='Add Plan Subscription'])[1]`);
        this.customerMangement=page.locator(`(//span[contains(text(),'Customer Management')])[1]`);
        this.ordersTab=page.locator(`(//span[normalize-space()='Orders'])[1]`);

    }
    async verifyFlexsubscriptionPage(){
        try {
        await this.flexsubscriptionHeader.isVisible();
        console.log('✅ Flex Subscription Page is visible');
        const headerText = await this.flexsubscriptionHeader.textContent();
        console.log(`📝 Header text: ${headerText}`);   
        const currentUrl= this.page.url();
        console.log('🌐 Current URL is: ' + currentUrl) ;
        await this.addNewFlexsubscriptionButton.isVisible();
        console.log('✅ Add New Flex Subscription button is visible'); 
        await this.customerMangement.click();
        console.log('clicked customer management')
        await this.ordersTab.isVisible();
        
        console.log('✅ Orders Tab is visible');
      
        await Promise.all([
            this.page.waitForLoadState('domcontentloaded'),
            this.ordersTab.click(),
        ])
        console.log('Clicked on Orders Tab');
        await this.page.waitForLoadState('networkidle');          
    }
    catch (error) {
        console.error('❌ Error in verifying Flex Subscription Page:', error);
    }
    }
}
