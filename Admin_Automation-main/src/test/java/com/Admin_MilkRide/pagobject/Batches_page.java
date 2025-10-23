package com.Admin_MilkRide.pagobject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Batches_page {
	
//	 Create object of webdriver
	 WebDriver lDriver;

	 public Batches_page(WebDriver rDriver) {

			lDriver = rDriver;

			PageFactory.initElements(rDriver, this);
		}

//	 Identify web elements
	 @FindBy(xpath = "(//h1[normalize-space()='Batch List'])[1]")
	 private WebElement batchListHeader;
	 public String getBatchListHeaderText() {
		 return batchListHeader.getText();
	 }
	 @FindBy(xpath = "(//span[normalize-space()='Thresholds'])[1]")
	 private WebElement thresholdsButton;
	
	 
	 public void clickThresholdsButton() {
		 thresholdsButton.click();
	 }
	
}
