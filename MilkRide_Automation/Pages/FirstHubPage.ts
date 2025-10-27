import { Locator, Page } from "@playwright/test";
export class FirstHubPage {

    readonly page: Page;
    readonly hubDetailsHeader: Locator;
    readonly accountsTab: Locator;
    readonly locationsTab: Locator
    readonly productsTab: Locator;
    readonly contactsTab: Locator;
    readonly DocumentsTab: Locator;
    readonly DiableareaTab: Locator;
    readonly payments_getewayTab: Locator;
    readonly BatchTab: Locator;
    readonly dashboard: Locator;

    constructor(page: Page) {
        this.page = page;
        this.hubDetailsHeader = page.locator(`(//h1[contains(text(),'Hub:')])[1]`);
        this.accountsTab = page.locator(`(//a[normalize-space()='Accounts'])[1]`);
        this.locationsTab = page.locator(`(//a[normalize-space()='Locations'])[1]`);
        this.productsTab = page.locator(`(//a[normalize-space()='Products'])[1]`);
        this.contactsTab = page.locator(`(//a[normalize-space()='Contacts'])[1]`);
        this.DocumentsTab = page.locator(`(//a[normalize-space()='Documents'])[1]`);
        this.DiableareaTab = page.locator(`(//a[normalize-space()='Disabled Area'])[1]`);
        this.payments_getewayTab = page.locator(`(//a[normalize-space()='Payment Gateway'])[1]`);
        this.BatchTab = page.locator(`(//a[contains(text(),'Batches')])[1]`);
        this.dashboard = page.locator(`(//span[normalize-space()='Dashboard'])[1]`);
    }
  async verifyFirstHubPage() {
    const currentUrl = this.page.url();
    console.log('🌐 Current URL is: ' + currentUrl);

    await this.hubDetailsHeader.isVisible();
    console.log('✅ Hub Details Header is visible');
    const headerText = await this.hubDetailsHeader.textContent();
    console.log(`📝 Header text: ${headerText}`);
    await this.accountsTab.waitFor({ state: 'visible' });
    console.log('✅ Accounts Tab is visible');
    await this.accountsTab.click();
    console.log('Clicked on Accounts Tab');
    await this.page.waitForLoadState('load');
    await this.locationsTab.waitFor({ state: 'visible' });
    console.log('✅ Locations Tab is visible');
    await this.locationsTab.click();
    console.log('Clicked on Locations Tab');
    await this.page.waitForLoadState('load');
    await this.productsTab.waitFor({ state: 'visible' });
    console.log('✅ Products Tab is visible');
    await this.productsTab.click();
    console.log('Clicked on Products Tab');
    await this.page.waitForLoadState('load');
    await this.contactsTab.waitFor({ state: 'visible' });
    console.log('✅ Contacts Tab is visible');
    await this.contactsTab.click();
    console.log('Clicked on Contacts Tab');
    await this.page.waitForLoadState('load');
    await this.DocumentsTab.waitFor({ state: 'visible' });
    console.log('✅ Documents Tab is visible');
    await this.DocumentsTab.click();
    console.log('Clicked on Documents Tab');
    await this.page.waitForLoadState('load');
    await this.DiableareaTab.waitFor
    ({ state: 'visible' });
    console.log('✅ Disable Area Tab is visible');
    await this.DiableareaTab.click();
    console.log('Clicked on Disable Area Tab');
    await this.page.waitForLoadState('load');
    await this.payments_getewayTab.waitFor({ state: 'visible' });
    console.log('✅ Payment Gateway Tab is visible');
    await this.payments_getewayTab.click();
    console.log('Clicked on Payment Gateway Tab');
    await this.page.waitForLoadState('load');
    await this.BatchTab.waitFor({ state: 'visible' });
    console.log('✅ Batches Tab is visible');
    await this.BatchTab.click();
    console.log('Clicked on Batches Tab');
    await this.page.waitForLoadState('load');
    await this.dashboard.waitFor({ state: 'visible' });
    console.log('✅ Dashboard link is visible');
    await this.dashboard.click();
    console.log('Clicked on Dashboard link');
    await this.page.waitForLoadState('domcontentloaded');
    
    // const hubName = await this.hubDetailsHeader.textContent();
    // console.log('🏠 Hub Name: ' + hubName?.trim());

    // // Define tabs in order
    // const tabs = [
    //     { name: 'Accounts', locator: this.accountsTab },
    //     { name: 'Locations', locator: this.locationsTab },
    //     { name: 'Products', locator: this.productsTab },
    //     { name: 'Contacts', locator: this.contactsTab },
    //     { name: 'Documents', locator: this.DocumentsTab },
    //     { name: 'Disable Area', locator: this.DiableareaTab },
    //     { name: 'Payment Gateway', locator: this.payments_getewayTab },
    //     { name: 'Batches', locator: this.BatchTab },
        
    // ];

    // for (const tab of tabs) {
    //     await tab.locator.waitFor({ state: 'visible' });
    //     console.log(`✅ ${tab.name} Tab is visible`);
    //     await tab.locator.click();
    //     console.log(`Clicked on ${tab.name} Tab`);
    //     // Wait for DOM content or a key element instead of networkidle
    //     if (tab.name === 'Dashboard') {
    //         await this.page.waitForLoadState('domcontentloaded');
    //     } else {
    //         await this.page.waitForLoadState('load');
    //     }
    //     console.log(`🌐 ${tab.name} Tab URL: ` + this.page.url());
    // }
    // await this.dashboard.waitFor({ state: 'visible' });
    // console.log('✅ Dashboard link is visible');
    // await this.dashboard.click();
    // console.log('Clicked on Dashboard link');


}
    }


