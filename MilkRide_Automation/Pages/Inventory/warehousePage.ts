import { Locator,Page } from "@playwright/test";
export class WarehousePage{

    readonly page:Page
    readonly warehouseHeader:Locator;
    readonly addWarehouseButton:Locator
    readonly SuppliersTab:Locator

    constructor(page:Page){
        this.page=page;
        this.warehouseHeader=page.locator(`(//h1[normalize-space()='Warehouse List'])[1]`);
        this.addWarehouseButton=page.locator(`(//a[normalize-space()='Add Warehouse'])[1]`);
        this.SuppliersTab=page.locator(`(//span[normalize-space()='Supplier'])[1]`);
    }
    async verifyWarehousePage(){
        try {
        const currentUrl = this.page.url();
        console.log('🌐 Current URL is: ' + currentUrl);
        await this.warehouseHeader.isVisible();
        await this.warehouseHeader.textContent();
        console.log('Header is: ' + await this.warehouseHeader.textContent());
        await this.addWarehouseButton.isVisible();
        console.log('Add Warehouse Button is visible');
        await this.SuppliersTab.isVisible();
        await this.SuppliersTab.click();
        console.log('Clicked on Suppliers Tab');
        await this.page.waitForLoadState('networkidle');
       
    }
        catch (error) {
            console.error('❌ Error in verifying Warehouse Page:', error);
        }
    }
}