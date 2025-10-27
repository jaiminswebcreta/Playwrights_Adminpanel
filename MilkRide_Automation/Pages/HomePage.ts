import {Locator, Page} from "@playwright/test";
// import { writeLog } from "../utils/logger";
import { write } from "fs";
import { url } from "inspector";

export class HomePage{

    //Dashboard
    readonly page:Page
    readonly dashboard:Locator;
    readonly currentUrl:Locator;
      //Hubmanager
    readonly hubManager:Locator;
    readonly Allhub:Locator;
    //delivery
    readonly delivery:Locator
    readonly deliverydashboard:Locator
    //Inventory
    readonly inventory:Locator
    readonly Warehouse:Locator
    //Notifications
    readonly notifications:Locator
    readonly pushnotification:Locator
    //Billing History
    readonly billinghistory:Locator
    readonly Invoice:Locator
    //Customers
    readonly customersmanagement:Locator
    readonly customers:Locator
    readonly Grouppricing:Locator
    readonly customergroups:Locator
    readonly DiscountRules:Locator
    readonly coupons:Locator
    //Sales
    readonly sales:Locator
    readonly salesdashboard:Locator





    constructor(page:Page){ 
        this.page=page;
        this.dashboard =page.locator(`(//h2[normalize-space()='Dashboard'])[1]`);
        this.currentUrl=page.locator(`url`); // to get current url use
        this.hubManager=page.locator(`(//span[contains(text(),'Hub Manager')])[1]`);
        this.Allhub=page.locator(`(//span[normalize-space()='All Hubs'])[1]`);
        this.delivery=page.locator(`(//span[@class='menu-title'][normalize-space()='Delivery'])[1]`);
        this.deliverydashboard=page.locator(`(//span[@class='menu-title'][normalize-space()='Delivery Dashboard'])[1]`);
        this.inventory=page.locator(`(//span[@class='menu-title'][normalize-space()='Inventory'])[1]`);
        this.Warehouse=page.locator(`(//span[normalize-space()='Warehouse'])[1]`);
        this.notifications=page.locator(`(//span[@class='menu-title'][normalize-space()='Notifications'])[1]`);
        this.pushnotification=page.locator(`(//span[normalize-space()='Push Notifications'])[1]`);
        this.billinghistory=page.locator(`(//span[contains(text(),'Billing & History')])[1]`);
        this.Invoice=page.locator(`(//span[normalize-space()='Invoices'])[1]`);
        this.customersmanagement=page.locator(`(//span[contains(text(),'Customer Management')])[1]`);
        this.customers=page.locator(`(//span[@class='menu-title'][normalize-space()='Customers'])[1]`);
        this.Grouppricing=page.locator(`(//span[normalize-space()='Group Pricing'])[1]`);
        this.customergroups=page.locator(`(//span[normalize-space()='Customers Groups'])[1]`);   
        this.DiscountRules=page.locator(`(//span[normalize-space()='Discount Rules'])[1]`);
        this.coupons=page.locator(`(//span[normalize-space()='Coupons'])[1]`);   
        this.sales=page.locator(`(//span[@class='menu-title'][normalize-space()='Sales'])[1]`);
        this.salesdashboard=page.locator(`(//span[normalize-space()='Sales Dashboard'])[1]`); 
    
    }

    async indexToApp(){
        await this.dashboard.isVisible();
        console.log('Login Successful and Dashboard is visible');
        const currentUrl = this.page.url();   // ✅ Get current URL
        console.log('🌐 Current URL is: ' + currentUrl);
     

    }
    async navigateToHubManager(){
        await this.hubManager.click();
        console.log('Clicked on Hub Manager');
        // writeLog('Clicked on Hub Manager');
        await this.Allhub.click();
        console.log('Clicked on All Hubs');
        await this.page.waitForLoadState('networkidle');
    }
    async navigateToDelivery(){

        await this.delivery.waitFor({ state: 'visible' });
        console.log('✅ Delivery Tab is visible');
        await this.delivery.click();

        console.log('Clicked on Delivery');
        await this.deliverydashboard.click();
        console.log('Clicked on Delivery Dashboard');
        await this.page.waitForLoadState('networkidle');
        
    }
    async navigateToInventory(){

        await this.inventory.waitFor({ state: 'visible' });
        console.log('✅ Inventory Tab is visible');
        await this.inventory.click();

        console.log('Clicked on Inventory');
        await this.Warehouse.click();
        console.log('Clicked on Warehouse');
        await this.page.waitForLoadState('networkidle');
    }
    async navigateToNotifications(){
        
        await this.notifications.waitFor({ state: 'visible' });
        console.log('✅ Notifications Tab is visible');
        await this.notifications.click();
        console.log('Clicked on Notifications');
        await this.pushnotification.click();
        console.log('Clicked on Push Notifications');
        await this.page.waitForLoadState('networkidle');
    }   
    async navigateToBillingHistory(){
        
        await this.billinghistory.waitFor({ state: 'visible' });
        console.log('✅ Billing & History Tab is visible');
        await this.billinghistory.click();
        console.log('Clicked on Billing & History');
        await this.Invoice.click();
        console.log('Clicked on Invoices');
        await this.page.waitForLoadState('networkidle');
    }
    async navigateToCustomersManagement(){
        
        await this.customersmanagement.waitFor({ state: 'visible' });
        console.log('✅ Customer Management Tab is visible');
        await this.customersmanagement.click();
        console.log('Clicked on Customer Management');
        await this.customers.click();
        console.log('Clicked on Customers');
        await this.page.waitForLoadState('networkidle');
    }
    async navigateToGroupPricing(){
        
        await this.Grouppricing.waitFor({ state: 'visible' });
        console.log('✅ Group Pricing Tab is visible');
        await this.Grouppricing.click();
        console.log('Clicked on Group Pricing');
        await this.customergroups.click();
        console.log('Clicked on Customers Groups');
        await this.page.waitForLoadState('networkidle');
    }
    async navigateToDiscountRules(){
        
        await this.DiscountRules.waitFor({ state: 'visible' });
        console.log('✅ Discount Rules Tab is visible');
        await this.DiscountRules.click();
        console.log('Clicked on Discount Rules');
        await this.coupons.click();
        console.log('Clicked on Coupons');
        await this.page.waitForLoadState('networkidle');
    }
    async navigateToSales(){
        
        await this.sales.waitFor({ state: 'visible' });
        console.log('✅ Sales Tab is visible');
        await this.sales.click();
        console.log('Clicked on Sales');
        await this.salesdashboard.click();
        console.log('Clicked on Sales Dashboard');
        await this.page.waitForLoadState('networkidle');
    }   
    
}