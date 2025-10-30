import { Page,Locator } from "@playwright/test";
export class AbandonedCardPage {
    readonly page:Page
    readonly abandonedcardheader:Locator
    constructor(page:Page){
        this.page=page
        this.abandonedcardheader=page.locator(`(//h1[normalize-space()='Abandoned Carts'])[1]`)
    }
    async verifyAbandonedCardPage(){
        const headerText = await this.abandonedcardheader.textContent();
        console.log(`📝 Header text: ${headerText}`);
         const currentUrl= this.page.url();
        console.log('🌐 Current URL is: ' + currentUrl);   
    }

}