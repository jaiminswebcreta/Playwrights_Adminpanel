import { Page, Locator } from "@playwright/test";
export class MyTicketPage {
    readonly page:Page
    readonly MyTicketPageheader:Locator;
    
    constructor(page:Page){
        this.page=page;
        this.MyTicketPageheader=page.locator(`(//h1[normalize-space()='Tickets List'])[1]`);
       
    }
    async VerifyMyTicketPage(){
         const currentUrl= this.page.url();
        console.log('🌐 Current URL is: ' + currentUrl);  
        await this.MyTicketPageheader.isVisible();
        console.log('MyTicketPage header is visible');
           

    }
    
}