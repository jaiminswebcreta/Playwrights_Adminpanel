import { test } from '@playwright/test';
import '../utils/logger'; 
import { LoginPage } from '../Pages/LoginPage';
import { HomePage } from '../Pages/HomePage';
import { HubListPage } from '../Pages/HubListPage';
import { FirstHubPage } from '../Pages/FirstHubPage';
import { DeliveryPage } from '../Pages/DeliveryPage';
import { WarehousePage } from '../Pages/Inventory/warehousePage';
import { SupplierPage } from '../Pages/Inventory/SupplierPage';
import { Purchase_inventoryPage } from '../Pages/Inventory/Purchase_inventoryPage';
import { BatchesPage } from '../Pages/Inventory/BatchesPage';
import { ThresholdsPage } from '../Pages/Inventory/ThresholdsPage';
import { SettingsPage } from '../Pages/Inventory/SettingsPage'; 
import { PushNotificationPage } from '../Pages/Notification/PushNotificationPage';  
import {New_Aeeival_ProductsPage} from '../Pages/Notification/New_Arrival_ProductsPage';
import {TemplatesPage} from '../Pages/Notification/TemplatesPage';


test.describe.serial('All Module Test', () => {

    let loginPage: LoginPage;
    let homePage: HomePage;
    let hubListPage: HubListPage;
    let firstHubPage: FirstHubPage;
    let deliveryPage: DeliveryPage;
    let warehousePage: WarehousePage;
    let supplierPage: SupplierPage;
    let purchaseInventoryPage: Purchase_inventoryPage;
    let batchesPage: BatchesPage;
    let thresholdsPage: ThresholdsPage;
    let settingsPage: SettingsPage;
    let pushNotificationPage: PushNotificationPage;
    let newArrivalProductsPage: New_Aeeival_ProductsPage;
    let templatesPage: TemplatesPage;


  test.beforeAll(async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();

    loginPage = new LoginPage(page);
    homePage = new HomePage(page);
    hubListPage = new HubListPage(page);
    firstHubPage = new FirstHubPage(page);
    deliveryPage = new DeliveryPage(page);
    warehousePage = new WarehousePage(page);
    supplierPage = new SupplierPage(page);
    purchaseInventoryPage = new Purchase_inventoryPage(page);
    batchesPage = new BatchesPage(page);
    thresholdsPage = new ThresholdsPage(page);
    settingsPage = new SettingsPage(page);
    pushNotificationPage = new PushNotificationPage(page);
    newArrivalProductsPage = new New_Aeeival_ProductsPage(page);
    templatesPage = new TemplatesPage(page);

  
 

    // Login once
    await loginPage.OpenURL();
   
    await loginPage.loginToApp('ruralbloomroots@gmail.com', 'Rural@2024');
  
    await page.waitForTimeout(3000);
    await homePage.indexToApp();
   
  });

  test('Navigate to Hub Manager', async () => {
    await homePage.navigateToHubManager();
    await hubListPage.verifyHubListPage();
    await firstHubPage.verifyFirstHubPage();


  });
  test('Delivery Module', async () => {
    await homePage.navigateToDelivery();
    await deliveryPage.verifyDeliveryPage();

  });
  test('inventory Module', async () => {
    await homePage.navigateToInventory();
    await warehousePage.verifyWarehousePage();
    await supplierPage.verifysupplierPage();
    await purchaseInventoryPage.verifyPurchaseinventoryPage();
    await batchesPage.verifyBatchesPage();
    await thresholdsPage.verifyThresholdsPage();
    await settingsPage.verifySettingsPage();

  });
  test('Notifications', async () => {
    await homePage.navigateToNotifications();
    await pushNotificationPage.verifyPushNotificationPage();
    await newArrivalProductsPage.verifyNewArrivalProductsPage();
    await templatesPage.verifyTemplatesPage();
    



  });
//   test.afterAll(async () => {
//     console.log('✅ Completed all tests in same session');
//   });
});