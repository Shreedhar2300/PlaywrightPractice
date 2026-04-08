import { Page,expect,Locator } from "@playwright/test";

export class logout{
    readonly page:Page;
    readonly logout_user:Locator;
    
    constructor(page:Page)
    {
        this.page=page;
        this.logout_user=page.locator('.oxd-userdropdown-tab');
    }
    async actions(){
        await this.logout_user.click();
        await this.page.getByRole('menuitem',{name:'Logout'}).click(); 
    }
}
