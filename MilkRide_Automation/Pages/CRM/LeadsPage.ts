import { Page,Locator } from "@playwright/test";
export class LeadsPage {
    readonly page:Page
    readonly leadHeader:Locator
    readonly addleadbtn  :Locator
    constructor(page:Page){
        this.page=page
        this.leadHeader=page.locator(`(//h1[normalize-space()='Leads'])[1]`)
        this.addleadbtn=page.locator(`(//h1[normalize-space()='Leads'])[1]`)
    }
    async verifyLeadPage(){
        const headerText = await this.leadHeader.textContent();
        console.log(`📝 Header text: ${headerText}`);
         const currentUrl= this.page.url();
        console.log('🌐 Current URL is: ' + currentUrl);
        await this.addleadbtn.isVisible();
        console.log('Add Lead button is visible'); 

    }
    }