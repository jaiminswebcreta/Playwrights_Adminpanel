import { Page, Locator } from "@playwright/test";
export class FollowupsPage {
    readonly page:Page
    readonly followupsheader:Locator
    constructor(page:Page){
        this.page=page
        this.followupsheader=page.locator(`(//h1[normalize-space()='Follow-ups'])[1]`)
    }
    async verifyFollowupsPage(){
         const currentUrl= this.page.url();
        console.log('🌐 Current URL is: ' + currentUrl);  
        await this.followupsheader.isVisible();
        console.log('Follow-ups header is visible');
    }
    
}