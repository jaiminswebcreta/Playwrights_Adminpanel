package com.FrontEnd_MilkRide.PageObject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

public class My_Subscription_Page {
	WebDriver driver;

	public  My_Subscription_Page(WebDriver rdriver) {
		this.driver = rdriver;
		PageFactory.initElements(driver, this);
	}
	

}
