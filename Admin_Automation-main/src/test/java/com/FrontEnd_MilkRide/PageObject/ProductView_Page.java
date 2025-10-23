package com.FrontEnd_MilkRide.PageObject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import java.time.Duration;

public class ProductView_Page {
		
		WebDriver driver;

	public ProductView_Page(WebDriver rdriver) {
		this.driver = rdriver;
		PageFactory.initElements(driver, this);
	}

	@FindBy(xpath = "//h3[@class='product-name']")
	WebElement productName;
	public String getProductName() {
		return productName.getText();
	}
	@FindBy(xpath = "(//button[normalize-space()='Buy once'])[1]")
	WebElement buyOnceButton;
	public void clickBuyOnceButton() {
		buyOnceButton.click();
	}
	
	@FindBy(xpath = "(//button[normalize-space()='Add to cart'])[1]")
	WebElement addToCartButton;
	public void clickAddToCartButton() {
		addToCartButton.click();
	}
	@FindBy(xpath = "(//i[@class='bi-cart'])[1]")
	WebElement cartIcon;
	public void clickCartIcon() {
	    WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
	    wait.until(ExpectedConditions.elementToBeClickable(cartIcon));
	    cartIcon.click();
	}
	@FindBy(xpath = "(//label[normalize-space()='Dinner'])[1]")
	WebElement dinnerOption;
	public void selectDinnerOption() {
		dinnerOption.click();
	}
	
	@FindBy(xpath = "(//button[contains(text(),'Subscribe @ ')])[1]")
	WebElement subscribeButton;
	public void clickSubscribeButton() {
		subscribeButton.click();
	}
	
	@FindBy(xpath = "(//button[normalize-space()='Everyday'])[1]")
	WebElement everydayOption;
	public void selectEverydayOption() {
		everydayOption.click();
	}
	@FindBy(xpath = "(//button[@type='submit'][normalize-space()='Subscribe'])[1]")
	
	WebElement subscribeSubmitButton;
	public void clickSubscribeSubmitButton() {
		subscribeSubmitButton.click();
	}
	@FindBy(xpath = "(//button[@type='submit'][normalize-space()='Subscribe'])[2]")
	WebElement subscribeSubmitButton2;
	public void clickSubscribeSubmitButton2() {
		subscribeSubmitButton2.click();
	}
	@FindBy(xpath = "(//button[@type='submit'][normalize-space()='Subscribe'])[3]")
	WebElement subscribeSubmitButton3;
	public void clickSubscribeSubmitButton3() {
		subscribeSubmitButton3.click();
	}
	
	@FindBy(xpath = "(//button[@type='submit'][normalize-space()='Subscribe'])[4]")
	WebElement subscribeSubmitButton4;
	public void clickSubscribeSubmitButton4() {
		subscribeSubmitButton4.click();
	}
	
	@FindBy(xpath = "(//div[@class='toast-body'])[1]")
	WebElement toastMessage;
	public String getToastMessage() {
		WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
		wait.until(ExpectedConditions.visibilityOf(toastMessage));
		return toastMessage.getText();
	}
	@FindBy(xpath = "(//button[contains(text(),'Every 2')])[1]")
	WebElement everyTwoDaysOption;
	public void selectEveryTwoDaysOption() {
		everyTwoDaysOption.click();
	}
	
	@FindBy(xpath = "(//button[contains(text(),'Every 3')])[1]")
	WebElement everyThreeDaysOption;
	public void selectEveryThreeDaysOption() {
		everyThreeDaysOption.click();
	}
	
	
	

}
