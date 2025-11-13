import { Page, Locator } from "@playwright/test";
export class AgentPage {
    readonly page:Page
    readonly AgentPageheader:Locator
    // readonly AgentPageBackbutton:Locator
    constructor(page:Page){
        this.page=page
        this.AgentPageheader=page.locator(`(//h1[contains(text(),'Agents')])[1]`)
        // this.AgentPageBackbutton=page.locator(`(//a[normalize-space()='Back'])[1]`)
    }
    async VerifyAgentPage(){
         const currentUrl= this.page.url();
        console.log('🌐 Current URL is: ' + currentUrl);  
        await this.AgentPageheader.isVisible();
        console.log('AgentPage header is visible');
        // await this.AgentPageBackbutton.isVisible();
        // console.log('Back button is visible')
        // await this.AgentPageBackbutton.click();
        // console.log(`Click on Back Button`);        

    }
    
}