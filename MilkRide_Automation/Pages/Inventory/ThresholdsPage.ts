import { Page, Locator } from "@playwright/test";
export class ThresholdsPage{
    readonly page:Page
    readonly thresholdsHeader:Locator
    readonly SettingsTab:Locator

    constructor(page:Page){
        this.page=page;
        this.thresholdsHeader=page.locator(`(//h1[normalize-space()='Inventory Threshold Settings'])[1]`);
        this.SettingsTab=page.locator(`(//span[@class='menu-title'][normalize-space()='Settings'])[1]`);

    }
    async verifyThresholdsPage(){
        try {
        const currentUrl = this.page.url();
        console.log('🌐 Current URL is: ' + currentUrl);
        await this.thresholdsHeader.isVisible();
        await this.thresholdsHeader.textContent();
        console.log('Header is: ' + await this.thresholdsHeader.textContent());
        await this.SettingsTab.isVisible();
        console.log('Settings Tab is visible');
        await this.SettingsTab.click();
        console.log('Clicked on Settings Tab');
        await this.page.waitForLoadState('networkidle');
    }
        catch (error) {
            console.error('❌ Error in verifying Thresholds Page:', error);
        }
    }
}
