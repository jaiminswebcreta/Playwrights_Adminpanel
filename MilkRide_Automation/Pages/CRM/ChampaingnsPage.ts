import { Page,Locator } from "@playwright/test";
export class ChampaingnsPage {
    readonly page:Page
    readonly headerchampaingns:Locator
    readonly addchampaingnsbtn:Locator
    constructor(page:Page){
        this.page=page
        this.headerchampaingns=page.locator(`(//h1[normalize-space()='Campaigns'])[1]`)
        this.addchampaingnsbtn=page.locator(`(//a[normalize-space()='Add New Campaign'])[1]`)
    }
    async verifyChampaingnsPage(){
        const headerText = await this.headerchampaingns.textContent();
        console.log(`📝 Header text: ${headerText}`);
         const currentUrl= this.page.url();
        console.log('🌐 Current URL is: ' + currentUrl);
        await this.addchampaingnsbtn.isVisible();
        console.log('Add Campaign button is visible'); 

    }
    }