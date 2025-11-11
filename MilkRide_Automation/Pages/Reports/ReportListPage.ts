import { Page, Locator } from "@playwright/test";
export class ReportListPage {
    readonly page:Page
    readonly ReportListheader:Locator;
    readonly CustomerWallettab:Locator;
    readonly CustomerInformationTab: Locator;
    readonly ActivityLogTab: Locator;
    readonly LowCreditTab: Locator;
    readonly CustomerVacationTab:Locator;
    readonly SubscriptionTab: Locator;
    readonly SubscriptionEndtab:Locator;
    

    constructor(page:Page){
        this.page=page
        this.ReportListheader=page.locator(`(//h1[normalize-space()='Reports List'])[1]`);
        this.CustomerWallettab=page.locator(`(//a[normalize-space()='Customer Wallet'])[1]`);
        this.CustomerInformationTab=page.locator(`(//a[contains(text(),'Customer Information')])[1]`);
        this.ActivityLogTab=page.locator(`(//a[normalize-space()='Activity Log'])[1]`);
        this.LowCreditTab=page.locator(`(//a[@class='text-gray-900 text-hover-primary fs-6 fw-bold'][normalize-space()='Low Credit'])[2]`);
        this.CustomerVacationTab=page.locator(`(//a[normalize-space()='Customer Vacation'])[1]`);
        this.SubscriptionTab=page.locator(`(//a[normalize-space()='Subscription'])[1]`);
        this.SubscriptionEndtab=page.locator(`(//a[normalize-space()='Subscription End'])[1]`);
    }
    async VerifySubscriptionreportReportPage(){
         const currentUrl= this.page.url();
        console.log('🌐 Current URL is: ' + currentUrl);  
        await this.ReportListheader.isVisible();
        console.log('ReportList header is visible');
       
    }
    async ClickonCustomerWalletReport(){
        await this.CustomerWallettab.click();
        console.log(`click on CustomerWallettab`);
        
    }
    async ClickonCustomerInformationReport(){
        await this.CustomerInformationTab.click();
        console.log(`Click on CustomerInformation Report`);

    }
    async ClickonActivityReport(){
        await this.ActivityLogTab.click();
        console.log(`Click on  Activity Report`);

    }
    async ClickonLowCreditReport(){
        await this.LowCreditTab.click();
        console.log(`Click on Low Credit Report`)

    }
    async ClickonCustomerVacationReport(){
        await this.CustomerVacationTab.click();
        console.log(`Click on customer vacation Report`)
    }
    async ClickonSubscriptionResport (){
        await this.SubscriptionTab.click();
        console.log(`click on Subscription Report`);

    }
    async ClickonSubscriptionEndReport(){
        await this.SubscriptionEndtab.click();
        console.log(`click on SubscriptionEnd Report`);
    }
}