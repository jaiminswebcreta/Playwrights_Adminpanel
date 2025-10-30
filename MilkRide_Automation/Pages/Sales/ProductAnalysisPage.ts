import { Page,Locator } from "@playwright/test";
export class ProductAnalysisPage{
    readonly page:Page
    readonly productanalysisHeader:Locator
    readonly MostSellingpackages :Locator
    constructor(page:Page){
        this.page=page;
        this.productanalysisHeader=page.locator(`(//h1[normalize-space()='Package & Customer Analysis'])[1]`);
        this.MostSellingpackages=page.locator(`(//span[normalize-space()='Most Selling Packages'])[1]`);
    }
    async verifyProductAnalysisPage(){
        try {
        await this.productanalysisHeader.isVisible();
        console.log('✅ Product Analysis Page is visible');
        const headerText = await this.productanalysisHeader.textContent();
        console.log(`📝 Header text: ${headerText}`);
        const currentUrl= this.page.url();
        console.log('🌐 Current URL is: ' + currentUrl);
        await this.MostSellingpackages.isVisible();
        console.log('✅ Most Selling Packages Tab is visible'); 
        await this.page.waitForTimeout(2000);

        await this.MostSellingpackages.click();
        console.log('Clicked on Most Selling Packages Tab');                
    }
    catch (error) {
        console.error('❌ Error in verifying Product Analysis Page:', error);
    }
    }
}