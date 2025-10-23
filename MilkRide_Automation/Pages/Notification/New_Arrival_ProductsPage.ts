import { Page, Locator } from "@playwright/test";
export class New_Aeeival_ProductsPage{
    
    readonly page:Page
    readonly pushNotificationHeader:Locator
    readonly newnotificationButton:Locator
    readonly Templatestab:Locator
    constructor(page:Page){
        this.page=page;
        this.pushNotificationHeader=page.locator(`(//h1[normalize-space()='New Arrival Products Notification'])[1]`);
        this.newnotificationButton=page.locator(`(//a[normalize-space()='Send New Notification'])[1]`);
        this.Templatestab=page.locator(`(//span[normalize-space()='Templates'])[1]`);
    }
    async verifyNewArrivalProductsPage(){
        const currentUrl = this.page.url();
        console.log('🌐 Current URL is: ' + currentUrl)
        await this.pushNotificationHeader.isVisible();
        console.log('New Arrival Products Notification Page is visible');
        const headerText = await this.pushNotificationHeader.textContent();
        console.log('Header is: ' + headerText);
        await this.newnotificationButton.isVisible();
        console.log('Send New Notification Button is visible on New Arrival Products Notification Page');
        await this.Templatestab.isVisible();
        await this.Templatestab.click();
        console.log('Clicked on Templates Tab');
        await this.page.waitForLoadState('networkidle');

    }
    
    }
        