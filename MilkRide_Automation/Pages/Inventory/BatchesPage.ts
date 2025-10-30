import { Page,Locator } from "@playwright/test";
export class BatchesPage{
    readonly page:Page
    readonly batchesHeader:Locator  
    readonly thresholdstab:Locator

    constructor(page:Page){
        this.page=page;
        this.batchesHeader=page.locator(`(//h1[normalize-space()='Batch List'])[1]`);
        this.thresholdstab=page.locator(`(//span[normalize-space()='Thresholds'])[1]`);
    }
    async verifyBatchesPage(){
        try {
        const currentUrl = this.page.url();
        console.log('🌐 Current URL is: ' + currentUrl);
        await this.batchesHeader.isVisible();
        await this.batchesHeader.textContent();
        console.log('Header is: ' + await this.batchesHeader.textContent());
        await this.thresholdstab.isVisible();
        await this.thresholdstab.click();
        console.log('Clicked on Thresholds Tab');
        await this.page.waitForLoadState('networkidle');
            
        }
        catch (error) {
            console.error('❌ Error in verifying Batches Page:', error);
        }
    }
}
