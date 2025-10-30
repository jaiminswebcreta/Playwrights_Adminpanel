import { Page,Locator   } from "@playwright/test";
export class BannerPage{
    readonly page:Page
    readonly Bannerheadingtext:Locator;
    readonly AddBannerbtn : Locator
    constructor(page:Page){
        this.page=page;
        this.Bannerheadingtext=page.locator( `(//h1[contains(text(),'Banner')])[1]`)
        this.AddBannerbtn=page.locator(`(//a[normalize-space()='Add banner'])[1]`)
    }
    async verifytoBannerPage(){
       const headerText = await this.Bannerheadingtext.textContent();
        console.log(`📝 Header text: ${headerText}`);
         const currentUrl= this.page.url();
        console.log('🌐 Current URL is: ' + currentUrl);  
        await this.AddBannerbtn.isVisible();
        console.log(`Add banner button is visible`)
}
}