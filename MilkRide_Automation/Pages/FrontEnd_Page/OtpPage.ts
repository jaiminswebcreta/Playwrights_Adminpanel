import { Page,Locator,expect } from "@playwright/test";
export class OtpPage {
    readonly page:Page
    readonly otpheading:Locator
    readonly Otpfirstdigit:Locator
    readonly SubmitBtn:Locator

    constructor(page:Page){
        this.page=page
        this.otpheading=page.locator(`(//h4[contains(text(),'OTP Verification')])[1]`)
        this.Otpfirstdigit=page.locator(`(//input[@name='otp[]'])[1]`)

        this.SubmitBtn=page.locator(`(//button[normalize-space()='Submit'])[1]`)
    }
async verifyOtpPage() {
  // Step 1: Get and log the OTP page heading
  const heading = await this.otpheading.textContent();
  console.log("OTP Page Heading:", heading);
  await this.Otpfirstdigit.click();
  console.log("🖱️ Clicked on first OTP digit input field");

 
  await this.SubmitBtn.click();
  console.log("🖱️ Submit button clicked");

 

  // Step 4: Verify that navigation happened to OTP verification page
 
}
}
