import { Page, Locator } from '@playwright/test';
export class SupplierPage{
    readonly page:Page
    readonly supplierHeader:Locator;
    readonly addSupplierButton:Locator
    readonly purchaseinventoryTab:Locator

    constructor(page:Page){
        this.page=page;
        this.supplierHeader=page.locator(`(//h1[normalize-space()='Supplier List'])[1]`);
        this.addSupplierButton=page.locator(`//a[normalize-space()='Add Supplier']`);
        this.purchaseinventoryTab=page.locator(`(//span[normalize-space()='Purchase Inventory'])[1]`);
    }
    async verifysupplierPage(){
        const currentUrl = this.page.url();
        console.log('🌐 Current URL is: ' + currentUrl);
        await this.supplierHeader.isVisible();
        await this.supplierHeader.textContent();
        console.log('Header is: ' + await this.supplierHeader.textContent());
        await this.addSupplierButton.isVisible();
        console.log('Add Supplier Button is visible');
        await this.purchaseinventoryTab.isVisible();
        await this.purchaseinventoryTab.click();
        console.log('Clicked on Purchase Inventory Tab');
        await this.page.waitForLoadState('networkidle');
         
     }  
}