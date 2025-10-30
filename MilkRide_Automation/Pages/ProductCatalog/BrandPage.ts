import { Page,Locator } from "@playwright/test";
export class BrandPage {
    readonly page:Page
    readonly brandheader:Locator
    readonly addbrandbutton:Locator
    constructor(page:Page){
        this.page=page
        this.brandheader=page.locator(`(//h1[contains(text(),'Brand')])[1]`)
        this.addbrandbutton=page.locator(`(//a[normalize-space()='Add brand'])[1]`)
    }
    async verifyBrandPage(){
        const headerText = await this.brandheader.textContent();
        console.log(`📝 Header text: ${headerText}`);
         const currentUrl= this.page.url();
        console.log('🌐 Current URL is: ' + currentUrl);  
        await this.addbrandbutton.isVisible();
        console.log("Add Brand button is visible");
        
    }
}