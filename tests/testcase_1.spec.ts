import{test} from '../Fixtures/loginlogout';
import {expect} from '@playwright/test'

test("suceessful login",async({ page, login_fixture, logout_fixture })=>{
 await login_fixture.url();
 await login_fixture.actions();
 await expect(page.getByText("Upgrade")).toBeVisible
 await logout_fixture.actions();
})