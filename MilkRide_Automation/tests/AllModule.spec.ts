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
import { CRMDashboradPage } from '../Pages/CRM/CRMDashboradPage';
import { ChampaingnsPage } from '../Pages/CRM/ChampaingnsPage';
import { LeadsPage } from '../Pages/CRM/LeadsPage';
import { CallLogsPage } from '../Pages/CRM/CallLogsPage'; 
import { FollowupsPage } from '../Pages/CRM/FollowupsPage';

import { AtRiskCustomersPage } from '../Pages/Churn_Management/AtRiskCustomersPage';
import { SubscriptionChangePage } from '../Pages/Churn_Management/SubscriptionChangePage';
import { AbandonedCardPage } from '../Pages/Churn_Management/AbandonedCardPage';
import { CallLogs2Page } from '../Pages/Churn_Management/CallLogs2Page';
import { Follwups2Page } from '../Pages/Churn_Management/Follwups2Page';
import { AllComplaintsPage } from '../Pages/ComplaintSystem/AllComplaintsPage';
import { RefundsRequrestPage } from '../Pages/ComplaintSystem/RefundsRequrestPage';

//product catalog pages
import { CategoriesPage } from '../Pages/ProductCatalog/CategoriesPage';
import { BrandPage } from '../Pages/ProductCatalog/BrandPage';
import { ProductsPage } from '../Pages/ProductCatalog/ProductsPage';  
import { ProductOrderingPage } from '../Pages/ProductCatalog/ProductOrderingPage';
import { QuickProductUpdatePage } from '../Pages/ProductCatalog/QuickProductUpdatePage';

import { Settings2Page  } from '../Pages/ProductCatalog/Settings2Page';

//Flex Product Page
import { AttributesPage } from '../Pages/FlexProduct/AttributesPage';
import { WorkingDayPage } from '../Pages/FlexProduct/WorkingDayPage';
import { PlanSlotPage } from '../Pages/FlexProduct/PlanSlotPage';
//Banner
import { BannerPage } from '../Pages/BannerPage';



test.describe('All Module Test', () => {

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
    let crmDashboardPage: CRMDashboradPage;
    let champaingnsPage: ChampaingnsPage;
    let leadsPage: LeadsPage;
    let callLogsPage: CallLogsPage;
    let followupsPage: FollowupsPage;
    //churn management
    let atRiskCustomersPage: AtRiskCustomersPage;
    let subscriptionChangesPage: SubscriptionChangePage;
    let abandonedCartsPage: AbandonedCardPage;
    let callLogs2Page: CallLogs2Page;
    let followups2Page: Follwups2Page;

    //complaint system
    let allComplaintsPage: AllComplaintsPage;
    let refundsRequestPage: RefundsRequrestPage;

    //product catalog pages
    let categoriesPage: CategoriesPage;
    let brandPage: BrandPage;
    let productsPage: ProductsPage;
    let productOrderingPage: ProductOrderingPage;
    let quickProductUpdatePage: QuickProductUpdatePage;
   
    let settings2Page: Settings2Page;

    //FlexProduct Catelog
    let attributesPage :AttributesPage
    let workingDayPage : WorkingDayPage
    let planSlotPage : PlanSlotPage

    //Banner
    let bannerPage : BannerPage

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
    crmDashboardPage = new CRMDashboradPage(page);
    champaingnsPage = new ChampaingnsPage(page);
    leadsPage = new LeadsPage(page);
    callLogsPage = new CallLogsPage(page);
    followupsPage = new FollowupsPage(page);
    //churn management
    atRiskCustomersPage = new AtRiskCustomersPage(page);
    subscriptionChangesPage = new SubscriptionChangePage(page);
    abandonedCartsPage = new AbandonedCardPage(page);
    callLogs2Page = new CallLogs2Page(page);
    followups2Page = new Follwups2Page(page);

    //complaint system
    allComplaintsPage = new AllComplaintsPage(page);
    refundsRequestPage = new RefundsRequrestPage(page);

    //product catalog pages
    categoriesPage = new CategoriesPage(page);
    brandPage = new BrandPage(page);
    productsPage = new ProductsPage(page);
    productOrderingPage = new ProductOrderingPage(page);
    quickProductUpdatePage = new QuickProductUpdatePage(page);
   
    settings2Page = new Settings2Page(page);

    //FlexProduct Catelogs
     
    attributesPage =new AttributesPage(page);
    workingDayPage = new WorkingDayPage(page);
    planSlotPage = new PlanSlotPage(page);

    //Banner
    bannerPage = new BannerPage(page);




    
  
    // Login once
    await loginPage.OpenURL();
   
    await loginPage.loginToApp('ruralbloomroots@gmail.com', 'Rural@2024');
  
    await page.waitForTimeout(3000);
    await homePage.indexToApp();
   
  }); 

  test('Navigate to Hub Manager', async () => {
    console.log('🚀 Starting Hub Manager Module Test');
    await homePage.navigateToHubManager();
    await hubListPage.verifyHubListPage();
    await firstHubPage.verifyFirstHubPage();
    console.log('✅ Completed Hub Manager Module Test');

  });
  test('Delivery Module', async () => {
    console.log('🚀 Starting Delivery Module Test');
    await homePage.navigateToDelivery();
    await deliveryPage.verifyDeliveryPage();
    console.log('✅ Completed Delivery Module Test');
  });
  test('inventory Module', async () => {
    console.log('🚀 Starting Inventory Module Test');
    await homePage.navigateToInventory();
    await warehousePage.verifyWarehousePage();
    await supplierPage.verifysupplierPage();
    await purchaseInventoryPage.verifyPurchaseinventoryPage();
    await batchesPage.verifyBatchesPage();
    await thresholdsPage.verifyThresholdsPage();
    await settingsPage.verifySettingsPage();
    console.log('✅ Completed Inventory Module Test');

  });
  test('Notifications', async () => {
    console.log('🚀 Starting Notifications Module Test');
    await homePage.navigateToNotifications();
    await pushNotificationPage.verifyPushNotificationPage();
    await newArrivalProductsPage.verifyNewArrivalProductsPage();
    await templatesPage.verifyTemplatesPage();
    console.log('✅ Completed Notifications Module Test');

  });
  test('Billing History Module', async () => {
    console.log('🚀 Starting Billing History Module Test');
    await homePage.navigateToBillingHistory();
    await invoicespage.verifyInvoicesPage();
    console.log('✅ Completed Billing History Module Test');

  });
  test('Customers Management Module', async () => {
    console.log('🚀 Starting Customers Management Module Test');
    await homePage.navigateToCustomersManagement();
    await customerspage.verifyCustomersPage();
    await customeraddressrequestpage.verifyCustomerAddressRequestPage();
    await subscriptionspage .verifySubscriptionsPage();
    await flexsubscriptionpage.verifyFlexsubscriptionPage();
    await orderpage.verifyOrderPage();
    await customerinvoicepage.verifyCustomerInvoicePage();
    console.log('✅ Completed Customers Management Module Test');

  });
  test('Group Pricing Module', async () => {
    console.log('🚀 Starting Group Pricing Module Test');
    await homePage.navigateToGroupPricing();
    await customerGroupPage.verifyCustomerGroupPage();
    await groupsPage.verifyGroupsPage();
    console.log('✅ Completed Group Pricing Module Test');
     
    // You can add verification for Group Pricing page here if needed

  });

  test('Discount Rules Module', async () => {
    console.log('🚀 Starting Discount Rules Module Test');
    await homePage.navigateToDiscountRules();
    await couponspage.verifyCouponsPage();
    console.log('✅ Completed Discount Rules Module Test');
  });

  test('Navigate to Sales Module', async () => {
    console.log('🚀 Starting Sales Module Test');
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
    console.log('✅ Completed Sales Module Test');
  });

  test('Navigate to CRM Module', async () => {
    console.log('🚀 Starting CRM Module Test');
    await homePage.ClickOnCRMTab();
    await homePage.ClickonCRMDashboard();
    await crmDashboardPage.verifyCRMDashboardPage();
    await homePage.clickonCampaigns();
    await champaingnsPage.verifyChampaingnsPage();
    await homePage.clickonLeads();
    await leadsPage.verifyLeadPage();
    await homePage.clickonCallLogs();
    await callLogsPage.verifyCallLogPage();
    await homePage.clickonFollowups();
    await followupsPage.verifyFollowupsPage();
    console.log('✅ Completed CRM Module Test');
  });
  test('Navigate to Churn Management Module', async () => {
    console.log('🚀 Starting Churn Management Module Test');
    await homePage.clickonChurnManagementTab();
    await homePage.clickonAtRiskCustomersTab();
    await atRiskCustomersPage.verifyAtRiskCustomersPage();
    await homePage.clickonSubscriptionChangesTab();
    await subscriptionChangesPage.verifySubscriptionChangePage();
    await homePage.clickonAbandonedCartsTab();
    await abandonedCartsPage.verifyAbandonedCardPage();
    await homePage.clickonCallLogs2Tab();
    await callLogs2Page.verifyCallLogs2Page();
    await homePage.clickonFollowups2Tab();
    await followups2Page.verifyFollowups2Page();
    console.log('✅ Completed Churn Management Module Test');
  });
  test('Navigate to Complaint System Module', async () => {
    console.log('🚀 Starting Complaint System Module Test');
    await homePage.clickonComplaintSystemTab();
    await homePage.clickonAllComplaintsOption();
    await allComplaintsPage.verifyAllComplaintsPage();
    await homePage.clickonRefundsRequestOption();
    await refundsRequestPage.verifyRefundsRequestPage();
    console.log('✅ Completed Complaint System Module Test');
  });  
  test('Navigate to Product Catalog Module', async () => {
    console.log('🚀 Starting Product Catalog Module Test');
    await homePage.clickonProductCatalogTab();
    await homePage.clickonCategoriesOption();
    await categoriesPage .verifyCategoryPage();
    await homePage.clickonBrandOption();
    await brandPage.verifyBrandPage();
    await homePage.clickonProductsOption();
    await productsPage.verifyProductsPage();
    await homePage.clickonProductOrderingOption();
    await productOrderingPage.verifyProductOrderingPage();
    await homePage.clickonQuickProductUpdateOption();
    await quickProductUpdatePage.verifyQuickProductUpdatePage();
    await homePage.clickonSettingsOption();
    await settings2Page.verifySettingsPage();
    console.log('✅ Completed Product Catalog Module Test');
  });

   test('Navigate to FlexProduct Module', async () => {
    console.log('🚀 Starting FlexProduct Module Test');
    await homePage.clickonFlexproduct();
    await homePage.ClickonAttributeTab();
    await attributesPage.verifyAttributePage();
    await homePage.ClickonWorkingdayTab();
    await workingDayPage.verifyWorkingDayPage();
    await homePage.ClickonPlanSoltTab();
    await planSlotPage.verifyPlanSlotPage();
    console.log('✅ Completed FlexProduct Module Test');
  });

  
   test('Navigate to Banner Module', async () => {
    console.log('🚀 Starting Banner Module Test');
    await homePage.Clikonbannertab();
    await bannerPage.verifytoBannerPage();
    console.log('✅ Completed Banner Module Test');
  });

  // test.afterAll(async () => {
  //   console.log('✅ Completed all tests in same session');
  // });
}) ;