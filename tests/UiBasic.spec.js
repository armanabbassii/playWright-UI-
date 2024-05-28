const { test, expect } = require('@playwright/test');
// that is a fixture that called browser

// this is the fixture which comes by default from your play, right module.
//So if you directly start using browser here, your test function will not recognize.
// You need to send that browser as a parameter to your test to function first and that parameter will be passed of to inside your body.

test('browser context Playwright Test', async ({ browser }) => {    
// we need invoke browser
//If you don't give curly braces, then this is evaluated as like a normal browser string value.
// So this method will help you to open one fresh browser. This will be like incognito.
const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
});


test('page Playwright Test', async ({ page }) => {
    await page.goto('https://www.google.com/');
})
// Play read by default Run your test in headless mode.y
