import { Page,Locator } from "@playwright/test";
export class AllComplaintsPage {
    readonly page:Page
    readonly allcomplaintsheader:Locator
    constructor(page:Page){
        this.page=page
        this.allcomplaintsheader=page.locator(`(//h1[normalize-space()='Complaint Management'])[1]`)
    }
    async verifyAllComplaintsPage(){
        const headerText = await this.allcomplaintsheader.textContent();
        console.log(`📝 Header text: ${headerText}`);
         const currentUrl= this.page.url();
        console.log('🌐 Current URL is: ' + currentUrl);
    }
    
}