import { Page,Locator} from "@playwright/test";
export class Settings2Page {
    readonly page:Page
    readonly settingsheader:Locator
    constructor(page:Page){
        this.page=page
        this.settingsheader=page.locator(`(//h1[normalize-space()='Payment Modes'])[1]`)
    }
    async verifySettingsPage(){
        const headerText = await this.settingsheader.textContent();
        console.log(`📝 Header text: ${headerText}`);
         const currentUrl= this.page.url();
        console.log('🌐 Current URL is: ' + currentUrl);  
    }

}