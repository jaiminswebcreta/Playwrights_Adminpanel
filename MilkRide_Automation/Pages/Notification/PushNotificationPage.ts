import { Page, Locator } from "@playwright/test";
export class PushNotificationPage{
    
    readonly page:Page
    readonly pushNotificationHeader:Locator
    readonly NewNotificationButton:Locator
    readonly NewarrivalButton:Locator

    constructor(page:Page){
        this.page=page;
        this.pushNotificationHeader=page.locator(`(//h1[contains(text(),'Push')])[1]`);
        this.NewNotificationButton=page.locator(`(//a[normalize-space()='New Notification'])[1]`);
        this.NewarrivalButton=page.locator(`(//span[normalize-space()='New Arrival Products'])[1]`);
    }

    async verifyPushNotificationPage(){
        try {
        const currentUrl = this.page.url();
        console.log('🌐 Current URL is: ' + currentUrl);    
    
        await this.pushNotificationHeader.isVisible();
        console.log('Push Notification Page is visible');
        const headerText = await this.pushNotificationHeader.textContent();
        console.log('Header is: ' + headerText);

        await this.NewNotificationButton.isVisible();
        console.log('New Notification Button is visible on Push Notification Page');
        await this.NewarrivalButton.isVisible();
        await this.NewarrivalButton.click();
        
        console.log('Clicked on New Arrival Button');
        await this.page.waitForLoadState('networkidle');
    }
    catch (error) {
        console.error('❌ Error in verifying Push Notification Page:', error);
    }
    }
    
    }