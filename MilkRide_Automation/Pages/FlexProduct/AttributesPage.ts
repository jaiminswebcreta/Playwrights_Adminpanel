import { Page,Locator } from "@playwright/test";    
export class AttributesPage{
     readonly page:Page;
     readonly attributeheder :Locator;
     readonly addAttrubutebtn:Locator;
     constructor(page:Page){
        this.page=page;
        this.attributeheder=page.locator(`(//h1[normalize-space()='Attribute List'])[1]`);
        this.addAttrubutebtn=page.locator(`(//a[normalize-space()='Add Attribute'])[1]`);

     }

        async verifyAttributePage(){
        const headerText = await this.attributeheder.textContent();
        console.log(`📝 Header text: ${headerText}`);
         const currentUrl= this.page.url();
        console.log('🌐 Current URL is: ' + currentUrl);  
        await this.attributeheder.isVisible();
        console.log("Add Category button is visible");

    }
    
}



