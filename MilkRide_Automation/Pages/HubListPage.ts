import { Locator,Page } from "@playwright/test";
export class HubListPage{

readonly page:Page;
readonly hubListHeader:Locator;
readonly addHubButton:Locator;
readonly FirstHub:Locator;

constructor(page:Page){
    this.page=page;
    this.hubListHeader=page.locator(`(//h1[normalize-space()='Hubs List'])[1]`);
    this.addHubButton=page.locator(`//span[normalize-space()='Add Hub']`);
    this.FirstHub=page.locator(`(//div[@id='kt_table_users_wrapper']//table//tbody//tr[1]//td[2])//a[1]`);
}
async verifyHubListPage(){
    const currentUrl = this.page.url();
    console.log('🌐 Current URL is: ' + currentUrl);
    await this.hubListHeader.isVisible();
    console.log('Hub List Page is visible');
    await this.addHubButton.isVisible();
    console.log('Add Hub Button is visible');
    await this.FirstHub.isVisible();
    console.log('First Hub is visible');
    await this.FirstHub.textContent();
    console.log('First Hub name is: ' + await this.FirstHub.textContent());
    await this.FirstHub.click();
    console.log('Clicked on First Hub');
    await this.page.waitForLoadState('networkidle');
    

    // Get current URL
    
}

}