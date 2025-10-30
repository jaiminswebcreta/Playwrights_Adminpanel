import { Locator,Page } from "@playwright/test";

export class LoginPage{
    readonly page:Page;
    readonly email:Locator;
    readonly password:Locator;
    readonly loginButton:Locator;
 

    constructor(page:Page){
        this.page=page; 
        this.email=page.locator(`(//input[@id='email'])[1]`);
        this.password=page.locator(`(//input[@id='password'])[1]`);
        this.loginButton=page.locator(`//span[normalize-space(text())='Sign In']`);


    }

    async OpenURL(){
        try {
        await this.page.goto('https://app.milkride.com/admin/login');
    }
    catch (error) {
        console.error('❌ Error in opening URL:', error);
    }
    }

    async loginToApp(username:string,password:string){
        try {
        await this.email.fill(username);
        console.log('Filled username');
        await this.password.fill(password);
        console.log('Filled Password');
        await this.loginButton.click();
        console.log('Clicked on login button');
        await this.page.waitForLoadState('networkidle');
        
   

    }
    catch (error) {
        console.error('❌ Error in logging into the application:', error);
    }
    }
}
