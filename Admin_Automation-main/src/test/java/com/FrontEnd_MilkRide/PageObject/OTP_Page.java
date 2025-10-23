package com.FrontEnd_MilkRide.PageObject;

import java.time.Duration;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class OTP_Page  {
	WebDriver driver;

	public OTP_Page(WebDriver rdriver) {
		this.driver = rdriver;
		PageFactory.initElements(driver, this);
	}

	
	@FindBy(xpath = "(//h4[contains(text(),'OTP Verification')])[1]") 
	WebElement otpVerificationText;
	
	public String getOtpVerificationText() {
		return otpVerificationText.getText(); // Returns the text of the OTP verification header
	}
	
	@FindBy(id = "submitButton") 
		
	WebElement submitButton;
	public void clickSubmitButton() {
		WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
		try {
			// Wait until the button is clickable
			wait.until(ExpectedConditions.elementToBeClickable(submitButton));
			submitButton.click();
		} catch (Exception e) {
			System.out.println("Submit button not clickable: " + e.getMessage());
		}
	}


}
