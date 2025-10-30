import  {Page,  Locator} from "@playwright/test";
export class Follwups2Page {
    readonly page:Page
    readonly followups2header:Locator
    constructor(page:Page){
        this.page=page
        this.followups2header=page.locator(`(//h1[normalize-space()='Churn Follow-ups'])[1]`)
    }
    async verifyFollowups2Page(){
         const currentUrl= this.page.url();
        console.log('🌐 Current URL is: ' + currentUrl);  
        await this.followups2header.isVisible();
        console.log('Follow-ups header is visible');
    }


}