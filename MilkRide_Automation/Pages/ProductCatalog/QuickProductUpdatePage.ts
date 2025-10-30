import {Page,Locator} from "@playwright/test";
export class QuickProductUpdatePage {
    readonly page:Page
    readonly quickproductupdateheader:Locator
    constructor(page:Page){
        this.page=page
        this.quickproductupdateheader=page.locator(`(//h1[contains(text(),'Product')])[1]`)
    }
    async verifyQuickProductUpdatePage(){
        const headerText = await this.quickproductupdateheader.textContent();
        console.log(`📝 Header text: ${headerText}`);
         const currentUrl= this.page.url();
        console.log('🌐 Current URL is: ' + currentUrl);  
    }
    
}