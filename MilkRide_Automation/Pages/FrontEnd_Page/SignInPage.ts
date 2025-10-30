import { Page, Locator, expect } from "@playwright/test";

export class SignInPage {
  readonly page: Page;
  readonly mobileInput: Locator;
  readonly continueBtn: Locator;
  readonly termsLink: Locator;
  readonly privacyLink: Locator;
  readonly errorMsg: Locator;
  readonly countryCode: Locator;

  constructor(page: Page) {
    this.page = page;
    this.mobileInput = page.locator('input[placeholder="Enter Mobile Number"]');
    this.continueBtn = page.locator('button:has-text("Continue")');
    this.termsLink = page.locator('a:has-text("Terms of Service")');
    this.privacyLink = page.locator('a:has-text("Privacy Policy")');
    this.errorMsg = page.locator('.error-message'); // Adjust if class differs
    this.countryCode = page.locator('.country-code'); // Adjust if element differs
  }

  async navigateToSignIn() {
    await this.page.goto("https://dev.milkride.com/evermilk/signin");
    console.log("🌐 Navigated to Sign-In page");
  }

  async enterMobileNumber(number: string) {
    await this.mobileInput.fill(number);
    console.log(`📱 Entered mobile number: ${number}`);
  }

  async clickContinue() {
    await this.continueBtn.click();
    console.log("🖱️ Continue button clicked");
  }
  async OpenURL() {
    await this.page.goto("https://dev.milkride.com/evermilk/signin");
    console.log("🌐 Navigated to Sign-In URL");
    }

  
}
