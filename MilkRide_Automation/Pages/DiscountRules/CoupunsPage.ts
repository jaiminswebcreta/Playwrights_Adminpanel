import { Page,Locator } from "@playwright/test";
export class couponsPage{
    readonly page:Page
    readonly couponsHeader:Locator
    readonly addcouponButton:Locator
    readonly couponusage:Locator
    constructor(page:Page){
        this.page=page;
        this.couponsHeader=page.locator(`(//h1[normalize-space()='Coupon List'])[1]`);
        this.addcouponButton=page.locator(`(//a[normalize-space()='Add Coupon'])[1]`);
        this.couponusage=page.locator(`//span[normalize-space()='Coupons Usage']`);
    }
    async verifyCouponsPage(){
        try {
        await this.couponsHeader.isVisible();
        console.log('✅ Coupons Page is visible');
        const headerText = await this.couponsHeader.textContent();
        console.log(`📝 Header text: ${headerText}`);
        const currentUrl= this.page.url();
        console.log('🌐 Current URL is: ' + currentUrl);
        await this.addcouponButton.isVisible();
        console.log('✅ Add Coupon button is visible'); 
        await this.couponusage.isVisible();
        console.log('✅ Coupons Usage link is visible'); 
        await this.couponusage.click();
        console.log('Clicked on Coupons Usage link');                
    }
    catch (error) {
        console.error('❌ Error in verifying Coupons Page:', error);
    }
    }
}   