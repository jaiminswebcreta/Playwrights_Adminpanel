import { Page, Locator } from "@playwright/test";
export class MyAccountPage {
    readonly page:Page
    readonly MyAccountPageheader:Locator
    
    constructor(page:Page){
        this.page=page
        this.MyAccountPageheader=page.locator(`(//h1[normalize-space()='Account Settings'])[1]`)
       
    }
    async VerifyMyAccountPage(){
         const currentUrl= this.page.url();
        console.log('🌐 Current URL is: ' + currentUrl);  
        await this.MyAccountPageheader.isVisible();
        console.log('RolePage header is visible');
           

    }
    
}