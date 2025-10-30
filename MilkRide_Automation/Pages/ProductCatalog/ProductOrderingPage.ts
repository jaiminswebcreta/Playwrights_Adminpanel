import { Page,Locator } from "@playwright/test";
export class ProductOrderingPage     {
    readonly page:Page
    readonly productorderingheader:Locator
   
    constructor(page:Page){
        this.page=page
        this.productorderingheader=page.locator(`(//h1[normalize-space()='Product Ordering'])[1]`)
      
    }
    async verifyProductOrderingPage(){
        const headerText = await this.productorderingheader.textContent();
        console.log(`📝 Header text: ${headerText}`);
         const currentUrl= this.page.url();
        console.log('🌐 Current URL is: ' + currentUrl);  
       

    }
    
    
}