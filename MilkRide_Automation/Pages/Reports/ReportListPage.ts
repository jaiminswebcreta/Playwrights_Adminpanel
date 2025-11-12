import { Page, Locator } from "@playwright/test";
export class ReportListPage {

    //Customer Report
    readonly page:Page
    readonly ReportListheader:Locator;
    readonly CustomerWallettab:Locator;
    readonly CustomerInformationTab: Locator;
    readonly ActivityLogTab: Locator;
    readonly LowCreditTab: Locator;
    readonly CustomerVacationTab:Locator;
    readonly SubscriptionTab: Locator;
    readonly SubscriptionEndtab:Locator;
    readonly ReferralReportTab:Locator;
    //Oprational Report

    readonly FutureOrderTab:Locator;
    readonly Predicative_Analysistab:Locator;
    readonly Reverse_LogisticTab :Locator;
    readonly CashcollectionstTab : Locator;
    readonly Order_Informationtab: Locator;
    readonly FlexOrdertab: Locator;
    readonly DemandForecastingTab : Locator;
    readonly RecentspendReportTab: Locator;
    readonly ReservationreportTab : Locator;
    readonly CancelledorderTab : Locator;
    readonly RefundreportTab : Locator;
    readonly DeliveriesInformation :Locator;
    readonly ImageProofTab : Locator


    

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
        this.ReferralReportTab=page.locator('(//a[normalize-space()="Referral"])[1]');
        //Oprational Report
        this.FutureOrderTab=page.locator(`(//a[contains(text(),'Future Orders')])[1]`)
        this.Predicative_Analysistab=page.locator(`(//a[normalize-space()='Predictive Analysis'])[1]`);
        this.Reverse_LogisticTab = page.locator(`(//a[normalize-space()='Reverse Logistic'])[1]`);
        this.CashcollectionstTab = page.locator(`(//a[normalize-space()='Cash Collections'])[1]`);
        this.Order_Informationtab = page.locator(`(//a[contains(text(),'Order Information')])[1]`);
        this.FlexOrdertab =page.locator(`(//a[normalize-space()='Flex Orders'])[1]`);
        this.DemandForecastingTab = page.locator(`(//a[contains(text(),'Demand')])[1]`);
        this.RecentspendReportTab = page.locator(`(//a[contains(text(),'Recent Spend')])[1]`);
        this.ReservationreportTab = page.locator(`(//a[contains(text(),'Reservation')])[1]`);
        this.CancelledorderTab = page.locator(`(//a[normalize-space()='Cancelled Order'])[1]`);
        this.RefundreportTab = page.locator(`(//a[contains(text(),'Refund')])[1]`);
        this.DeliveriesInformation = page.locator(`(//a[contains(text(),'Refund')])[1]`);
        this.ImageProofTab =page.locator(`(//a[normalize-space()='Image Proof'])[1]`);



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
    async ClickonReferralReportTab(){
        await this.ReferralReportTab.click();
        console.log(`Click on Referral report Tab`);
    }

    //Oprational Report

    async ClickFutureOrderTab(){
        await this.FutureOrderTab.click();
        console.log(`Click on Future order report Tab`);
    }

     async ClickonPredicativeAnalysistab(){
        await this.Predicative_Analysistab.click();
        console.log(`Click on Predicative_Analysistab report Tab`);
    }
    async ClickonReverse_LogisticTab(){

        await this.Reverse_LogisticTab.click();
        console.log(`Click on Reverse_LogisticTab`);
    }
      async ClickonCancelledorderTab(){
         await this.CancelledorderTab.waitFor({ state: 'visible' });
    await this.CancelledorderTab.click();
    console.log('Clicked on Cancelled Order tab');
}
        async ClickonOrder_Informationtab(){

        await this.Order_Informationtab.click();
        console.log(`Click on Order_Informationtab`);


    }
     async ClickonFlexOrdertab(){

        await this.FlexOrdertab.click();
        console.log(`Click on FlexOrdertab`);
     }
      async ClickonDemandForecastingTab(){

        await this.DemandForecastingTab.click();
        console.log(`Click on DemandForecastingTab`);
     }
       async ClickonRecentspendReportTab(){

        await this.RecentspendReportTab.click();
        console.log(`Click on RecentspendReportTab`);
     }
        async ClickonReservationreportTab(){

        await this.ReservationreportTab.click();
        console.log(`Click on ReservationreportTab`);
     }
        async ClickonCashcollectionstTab(){

        await this.CashcollectionstTab.click();
        console.log(`Click on CashcollectionstTab`);
     }

          async ClickonRefundreportTab(){

        await this.RefundreportTab.click();
        console.log(`Click on RefundreportTab`);
     }
           async ClickonDeliveriesInformation(){

        await this.DeliveriesInformation.click();
        console.log(`Click on DeliveriesInformation`);
     }
           async ClickonImageProofTab(){

        await this.ImageProofTab.click();
        console.log(`Click on ImageProofTab`);
     }


       
    
}