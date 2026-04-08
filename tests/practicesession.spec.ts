import { test, expect } from '@playwright/test';

test("press sequentially practice", async({ page })=>{
await page.goto("https://www.saucedemo.com/");
await page.locator("#user-name").pressSequentially("shreedhar", { delay:1000 });

})

test("press method", async({ page })=>{
await page.goto("https://www.google.com")
const a = await page.locator("#APjFqb")
await a.fill("stadium",)
await a.press("ArrowDown", {delay:1000})
await a.press("ArrowDown", {delay:1000})
await a.press("ArrowDown", {delay:1000})
await a.press("ArrowDown", {delay:1000})
await a.press("ArrowUp", {delay:1000})
await a.press("Enter", {delay:1000})
});

test("double click ", async({ page })=>{
await page.goto("https://demoqa.com/buttons")
await page.getByRole('button', {name:'Double Click Me'}).dblclick();
await expect(page.getByText("You have done a double click")).toBeVisible();
})

test("right click", async({ page })=>{
await page.goto("https://demoqa.com/buttons")
await page.locator("#rightClickBtn").click({button:'right'})
await expect(page.getByText("You have done a right click")).toBeVisible()
})

test("radio button", async({ page })=>{
await page.goto("https://sqatools.in/automation-practice-page/")
await page.getByRole('radio', { name: 'Male', exact: true }).check();
await expect(page.getByRole('radio', { name: 'Male', exact: true })).toBeChecked();
})

test("checkbox", async({ page})=>{
 await page.goto("https://sqatools.in/automation-practice-page/")
 const z= await page.getByRole('checkbox',{name:'Java', exact:true})
 await z.check();
 await expect(z).toBeChecked();
 await z.uncheck();

})

test("drop down", async({ page })=>{
  await page.goto("https://sqatools.in/automation-practice-page/")
  await page.locator("#country").selectOption("India")
})

test("Multi dropdown", async({ page })=>{
  await page.goto("https://sqatools.in/automation-practice-page/")
  await page.locator("#skills").selectOption(['Python','Playwright','API Testing'])
})

test("ifrmaes", async({ page })=>{
await page.goto("https://sqatools.in/automation-practice-page/")
const x=await page.frameLocator(".entered litespeed-loaded")
await x?.getByRole('link',{name:'Learn more'}).click();
})

test("new tab", async({ context })=>{
const firstpage= await context.newPage();
await firstpage.goto("https://testpages.eviltester.com/pages/navigation/windows-names/")
const [newpage]= await Promise.all([context.waitForEvent("page"),firstpage.getByRole('link',{name:'Window with name in new tab'}).click()]);
await expect(newpage.getByRole('heading',{name:'Linked Page with Window Name'})).toBeVisible();
await firstpage.getByRole('link', { name: 'Intermediate', exact: true }).click();
await newpage.getByRole('button', { name: 'Copy to clipboard' }).hover();
})

test("drag and drop", async({ page })=>{
 await page.goto("https://sqatools.in/automation-practice-page/")
 await page.locator("#drag1").dragTo(page.locator(".drop"));
})


test("key press method", async({ page })=>{
await page.goto("https://testpages.eviltester.com/pages/forms/html-form/")
const b = await page.getByText("Comments...")
await b.click();
await b.press("Control+a")
await b.press("Backspace")
await b.press("a+b+c")
await b.press("Control+A")
await b.press("Control+X")
await page.locator('input[name="username"]').click()
await b.press("Control+v")
})

test("file upload", async({ page })=>{
await page.goto("https://the-internet.herokuapp.com/upload")
await page.locator("#file-upload").setInputFiles(["test_data/file1.doc","test_data/file2.xlsx"]);
})

