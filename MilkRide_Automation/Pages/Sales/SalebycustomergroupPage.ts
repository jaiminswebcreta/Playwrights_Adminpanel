import { Page,Locator } from "@playwright/test";
export class salebycustomergroupPage{
    readonly page:Page
    readonly salebycustomergrouptabHeader:Locator
    readonly dashboard :Locator
    constructor(page:Page){
        this.page=page;
        this.salebycustomergrouptabHeader=page.locator(`(//h1[normalize-space()='Sales by Customer Group'])[1]`);
        this.dashboard=page.locator(`(//span[normalize-space()='Dashboard'])[1]`);
    }
    async verifysalebycustomergrouptabPage(){
        await this.salebycustomergrouptabHeader.isVisible();
        console.log('✅ Sales by Customer Group Page is visible');
        const headerText = await this.salebycustomergrouptabHeader.textContent();
        console.log(`📝 Header text: ${headerText}`);   
        const currentUrl= this.page.url();
        console.log('🌐 Current URL is: ' + currentUrl);
       
        await this.dashboard.waitFor({ state: 'visible', timeout: 9000 });
        await this.dashboard.click();
        console.log('Clicked on Dashboard Tab');  
    
    }
}