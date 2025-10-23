import {test, expect} from '@playwright/test';  


test.describe.serial('adminalltest',()=>{


test('basic test', async({page})=>{

    await page.goto('https://dev.milkride.com/admin/login');

    await page.locator(`(//input[@id='email'])[1]`).fill('ruralbloomroots@gmail.com');
    console.log('Filled username');
    await page.locator(`(//input[@id='password'])[1]`).fill('Rural@2024');
    console.log('Filled Password');
    await page.locator(`(//button[@id='kt_sign_in_submit'])[1]`).click();
    console.log('Clicked on login button');

});
test('Hub Manager', async ({ page }) => {
    await page.locator(`(//span[contains(text(),'Hub Manager')])[1]`).click();
    console.log('Clicked on Hub Manager');
    
    await page.locator(`(//span[normalize-space()='All Hubs'])[1]`).click();
    console.log('Clicked on All Hubs');
    await expect(page.locator(`(//h1[normalize-space()='Hubs List'])[1]`)).toBeVisible();
    console.log('Hub List is visible');
    await page.locator(`(//a[normalize-space()='Add Hub'])[1]`).isVisible();
    console.log('Add Hub button is visible');
    await page.locator(`((//div[@class="table-responsive"])//td[2])[1]`).click();
    console.log('Clicked on first Hub');
    const Hubname = await page.locator(`(//h1[contains(text(),'Hub:')])[1]`).textContent();
    console.log('Hub Name is: ' + Hubname);    
    const currentUrl = page.url();
    console.log('🌐 All Hubs URL is: ' + currentUrl);
    await page.goBack();
    console.log('Navigated back to All Hubs page');
});
})