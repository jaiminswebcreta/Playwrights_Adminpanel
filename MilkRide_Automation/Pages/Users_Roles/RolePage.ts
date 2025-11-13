import { Page, Locator } from "@playwright/test";
export class RolePage {
    readonly page:Page
    readonly RolePageheader:Locator
    // readonly AgentPageBackbutton:Locator
    constructor(page:Page){
        this.page=page
        this.RolePageheader=page.locator(`(//h1[contains(text(),'Roles')])[1]`)
        // this.AgentPageBackbutton=page.locator(`(//a[normalize-space()='Back'])[1]`)
    }
    async VerifyRolePage(){
         const currentUrl= this.page.url();
        console.log('🌐 Current URL is: ' + currentUrl);  
        await this.RolePageheader.isVisible();
        console.log('RolePage header is visible');
        // await this.AgentPageBackbutton.isVisible();
        // console.log('Back button is visible')
        // await this.AgentPageBackbutton.click();
        // console.log(`Click on Back Button`);        

    }
    
}