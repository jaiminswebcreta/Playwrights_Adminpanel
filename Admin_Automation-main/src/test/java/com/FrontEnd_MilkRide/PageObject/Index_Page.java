package com.FrontEnd_MilkRide.PageObject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Index_Page  {
	WebDriver driver;

	public Index_Page(WebDriver rdriver) {
		this.driver = rdriver;
		PageFactory.initElements(driver, this);
	}

	@FindBy(xpath = "//a[normalize-space()='Home']")
	WebElement home;
	
	public String getHometext() {		
		return home.getText(); 		
	}
		
	@FindBy(xpath = "//a[normalize-space()='All Products']")
	
	WebElement allproduct;
	public String getAllProducttext() {		
		return allproduct.getText();
	}
	public void clickAllProduct() {		
		allproduct.click();		
	}
	@FindBy(xpath = "//a[normalize-space()='My Orders']")
	
	WebElement myorder;	
	public String getmyordertext() {		
		return myorder.getText();		
	}
	
	@FindBy(xpath = "//a[normalize-space()='My Subscriptions']")
	WebElement mysubscription;
	public String getmysubscriptiontext() {		
		return mysubscription.getText();	
	}
	
}
