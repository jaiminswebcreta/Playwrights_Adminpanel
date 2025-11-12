import { Page, Locator } from "@playwright/test";
export class ImageProofReportPage {
    readonly page:Page
    readonly ImageProofReportPageheader:Locator
    readonly ImageProofReportPageBackbutton:Locator
    constructor(page:Page){
        this.page=page
        this.ImageProofReportPageheader=page.locator(`(//h1[normalize-space()='Image Proof List'])[1]`)
        this.ImageProofReportPageBackbutton=page.locator(`(//a[normalize-space()='Back'])[1]`)
    }
    async VerifyImageProofReportPage(){
         const currentUrl= this.page.url();
        console.log('🌐 Current URL is: ' + currentUrl);  
        await this.ImageProofReportPageheader.isVisible();
        console.log('ImageProofReportPage header is visible');
        await this.ImageProofReportPageBackbutton.isVisible();
        console.log('Back button is visible')
        await this.ImageProofReportPageBackbutton.click();
        console.log(`Click on Back Button`);
        

    }
    
}