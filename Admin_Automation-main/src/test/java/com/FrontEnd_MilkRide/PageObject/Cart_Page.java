package com.FrontEnd_MilkRide.PageObject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Cart_Page {

	WebDriver driver;

	public Cart_Page(WebDriver rdriver) {
		this.driver = rdriver;
		PageFactory.initElements(driver, this);
	}

	@FindBy(xpath = "//div[@class='order-product-name']//strong")
	WebElement firstCartProductName;

	public String getCartProductName() {
		return firstCartProductName.getText();

	}
	
	@FindBy(xpath = "(//button[normalize-space()='Place Order'])[1]")
	WebElement placeOrderButton;
	public void clickPlaceOrderButton() {
		placeOrderButton.click();
	}
	
}
