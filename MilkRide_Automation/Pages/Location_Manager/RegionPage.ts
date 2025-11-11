import { Page, Locator } from "@playwright/test";
export class RegionPage {
    readonly page:Page
    readonly Regionheader:Locator
    readonly Addregionbtn:Locator
    constructor(page:Page){
        this.page=page
        this.Regionheader=page.locator(`(//h1[contains(text(),'Regions')])[1]`)
        this.Addregionbtn=page.locator(`(//a[normalize-space()='Add Region'])[1]`)
    }
    async verifyRegionPage(){
         const currentUrl= this.page.url();
        console.log('🌐 Current URL is: ' + currentUrl);  
        await this.Regionheader.isVisible();
        console.log('Regin header is visible');
        await this.Addregionbtn.isVisible();
        console.log('Add region button is visiable')
    }
    
}