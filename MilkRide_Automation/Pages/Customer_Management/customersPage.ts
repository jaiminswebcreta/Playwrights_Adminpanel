import { Page,Locator } from "@playwright/test";
export class customersPage{
    readonly page:Page
    readonly customersHeader:Locator
    readonly addcustomer : Locator
    readonly customeraddressrequest:Locator

    constructor(page:Page){
        this.page=page;
        this.customersHeader=page.locator(`(//span[@class='menu-title'][normalize-space()='Customers'])[1]`);
        this.addcustomer=page.locator(`(//a[normalize-space()='Add Customer'])[1]`);
        this.customeraddressrequest=page.locator(`(//span[normalize-space()='Customer Address Request'])[1]`);
    }
    async verifyCustomersPage(){
        await this.customersHeader.isVisible();
         console.log('✅ Customers Page is visible');
        const headerText = await this.customersHeader.textContent();
        console.log(`📝 Header text: ${headerText}`);
        
        const currentUrl= this.page.url();
        console.log('🌐 Current URL is: ' + currentUrl);
        await this.addcustomer.isVisible();
        console.log('✅ Add Customer button is visible');
        await this.customeraddressrequest.isVisible();
        console.log('✅ Customer Address Request option is visible'); 
        await this.customeraddressrequest.click();
        console.log('Clicked on Customer Address Request');
        await this.page.waitForLoadState('networkidle');     
    }
}