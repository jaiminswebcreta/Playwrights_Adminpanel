import { Page,Locator } from "@playwright/test";
export class SalesDashboardPage{
    readonly page:Page
    readonly salesDashboardHeader:Locator
    readonly productanalysistab :Locator
    constructor(page:Page){
        this.page=page;
        this.salesDashboardHeader=page.locator(`(//h1[normalize-space()='Sales Dashboard'])[1]`);
        this.productanalysistab=page.locator(`(//span[normalize-space()='Product Analysis'])[1]`);
    }
    async verifySalesDashboardPage(){
        try {
        await this.salesDashboardHeader.isVisible();
        console.log('✅ Sales Dashboard Page is visible');
        const headerText = await this.salesDashboardHeader.textContent();
        console.log(`📝 Header text: ${headerText}`);
        const currentUrl= this.page.url();
        console.log('🌐 Current URL is: ' + currentUrl);
        await this.productanalysistab.isVisible();
        console.log('✅ Product Analysis Tab is visible');
        await this.page.waitForTimeout(2000);
        await this.productanalysistab.click();
        console.log('Clicked on Product Analysis Tab');                
    }
    catch (error) {
        console.error('❌ Error in verifySalesDashboardPage:', error);
    }
  }
}