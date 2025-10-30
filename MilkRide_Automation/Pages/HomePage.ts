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

    //CRM
    readonly CRMTab:Locator
    readonly CRMDashboard:Locator
    readonly Camupaigns:Locator
    readonly Leads:Locator
    readonly calllogs:Locator
    readonly followups:Locator

    //Churn management
    readonly ChrunManagementTab:Locator
    readonly AtRiskCustomerTab:Locator
    readonly SubscriptionChangesTab:Locator
    readonly AbandoedCartsTab:Locator
    readonly CallLogs2Tab:Locator
    readonly Followups2Tab:Locator

    //Complaint System
    readonly complaintSystemTab:Locator
    readonly allComplaintsOption:Locator
    readonly refundsRequestOption:Locator
    
    //Product cateLog
    readonly productCatalogTab:Locator
    readonly CategoriesOption:Locator
    readonly BrandOption:Locator
    readonly ProductsOption:Locator
    readonly ProductOrderingOption:Locator
    readonly QuickProductUpdate:Locator
    readonly SettingsOption:Locator

    //Flex Product Catelog
    readonly FlexproductTab:Locator
    readonly Attributestab:Locator
    readonly WorkingdayTab:Locator
    readonly PlanSoltTab:Locator

    //Banner

    readonly BannerTab:Locator







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
        this.CRMDashboard=page.locator(`(//span[normalize-space()='CRM Dashboard'])[1]`);
        this.Camupaigns=page.locator(`(//span[normalize-space()='Campaigns'])[1]`);
        this.Leads=page.locator(`(//span[normalize-space()='Leads'])[1]`);
        this.calllogs=page.locator(`(//span[@class='menu-title'][normalize-space()='Call Logs'])[1]`);
        this.followups=page.locator(`(//span[@class='menu-title'][normalize-space()='Follow-ups'])[1]`);
        this.CRMTab=page.locator(`(//span[@class='menu-title'][normalize-space()='CRM'])[1]`);
        //Churn Management
        this.ChrunManagementTab=page.locator(`(//span[contains(text(),'Churn Management')])[1]`);
        this.AtRiskCustomerTab=page.locator(`(//span[normalize-space()='At-Risk Customers'])[1]`);
        this.SubscriptionChangesTab=page.locator(`(//span[normalize-space()='Subscription Changes'])[1]`);
        this.AbandoedCartsTab=page.locator(`(//span[normalize-space()='Abandoned Carts'])[1]`);
        this.CallLogs2Tab=page.locator(`(//span[@class='menu-title'][normalize-space()='Call Logs'])[2]`);
        this.Followups2Tab=page.locator(`(//span[@class='menu-title'][normalize-space()='Follow-ups'])[2]`);
        //Complaint System
        this.complaintSystemTab=page.locator(`(//span[contains(text(),'Complaint System')])[1]`);
        this.allComplaintsOption=page.locator(`(//span[normalize-space()='All Complaints'])[1]`);
        this.refundsRequestOption=page.locator(`(//span[normalize-space()='Refund Requests'])[1]`);
        //Product Catalog
        this.productCatalogTab=page.locator(`(//span[contains(text(),'Product Catalog')])[1]`);
        this.CategoriesOption=page.locator(`(//span[normalize-space()='Category'])[1]`);
        this.BrandOption=page.locator(`(//span[normalize-space()='Brand'])[1]`);
        this.ProductsOption=page.locator(`(//span[normalize-space()='Product'])[1]`);
        this.ProductOrderingOption=page.locator(`(//span[normalize-space()='Product Ordering'])[1]`);
        this.QuickProductUpdate=page.locator(`(//span[normalize-space()='Quick Product Update'])[1]`);
        this.SettingsOption=page.locator(`(//span[@class='menu-title'][normalize-space()='Settings'])[2]`);

        //FlexProduct Catelog

        this.FlexproductTab=page.locator(`(//span[normalize-space()='FlexProducts'])[1]`);
        this.Attributestab=page.locator(`(//span[normalize-space()='Attributes'])[1]`);
        this.WorkingdayTab=page.locator(`(//span[normalize-space()='Working Days'])[1]`);
        this.PlanSoltTab=page.locator(`(//span[normalize-space()='Plan Slot'])[1]`);

        //Banner 
        this.BannerTab=page.locator(`(//span[normalize-space()='Banner'])[1]`)
    }
    async Clikonbannertab(){
        try{
            await this.BannerTab.click()
            console.log( `Click on Bannertab`)
        }
        catch(error){
            console.error('❌ Error in clicking bannertab:', error);

        }
    }

    async clickonFlexproduct(){
        try{
            await this.FlexproductTab.click()
            console.log('Clicked on Flexproduct');
        }
         catch (error) {
        console.error('❌ Error in clicking FlexProduct:', error);
    }
    }

      async ClickonAttributeTab(){
        try {
        
        await this.Attributestab.waitFor({ state: 'visible' });
        console.log('Attributestab is visible');
        await this.Attributestab.click();
        console.log('Clicked on Attributetab');
        }
        catch (error) {
        console.error('❌ Error in clicking Attributetab:', error);
    }
    }
      async ClickonWorkingdayTab(){
        try {
        
        await this.WorkingdayTab.waitFor({ state: 'visible' });
        console.log('Working day tab is visible');
        await this.WorkingdayTab.click();
        console.log(`click on Workingday`);
        }
        catch (error) {
        console.error('❌ Error in clicking Workingdaytab:', error);
    }
    }
    async ClickonPlanSoltTab(){
        try {
        
        await this.PlanSoltTab.waitFor({ state: 'visible' });
        console.log('PlanSolt is visible');
        await this.PlanSoltTab.click();
        console.log('Clicked on PlanSolttab');
        }
        catch (error) {
        console.error('❌ Error in clicking Plansolt:', error);
    }
    }



    async ClickonDashboard(){
        try {
        
        await this.dashboard.waitFor({ state: 'visible' });
        console.log('Dashboard is visible');
        await this.dashboard.click();
        console.log('Clicked on Dashboard');
    }   
    catch (error) {
        console.error('❌ Error in clicking Dashboard:', error);
    }
    }

    async indexToApp(){
        try {
        await this.dashboard.isVisible();
        console.log('Login Successful and Dashboard is visible');
        const currentUrl = this.page.url();   // ✅ Get current URL
        console.log('🌐 Current URL is: ' + currentUrl);
     

    }
    catch (error) {
        console.error('❌ Error in navigating to App:', error);
    }
    }
    async navigateToHubManager(){
        try {
        await this.hubManager.click();
        console.log('Clicked on Hub Manager');
        // writeLog('Clicked on Hub Manager');
        await this.Allhub.click();
        console.log('Clicked on All Hubs');
        await this.page.waitForLoadState('networkidle');
    }
    catch (error) {
        console.error('❌ Error in navigating to Hub Manager:', error);
    }
    }
    async navigateToDelivery(){
        try {

        await this.delivery.waitFor({ state: 'visible' });
        console.log('Delivery Tab is visible');
        await this.delivery.click();

        console.log('Clicked on Delivery');
        await this.deliverydashboard.click();
        console.log('Clicked on Delivery Dashboard');
        await this.page.waitForLoadState('networkidle');
        
    }
    catch (error) {
        console.error('❌ Error in navigating to Delivery:', error);
    }
    }
    async navigateToInventory(){
        try {

        await this.inventory.waitFor({ state: 'visible' });
        console.log('Inventory Tab is visible');
        await this.inventory.click();

        console.log('Clicked on Inventory');
        await this.Warehouse.click();
        console.log('Clicked on Warehouse');
        await this.page.waitForLoadState('networkidle');
    }
    catch (error) {
        console.error('❌ Error in navigating to Inventory:', error);
    }
    }
    async navigateToNotifications(){
        try {
        
        await this.notifications.waitFor({ state: 'visible' });
        console.log('Notifications Tab is visible');
        await this.notifications.click();
        console.log('Clicked on Notifications');
        await this.pushnotification.click();
        console.log('Clicked on Push Notifications');
        await this.page.waitForLoadState('networkidle');
    }   
    catch (error) {
        console.error('❌ Error in navigating to Notifications:', error);
    }
    }
    async navigateToBillingHistory(){
        try {
        
        await this.billinghistory.waitFor({ state: 'visible' });
        console.log('Billing & History Tab is visible');
        await this.billinghistory.click();
        console.log('Clicked on Billing & History');
        await this.Invoice.click();
        console.log('Clicked on Invoices');
        await this.page.waitForLoadState('networkidle');
    }
    catch (error) {
        console.error('❌ Error in navigating to Billing History:', error);
    }
    }
    async navigateToCustomersManagement(){
        try {
        
        await this.customersmanagement.waitFor({ state: 'visible' });
        console.log('Customer Management Tab is visible');
        await this.customersmanagement.click();
        console.log('Clicked on Customer Management');
        await this.customers.click();
        console.log('Clicked on Customers');
        await this.page.waitForLoadState('networkidle');
    }
    catch (error) {
        console.error('❌ Error in navigating to Customers Management:', error);
    }
    }
    async navigateToGroupPricing(){
        try {
        
        await this.Grouppricing.waitFor({ state: 'visible' });
        console.log('Group Pricing Tab is visible');
        await this.Grouppricing.click();
        console.log('Clicked on Group Pricing');
        await this.customergroups.click();
        console.log('Clicked on Customers Groups');
        await this.page.waitForLoadState('networkidle');
    }
    catch (error) {
        console.error('❌ Error in navigating to Group Pricing:', error);
    }
    }
    async navigateToDiscountRules(){
        try {
        
        await this.DiscountRules.waitFor({ state: 'visible' });
        console.log('Discount Rules Tab is visible');
        await this.DiscountRules.click();
        console.log('Clicked on Discount Rules');
        await this.coupons.click();
        console.log('Clicked on Coupons');
        await this.page.waitForLoadState('networkidle');
    }
    catch (error) {
        console.error('❌ Error in navigating to Discount Rules:', error);
    }
    }
    async navigateToSales(){
        try {
        
        await this.sales.waitFor({ state: 'visible' });
        console.log('Sales Tab is visible');
          await this.sales.waitFor({ state: 'visible', timeout: 5000 });
        await this.sales.click();
        console.log('Clicked on Sales');
        await this.salesdashboard.click();
        console.log('Clicked on Sales Dashboard');
        await this.page.waitForLoadState('networkidle');
    }   
    catch (error) {
        console.error('❌ Error in navigating to Sales:', error);
    }
    }
    //CRM Module
    async ClickOnCRMTab(){
        try {
        
        await this.CRMTab.waitFor({ state: 'visible' });
        console.log('CRM Tab is visible');
        await this.CRMTab.click();
        console.log('Clicked on CRM Tab');
    }   
    catch (error) {
        console.error('❌ Error in clicking CRM Tab:', error);
    }
    }
    async ClickonCRMDashboard(){
        try {
        
        await this.CRMDashboard.waitFor({ state: 'visible' });
        console.log('CRM Dashboard option is visible');
        await this.CRMDashboard.click();
        console.log('Clicked on CRM Dashboard');
        await this.page.waitForLoadState('networkidle');
    }   
    catch (error) {
        console.error('❌ Error in clicking CRM Dashboard:', error);
    }
    }
    async clickonCampaigns(){
        try {
        
        await this.Camupaigns.waitFor({ state: 'visible' });
        console.log(' Campaigns option is visible');
        await this.Camupaigns.click();
        console.log('Clicked on Campaigns');
        await this.page.waitForLoadState('networkidle');
    }   
    catch (error) {
        console.error('❌ Error in clicking Campaigns:', error);
    }
    }
    async clickonLeads(){
        try {
        
        await this.Leads.waitFor({ state: 'visible' });
        console.log('Leads option is visible');
        await this.Leads.click();
        console.log('Clicked on Leads');
        await this.page.waitForLoadState('networkidle');
    }   
    catch (error) {
        console.error('❌ Error in clicking Leads:', error);
    }
    }
    async clickonCallLogs(){
        try {
        
        await this.calllogs.waitFor({ state: 'visible' });
        console.log('Call Logs option is visible');
        await this.calllogs.click();
        console.log('Clicked on Call Logs');
        await this.page.waitForLoadState('networkidle');
    }   
    catch (error) {
        console.error('❌ Error in clicking Call Logs:', error);
    }
    }
    async clickonFollowups(){
        try {
        
        await this.followups.waitFor({ state: 'visible' });
        console.log('Follow-ups option is visible');
        await this.followups.click();
        console.log('Clicked on Follow-ups');
        await this.page.waitForLoadState('networkidle');
    }   
    catch (error) {
        console.error('❌ Error in clicking Follow-ups:', error);
    }
    }

    //Churn Management Module
    async clickonChurnManagementTab(){
        try {
        
        await this.ChrunManagementTab.waitFor({ state: 'visible' });
        console.log('Churn Management Tab is visible');
        await this.ChrunManagementTab.click();
        console.log('Clicked on Churn Management Tab');
    }   
    catch (error) {
        console.error('❌ Error in clicking Churn Management Tab:', error);
    }
    }
    async clickonAtRiskCustomersTab(){
        try {
        
        await this.AtRiskCustomerTab.waitFor({ state: 'visible' });
        console.log('At-Risk Customers option is visible');
        await this.AtRiskCustomerTab.click();
        console.log('Clicked on At-Risk Customers');
        await this.page.waitForLoadState('networkidle');
    }   
    catch (error) {
        console.error('❌ Error in clicking At-Risk Customers:', error);
    }
    }
    async clickonSubscriptionChangesTab(){
        try {
        
        await this.SubscriptionChangesTab.waitFor({ state: 'visible' });
        console.log('Subscription Changes option is visible');
        await this.SubscriptionChangesTab.click();
        console.log('Clicked on Subscription Changes');
        await this.page.waitForLoadState('networkidle');
    }   
    catch (error) {
        console.error('❌ Error in clicking Subscription Changes:', error);
    }
    }
    async clickonAbandonedCartsTab(){
        try {
        
        await this.AbandoedCartsTab.waitFor({ state: 'visible' });
        console.log('Abandoned Carts option is visible');
        await this.AbandoedCartsTab.click();
        console.log('Clicked on Abandoned Carts');
        await this.page.waitForLoadState('networkidle');
    }   
    catch (error) {
        console.error('❌ Error in clicking Abandoned Carts:', error);
    }
    }
    async clickonCallLogs2Tab(){
        try {
        
        await this.CallLogs2Tab.waitFor({ state: 'visible' });
        console.log('Call Logs option is visible');
        await this.CallLogs2Tab.click();
        console.log('Clicked on Call Logs');
        await this.page.waitForLoadState('networkidle');
    }   
    catch (error) {
        console.error('❌ Error in clicking Call Logs:', error);
    }
    }
    async clickonFollowups2Tab(){
        try {
        
        await this.Followups2Tab.waitFor({ state: 'visible' });
        console.log('Follow-ups option is visible');
        await this.Followups2Tab.click();
        console.log('Clicked on Follow-ups');
        await this.page.waitForLoadState('networkidle');
    }   
    catch (error) {
        console.error('❌ Error in clicking Follow-ups:', error);
    }
    }

    //
    //Complaint System Module
    async clickonComplaintSystemTab(){
        try {
        
        await this.complaintSystemTab.waitFor({ state: 'visible' });
        console.log('Complaint System Tab is visible');
        await this.complaintSystemTab.click();
        console.log('Clicked on Complaint System Tab');
    }   
    catch (error) {
        console.error('❌ Error in clicking Complaint System Tab:', error);
    }
    }
    async clickonAllComplaintsOption(){
        try {

        await this.allComplaintsOption.waitFor({ state: 'visible' });
        console.log('All Complaints option is visible');
        await this.allComplaintsOption.click();
        console.log('Clicked on All Complaints');
        await this.page.waitForLoadState('networkidle');
    }   
    catch (error) {
        console.error('❌ Error in clicking All Complaints:', error);
    }
    }
    async clickonRefundsRequestOption(){
        try {

        await this.refundsRequestOption.waitFor({ state: 'visible' });
        console.log('Refunds Request option is visible');
        await this.refundsRequestOption.click();
        console.log('Clicked on Refunds Request');
        await this.page.waitForLoadState('networkidle');
    }   
    catch (error) {
        console.error('❌ Error in clicking Refunds Request:', error);
    }
    }   

//Product Catalog Module
    async clickonProductCatalogTab(){
        try {

        await this.productCatalogTab.waitFor({ state: 'visible' }); 
        console.log('Product Catalog Tab is visible');
        await this.productCatalogTab.click();
        console.log('Clicked on Product Catalog Tab');
    }

    catch (error) {
        console.error('❌ Error in clicking Product Catalog Tab:', error);
    }
    }
    async clickonCategoriesOption(){
        try {
            
        await this.CategoriesOption.waitFor({ state: 'visible' });
        console.log('Categories option is visible');
        await this.CategoriesOption.click();
        console.log('Clicked on Categories');
        await this.page.waitForLoadState('networkidle');
    }

    catch (error) {
        console.error('❌ Error in clicking Categories:', error);
    }
    }
    async clickonBrandOption(){
        try {
            
        await this.BrandOption.waitFor({ state: 'visible' });
        console.log('Brand option is visible');
        await this.BrandOption.click();
        console.log('Clicked on Brand');
        await this.page.waitForLoadState('networkidle');
    }
    
    catch (error) {
        console.error('❌ Error in clicking Brand:', error);
    }

    }
    async clickonProductsOption(){
        try {
            
        await this.ProductsOption.waitFor({ state: 'visible' });
        console.log('Products option is visible');
        await this.ProductsOption.click();
        console.log('Clicked on Products');
        await this.page.waitForLoadState('networkidle');
    }
    
    catch (error) {
        console.error('❌ Error in clicking Products:', error);
    }
    }
    async clickonProductOrderingOption(){
        try {
            
        await this.ProductOrderingOption.waitFor({ state: 'visible' });
        console.log('Product Ordering option is visible');
        await this.ProductOrderingOption.click();
        console.log('Clicked on Product Ordering');
        await this.page.waitForLoadState('networkidle');
    }
    
    catch (error) {
        console.error('❌ Error in clicking Product Ordering:', error);
    }
    }
    async clickonQuickProductUpdateOption(){
        try {

        await this.QuickProductUpdate.waitFor({ state: 'visible' });
        console.log('Quick Product Update option is visible');
        await this.QuickProductUpdate.click();
        console.log('Clicked on Quick Product Update');
        await this.page.waitForLoadState('networkidle');
    }
    
    catch (error) {
        console.error('❌ Error in clicking Quick Product Update:', error);
    }
    }
    async clickonSettingsOption(){
        try {
            
        await this.SettingsOption.waitFor({ state: 'visible' });
        console.log('Settings option is visible');
        await this.SettingsOption.click();
        console.log('Clicked on Settings');
        await this.page.waitForLoadState('networkidle');
    }

    catch (error) {
        console.error('❌ Error in clicking Settings:', error);
    }
    }
    
}