import {test,expect, Locator,Page} from '@playwright/test';
 
export class Login{
    readonly page : Page;
    readonly username : Locator;
    readonly password : Locator;
    readonly login_button : Locator;

    constructor(page:Page)
    {
        this.page=page;
        this.username= page.getByPlaceholder("Username") ; 
        this.password=page.getByPlaceholder("Password");
        this.login_button=page.getByRole('button',{name:' Login '});
    }

    async url(){
        await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    }

    async actions(){
       await this.username.fill("Admin");
       await this.password.fill("admin123")
       await this.login_button.click();
    }

}