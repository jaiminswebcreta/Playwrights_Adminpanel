import { Page,Locator } from "@playwright/test";
export class ProductsPage {
    readonly page:Page
    readonly productheader:Locator
    readonly addproductbutton:Locator
    constructor(page:Page){
        this.page=page
        this.productheader=page.locator(`(//h1[contains(text(),'Product')])[1]`)
        this.addproductbutton=page.locator(`(//a[normalize-space()='Add product'])[1]`)
    }
    async verifyProductsPage(){
        const headerText = await this.productheader.textContent();
        console.log(`📝 Header text: ${headerText}`);
         const currentUrl= this.page.url();
        console.log('🌐 Current URL is: ' + currentUrl);  
        await this.addproductbutton.isVisible();
        console.log("Add Product button is visible");
        
    }
}