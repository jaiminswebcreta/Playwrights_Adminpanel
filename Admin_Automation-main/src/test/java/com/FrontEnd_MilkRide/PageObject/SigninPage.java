package com.FrontEnd_MilkRide.PageObject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class SigninPage {
	WebDriver driver;

	public SigninPage(WebDriver rdriver) {
		this.driver = rdriver;
		PageFactory.initElements(driver, this);
	}

	// 🔍 Update these locators using correct IDs or XPaths
	@FindBy(id = "mobileNumber") // Replace with the correct ID or name if different
	WebElement mobileInput;

	@FindBy(xpath = "(//button[normalize-space()='Continue'])[1]") // or exact Submit/Login button text
	WebElement continueBtn;

	public void enterMobileNumber(String mobileNumber) {
		mobileInput.clear(); // Clear any existing text
		mobileInput.sendKeys(mobileNumber); // Enter the mobile number
	}
	public void clickContinue() {
		continueBtn.click(); // Click the continue button
	}

}
