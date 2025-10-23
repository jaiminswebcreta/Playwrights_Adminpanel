package com.FrontEnd_MilkRide.PageObject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class AllProduct_Page {
	WebDriver driver;

	public AllProduct_Page(WebDriver rdriver) {
		this.driver = rdriver;
		PageFactory.initElements(driver, this);
	}

	@FindBy(xpath = "(//div[contains(@class, 'product-section')])[1]")
	WebElement firstProduct;
	public String getFirstProductName() {
		return firstProduct.getText();
	}
	public void clickFirstProduct() {
		firstProduct.click();
	}
	
	@FindBy(xpath = "(//div[contains(@class, 'product-section')])[2]")
	WebElement secondProduct;
	public String getSecondProductName() {
		return secondProduct.getText();
	}
	public void clickSecondProduct() {
		secondProduct.click();
	}
}
