import { Page,Locator } from "@playwright/test";
export class GroupsPage{    
    readonly page:Page
    readonly groupsHeader:Locator
    readonly addGroupButton:Locator
    readonly dashboard:Locator
    constructor(page:Page){
        this.page=page;
        this.groupsHeader=page.locator(`//h1[normalize-space()='Customer Group List']`);
        this.addGroupButton=page.locator(`(//button[normalize-space()='Add Group'])[1]`);
        this.dashboard=page.locator(`(//a[normalize-space()='Dashboard'])[1]`);
    }
    async verifyGroupsPage(){
        await this.groupsHeader.isVisible();
        console.log('✅ Groups Page is visible');
        const headerText = await this.groupsHeader.textContent();
        console.log(`📝 Header text: ${headerText}`);
        const currentUrl= this.page.url();
        console.log('🌐 Current URL is: ' + currentUrl);
        await this.addGroupButton.isVisible();
        console.log('✅ Add Group button is visible'); 
        await this.dashboard.isVisible();
        console.log('✅ Dashboard link is visible'); 
        await this.dashboard.click();
        console.log('Clicked on Dashboard link');                
    }
}