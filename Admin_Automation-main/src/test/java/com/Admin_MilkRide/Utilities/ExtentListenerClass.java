package com.Admin_MilkRide.Utilities;



import org.openqa.selenium.WebDriver;
import org.testng.ITestContext;
import org.testng.ITestListener;
import org.testng.ITestResult;
import com.Admin_MilkRide.Module.Baseclass;
import com.FrontEnd_MilkRide.Module.FrontEnd_BassClass;
import com.aventstack.extentreports.MediaEntityBuilder;
import com.aventstack.extentreports.Status;
import com.aventstack.extentreports.markuputils.ExtentColor;
import com.aventstack.extentreports.markuputils.MarkupHelper;

public class ExtentListenerClass extends Baseclass implements ITestListener {

    @Override
    public void onStart(ITestContext context) {
        // The ExtentManager creates the report instance when it's first called.
        // This line ensures it's initialized at the very beginning.
        ExtentManager.getInstance(); 
        System.out.println("On Start method invoked.... Report is ready.");
    }

    @Override
    public void onFinish(ITestContext context) {
        System.out.println("On Finish method invoked.... Flushing report.");
        // Flush the report to write all data to the HTML file
        ExtentManager.getInstance().flush();
    }

    @Override
    public void onTestStart(ITestResult result) {
        // Create a new test entry in the report when a test method starts
        ExtentManager.startTest(result.getMethod().getMethodName(), result.getMethod().getDescription());
        System.out.println("Test Started: " + result.getName());
    }

    @Override
    public void onTestSuccess(ITestResult result) {
        System.out.println("Test Passed: " + result.getName());
        // Log the final status as PASS
        ExtentManager.getTest().log(Status.PASS, MarkupHelper.createLabel("Test Case Passed: " + result.getName(), ExtentColor.GREEN));
    }

    @Override
    public void onTestFailure(ITestResult result) {
        System.out.println("Test Failed: " + result.getName());
        ExtentManager.getTest().log(Status.FAIL,
                MarkupHelper.createLabel("Test Case Failed: " + result.getName(), ExtentColor.RED));
        ExtentManager.getTest().fail(result.getThrowable());

        WebDriver driver = null;
        String testName = result.getName();

        // Dynamically choose driver from Admin or Frontend base class
        if (Baseclass.driver != null) {
            driver = Baseclass.driver;
        } else if (FrontEnd_BassClass.driver != null) {
            driver = FrontEnd_BassClass.driver;
        }

        if (driver != null) {
            try {
                String screenshotPath;
                if (driver == Baseclass.driver) {
                    screenshotPath = Baseclass.captureScreenShot(driver, testName);
                } else {
                    screenshotPath = FrontEnd_BassClass.captureScreenShot(driver, testName);
                }

                ExtentManager.getTest().fail("Screenshot on failure:",
                        MediaEntityBuilder.createScreenCaptureFromPath(screenshotPath).build());
            } catch (Exception e) {
                e.printStackTrace();
                ExtentManager.getTest().fail("Failed to capture screenshot: " + e.getMessage());
            }
        } else {
            ExtentManager.getTest().fail("Screenshot not captured because WebDriver instance was null.");
        }
    }

    @Override
    public void onTestSkipped(ITestResult result) {
        System.out.println("Test Skipped: " + result.getName());
        ExtentManager.getTest().log(Status.SKIP,
                MarkupHelper.createLabel("Test Case Skipped: " + result.getName(), ExtentColor.YELLOW));
    }
    
    // Other ITestListener methods...
}