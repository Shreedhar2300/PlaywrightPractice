import { test } from '../Fixtures/loginlogout';



test("successful logout", async ({ page, login_fixture, logout_fixture }) => {
    await login_fixture.url();
    await login_fixture.actions();
    await page.getByText("Admin").click();
    await page.locator('span:has-text("Qualifications")').click();
    await page.getByText('Education').click()
    await logout_fixture.actions();
})
