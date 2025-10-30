import { Page,Locator } from "@playwright/test";    
export class WorkingDayPage{
     readonly page:Page
     readonly Workingdayheader :Locator
    
     constructor(page:Page){
        this.page=page
        this.Workingdayheader=page.locator(`(//h1[normalize-space()='Working Days'])[1]`)
       

     }

        async verifyWorkingDayPage(){
        const headerText = await this.Workingdayheader.textContent();
        console.log(`📝 Header text: ${headerText}`);
         const currentUrl= this.page.url();
        console.log('🌐 Current URL is: ' + currentUrl);  
       

    }
}