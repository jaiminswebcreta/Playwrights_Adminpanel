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
import { invoicesPage } from '../Pages/Billing_History/Invoices';
import { customersPage } from '../Pages/Customer_Management/customersPage';
import { customeraddressrequest } from '../Pages/Customer_Management/customeraddressrequest';
import { SubscriptionsPage } from '../Pages/Customer_Management/SubscriptionPage';
import { FlwexsubscriptionPage } from '../Pages/Customer_Management/FlexsubscriptionPage';
import {orderPage} from '../Pages/Customer_Management/OrderPage';
import { CustomerInvoicePage } from '../Pages/Customer_Management/CustomerInvoicePage';
import { CustomerGroupPage } from '../Pages/Grouppricing/CustomerGroupPage';
import { GroupsPage } from '../Pages/Grouppricing/GroupsPage';
import { couponsPage } from '../Pages/DiscountRules/CoupunsPage';
import { SalesDashboardPage } from '../Pages/Sales/SalesDashboardPage';
import { ProductAnalysisPage } from '../Pages/Sales/ProductAnalysisPage';
import { MostSellingpackagesPage } from '../Pages/Sales/MostsellingpackagesPage';
import { MostSellingSubscriptionPage } from '../Pages/Sales/MostSellingSubscriptionPage';
import { TopcustomerspendPage } from '../Pages/Sales/TopcustomerspendPage';
import { SalebyareaPage } from '../Pages/Sales/SalebyareaPage';
import{ SalebyHubPage } from '../Pages/Sales/SalebyHubPage';
import{ SalesbydeliveryexcutivePage } from '../Pages/Sales/SalebydeliveryexcutivePage';
import { salebycustomergroupPage } from '../Pages/Sales/SalebycustomergroupPage';




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
    let invoicespage: invoicesPage;
    let customerspage: customersPage;
    let customeraddressrequestpage: customeraddressrequest;
    let subscriptionspage: SubscriptionsPage;
    let flexsubscriptionpage: FlwexsubscriptionPage;
    let orderpage: orderPage;
    let customerinvoicepage: CustomerInvoicePage;
    let customerGroupPage: CustomerGroupPage;
    let groupsPage: GroupsPage;
    let couponspage: couponsPage;
    let salesDashboardPage: SalesDashboardPage;
    let productAnalysisPage: ProductAnalysisPage;
    let mostSellingpackagesPage: MostSellingpackagesPage;
    let mostSellingSubscriptionPage: MostSellingSubscriptionPage;
    let topcustomerspendPage: TopcustomerspendPage;
    let salebyareatabPage: SalebyareaPage;
    let salebyhubtabPage: SalebyHubPage;
    let salebydeliveryexcutivetabPage: SalesbydeliveryexcutivePage;
    let salebycustomergrouptabPage: salebycustomergroupPage;

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
    invoicespage = new invoicesPage(page);
    customerspage = new customersPage(page);
    customeraddressrequestpage = new customeraddressrequest(page);
    subscriptionspage = new SubscriptionsPage(page);
    flexsubscriptionpage = new FlwexsubscriptionPage(page);
    orderpage = new orderPage(page);
    customerinvoicepage = new CustomerInvoicePage(page);
    customerGroupPage = new CustomerGroupPage(page);
    groupsPage = new GroupsPage(page);
    couponspage = new couponsPage(page);
    salesDashboardPage = new SalesDashboardPage(page);
    productAnalysisPage = new ProductAnalysisPage(page);  
    mostSellingpackagesPage = new MostSellingpackagesPage(page);
    mostSellingSubscriptionPage = new MostSellingSubscriptionPage(page);
    topcustomerspendPage = new TopcustomerspendPage(page);
    salebyareatabPage = new SalebyareaPage(page);
    salebyhubtabPage = new SalebyHubPage(page);
    salebydeliveryexcutivetabPage = new SalesbydeliveryexcutivePage(page);
    salebycustomergrouptabPage = new salebycustomergroupPage(page);


    
  
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
  test('Billing History Module', async () => {
    await homePage.navigateToBillingHistory();
    await invoicespage.verifyInvoicesPage();
    

  });
  test('Customers Management Module', async () => {
    await homePage.navigateToCustomersManagement();
    await customerspage.verifyCustomersPage();
    await customeraddressrequestpage.verifyCustomerAddressRequestPage();
    await subscriptionspage .verifySubscriptionsPage();
    await flexsubscriptionpage.verifyFlexsubscriptionPage();
    await orderpage.verifyOrderPage();
    await customerinvoicepage.verifyCustomerInvoicePage();
    

  });
  test('Group Pricing Module', async () => {
    await homePage.navigateToGroupPricing();
    await customerGroupPage.verifyCustomerGroupPage();
    await groupsPage.verifyGroupsPage();
     
    // You can add verification for Group Pricing page here if needed

  });

  test('Discount Rules Module', async () => {
    await homePage.navigateToDiscountRules();
    await couponspage.verifyCouponsPage();
  });

  test('Navigate to Sales Module', async () => {
    await homePage.navigateToSales();
    await salesDashboardPage.verifySalesDashboardPage();
    await productAnalysisPage.verifyProductAnalysisPage();
    await mostSellingpackagesPage.verifyMostSellingpackagesPage();
    await mostSellingSubscriptionPage.verifyMostSellingSubscriptionPage();
    await topcustomerspendPage .verifyTopcustomerspendPage();
    await salebyareatabPage .verifysalebyareatabPage();
    await salebyhubtabPage .verifysalebyhubtabPage();
    await salebydeliveryexcutivetabPage.verifysalebydeliveryexcutivetabPage();
    await salebycustomergrouptabPage.verifysalebycustomergrouptabPage();
  });
  // test.afterAll(async () => {
  //   console.log('✅ Completed all tests in same session');
  // });
})