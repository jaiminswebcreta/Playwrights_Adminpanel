import { Page, Locator } from "@playwright/test";
export class MyHolidayPage {
    readonly page:Page
    readonly MyHolidayPageheader:Locator
    
    constructor(page:Page){
        this.page=page
        this.MyHolidayPageheader=page.locator(`(//h1[normalize-space()='Holidays List'])[1]`)
       
    }
    async VerifyMyHolidayPage(){
         const currentUrl= this.page.url();
        console.log('🌐 Current URL is: ' + currentUrl);  
        await this.MyHolidayPageheader.isVisible();
        console.log('MyHolidayPage header is visible');
           

    }
    
}