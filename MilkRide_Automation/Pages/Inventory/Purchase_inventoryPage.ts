import { Page,Locator} from "@playwright/test";
export class Purchase_inventoryPage{
    readonly page:Page
    readonly purchaseinventoryHeader:Locator
    readonly addPurchaseinventoryButton:Locator
    readonly Batchstab:Locator
    
    constructor(page:Page){
        this.page=page;
        this.purchaseinventoryHeader=page.locator(`(//h1[normalize-space()='Purchase List'])[1]`);
        this.addPurchaseinventoryButton=page.locator(`(//a[normalize-space()='Add Purchase'])[1]`);
        this.Batchstab=page.locator(`(//span[normalize-space()='Batches'])[1]`);
    }
    async verifyPurchaseinventoryPage(){
        const currentUrl = this.page.url();
        console.log('🌐 Current URL is: ' + currentUrl);
        await this.purchaseinventoryHeader.isVisible();
        await this.purchaseinventoryHeader.textContent();
        console.log('Header is: ' + await this.purchaseinventoryHeader.textContent());
        await this.addPurchaseinventoryButton.isVisible();
        console.log('Add Purchase Inventory Button is visible');
        await this.Batchstab.isVisible();
        await this.Batchstab.click();
        console.log('Clicked on Batches Tab');
        await this.page.waitForLoadState('networkidle');
         
     }
}