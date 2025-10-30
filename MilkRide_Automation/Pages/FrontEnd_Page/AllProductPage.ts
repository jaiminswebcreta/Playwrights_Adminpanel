import { Page,Locator,expect } from "@playwright/test";
export class AllProductPage  {
    readonly page:Page
    readonly FirstProduct:Locator

    constructor(page:Page){
        this.page=page
        this.FirstProduct=page.locator(`(//h5[@class='product-name'])[1]`)
    }

async selectFirstProduct(){
    await this.FirstProduct.click();
}
}   