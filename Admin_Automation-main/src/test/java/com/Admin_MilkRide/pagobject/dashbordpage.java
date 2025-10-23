package com.Admin_MilkRide.pagobject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class dashbordpage {
	// Crete object of webdrive
	WebDriver lDriver;

	public dashbordpage(WebDriver rDriver) {

		lDriver = rDriver;

		PageFactory.initElements(rDriver, this);
	}
	// identify webelements

	@FindBy(xpath = "(//span[normalize-space()='Dashboard'])[1]")
	WebElement dash;
	// identify Webelement action

	@FindBy(xpath = "//span[contains(text(),'Hub Manager')]")

	WebElement hubmngr;
	@FindBy(xpath = "(//span[normalize-space()='All Hubs'])[1]")

	WebElement Allhub;

	@FindBy(xpath = "(//span[contains(text(),'Delivery Management')])[1]")
	WebElement deliverymanagementElement;

	@FindBy(xpath = "(//span[normalize-space()='Delivery Dashboard'])[1]")
	WebElement deliverydashbordElement;

	@FindBy(xpath = "(//span[contains(text(),'Billing and History')])[1]")
	WebElement billinghistoryElement;

	@FindBy(xpath = "(//span[normalize-space()='Invoices'])[1]")
	WebElement invoicElement;

	@FindBy(xpath = "(//span[contains(text(),'Customer Management')])[1]")
	WebElement customer_ManagementElement;

	@FindBy(xpath = "(//span[@class='menu-title'][normalize-space()='Customers'])[1]")
	WebElement customerElement;

	@FindBy(xpath = "(//span[contains(text(),'Product Catalog')])[1]")
	WebElement product_catalogElement;
	@FindBy(xpath = "(//span[normalize-space()='Category'])[1]")
	WebElement categoryElement;

	@FindBy(xpath = "(//span[contains(text(),'Inventory Management')])[1]")

	WebElement inventory_ManagmentElement;

	@FindBy(xpath = "(//span[normalize-space()='Warehouse'])[1]")
	WebElement warehousElement;

	@FindBy(xpath = "(//span[normalize-space()='FlexProduct Plan'])[1]")
	WebElement felxproductElement;

	@FindBy(xpath = "(//span[normalize-space()='Settings'])[1]")
	WebElement settingsElement;

	@FindBy(xpath = "(//span[normalize-space()='Banner'])[1]")
	WebElement bannerElement;
	@FindBy(xpath = "(//span[contains(text(),'Location Manager')])[1]")
	WebElement locationManagerElement;

	// Add this to your dashbordpage class

	@FindBy(xpath = "(//span[normalize-space()='Region'])[1]")
	WebElement regionElement;

	@FindBy(xpath = "(//span[contains(text(),'Users & Roles')])[1]")
	WebElement usersAndRolesElement;

	@FindBy(xpath = "(//span[normalize-space()='User'])[1]")
	WebElement userElement;

	// Action Performed
	public void clickUser() {
		userElement.click();
	}

	public void clickUsersAndRoles() {
		usersAndRolesElement.click();
	}

	// Action Performed

	public void clickRegion() {
		regionElement.click();
	}

	public void clickLocationManager() {
		locationManagerElement.click();
	}

	// Action Performs
	public void clickdashbord() {
		dash.click();

	}

	public String getdahbordtext() {

		return dash.getText();
	}

	public void clickhubmanager() {
		hubmngr.click();
		Allhub.click();

	}

	public void hubmanager() {
		hubmngr.click();

	}

	public void clicdeliverymanagement() {

		deliverymanagementElement.click();
		deliverydashbordElement.click();

	}

	public void Click_Billing_History() {
		billinghistoryElement.click();
	}

	public void Click_invoice() {
		invoicElement.click();
	}

	public void Click__Customer_Management() {
		customer_ManagementElement.click();
	}

	public void Click__Customer() {
		customerElement.click();
	}

	public void Click_Product_Catalog() {
		product_catalogElement.click();

	}

	public void Click_Category() {
		categoryElement.click();

	}

	public void Click_Inventory_Management() {
		inventory_ManagmentElement.click();

	}

	public void click_Warehouse() {
		warehousElement.click();

	}

	public void Click_Flexproduct() {
		felxproductElement.click();

	}

	public void Click_Settings() {
		settingsElement.click();

	}

	public void Click_Banner() {
		bannerElement.click();

	}

	// Add to dashbordpage.java

	@FindBy(xpath = "(//span[normalize-space()='Reports'])[1]")
	WebElement reportsElement;

	public void clickReports() {
		reportsElement.click();
	}
	
	@FindBy(xpath = "(//span[normalize-space()='View More'])[1]")
	WebElement viewMoreElement;
	
	public void clickViewMore() {
		viewMoreElement.click();
	}
	
	@FindBy(xpath = "(//span[contains(text(),'Support Management')])[1]")	
	WebElement supportManagementElement;
	public void clickSupportManagement() {
		supportManagementElement.click();
	}
	
	@FindBy(xpath = "(//span[normalize-space()='Tickets'])[1]")
	WebElement ticketsElement;
	public void clickTickets() {
			ticketsElement.click();
			
	}
	
	
	
		@FindBy(xpath = "(//span[@class='menu-title'][normalize-space()='Features'])[1]")
		WebElement featuresElement;
		public void clickFeatures() {
				featuresElement.click();
					
		}
		@FindBy(xpath = "(//span[normalize-space()='Addon Features'])[1]")
		WebElement addonFeaturesElement;
		public void clickAddonFeatures() {
			addonFeaturesElement.click();
		}
		
		@FindBy(xpath = "(//span[normalize-space()='General Setting'])[1]")
		WebElement generalSettingElement;
		public void clickGeneralSetting() {
			generalSettingElement.click();
		}
		@FindBy(xpath = "(//span[normalize-space()='Manage CMS Pages'])[1]")
		WebElement manageCMSElement;
		public void clickManageCMS() {
			manageCMSElement.click();
		}
		@FindBy(xpath = "(//span[normalize-space()='Site Management'])[1]")	
		WebElement siteManagementElement;
		public void clickSiteManagement() {
			siteManagementElement.click();
		}
		
			

}
