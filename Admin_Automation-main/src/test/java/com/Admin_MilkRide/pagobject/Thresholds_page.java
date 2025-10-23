package com.Admin_MilkRide.pagobject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Thresholds_page {
	
	// Create object of webdriver
	WebDriver lDriver;

	public Thresholds_page(WebDriver rDriver) {
		lDriver = rDriver;
		PageFactory.initElements(rDriver, this);
	}

	// Identify web elements
	@FindBy(xpath = "(//h1[normalize-space()='Inventory Threshold Settings'])[1]")
	private WebElement thresholdListHeader;

	public String getThresholdListHeaderText() {
		return thresholdListHeader.getText();
	}

	@FindBy(xpath = "(//span[@class='menu-title'][normalize-space()='Settings'])[1]")
	private WebElement settingsButton;
	public void clickSettingsButton() {
		settingsButton.click();
	}

}
