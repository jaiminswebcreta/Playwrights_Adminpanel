import { Page, Locator } from "@playwright/test";
export class AreaPage {
    readonly page:Page
    readonly Areaheader:Locator
    readonly AddAreabtn:Locator
    constructor(page:Page){
        this.page=page
        this.Areaheader=page.locator(`(//h1[contains(text(),'Areas')])[1]`)
        this.AddAreabtn=page.locator(`(//a[normalize-space()='Add Area'])[1]`)
    }
    async verifyAreaPage(){
         const currentUrl= this.page.url();
        console.log('🌐 Current URL is: ' + currentUrl);  
        await this.Areaheader.isVisible();
        console.log('Area header is visible');
        await this.AddAreabtn.isVisible();
        console.log('Add Area button is visible')
    }
    
}