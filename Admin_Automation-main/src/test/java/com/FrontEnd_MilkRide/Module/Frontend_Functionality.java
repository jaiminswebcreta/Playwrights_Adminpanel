package com.FrontEnd_MilkRide.Module;

import java.io.IOException;

import org.testng.annotations.Listeners;
import org.testng.annotations.Test;
import org.testng.asserts.SoftAssert;

import com.Admin_MilkRide.Utilities.ExtentManager;
import com.FrontEnd_MilkRide.PageObject.AllProduct_Page;
import com.FrontEnd_MilkRide.PageObject.Cart_Page;
import com.FrontEnd_MilkRide.PageObject.Index_Page;
import com.FrontEnd_MilkRide.PageObject.OTP_Page;
import com.FrontEnd_MilkRide.PageObject.ProductView_Page;
import com.FrontEnd_MilkRide.PageObject.SigninPage;
import com.FrontEnd_MilkRide.PageObject.ThankYou_Page;

@Listeners(com.Admin_MilkRide.Utilities.ExtentListenerClass.class)

public class Frontend_Functionality extends FrontEnd_BassClass {

	@Test(priority = 1)
	public void LoginwithMobilenumberer() throws IOException, InterruptedException {
		SoftAssert softAssert = new SoftAssert(); // ✅ Initialize at the start
		try {
			SigninPage signinpage = new SigninPage(driver);
			signinpage.enterMobileNumber("8849776064");
			// Replace with a valid mobile number
			signinpage.clickContinue(); // Click the continue button to submit the mobile number

			OTP_Page otppage = new OTP_Page(driver);
			String otpVerificationText = otppage.getOtpVerificationText();
			logger.info("OTP Verification Text: " + otpVerificationText);

			if (otpVerificationText.contains("OTP Verification")) {
				logger.info("OTP Verification page opened successfully - Passed");
				ExtentManager.getTest()
						.pass("OTP Verification page opened successfully: OTP Verification text is visible.");
				softAssert.assertTrue(true, "OTP Verification text matched");
			} else {
				logger.error("OTP Verification page failed to open - Failed");
				ExtentManager.getTest()
						.fail("OTP Verification page failed to open: OTP Verification text was not found. Found: "
								+ otpVerificationText);
				captureScreenShot(driver, "LoginwithMobilenumberer");
				softAssert.fail("OTP Verification text mismatch");
			}
			otppage.clickSubmitButton(); // Click the submit button to proceed with OTP verification
			logger.info("Clicked on submit button after entering mobile number.");
			Index_Page IP = new Index_Page(driver);
			String homeText = IP.getHometext();
			logger.info("Home Text: " + homeText);
			if (homeText.equals("Home")) {
				logger.info("Login with mobile number successful - Passed");
				ExtentManager.getTest().pass("Login with mobile number successful: Home text is visible.");
				softAssert.assertTrue(true, "Home text matched");
			} else {
				logger.error("Login with mobile number failed - Failed");
				ExtentManager.getTest()
						.fail("Login with mobile number failed: Home text was not found. Found: " + homeText);
				captureScreenShot(driver, "LoginwithMobilenumberer");
				softAssert.fail("Home text mismatch");
			}
			String allProductText = IP.getAllProducttext();
			logger.info("All Products Text: " + allProductText);
			if (allProductText.equals("All Products")) {
				logger.info("All Products text is visible - Passed");
				ExtentManager.getTest().pass("All Products text is visible.");
				softAssert.assertTrue(true, "All Products text matched");
			} else {
				logger.error("All Products text is not visible - Failed");
				ExtentManager.getTest().fail("All Products text is not visible: Found: " + allProductText);
				captureScreenShot(driver, "LoginwithMobilenumberer");
				softAssert.fail("All Products text mismatch");
			}
			String myOrderText = IP.getmyordertext();
			logger.info("My Orders Text: " + myOrderText);
			if (myOrderText.equals("My Orders")) {
				logger.info("My Orders text is visible - Passed");
				ExtentManager.getTest().pass("My Orders text is visible.");
				softAssert.assertTrue(true, "My Orders text matched");
			} else {
				logger.error("My Orders text is not visible - Failed");
				ExtentManager.getTest().fail("My Orders text is not visible: Found: " + myOrderText);
				captureScreenShot(driver, "LoginwithMobilenumberer");
				softAssert.fail("My Orders text mismatch");
			}
			String mySubscriptionText = IP.getmysubscriptiontext();
			logger.info("My Subscriptions Text: " + mySubscriptionText);

			if (mySubscriptionText.equals("My Subscriptions")) {
				logger.info("My Subscriptions text is visible - Passed");
				ExtentManager.getTest().pass("My Subscriptions text is visible.");
				softAssert.assertTrue(true, "My Subscriptions text matched");
			} else {
				logger.error("My Subscriptions text is not visible - Failed");
				ExtentManager.getTest().fail("My Subscriptions text is not visible: Found: " + mySubscriptionText);
				captureScreenShot(driver, "LoginwithMobilenumberer");
				softAssert.fail("My Subscriptions text mismatch");
			}

		} catch (Exception e) {
			logger.error("Exception occurred in LoginwithMobilenumberer: " + e.getMessage());
			ExtentManager.getTest().fail("LoginwithMobilenumberer failed due to: " + e.getMessage());
			e.printStackTrace(); // Print stack trace in console for debugging
			try {
				captureScreenShot(driver, "LoginwithMobilenumberer");
			} catch (IOException ioException) {
				logger.error("Screenshot capture failed: " + ioException.getMessage());
				ExtentManager.getTest().fail("Screenshot capture failed: " + ioException.getMessage());
			}
			// ⚠️ Create SoftAssert outside the try-catch block to avoid scope issues if
			// reused
			softAssert.fail("Error due to: " + e.getMessage());
			// ✅ Assert all to collect the result and allow the test to fail gracefully
		}
		softAssert.assertAll(); // 🚨 You MUST call this or TestNG won't fail the test

	}

	@Test(priority = 2)

	public void Buy_Once_Order_Morning() throws IOException, InterruptedException {

		SoftAssert softAssert = new SoftAssert(); // ✅ Initialize at the start
		try {
			Index_Page IP = new Index_Page(driver);
			IP.clickAllProduct(); // Click on "All Products" to view products
			logger.info("Clicked on All Products to view products.");
			AllProduct_Page allProductPage = new AllProduct_Page(driver);
			String firstProductName = allProductPage.getFirstProductName();
			logger.info("First Product Name: " + firstProductName);
			allProductPage.clickFirstProduct(); // Click on the first product to view details
			logger.info("Clicked on the first product to view details.");

			ProductView_Page productViewPage = new ProductView_Page(driver);
			String productName = productViewPage.getProductName();
			logger.info("Product Name: " + productName);

			productViewPage.clickBuyOnceButton(); // Click on "Buy once" button
			logger.info("Clicked on Buy once button for the product.");
			productViewPage.clickAddToCartButton(); // Click on "Add to cart" button
			logger.info("Clicked on Add to cart button for the product.");
			productViewPage.clickCartIcon(); // Click on the cart icon to view the cart
			logger.info("Clicked on the cart icon to view the cart.");

			Cart_Page cartPage = new Cart_Page(driver);

			String cartProductName = cartPage.getCartProductName();
			logger.info("Cart Product Name: " + cartProductName);
			cartPage.clickPlaceOrderButton(); // Click on "Place Order" button
			logger.info("Clicked on Place Order button in the cart.");

			ThankYou_Page thankYouPage = new ThankYou_Page(driver);
			String thankYouText = thankYouPage.getThankYouMessage();
			logger.info("Thank You Text: " + thankYouText);

		} catch (Exception e) {

			logger.error("Exception occurred in Buy_Once_Order_Morning: " + e.getMessage());
			// Log the error message to the console
			ExtentManager.getTest().fail("Buy_Once_Order_Morning failed due to: " + e.getMessage());
			e.printStackTrace(); // Print stack trace in console for debugging
			try {
				captureScreenShot(driver, "Buy_Once_Order_Morning");
			} catch (IOException ioException) {
				logger.error("Screenshot capture failed: " + ioException.getMessage());
				ExtentManager.getTest().fail("Screenshot capture failed: " + ioException.getMessage());
			}

			// ⚠️ Create SoftAssert outside the try-catch block to avoid scope issues if
			// reused
			softAssert.fail("Error due to: " + e.getMessage());
			// ✅ Assert all to collect the result and allow the test to fail gracefully
		}
		softAssert.assertAll(); // 🚨 You MUST call this or TestNG won't fail the test

	}

	@Test(priority = 3)
	public void Buy_Once_Order_Evening() throws IOException, InterruptedException {

		SoftAssert softAssert = new SoftAssert(); // ✅ Initialize at the start
		try {
			Index_Page IP = new Index_Page(driver);
			IP.clickAllProduct(); // Click on "All Products" to view products
			logger.info("Clicked on All Products to view products.");
			AllProduct_Page allProductPage = new AllProduct_Page(driver);
			String SecondProductName = allProductPage.getSecondProductName();
			logger.info("Second Product Name: " + SecondProductName);
			allProductPage.getSecondProductName(); // Click on the first product to view details
			logger.info("Clicked on the Second product to view details.");
			allProductPage.clickSecondProduct(); // Click on the second product to view details

			ProductView_Page productViewPage = new ProductView_Page(driver);
			String productName = productViewPage.getProductName();
			logger.info("Product Name: " + productName);
			productViewPage.selectDinnerOption(); // Select the dinner option
			logger.info("Selected Dinner option for the product.");

			productViewPage.clickBuyOnceButton(); // Click on "Buy once" button
			logger.info("Clicked on Buy once button for the product.");
			productViewPage.clickAddToCartButton(); // Click on "Add to cart" button
			logger.info("Clicked on Add to cart button for the product.");
			productViewPage.clickCartIcon(); // Click on the cart icon to view the cart
			logger.info("Clicked on the cart icon to view the cart.");

			Cart_Page cartPage = new Cart_Page(driver);

			String cartProductName = cartPage.getCartProductName();
			logger.info("Cart Product Name: " + cartProductName);
			cartPage.clickPlaceOrderButton(); // Click on "Place Order" button
			logger.info("Clicked on Place Order button in the cart.");

			ThankYou_Page thankYouPage = new ThankYou_Page(driver);
			String thankYouText = thankYouPage.getThankYouMessage();
			logger.info("Thank You Text: " + thankYouText);

		} catch (Exception e) {

			logger.error("Exception occurred in Buy_Once_Order_Evening: " + e.getMessage());
			// Log the error message to the console
			ExtentManager.getTest().fail("Buy_Once_Order_Evening failed due to: " + e.getMessage());
			e.printStackTrace(); // Print stack trace in console for debugging
			try {
				captureScreenShot(driver, "Buy_Once_Order_Evening");
			} catch (IOException ioException) {
				logger.error("Screenshot capture failed: " + ioException.getMessage());
				ExtentManager.getTest().fail("Screenshot capture failed: " + ioException.getMessage());
			}

			// ⚠️ Create SoftAssert outside the try-catch block to avoid scope issues if
			// reused
			softAssert.fail("Error due to: " + e.getMessage());
			// ✅ Assert all to collect the result and allow the test to fail gracefully
		}
		softAssert.assertAll(); // 🚨 You MUST call this or TestNG won't fail the test

	}

	@Test(priority = 4)

	public void Buy_Subscription_EveryDay_Morning() throws IOException, InterruptedException {

		SoftAssert softAssert = new SoftAssert(); // ✅ Initialize at the start
		try {
			Index_Page IP = new Index_Page(driver);
			IP.clickAllProduct(); // Click on "All Products" to view products
			logger.info("Clicked on All Products to view products.");
			AllProduct_Page allProductPage = new AllProduct_Page(driver);
			String firstProductName = allProductPage.getFirstProductName();
			logger.info("First Product Name: " + firstProductName);
			allProductPage.clickFirstProduct(); // Click on the first product to view details
			logger.info("Clicked on the first product to view details.");

			ProductView_Page productViewPage = new ProductView_Page(driver);
			String productName = productViewPage.getProductName();
			logger.info("Product Name: " + productName);
			productViewPage.selectDinnerOption(); // Select the dinner option
			logger.info("Selected Dinner option for the product.");
			productViewPage.clickSubscribeButton(); // Click on "Subscribe" button
			logger.info("Clicked on Subscribe button for the product.");
			// Select the "Everyday" subscription option

			productViewPage.selectEverydayOption(); // Select the "Everyday" subscription option
			logger.info("Selected Everyday subscription option for the product.");

			// Click on "Subscribe" button to confirm subscription
			productViewPage.clickSubscribeSubmitButton();
			logger.info("Clicked on Subscribe button to confirm subscription.");
			String toastMessage = productViewPage.getToastMessage(); // Get the toast message after subscription
			logger.info("Toast Message: " + toastMessage);
			if (toastMessage.contains("You've successfully created a subscription.")) {
				logger.info("Subscription added successfully - Passed");
				ExtentManager.getTest().pass("Subscription added successfully: " + toastMessage);
				softAssert.assertTrue(true, "Subscription success message matched");
			} else {
				logger.error("Subscription failed - Failed");
				ExtentManager.getTest().fail("Subscription failed: " + toastMessage);
				captureScreenShot(driver, "Buy_Subscription_Order_Morning");
				softAssert.fail("Subscription success message mismatch");
			}

		} catch (Exception e) {

			logger.error("Exception occurred in Buy_Subscription_Order_Morning: " + e.getMessage());
			// Log the error message to the console
			ExtentManager.getTest().fail("Buy_Subscription_Order_Morning failed due to: " + e.getMessage());
			e.printStackTrace(); // Print stack trace in console for debugging
			try {
				captureScreenShot(driver, "Buy_Subscription_Order_Morning");
			} catch (IOException ioException) {
				logger.error("Screenshot capture failed: " + ioException.getMessage());
				ExtentManager.getTest().fail("Screenshot capture failed: " + ioException.getMessage());
			}
			// ⚠️ Create SoftAssert outside the try-catch block to avoid scope issues if
			// reused
			softAssert.fail("Error due to: " + e.getMessage());
			// ✅ Assert all to collect the result and allow the test to fail gracefully

		}
		softAssert.assertAll(); // 🚨 You MUST call this or TestNG won't fail the test

	}

	@Test(priority = 5)
	public void Buy_Subscription_Every2Day_Evening() throws IOException, InterruptedException {

		SoftAssert softAssert = new SoftAssert(); // ✅ Initialize at the start
		try {
			Index_Page IP = new Index_Page(driver);
			IP.clickAllProduct(); // Click on "All Products" to view products
			logger.info("Clicked on All Products to view products.");
			AllProduct_Page allProductPage = new AllProduct_Page(driver);
			String SecondProductName = allProductPage.getSecondProductName();
			logger.info("Second Product Name: " + SecondProductName);
			allProductPage.clickSecondProduct(); // Click on the second product to view details
			logger.info("Clicked on the Second product to view details.");

			ProductView_Page productViewPage = new ProductView_Page(driver);
			String productName = productViewPage.getProductName();
			logger.info("Product Name: " + productName);
			productViewPage.selectDinnerOption(); // Select the dinner option
			logger.info("Selected Dinner option for the product.");

			productViewPage.clickSubscribeButton(); // Click on "Subscribe" button
			logger.info("Clicked on Subscribe button for the product.");
			productViewPage.selectEveryTwoDaysOption();
			// Select the "Every 2 Days" subscription option
			logger.info("Selected Every 2 Days subscription option for the product.");

			productViewPage.clickSubscribeSubmitButton2(); // Click on "Subscribe" button to confirm subscription
			logger.info("Clicked on Subscribe button to confirm subscription.");
			String toastMessage = productViewPage.getToastMessage(); // Get the toast message after subscription
			logger.info("Toast Message: " + toastMessage);
			if (toastMessage.contains("You've successfully created a subscription.")) {
				logger.info("Subscription added successfully - Passed");
				ExtentManager.getTest().pass("Subscription added successfully: " + toastMessage);
				softAssert.assertTrue(true, "Subscription success message matched");
			} else {
				logger.error("Subscription failed - Failed");
				ExtentManager.getTest().fail("Subscription failed: " + toastMessage);
				captureScreenShot(driver, "Buy_Subscription_Order_Evening");
				softAssert.fail("Subscription success message mismatch");
			}

		} catch (Exception e) {

			logger.error("Exception occurred in Buy_Subscription_Order_Evening: " + e.getMessage());
			// Log the error message to the console
			ExtentManager.getTest().fail("Buy_Subscription_Order_Evening failed due to: " + e.getMessage());
			e.printStackTrace(); // Print stack trace in console for debugging
			try {
				captureScreenShot(driver, "Buy_Subscription_Order_Evening");
			} catch (IOException ioException) {
				logger.error("Screenshot capture failed: " + ioException.getMessage());
				ExtentManager.getTest().fail("Screenshot capture failed: " + ioException.getMessage());
			}
			// ⚠️ Create SoftAssert outside the try-catch block to avoid scope issues if
			// reused
			softAssert.fail("Error due to: " + e.getMessage());
			// ✅ Assert all to collect the result and allow the test to fail gracefully
		}
		softAssert.assertAll(); // 🚨 You MUST call this or TestNG won't fail the test

	}

	@Test(priority = 6)

	public void Buy_Subscription_3Day() throws IOException, InterruptedException {

		SoftAssert softAssert = new SoftAssert(); // ✅ Initialize at the start
		try {
			Index_Page IP = new Index_Page(driver);
			IP.clickAllProduct(); // Click on "All Products" to view products
			logger.info("Clicked on All Products to view products.");
			AllProduct_Page allProductPage = new AllProduct_Page(driver);
			String SecondProductName = allProductPage.getSecondProductName();
			logger.info("Second Product Name: " + SecondProductName);
			allProductPage.clickSecondProduct(); // Click on the second product to view details
			logger.info("Clicked on the Second product to view details.");

			ProductView_Page productViewPage = new ProductView_Page(driver);
			String productName = productViewPage.getProductName();
			logger.info("Product Name: " + productName);
			productViewPage.selectDinnerOption(); // Select the dinner option
			logger.info("Selected Dinner option for the product.");
			productViewPage.clickSubscribeButton(); // Click on "Subscribe" button
			logger.info("Clicked on Subscribe button for the product.");

			// Select the "Every 3 Days" subscription option
			productViewPage.selectEveryThreeDaysOption();

			// Select the "Every 3 Days" subscription option
			logger.info("Selected Every 3 Days subscription option for the product.");

			productViewPage.clickSubscribeSubmitButton3(); // Click on "Subscribe" button to confirm subscription
			logger.info("Clicked on Subscribe button to confirm subscription.");
			// Get the toast message after subscription

			String toastMessage = productViewPage.getToastMessage(); // Get the toast message after subscription
			logger.info("Toast Message: " + toastMessage);
			if (toastMessage.contains("You've successfully created a subscription.")) {
				logger.info("Subscription added successfully - Passed");
				ExtentManager.getTest().pass("Subscription added successfully: " + toastMessage);
				softAssert.assertTrue(true, "Subscription success message matched");
			} else {
				logger.error("Subscription failed - Failed");
				ExtentManager.getTest().fail("Subscription failed: " + toastMessage);
				captureScreenShot(driver, "Buy_Subscription_Order_Evry 3_Days");

				softAssert.fail("Subscription success message mismatch");
			}

		} catch (Exception e) {

			logger.error("Exception occurred in Buy_Subscription_Order_Weekly: " + e.getMessage());
			// Log the error message to the console
			ExtentManager.getTest().fail("Buy_Subscription_Every 3_day failed due to: " + e.getMessage());
			e.printStackTrace(); // Print stack trace in console for debugging
			try {
				captureScreenShot(driver, "Buy_Subscription_Order_Weekly");
			} catch (IOException ioException) {
				logger.error("Screenshot capture failed: " + ioException.getMessage());
				ExtentManager.getTest().fail("Screenshot capture failed: " + ioException.getMessage());
			}
			// ⚠️ Create SoftAssert outside the try-catch block to avoid scope issues if
			// reused
			softAssert.fail("Error due to: " + e.getMessage());
			// ✅ Assert all to collect the result and allow the test to fail gracefully
		}
		softAssert.assertAll(); // 🚨 You MUST call this or TestNG won't fail the test
	}
	
}
