import { Page, Locator } from "@playwright/test";
export class RoutePage {
    readonly page:Page
    readonly Routeheader:Locator
    readonly AddRoutebtn:Locator
    constructor(page:Page){
        this.page=page
        this.Routeheader=page.locator(`(//h1[contains(text(),'Routes')])[1]`)
        this.AddRoutebtn=page.locator(`(//a[normalize-space()='Add Route'])[1]`)
    }
    async verifyRoutePage(){
         const currentUrl= this.page.url();
        console.log('🌐 Current URL is: ' + currentUrl);  
        await this.Routeheader.isVisible();
        console.log('Route header is visible');
        await this.AddRoutebtn.isVisible();
        console.log('Add Route button is visible')
    }
    
}