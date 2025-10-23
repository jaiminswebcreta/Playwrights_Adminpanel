package com.FrontEnd_MilkRide.PageObject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class ThankYou_Page {

	WebDriver driver;

	public ThankYou_Page(WebDriver rdriver) {
		this.driver = rdriver;
		PageFactory.initElements(driver, this);
	}

	@FindBy(xpath = "(//p[@class='text-dark text-center'])[1]")
	WebElement thankYouMessage;
	public String getThankYouMessage() {
		return thankYouMessage.getText();
	}
}
