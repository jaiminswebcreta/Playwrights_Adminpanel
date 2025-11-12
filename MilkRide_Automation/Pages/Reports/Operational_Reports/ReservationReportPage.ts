import { Page, Locator } from "@playwright/test";
export class ReservationReportPage {
    readonly page:Page
    readonly ReservationReportPageheader:Locator
    // readonly ReservationReportPageBackbutton:Locator
    constructor(page:Page){
        this.page=page
        this.ReservationReportPageheader=page.locator(`(//h1[normalize-space()='Reservation Report'])[1]`)
        // this.ReservationReportPageBackbutton=page.locator(`(//a[normalize-space()='Back'])[1]`)
    }
    async VerifyReservationReportPage(){
         const currentUrl= this.page.url();
        console.log('🌐 Current URL is: ' + currentUrl);  
        await this.ReservationReportPageheader.isVisible();
        console.log('ReservationReportPage header is visible');
        // await this.ReservationReportPageBackbutton.isVisible();
        // console.log('Back button is visible')
        // await this.ReservationReportPageBackbutton.click();
        // console.log(`Click on Back Button`);
        await this.page.goBack();
          console.log('↩️ Navigated back to the previous page');

    }
    
}