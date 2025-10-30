import { Page,Locator } from "@playwright/test";    
export class PlanSlotPage{
     readonly page:Page
     readonly PlanSlotheader :Locator
    
     constructor(page:Page){
        this.page=page
        this.PlanSlotheader=page.locator(`(//h1[normalize-space()='Plan Slots List'])[1]`)
       

     }

        async verifyPlanSlotPage(){
        const headerText = await this.PlanSlotheader.textContent();
        console.log(`📝 Header text: ${headerText}`);
         const currentUrl= this.page.url();
        console.log('🌐 Current URL is: ' + currentUrl);  
       

    }
}