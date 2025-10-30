import { test, expect } from "@playwright/test";
import { SignInPage } from "../../Pages/FrontEnd_Page/SignInPage";
import { OtpPage } from "../../Pages/FrontEnd_Page/OtpPage";
import { HomePage } from "../../Pages/FrontEnd_Page/HomePage";
import { AllProductPage } from "../../Pages/FrontEnd_Page/AllProductPage";


test.describe('Functional Tests',async () => {
  let signInPage: SignInPage;
  let otpPage: OtpPage;
  let homePage: HomePage;
  let allProductPage: AllProductPage;




test('Existing Number with Login', async ({ page }) => {
    signInPage = new SignInPage(page);
    await signInPage.navigateToSignIn();
    await signInPage.enterMobileNumber("8849776064");
    await signInPage.clickContinue();

    otpPage = new OtpPage(page);
    await otpPage.verifyOtpPage();
    expect(page.url()).toContain("/customer/dashboard");

  });
//   test('New Number with SignUp', async ({ page }) => {
//     signInPage = new SignInPage(page);
//     await signInPage.navigateToSignIn();
//     await signInPage.enterMobileNumber("8849449607");
//     await signInPage.clickContinue();

//     otpPage = new OtpPage(page);
//     await otpPage.verifyOtpPage();
//     expect(page.url()).toContain("/evermilk/signup");

//   });
  test('Buy Onces Order', async ({ page }) => {
    signInPage = new SignInPage(page);
    otpPage = new OtpPage(page);
    homePage = new HomePage(page);
    allProductPage = new AllProductPage(page);
    await signInPage.OpenURL();
    await signInPage.enterMobileNumber("8849776064");
    await signInPage.clickContinue();
    await otpPage.verifyOtpPage();
    await homePage.navigateToAllProducts();
    await allProductPage.selectFirstProduct();
   
  });


test.afterAll(async ({ page }) => {
    await page.close();
  });


})
