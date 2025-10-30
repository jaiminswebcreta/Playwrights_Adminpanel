import { Page,Locator } from "@playwright/test";
export class SettingsPage{
    readonly page:Page
    readonly settingsHeader:Locator  
    readonly dashboardTab:Locator

    constructor(page:Page){
        this.page=page;
        this.settingsHeader=page.locator(`(//h1[normalize-space()='Inventory Threshold Settings'])[1]`);
        this.dashboardTab=page.locator(`(//span[normalize-space()='Dashboard'])[1]`);
    }
    async verifySettingsPage(){
        try {
        const currentUrl = this.page.url();
        console.log('🌐 Current URL is: ' + currentUrl);
        await this.settingsHeader.isVisible();
        await this.settingsHeader.textContent();
        console.log('Header is: ' + await this.settingsHeader.textContent());
        await this.dashboardTab.isVisible();
        await this.dashboardTab.click();
        console.log('Clicked on Dashboard Tab');
        await this.page.waitForLoadState('networkidle');
            
        }
        catch (error) {
            console.error('❌ Error in verifying Settings Page:', error);
        }
    }
}