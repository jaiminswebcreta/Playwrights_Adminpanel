package com.FrontEnd_MilkRide.PageObject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class MyOrder_Page {

	WebDriver driver;

	public  MyOrder_Page(WebDriver rdriver) {
		this.driver = rdriver;
		PageFactory.initElements(driver, this);
	}

}