import { Page,Locator } from "@playwright/test";
export class CallLogs2Page {
    readonly page:Page
    readonly calllog2header:Locator
    constructor(page:Page){
        this.page=page
        this.calllog2header=page.locator(`(//h1[normalize-space()='Churn Call Logs'])[1]`)
    }
    async verifyCallLogs2Page(){
        const headerText = await this.calllog2header.textContent();
        console.log(`📝 Header text: ${headerText}`);
         const currentUrl= this.page.url();
        console.log('🌐 Current URL is: ' + currentUrl);   
    }
    
}