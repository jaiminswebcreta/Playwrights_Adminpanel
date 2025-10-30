import { Page,Locator } from "@playwright/test";
export class CallLogsPage {
    readonly page:Page
    readonly calllogheader:Locator
    constructor(page:Page){
        this.page=page
        this.calllogheader=page.locator(`(//h1[normalize-space()='Call Logs'])[1]`)
    }
    async verifyCallLogPage(){
        const headerText = await this.calllogheader.textContent();
        console.log(`📝 Header text: ${headerText}`);
         const currentUrl= this.page.url();
        console.log('🌐 Current URL is: ' + currentUrl);   
    }

}