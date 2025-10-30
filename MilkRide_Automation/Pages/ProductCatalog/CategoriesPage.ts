import { Page,Locator } from "@playwright/test";
export class CategoriesPage {
    readonly page:Page
    readonly categoryheader:Locator
    readonly addcategorybutton:Locator
    constructor(page:Page){
        this.page=page
        this.categoryheader=page.locator(`(//h1[normalize-space()='Categories List'])[1]`)
        this.addcategorybutton=page.locator(`(//a[normalize-space()='Add Category'])[1]`)
    }
    async verifyCategoryPage(){
        const headerText = await this.categoryheader.textContent();
        console.log(`📝 Header text: ${headerText}`);
         const currentUrl= this.page.url();
        console.log('🌐 Current URL is: ' + currentUrl);  
        await this.addcategorybutton.isVisible();
        console.log("Add Category button is visible");

    }
    
    
}