package com.FrontEnd_MilkRide.Module;

import java.io.File;
import java.io.IOException;
import java.time.Duration;

import org.apache.commons.io.FileUtils;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;


import com.Admin_MilkRide.Utilities.ReadConfig;

import io.github.bonigarcia.wdm.WebDriverManager;

public class FrontEnd_BassClass {
	ReadConfig readconfig = new ReadConfig();

	String url = readconfig.getFrontendUrl(); // ✅ corrected
	String browser = readconfig.getbrowser();
	public static WebDriver driver;
	
	public static final Logger logger = LogManager.getLogger(FrontEnd_BassClass.class);
	
	@BeforeClass
	public void setup() {
		switch (browser.toLowerCase()) {
		case "chrome":
			WebDriverManager.chromedriver().setup();
			driver = new ChromeDriver();

			break;

		case "firefox":
			WebDriverManager.firefoxdriver().setup();
			driver = new FirefoxDriver();

			break;
		case "msedge":
			WebDriverManager.edgedriver().setup();
			driver = new EdgeDriver();

			break;

		default:
			driver = null;
			break;
		}
		
		// Maximize the browser window
		driver.manage().window().maximize();
		//implicitywait
		driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));

		//for logging
		
		
		//open url
		
				driver.get(url);
				
				logger.info("Url Open");
		
		
	}
	
	@AfterClass
	public void tearDown() {
		driver.close();
		driver.quit();
		
		
	}
	//user method to capture screen shot
	// In Baseclass.java
	public static String captureScreenShot(WebDriver driver, String testName) throws IOException {
		TakesScreenshot screenshot = (TakesScreenshot) driver;
		File src = screenshot.getScreenshotAs(OutputType.FILE);
		
		// Add a timestamp to make filenames unique
		String destPath = System.getProperty("user.dir") + "//screenshots//" + testName + "_" + System.currentTimeMillis() + ".png";
		File dest = new File(destPath);

		FileUtils.copyFile(src, dest);
		
		return destPath; // Return the path so the listener can use it
	}
}
