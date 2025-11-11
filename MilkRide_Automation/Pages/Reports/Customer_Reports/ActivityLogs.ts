import { Page, Locator } from "@playwright/test";
export class ActivityLogsPage {
    readonly page:Page
    readonly ActivityLogsheader:Locator
    readonly ActivityLogsBackbutton:Locator
    constructor(page:Page){
        this.page=page
        this.ActivityLogsheader=page.locator(`(//h1[normalize-space()='Activity List'])[1]`)
        this.ActivityLogsBackbutton=page.locator(`(//a[normalize-space()='Back'])[1]`)
    }
    async VerifyActivityLogsReportPage(){
         const currentUrl= this.page.url();
        console.log('🌐 Current URL is: ' + currentUrl);  
        await this.ActivityLogsheader.isVisible();
        console.log('ActivityLogs header is visible');
        await this.ActivityLogsBackbutton.isVisible();
        console.log('Back button is visible')
        await this.ActivityLogsBackbutton.click();
        console.log(`Click on Back Button`);
    }
    
}