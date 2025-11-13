import { Page, Locator } from "@playwright/test";
export class UserPage {
    readonly page:Page
    readonly UserPageheader:Locator;
    // readonly UserPageBackbutton:Locator/
    constructor(page:Page){
        this.page=page
        this.UserPageheader=page.locator(`(//h1[contains(text(),'Users')])[1]`)
        // this.UserPageBackbutton=page.locator(`(//a[normalize-space()='Back'])[1]`)
    }
    async VerifyUserPage(){
         const currentUrl= this.page.url();
        console.log('🌐 Current URL is: ' + currentUrl);  
        await this.UserPageheader.isVisible();
        console.log('UserPage header is visible');

        
        // await this.UserPageBackbutton.isVisible();
        // console.log('Back button is visible')
        // await this.UserPageBackbutton.click();
        // console.log(`Click on Back Button`);        

    }
    
}