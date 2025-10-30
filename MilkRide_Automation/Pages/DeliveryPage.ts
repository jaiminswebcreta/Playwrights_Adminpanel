import { Locator,Page } from "@playwright/test";

export class DeliveryPage{
    readonly page:Page;
    readonly deliveryHeader:Locator;
    readonly deliverytransfersTab:Locator;
    readonly optimizerouteTab:Locator;
    readonly manulrouteTab:Locator;
    readonly OrderhistoryTab:Locator;
    readonly RouteAssignmentTab:Locator;
    readonly MasterrouteTab:Locator;

    readonly dashboard:Locator;



    constructor(page:Page){
        this.page=page;
        this.deliveryHeader=page.locator(`(//span[@class='card-label fw-bold text-gray-800'][normalize-space()='Delivery Dashboard'])[1]`);
        this.dashboard=page.locator(`//span[normalize-space()='Dashboard']`);
        this.deliverytransfersTab=page.locator(`(//span[normalize-space()='Delivery Transfer'])[1]`);
        this.optimizerouteTab=page.locator(`(//span[normalize-space()='Optimize Route'])[1]`);
        this.manulrouteTab=page.locator(`(//span[normalize-space()='Manual Route'])[1]`);
        this.OrderhistoryTab=page.locator(`(//span[normalize-space()='Order History'])[1]`);
        this.RouteAssignmentTab=page.locator(`(//span[normalize-space()='Route Assignment'])[1]`);
        this.MasterrouteTab=page.locator(`(//span[normalize-space()='Master Route'])[1]`);


    }

    async verifyDeliveryPage(){
        try{
        const currentUrl = this.page.url();
        console.log('🌐 Current URL is: ' + currentUrl);
        await this.deliveryHeader.waitFor({ state: 'visible' });
        await this.deliveryHeader.isVisible();
        console.log('Delivery Dashboard Page is visible');
        await this.deliveryHeader.textContent();
        console.log('Header is: ' + await this.deliveryHeader.textContent());
        console.log('Completed Delivery Page verification');
        await this.deliverytransfersTab.waitFor({ state: 'visible' });
        console.log('✅ Delivery Transfer Tab is visible');
        await this.deliverytransfersTab.click();
        console.log('Clicked on Delivery Transfer Tab');
        await this.page.waitForLoadState('networkidle');
        const currentUrl1 = this.page.url();
        console.log('🌐 Delivery Transfer Tab URL: ' + currentUrl1);
        await this.dashboard.waitFor({ state: 'visible' });
        console.log('✅ Dashboard Tab is visible');
        await this.optimizerouteTab.waitFor({ state: 'visible' });
        console.log('✅ Optimize Route Tab is visible');
        await this.optimizerouteTab.click();
        console.log('Clicked on Optimize Route Tab');
        await this.page.waitForLoadState('networkidle');
        const currentUrl2 = this.page.url();
        console.log('🌐 Optimize Route Tab URL: ' + currentUrl2);
   
        await this.manulrouteTab.waitFor({ state: 'visible' });
        console.log('✅ Manual Route Tab is visible');
        await this.manulrouteTab.click();
        console.log('Clicked on Manual Route Tab');
        await this.page.waitForLoadState('networkidle');
        const currentUrl3 = this.page.url();
        console.log('🌐 Manual Route Tab URL: ' + currentUrl3);
        await this.optimizerouteTab.waitFor({ state: 'visible' });
        console.log('✅ Optimize Route Tab is visible');
        await this.optimizerouteTab.click();
        console.log('Clicked on Optimize Route Tab');
        await this.page.waitForLoadState('networkidle');
        const currentUrl4 = this.page.url();
        console.log('🌐 Optimize Route Tab URL: ' + currentUrl4);
        await this.OrderhistoryTab.waitFor({ state: 'visible' });
        console.log('✅ Order History Tab is visible');
        await this.OrderhistoryTab.click();
        console.log('Clicked on Order History Tab');
        await this.page.waitForLoadState('networkidle');
        const currentUrl5 = this.page.url();
        console.log('🌐 Order History Tab URL: ' + currentUrl5);
        await this.RouteAssignmentTab.waitFor({ state: 'visible' });
        console.log('✅ Route Assignment Tab is visible');
        await this.RouteAssignmentTab.click();
        console.log('Clicked on Route Assignment Tab');
        await this.page.waitForLoadState('networkidle');
        const currentUrl6 = this.page.url();
        console.log('🌐 Route Assignment Tab URL: ' + currentUrl6);
        await this.MasterrouteTab.waitFor({ state: 'visible' });
        console.log('✅ Master Route Tab is visible');
        await this.MasterrouteTab.click();
        console.log('Clicked on Master Route Tab');
        await this.page.waitForLoadState('networkidle');
        const currentUrl7 = this.page.url();
        console.log('🌐 Master Route Tab URL: ' + currentUrl7);
        await this.dashboard.waitFor({ state: 'visible' });
 
        console.log('✅ Dashboard Tab is visible');
        

        await this.dashboard.click();
        console.log('Clicked on Dashboard');
        
        
    }
    catch (error) {
        console.error('❌ Error in verifying Delivery Page:', error);
    }
    }   
   
    
}