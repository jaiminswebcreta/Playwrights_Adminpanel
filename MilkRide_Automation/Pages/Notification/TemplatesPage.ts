import { Page,Locator } from "@playwright/test";
export class TemplatesPage{
    
    readonly page:Page
    readonly templatesHeader:Locator
    readonly createTemplateButton:Locator
    readonly dashboardtab:Locator

    constructor(page:Page){
        this.page=page;
        this.templatesHeader=page.locator(`(//h1[normalize-space()='Notification Templates List'])[1]`);
        this.createTemplateButton=page.locator(`(//a[normalize-space()='Add Templates'])[1]`);
        this.dashboardtab=page.locator(`(//span[normalize-space()='Dashboard'])[1]`);
    }
    async verifyTemplatesPage(){
        try {
        const currentUrl = this.page.url();
        console.log('🌐 Current URL is: ' + currentUrl);
        await this.templatesHeader.isVisible();
        console.log('Notification Templates List Page is visible');
        const headerText = await this.templatesHeader.textContent();
        console.log('Header is: ' + headerText);
        await this.createTemplateButton.isVisible();
        console.log('Add Templates Button is visible on Notification Templates List Page');
        await this.dashboardtab.click();
        console.log('Navigated back to Dashboard from Templates Page');
        await this.page.waitForLoadState('networkidle');
    }
    catch (error) {
        console.error('❌ Error in verifying Templates Page:', error);
    }
    }
}