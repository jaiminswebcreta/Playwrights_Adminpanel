import { Page, Locator } from "@playwright/test";
export class LocationPage {
    readonly page:Page
    readonly Locationheader:Locator
    readonly AddLocationbtn:Locator
    constructor(page:Page){
        this.page=page
        this.Locationheader=page.locator(`(//h1[normalize-space()='Locations List'])[1]`)
        this.AddLocationbtn=page.locator(`(//a[normalize-space()='Add Location'])[1]`)
    }
    async verifyLocationPage(){
         const currentUrl= this.page.url();
        console.log('🌐 Current URL is: ' + currentUrl);  
        await this.Locationheader.isVisible();
        console.log('Location header is visible');
        await this.AddLocationbtn.isVisible();
        console.log('Add Location button is visible')
    }
    
}