import { Page,Locator,expect } from "@playwright/test";
export class HomePage   {
    readonly page:Page
    readonly Allproduct:Locator
    constructor(page:Page){
        this.page=page
        this.Allproduct=page.locator(`(//a[normalize-space()='All Products'])[1]`)
    }
    async navigateToAllProducts(){
        await this.Allproduct.click();
        console.log("🖱️ Navigated to All Products page");
    }
}