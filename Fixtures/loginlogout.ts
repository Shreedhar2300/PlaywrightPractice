import{test as baseTest} from '@playwright/test';
import { Login } from '../Pages/Login_Page';
import { logout } from '../Pages/Home_Page';

type Myfixtures={
    login_fixture:Login;
    logout_fixture:logout;
}
export const test=baseTest.extend<Myfixtures>({
login_fixture: async({page},use)=>{
    const login_fixture= new Login(page);
    await use(login_fixture);
},
logout_fixture: async({page}, use)=>{
    const logout_fixture=new logout(page);
    await use(logout_fixture);
}
})