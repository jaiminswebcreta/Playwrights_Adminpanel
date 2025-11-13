import { Page, Locator } from "@playwright/test";
export class PermissionPage {
    readonly page:Page
    readonly PermissionPageheader:Locator
    // readonly AgentPageBackbutton:Locator
    constructor(page:Page){
        this.page=page
        this.PermissionPageheader=page.locator(`(//h1[normalize-space()='Permissions List'])[1]`)
        // this.AgentPageBackbutton=page.locator(`(//a[normalize-space()='Back'])[1]`)
    }
    async VerifyPermissionPage(){
         const currentUrl= this.page.url();
        console.log('🌐 Current URL is: ' + currentUrl);  
        await this.PermissionPageheader.isVisible();
        console.log('PermissionPage header is visible');
        // await this.AgentPageBackbutton.isVisible();
        // console.log('Back button is visible')
        // await this.AgentPageBackbutton.click();
        // console.log(`Click on Back Button`);        

    }
    
}